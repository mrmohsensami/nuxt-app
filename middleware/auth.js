export default (context) => {
    if (context.store.state.username !== 'admin') {
        return context.redirect('/')
    }
}