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
            name: 'rsvp',
            type: 'url',
            title: 'RSVP Link',
        },
        {
            name: 'flyer',
            type: 'image',
            title: 'Flyer',
        },
    ],
}