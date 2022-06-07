const ENDPOINT = 'http://127.0.0.1:5000/astroql';

export class GQLError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "GraphQL Error";
    }
}

interface Request {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: string
}

export const gql = (content: string, variables?: any): Request => {
    if (!content) throw new GQLError("Missing content on gql query call.");

    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            query: content,
            variables: variables ?? {}
        })
    };
};

export const gqlFetch = async (gql: Request) => await fetch(ENDPOINT, gql).then(result => result.json());