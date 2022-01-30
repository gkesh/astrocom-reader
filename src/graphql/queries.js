import { GQLType, gql } from "./client";

export const getAllComics = gql(
    GQLType.QUERY, 
    `
    query getAllComics {
        comics {
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
                }
                publisher {
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