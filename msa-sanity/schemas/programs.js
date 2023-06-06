export default {
    name: 'programs',
    title: 'Programs',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Event Name',
            validation: Rule => Rule.required(),
        },
        {
            name: 'info',
            type: 'string',
            title: 'Location/Time',
        },
        {
            name: 'flyer',
            type: 'image',
            title: 'Flyer',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: Rule => Rule.required(),
        },
    ],    
    preview: {
        select: {
          title: 'name',
         },
     },
 
}