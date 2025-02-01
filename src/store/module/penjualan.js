import Api from "@/api"

const penjualan = {
  namespaced: true,
  state : {
    penjualans : []
  },
  mutations: {
    LIST_PENJUALAN(state, data) {
      state.penjualans = data
    },
  },
  actions :{
    listPenjualan({commit}){
      Api.get('/penjualan')
      .then(response => {

          //commit ke mutation LIST_PENJUALAN
          commit('LIST_PENJUALAN', response.data.data)

      }).catch(error => {
          console.log(error)

      })
    }
  },
  getters:{
    listPenjualan(state){
      return state.penjualans
    }
  },
}

export default penjualan
