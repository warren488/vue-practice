import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 1
    },
    getters: {
        // recommended instead of directly accessing properties
        doubleCounter: state => {
            return state.counter * 2;
        }
    },
    mutations: {
        // these mutations are synchronous (only one can happen at a time)
        increment(state, by) {
            state.counter += by
        },
        decrement(state, by) {
            state.counter -= by
        }
    },
    actions: {
        increment: (context, by )=> {
            // do extra async stuff, this allows us to use mutations with async tasks
            context.commit('increment', by)
        },
        decrement: (context, by )=> {
            // do extra async stuff, this allows us to use mutations with async tasks
            context.commit('decrement', by)
        },
        asyncIncrement: (context, by )=> {
            setTimeout(() => {
                context.commit('increment', by)
            }, 500);
            
        },
        asyncDecrement: (context, by )=> {
            setTimeout(() => {
                context.commit('decrement', by)
            }, 500);
            
        }
    }
})