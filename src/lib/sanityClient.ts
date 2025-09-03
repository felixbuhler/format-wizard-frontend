import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "w9dvy0j8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-29",
});

export async function getFormats() {
  const query = `
    *[_type == "medium"]{
      ...,
      sections[]->{
        ...,
        formats[]->{
         ...
        }
      }
    }
  `;

  return await client.fetch(query);
}
