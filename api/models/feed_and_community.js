module.exports = {
    
    attributes:{
        id_users:{
            model: 'id_users',
        },

        post_content:{
            type: 'string',
            maxLength: 250,

        },

        posyt_image_url:{
            type: 'string',
            maxLength: '',
        },

        created_at:{
            type: 'Datetime',
            maxLength: 20
        },

        likes:{
            type: 'INTEGER',
        },

        id_type_posts:{
            type: 'INTEGER',
        },

        project_title:{
            type: 'string',
            maxLength: 25
        },

        project_description:{
            type: 'string',
            maxLength: 250
        },

        project_cost:{
            type: 'DECIMAL',
            maxLength: 50
        },

        project_dduration:{
            type: 'string',
            maxLength: 50
        },

        project_volunteers_quantity:{
            type: 'INTEGER',
        }
    }
}