import Vue from 'vue'
import App from './App.vue'

// Bind the custom elements to the window object
import { defineCustomElements } from 'hrvcomponents/dist/loader'; 
defineCustomElements(window); 

Vue.config.productionTip = false
// Bind the custom elements to the window object
defineCustomElements(window);

// tell Vue to ignore all components defined in the hrvcomponents
// package.
//
Vue.config.ignoredElements = [/breath-\w*/]; 


new Vue({
  render: h => h(App)
}).$mount('#app')
