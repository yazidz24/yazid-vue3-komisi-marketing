import { createStore } from 'vuex'
import penjualan from './module/penjualan'
import komisi from './module/komisi'
import marketing from './module/marketing'
import kredit from './module/kredit'
//create store vuex
export default createStore({

  modules: {
    penjualan,
    komisi,
    marketing,
    kredit
  }

})
