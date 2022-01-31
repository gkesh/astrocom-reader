import { GQLType, gql } from "./client";

export const getAllComics = gql(
    GQLType.QUERY, 
    `
    query getAllComics {
        comics {
            status
            data {
                id
                title
                type
                genres {
                    id
                    name
                    description
                }
                author {
                    id
                    first_name
                    last_name
                }
                publisher {
                    id
                    name
                    country
                }
                chapters {
                    number
                    pages
                }
                synopsis
                date_published
                date_updated
            }
        }
    }
    `
);