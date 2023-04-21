export default {
    name: 'carousel',
    title: 'Homepage Carousel Images',
    type: 'document',
    fields: [
        {
            name: 'picture',
            type: 'image',
            title: 'Picture',
        },
    ],
    preview: {
        select: {
            media: 'picture',
        },
    },
}