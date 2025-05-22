import { activeEffect, trackEffects, triggerEffects } from "./effect.js";
const targetMap = new WeakMap(); // 存储依赖关系的Map
export const createDep = (cleanup, key) => {
  const dep = new Map();
  dep.cleanup = cleanup;
  dep.name = key;
  return dep;
};
export function track(target, key) {
  // activeEffect 是一个全局变量，用于存储当前正在执行的 effect 函数
  // 如果 activeEffect 不存在，说明当前没有正在执行的 effect 函数，直接返回
  if (!activeEffect) {
    return;
  }

  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, (dep = createDep(() => depsMap.delect(key), key))); // 清理不需要的属性
  }

  trackEffects(activeEffect, dep); // 将当前的 effect 函数添加到依赖集合中

  console.log(targetMap);
}
export function trigger(target, key, value, oldValue) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    // debugger;
    triggerEffects(dep);
  }
}
