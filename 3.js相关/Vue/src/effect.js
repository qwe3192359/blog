export function effect(fn, options) {
  // 创建响应式的effect
  const _effect = new ReactiveEffect(fn, () => {
    // 执行effect的run方法
    _effect.run();
  });
  _effect.run();

  return _effect;
}
export let activeEffect = undefined;
class ReactiveEffect {
  _trackId = 0;
  _deps = [];
  _depsLength = 0;

  active = true; // 这个effect默认是激活状态
  // fn 是用户传入的函数
  // 如果fn中依赖的数据变化了，就会重新执行run方法
  constructor(fn, scheduler) {
    this.fn = fn;
    this.scheduler = scheduler;
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let lastEffect = activeEffect; // 保存上一个effect
    try {
      activeEffect = this;
      return this.fn();
    } finally {
      activeEffect = lastEffect; // 恢复上一个effect
    }
  }
}
export function trackEffects(effect, dep) {
  dep.set(effect, effect._trackId);

  effect._deps.push(dep);
  effect._depsLength++;
}

export function triggerEffects(dep) {
  // 取出dep中所有的effect
  //   const effects = dep.get();
  //   for (let i = 0; i < effects.length; i++) {
  //     const effect = effects[i];
  //     if (effect._trackId !== dep._trackId) {
  //       effect.run();
  //     }
  //   }

  for (const effect of dep.keys()) {
    if (effect.scheduler) {
      effect.scheduler();
    }
  }
}
