import { gql } from "./client"
import Comic from "../models/comic"

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

export const addComic = (comic: Comic) => gql(
    `
    mutation addComic ($comic: ComicInput!) {
        add (comic: $comic)
    }
    `,
    {comic}
)