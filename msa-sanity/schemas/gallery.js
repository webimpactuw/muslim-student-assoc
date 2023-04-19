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
            of: [{ type: 'image' }],
            description: 'Drag and drop to add multiple files at once, Add Item only adds 1 at a time'
        }
    ],

    preview: {
        select: {
            title: 'info',
            media: 'pictures.0.asset',
        },
    },
}