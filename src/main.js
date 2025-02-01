// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

//helper/global function
app.mixin({

  methods: {
      //money thousands
      moneyFormat(number) {
           let val = (number/1).toFixed(0).replace('.', ',')
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

      }

  }
})
