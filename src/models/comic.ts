import Author from "./author";
import Genre from "./genre";
import Publisher from "./publisher";

enum ComicType {
    MANGA = 1,
    WESTERN = 2,
    MANHUA = 3,
    MANHWA = 4,
    WEB = 5
}

class Comic {
    private title: string
    private author: Author
    private code: String
    private publisher: Publisher
    private crawler: string
    private type: ComicType
    private source: string
    private ongoing: boolean
    private genres: Array<Genre>
    private synopsis: String
    private datePublished: Date

    constructor (
        title: string, 
        author: Author,
        code: String,
        publisher: Publisher, 
        crawler: string, 
        type: ComicType, 
        source: string, 
        genres: Array<Genre>, 
        ongoing: boolean,
        synopsis: String = "N/A",
        datePublished: Date
    ) {
        this.title = title
        this.author = author
        this.code = code
        this.publisher = publisher
        this.crawler = crawler
        this.type = type
        this.source = source
        this.ongoing = ongoing
        this.genres = genres
        this.synopsis = synopsis
        this.datePublished = datePublished
    }

    public getTitle(): string {
        return this.title
    }

    public getAuthor(): Author {
        return this.author
    }

    public getCode(): String {
        return this.code
    }

    public getPublisher(): Publisher {
        return this.publisher
    }

    public getCrawler(): string {
        return this.crawler
    }

    public getType(): ComicType {
        return this.type
    }

    public getSource(): string {
        return this.source
    }

    public isOngoing(): boolean {
        return this.ongoing
    }

    public getGenres(): Array<Genre> {
        return this.genres
    }

    public getSynopsis(): String {
        return this.synopsis
    }

    public getDatePublished(): Date {
        return this.datePublished
    }

    toJSON() {
        return {
            title: this.title,
            author: this.author,
            code: this.code,
            publisher: this.publisher,
            crawler: this.crawler,
            type: this.type,
            source: this.source,
            ongoing: this.ongoing,
            genres: this.genres,
            synopsis: this.synopsis,
            date_published: this.datePublished
        }
    }
}

export default Comic