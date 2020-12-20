import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import {DropDownListPlugin} from "@syncfusion/ej2-vue-dropdowns";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
//
// library.add(faFontAwesome)
//
// library.add(faUserSecret)
//
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(DropDownListPlugin);
// Vue.use(ColorPickerPlugin);
// Vue.use(FontAwesomeIcon);

new Vue({router,
  render: h => h(App),
}).$mount('#app')

