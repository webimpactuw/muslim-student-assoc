import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["event", "homepics", "links", "media.tag", "blurbs"]);

//deployed at msauw.sanity.studio
//studio owner: Ryan

export default defineConfig({
  name: 'default',
  title: 'MSA Website Content',

  projectId: "b754quep",
  dataset: 'production',

  plugins: [
    //structure the desk
    deskTool({
      structure: (S) =>
        //as a list under "Content"
        S.list()
          .title("Content")
          .items([
            // singleton a list item with a custom child
            S.listItem()
              .title("Homepage Pictures")
              .child(
                // render a single document instead of a list 
                S.document()
                  .schemaType("homepics")
                  .documentId("homepics")
              ),
            // Regular document types minus the singleton
            ...S.documentTypeListItems()
              .filter((listItem) => 
                !singletonTypes.has(listItem.getId())),
            S.listItem()
              .title("Upcoming Event")
              .child(
                S.document()
                  .schemaType("event")
                  .documentId("event")
              ),
            S.listItem()
              .title("Text Blurbs")
              .child(
                S.document()
                  .schemaType("blurbs")
                  .documentId("text")
              ),
            S.listItem()
              .title("Important Links")
              .child(
                S.document()
                  .schemaType("links")
                  .documentId("links")
              ),
          ]),
    }),
  visionTool(),
  media()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
