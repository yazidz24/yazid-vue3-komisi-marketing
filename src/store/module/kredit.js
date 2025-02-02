import Api from "@/api"
import ShowNotification from "@/sweetAlert2"

const kredit = {
  namespaced: true,
  state: {
    kredits: [],
    detailKredit: {}
  },
  mutations: {
    LIST_KREDIT(state, data) {
      state.kredits = data
    },
    DETAIL_KREDIT(state, data) {
      state.detailKredit = data
    }
  },
  actions: {
    listKredit({ commit }) {
      Api.get('/kredit')
        .then(response => {

          //commit ke mutation LIST_PENJUALAN
          commit('LIST_KREDIT', response.data.data)

        }).catch(error => {
          console.log(error)

        })
    },
    addKredit({ commit }, data) {
      return new Promise((resolve, reject) => {

        Api.post('/kredit', {
          penjualan_id: data.penjualan_id,
          total_amount: data.total_amount,
        }).then((response) => {

          ShowNotification.success(response.data.message)
          resolve(response)

        }).catch(error => {

          reject(error.response.data)
        })
      })
    },
  },
  getters: {
    listKredit(state) {
      return state.kredits
    },
    // detailPenjualan(state) {
    //   return state.detailPenjualan
    // },
  },
}

export default kredit
