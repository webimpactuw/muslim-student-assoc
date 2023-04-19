export default {
    name: 'gallery',
    title: 'Gallery Images',
    type: 'document',
    fields: [
        {
            name: 'info',
            type: 'string',
            title: 'Caption', 
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
            title: 'info',
            media: 'pictures.0.asset',
        },
    },
}