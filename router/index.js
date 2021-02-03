// 对路由API方法重写,自定义路由拦截的功能

export default function() {
  ['navigateTo', 'redirectTo', 'switchTab', 'navigateBack'].map(item => {
    // 存储路由API方法
	const nativeFunc = uni[item]
	// 自定义路由API方法，进行相关鉴权
    uni[item] = function(opts, needAuth) {
      if (needAuth) {
		  console.log(needAuth)
		  // 调用缓存的路由API方法
		  nativeFunc.call(this, opts)
      } else {
        return nativeFunc.call(this, opts)
      }
    }
	console.log(uni)
	console.log(uni[item])
  })
}

