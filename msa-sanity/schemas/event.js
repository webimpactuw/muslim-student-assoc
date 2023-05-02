export default {
    name: 'event',
    title: 'Event',
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