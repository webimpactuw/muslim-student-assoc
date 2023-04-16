export default {
    name: 'announcement',
    title: 'Announcement',
    type: 'document',
    __experimental_actions: ['update',  'publish',], /*'create', 'delete',*/
    fields: [
       {
           name: 'header',
           type: 'string',
           title: 'Header',
           description: 'Appears as banner on Homepage. Banner goes away if Header and Text are empty', 
       },
       {
           name: 'text',
           type: 'string',
           title: 'Text',
       },
    ],
}