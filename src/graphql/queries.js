import { gql } from "./client";

export const getComicTitles = () => gql(
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
    `
    query getComic ($comic: String!) {
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
                    visited
                    checkpoint
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
    `
    query getChapters ($comic: String!, $number: Int!) {
        chapter (comic: $comic, number: $number) {
            status
            data {
                pages
                max
                visited
                checkpoint
            }
            error
        }
    }
    `,
    {comic, number}
);