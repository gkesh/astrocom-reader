class Publisher {
    private name: string
    private country: string
    private history?: string

    constructor (
        name: string, 
        country: string = "N/A", 
        history?: string
    ) {
        this.name = name
        this.country = country
        this.history = history ?? ""
    }

    public getName(): string {
        return this.name
    }

    public getCountry(): string {
        return this.country
    }

    public getHistory(): string {
        return this.history ?? ""
    }

    toJSON() {
        return {
            name: this.name,
            country: this.country,
            history: this.history
        }
    }
}

export default Publisher
