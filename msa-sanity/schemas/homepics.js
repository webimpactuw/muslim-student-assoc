export default {
    name: 'homepics',
    title: 'Homepage Images',
    type: 'document',

    fields: [
        {
            name: 'picture1',
            type: 'image',
            title: 'Picture 1',
            description: 'Use the crop button to focus areas in the picture. 3:2 is presented on the website',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
        },
        {
            name: 'picture2',
            type: 'image',
            title: 'Picture 2',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
        },
        {
            name: 'picture3',
            type: 'image',
            title: 'Picture 3',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
        },
        {
            name: 'picture4',
            type: 'image',
            title: 'Picture 4',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
        },
        {
            name: 'picture5',
            type: 'image',
            title: 'Picture 5',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
        },
    ],
    preview: {
        select: {
          title: "title",
        },
        prepare() {
          return {
            title: "Home",
          };
        },
    },
}