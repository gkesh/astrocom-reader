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

        const save = async (target: EventTarget | null) => {
            if (!target) return

            const formData: any = {}

            Array.from((target as HTMLFormElement).elements).filter(
                (el: Node) => (el as HTMLElement).classList.contains("data")
            ).forEach(
                (el: Node) => formData[(el as FormElement).name] = (el as FormElement).value
            )

            const author: Author = new Author(formData["author"])
            const publisher: Publisher = new Publisher(formData["publisher"])
            const genres: Array<Genre>  = formData["tags"].split(",").map((genre: string) => new Genre(genre))
            const ongoing: boolean = JSON.parse(formData["status"])
            const comic: Comic = new Comic(
                formData["title"],
                author,
                formData["code"],
                publisher,
                formData["crawler"],
                formData["type"],
                formData["source"],
                genres,
                ongoing,
                formData["synopsis"],
                formData["published"]
            )

            const responseData = await gqlFetch(addComic(comic))
        }

        return {
            save
        }
    },
})
</script>
