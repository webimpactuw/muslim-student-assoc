export default {
    name: 'activities',
    title: 'Activities',
    type: 'document',
    fields: [
        {
            name: 'type',
            type: 'string',
            title: 'Activity Type',
            options: {
              list: [
                {title: 'General Activities', value: 'General Activities'},
                {title: 'Social Activities', value: 'Social Activities'},
                {title: 'Islamic House Activities', value: 'Islamic House Activities'},
              ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'name',
            type: 'string',
            title: 'Activity Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: Rule => Rule.required(),
        },
    ], 
    orderings: [
        {
            title: 'Type',
            by: [
                { field: 'type', direction: 'asc' }
            ]
        },
    ],   
    preview: {
        select: {
          title: 'name',
          subtitle: 'type',
         },
    }, 
}