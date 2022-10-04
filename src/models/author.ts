class InvalidAuthorNameError extends Error {
    constructor(message?: string) {
        super(message ?? "Invalid author name was provided")
    }
}

class Author implements Author {
    private firstName: string
    private lastName: string
    private biography?: string

    constructor (
        name: string, 
        biography?: string
    )
    constructor (
        firstName: string, 
        lastName: string, 
        biography?: string
    ) 
    constructor (
        name?: string, 
        firstName?: string, 
        lastName?: string, 
        biography?: string
    ) {
        if (name) {
            if (name === "") {
                throw new InvalidAuthorNameError()
            }

            ([this.firstName, this.lastName] = name.split(" "))
        } else if (firstName && lastName) {
            if (firstName === "" || lastName === "") {
                throw new InvalidAuthorNameError()
            }

            this.firstName = firstName
            this.lastName = lastName
            this.biography = biography ?? ""
        } else {
            throw new InvalidAuthorNameError()
        }
    }

    public getFirstName(): string {
        return this.firstName
    }

    public getLastName(): string {
        return this.lastName
    }

    public getBiography(): string {
        return this.biography ?? ""
    }

    toJSON() {
        return {
            first_name: this.firstName,
            last_name: this.lastName,
            biography: this.biography
        }
    }
}

export default Author
