import { createStore } from 'vuex'
import penjualan from './module/penjualan'
import komisi from './module/komisi'
import marketing from './module/marketing'

//create store vuex
export default createStore({

  modules: {
    penjualan,
    komisi,
    marketing
  }

})
