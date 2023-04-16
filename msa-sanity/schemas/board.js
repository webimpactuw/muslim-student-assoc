export default {
    name: 'board',
    title: 'Board Members',
    type: 'document',
    fields: [
       {
           name: 'name',
           type: 'string',
           title: 'Name',
       },
       {
           name: 'position',
           type: 'string',
           title: 'Position',
       },
       {
           name: 'picture',
           type: 'image',
           title: 'Picture',
       },
    ],
    preview: {
       select: {
         title: 'name',
         subtitle: 'position',
       },
    },
}