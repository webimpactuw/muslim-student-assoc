export default {
    name: 'gallery',
    title: 'Gallery Images',
    type: 'document',
    fields: [
        {
            name: 'date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'info',
            type: 'string',
            title: '(optional) Event Info/Caption)', 
        },
        {
            name: 'pictures',
            title: 'Pictures',
            type: 'array',
            of: [{ type: 'image' }]
        }
    ],

    preview: {
        select: {
            title: 'date',
            subtitle: 'info',
            media: 'pictures.0.asset',
        },
    },
}