import { gql } from "./client";

export const setVisited = (comic: string, chapter: number) => gql(
    `
    mutation setVisited ($comic: String!, $chapter: Float!) {
        visited (comic: $comic, chapter: $chapter)
    }
    `,
    {comic, chapter}
)

export const setCheckpoint = (comic: string, chapter: number) => gql(
    `
    mutation setCheckpoint ($comic: String!, $chapter: Float!) {
        checkpoint (comic: $comic, chapter: $chapter)
    }
    `,
    {comic, chapter}
)