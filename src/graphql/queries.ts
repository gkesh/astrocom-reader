import { gql } from "./client";

export const getComicTitles = () => gql(`
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
`);

export const getComicSelects = () => gql(`
    query getComicSelects {
        selects {
            status
            data {
                types,
                crawlers
            }
            error
        }
    }
`)

export const getComic = (comic: string) => gql(`
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
`, {comic});

export const getComicChapters = () => gql(`
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
`);

export const getChapter = (comic: string, number: number) => gql(`
    query getChapters ($comic: String!, $number: Float!) {
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
`, {comic, number});

export const searchAuthors = (keyword: string) => gql(`
    query searchAuthors ($keyword: String!) {
        search_authors (keyword: $keyword) {
            status
            data {
                id
                first_name
                last_name
            }
            error
        }
    }
`, {keyword});

export const searchPublishers = (keyword: string) => gql(`
    query searchPublishers ($keyword: String!) {
        search_publishers (keyword: $keyword) {
            status
            data {
                id
                name
                country
            }
            error
        }
    }
`, {keyword});

export const downloadChapters = (comic: string) => gql(`
    query downloadChapters ($comic: String!) {
        download_chapters (comic: $comic) {
            number
            title
            date_released
            source
            pages
        }
    }
`, {comic});
