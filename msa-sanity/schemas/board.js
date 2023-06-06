export default {
    name: 'board',
    title: 'Board Members',
    type: 'document',
    fields: [
       {
           name: 'name',
           type: 'string',
           title: 'Name',
           validation: Rule => Rule.required(),

       },
       {
           name: 'position',
           type: 'string',
           title: 'Position',
           validation: Rule => Rule.required(),
          },
       {
            name: 'order',
            type: 'number',
            title: 'Order',
            description: 'Order that members will be displayed in',
            validation: Rule => Rule.required(),
       },
       {
          name: 'picture',
          type: 'image',
          title: 'Picture',
          description: 'Use the crop to zone in on faces',
          validation: Rule => Rule.required(),
          options: {
              hotspot: true
          },
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