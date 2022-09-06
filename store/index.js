// export const state = () => ({
//     counter: 3
// })

// export const mutations = {
//     INCREMENT_COUNTER(state, payload) {
//         state.counter += payload
//     },
//     DECREMENT_COUNTER(state, payload) {
//         state.counter -= payload
//     }
// }

// export const actions = {
//     increment(context, payload = 1) {
//         context.commit('INCREMENT_COUNTER', payload)
//     },
//     decrement(context, payload = 1) {
//         context.commit('DECREMENT_COUNTER', payload)
//     }
// }

export const state = () => ({
    message: 'hello',
    username: 'user'
})

// export const actions = {
//     nuxtServerInit(contextVuex, contextNuxt) {
//         console.log({
//             contextVuex,
//             contextNuxt
//         })
//         console.log(this.$axios);
//     }
// }