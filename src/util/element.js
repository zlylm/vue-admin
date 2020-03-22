import Vue from 'vue'

import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Menu,
    MenuItem,
    Row,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Notification
} from 'element-ui'

Vue.prototype.$Message = Message
Vue.prototype.$notify = Notification
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
