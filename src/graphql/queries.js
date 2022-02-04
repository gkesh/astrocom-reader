import { GQLType, gql } from "./client";


export const getComicTitles = () => gql(
    GQLType.QUERY,
    `
    query getComicTitles {
        titles {
            status
            data {
                title
                code
            }
            error
        }
    }
    `
);

export const getComic = (comic) => gql(
    GQLType.QUERY,
    `
    query getComic($comic: String!) {
        comic(comic: $comic) {
            status
            data {
                title
                type
                genres {
                    name
                    description
                }
                author {
                    first_name
                    last_name
                }
                publisher {
                    name
                    country
                }
                chapters {
                    number
                }
                synopsis
                code
                date_published
                date_updated
            }
            error
        }
    }
    `,
    {comic}
);

export const getComicChapters = () => gql(
    GQLType.QUERY, 
    `
    query getAllComicChapters {
        chapters {
            status
            data {
                code
                count
            }
            error
        }
    }
    `
);

export const getChapter = (comic, number) => gql(
    GQLType.QUERY,
    `
    query getChapters($comic: String!, $number: Int!) {
        chapter (comic: $comic, number: $number) {
            status
            data {
                pages
                max
            }
            error
        }
    }
    `,
    {comic, number}
);