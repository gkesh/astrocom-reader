<template>
    <form name="add" @submit.prevent="save($event.target)">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Author from '../models/author'
import Publisher from '../models/publisher'
import Genre from '../models/genre'
import Comic from '../models/comic'

export default defineComponent({
    setup() {
        type FormElement = HTMLInputElement |  HTMLSelectElement | HTMLTextAreaElement;

        const save = (target: HTMLFormElement) => {
            const data = {};
            Array.from(target.elements).filter(
                (el: Node) => (el as HTMLElement).classList.contains("data")
            ).forEach(
                (el: Node) => console.log((el as FormElement).name, (el as FormElement).value)
            );
        };

        return {
            save
        }
    },
})
</script>
