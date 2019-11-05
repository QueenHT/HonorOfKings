import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from  './getters'
import * as actions  from './actions'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [createPersistedState()]
   
})
