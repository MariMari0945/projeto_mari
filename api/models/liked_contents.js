module.exports = {
    
    attributes:{
        id_news_feed: {
            model: 'id_news_feed'  // 'user' é o nome do modelo de usuário
        },

        id_users: {
            model: 'id_users'
        },

        liked: {
            type: BINARY,
            default: NULL
        }
    }   
}