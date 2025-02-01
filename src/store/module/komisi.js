import Api from "@/api"

const komisi = {
  namespaced: true,
  state : {
    komisis : []
  },
  mutations: {
    LIST_KOMISI(state, data) {
      state.komisis = data
    },
  },
  actions :{
    listKomisi({commit}){
      Api.get('/komisi')
      .then(response => {

          //commit ke mutation LIST_KOMISI
          commit('LIST_KOMISI', response.data.komisi)

      }).catch(error => {
          console.log(error)

      })
    }
  },
  getters:{
    listKomisi(state){
      return state.komisis
    }
  },
}

export default komisi
