import Api from "@/api"

const marketing = {
  namespaced: true,
  state : {
    marketings : []
  },
  mutations: {
    LIST_MARKETING(state, data) {
      state.marketings = data
    },
  },
  actions :{
    listMarketing({commit}){
      Api.get('/marketing')
      .then(response => {

          //commit ke mutation LIST_MARKETING
          commit('LIST_MARKETING', response.data.data)

      }).catch(error => {
          console.log(error)

      })
    }
  },
  getters:{
    listMarketing(state){
      return state.marketings
    }
  },
}

export default marketing
