export default {
    name: 'events',
    title: 'Major Events',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Event Name',
            validation: Rule => Rule.required(),
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