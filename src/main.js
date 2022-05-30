import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
// 匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate'
// 匯入 vee-validate 相關規則
import { required, email, min, max } from '@vee-validate/rules'
// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
