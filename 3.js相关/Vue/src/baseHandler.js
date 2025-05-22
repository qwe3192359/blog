import { activeEffect } from "./effect.js";
import { track, trigger } from "./reactiveEffect.js";
export const ReactiveFlags = {
  IS_REACTIVE: "__v_isReactive",
};
// proxy需要搭配reflect使用
export const mutableHandlers = {
  get(target, key, receiver) {
    //
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    // 取值的时候，依赖收集
    track(target, key);
    console.log(activeEffect, key);
    // 取值
    return Reflect.get(target, key, receiver);
  },
  // 设置值
  set(target, key, value, receiver) {
    // 旧值
    let oldValue = target[key];
    // 利用 Reflect.set 方法设置目标对象的属性值，并返回操作结果
    let result = Reflect.set(target, key, value, receiver);

    if (oldValue !== value) {
      // 触发更新
      trigger(target, key, value, oldValue);
    }
    // 触发更新

    return result;
  },
};
