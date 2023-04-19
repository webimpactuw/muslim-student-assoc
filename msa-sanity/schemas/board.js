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
            name: 'order',
            type: 'number',
            title: 'Order',
            description: 'Order of this position on the website',
       },
       {
           name: 'picture',
           type: 'image',
           title: 'Picture',
       },
    ],
    orderings: [
        {
          title: 'Position, desc',
          name: 'order',
          by: [
            {field: 'order', direction: 'asc'}
          ]
        },
      ],
    preview: {
       select: {
         title: 'name',
         subtitle: 'position',
         media: 'picture.asset',
        },
    },
}