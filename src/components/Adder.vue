<template>
    <form name="add" @submit.prevent="save($event.target)">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// API Calls
import { gqlFetch } from '../graphql/client'
import { addComic } from '../graphql/mutations'

// Models
import Author from '../models/author'
import Publisher from '../models/publisher'
import Genre from '../models/genre'
import Comic from '../models/comic'

export default defineComponent({
    setup() {
        type FormElement = HTMLInputElement |  HTMLSelectElement | HTMLTextAreaElement;

        const save = (target: HTMLFormElement) => {
            const data: any = {}

            Array.from(target.elements).filter(
                (el: Node) => (el as HTMLElement).classList.contains("data")
            ).forEach(
                (el: Node) => data[(el as FormElement).name] = (el as FormElement).value
            )

            const author: Author = new Author(data["author"])
            const publisher: Publisher = new Publisher(data["publisher"])
            const genres: Array<Genre>  = data["tags"].split(",").map((genre: string) => new Genre(genre))
            const status: boolean = JSON.parse(data["status"])
            const comic: Comic = new Comic(
                data["title"],
                author,
                publisher,
                data["crawler"],
                data["type"],
                data["source"],
                genres,
                status,
                data["published"]
            )

            gqlFetch(addComic(comic)).then(data => {
                
            })
        }

        return {
            save
        }
    },
})
</script>
