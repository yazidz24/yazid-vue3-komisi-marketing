import Api from "@/api"
import ShowNotification from "@/sweetAlert2"

const penjualan = {
  namespaced: true,
  state: {
    penjualans: [],
    detailPenjualan: {}
  },
  mutations: {
    LIST_PENJUALAN(state, data) {
      state.penjualans = data
    },
    DETAIL_PENJUALAN(state, data) {
      state.detailPenjualan = data
    }
  },
  actions: {
    listPenjualan({ commit }) {
      Api.get('/penjualan')
        .then(response => {

          //commit ke mutation LIST_PENJUALAN
          commit('LIST_PENJUALAN', response.data.data)

        }).catch(error => {
          console.log(error)

        })
    },
    addPenjualan({ commit }, data) {
      return new Promise((resolve, reject) => {

        Api.post('/penjualan', {
          marketing_id: data.marketing_id,
          date: data.date,
          cargo_fee: data.cargo_fee,
          total_balance: data.total_balance,
        }).then((response) => {

          ShowNotification.success(response.data.message)
          resolve(response)

        }).catch(error => {

          reject(error.response.data)
        })
      })
    },
    detailPenjualan({ commit }, id) {
      Api.get(`/penjualan/${id}/edit`).then((response) => {
        // console.log('detail penjualan : ',response.data.penjualan)
        commit('DETAIL_PENJUALAN', response.data.penjualan)

      }).catch(error => {
        console.log(error)
      })
    },
    updatePenjualan({ commit }, data) {
      // console.log('data updatetan:',
      //   {
      //     id_penjualan: data.id,
      //     marketing_id: data.marketing_id,
      //     date: data.date,
      //     cargo_fee: data.cargo_fee,
      //     total_balance: data.total_balance,
      //   }
      // )
      return new Promise((resolve, reject) => {
        Api.put(`/penjualan/${data.id}`, {
          marketing_id: data.marketing_id,
          date: data.date,
          cargo_fee: data.cargo_fee,
          total_balance: data.total_balance,
        })
          .then((response) => {
            ShowNotification.success(response.data.message)
            resolve(response)
          })
          .catch(error => {
            reject(error.response.data)
          })
      })
    },
    deletePenjualan({ commit, dispatch }, id) {
      Api.delete(`/penjualan/${id}`)
        .then((response) => {
          ShowNotification.success(response.data.message)
          // Panggil kembali action listPenjualan untuk refresh data
          dispatch('listPenjualan')
        })
        .catch(error => {
          console.error(error)
          ShowNotification.error('Gagal menghapus data')
        })
    }
  },
  getters: {
    listPenjualan(state) {
      return state.penjualans
    },
    detailPenjualan(state) {
      return state.detailPenjualan
    },
  },
}

export default penjualan
