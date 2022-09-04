// export default function(context, inject) {
//     inject('message', 'salam')
// }


export default function(context, inject) {
    inject('message', (message) => console.log({message}))
}