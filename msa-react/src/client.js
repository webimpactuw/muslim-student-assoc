import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECTID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-08",
});

export default client;