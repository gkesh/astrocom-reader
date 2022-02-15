import { gql } from "./client";

export const setVisited = (comic, chapter) => gql(
    `
    mutation setVisited ($comic: String!, $chapter: Float!) {
        visited (comic: $comic, chapter: $chapter)
    }
    `,
    {comic, chapter}
)

export const setCheckpoint = (comic, chapter) => gql(
    `
    mutation setCheckpoint ($comic: String!, $chapter: Float!) {
        checkpoint (comic: $comic, chapter: $chapter)
    }
    `,
    {comic, chapter}
)