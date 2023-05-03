import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "b754quep",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-08",
});

export default client;