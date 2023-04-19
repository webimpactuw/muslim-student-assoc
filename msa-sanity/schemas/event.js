export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    __experimental_actions: ['update',  'publish',], /*'create', 'delete',*/
    fields: [
       {
           name: 'name',
           type: 'string',
           title: 'Event Name',
       },
       {
           name: 'description',
           type: 'text',
           title: 'Description',
       },
       {
            name: 'link',
            type: 'url',
            title: 'Link',
            description: 'to RSVP or to Instagram post',
        },
        {
            name: 'flyer',
            type: 'image',
            title: 'Flyer',
        },
    ],
}