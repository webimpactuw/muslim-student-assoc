export default {
    name: 'links',
    title: 'Hyperlinks',
    type: 'document',
    fields: [
       {
           name: 'title',
           type: 'string',
           title: 'Title',
           description: 'DONT EDIT THESE - connects link to website',
       },
       {
           name: 'link',
           type: 'url',
           title: 'Link',
       },
    ],
}