import { isObject } from "./shared.cjs.prod.js";
import { mutableHandlers, ReactiveFlags } from "./baseHandler.js";
const reactiveMap = new WeakMap();

export function reactive(target) {
  return createReactiveObject(target);
}
function createReactiveObject(target) {
  // 不是对象直接返回
  if (!isObject(target)) {
    return;
  }
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }
  // 已经代理过的对象直接返回
  const existingProxy = reactiveMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}
