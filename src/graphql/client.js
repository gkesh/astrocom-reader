const ENDPOINT = 'http://127.0.0.1:5000/astroql';

export class GQLError extends Error {
    constructor(message) {
        super(message);
        this.name = "GraphQL Error";
    }
}

export const GQLType = {
    QUERY: 'query',
    MUTATION: 'mutation'
};

export const gql = (type, content, variables) => {
    if (!type  || !content) throw new GQLError("Missing type or content on gql call.");

    if (!Object.values(GQLType).includes(type)) throw new GQLType("Invalid type passed to gql call.");

    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            [type]: content,
            variables: variables ?? {}
        })
    };
};

export const gqlFetch = async (gql) => {
    return await fetch(ENDPOINT, gql).then(result => result.json());
};