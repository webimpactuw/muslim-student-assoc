export default {
    name: 'blurbs',
    title: 'Text Blurbs',
    type: 'document',
    fields: [
       {
           name: 'subtitle',
           type: 'string',
           title: 'MSA Board Year',
            description: 'current year for officer baord subtitle under the words "MSA Board". Starts with "MSA Officer Board <year>',
           validation: Rule => Rule.required(),
       },
       {
            name: 'IHaddress',
            type: 'string',
            title: 'Islamic House Address',
            validation: Rule => Rule.required(),
        },
        {
            name: 'mail',
            type: 'text',
            title: 'Mailing Address',
            validation: Rule => Rule.required(),
        },
        {
            name: 'home',
            type: 'text',
            title: 'Glimpse of MSA',
            description: 'text on the homepage under "A Glipse of MSA at UW"',
            validation: Rule => Rule.required(),
        },
        {
            name: 'about',
            type: 'text',
            title: 'Who We Are',
            description: 'text on "About Us" page under "Who We Are"',
            validation: Rule => Rule.required(),
        },
        {
            name: 'board',
            type: 'text',
            title: 'Officer Board',
            description: 'text on "Meet our Board" page under "Officer Board"',
            validation: Rule => Rule.required(),
        },
        {
            name: 'aboutIH',
            type: 'text',
            title: 'About the IH',
            description: 'text on "The IH" under "About the IH"',
            validation: Rule => Rule.required(),
        },
        {
            name: 'IHlibrary',
            type: 'text',
            title: 'Islamic House Library',
            description: 'text on "The IH" under "Islamic House Library"',
            validation: Rule => Rule.required(),
        },        
        {
            name: 'member',
            type: 'text',
            title: 'Become a Member',
            description: 'text on "Become a Member" header',
            validation: Rule => Rule.required(),
        },        
        {
            name: 'purpose',
            type: 'text',
            title: 'MSA Purpose Statement',
            description: 'used on "Become a Member" page',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
          title: "title",
        },
        prepare() {
          return {
            title: "Blurbs",
          };
        },
    },
}