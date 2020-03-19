import Vue from 'vue'
/*
    自定义指令
*/  

// loading
Vue.directive('viewLoading',{
    update: function(el, binding) {
      // 每次都会创建dom，这里应该有优化的空间
      let html = document.createElement('div')
      html.setAttribute('id','viewLoading')
      html.style.position = 'absolute'
      html.style.top = '0'
      html.style.left ='0'
      html.style.width = '100%'
      html.style.height = '100%'
      html.style.backgroundColor = 'yellow'
      html.style.display = 'flex'
      html.style.justifyContent = 'center'
      html.style.alignItems = 'center'
      html.textContent = '加载中...'
      if (binding.value) {
        el.appendChild(html)
      } else {
        let vLoad = document.getElementById('viewLoading')
        vLoad && el.removeChild(vLoad)
      }
    }
  })