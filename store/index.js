import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      page: 0,
      total: 10,
      running: false,
      answers: []
    }),
    mutations: {
      next (state) {
        if (state.page + 1 >= state.total) return false;
        state.page++;
      },
      answer (state, answer) {
        state.answers[state.page] = answer;
        if (state.page >= state.total) return false;
        state.page++;
      },

      back (state) {
        if (state.page <= 0) return false;
        state.page--;
      },
      start(state, total){
        state.running = true,
        state.total = total
      },
      stop(state){
        state.running = false
      }
    }
  })
}

export default createStore
