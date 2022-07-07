class Publisher {
    private name: string
    private country: string
    private history?: string

    constructor (
        name: string, 
        country: string = "Japan", 
        history?: string
    ) {
        this.name = name
        this.country = country
        this.history = history
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
}

export default Publisher
