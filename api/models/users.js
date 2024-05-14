module.exports = {
    
    attributes:{
        name:{
            type: 'string',
            maxLength: 50
        },

        email:{
            type: 'string',
            maxLength: 50
        },

        password:{                                                                                              
            type: 'string',
            maxLength: 12
        },

        city:{
            type: 'string',
            maxLength: 12
        },

        state:{
            type: 'string',
            maxLength: 12
        },

        birthdate:{
            type: 'string',
            maxLength: 12
        },

        profile_picture_url:{
            type: 'string',
            maxLength: 12
        },

        profile_description:{
            type: 'string',
            maxLength: 12
        },

        type_users: {
            model: 'type_users'  // 'user' é o nome do modelo de usuário
        }
    }
}