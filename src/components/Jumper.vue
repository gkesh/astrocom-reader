<template>
    <input type="text" id="chapter" :placeholder="chapterPlaceholder" />
    <input type="text" id="page" :placeholder="pagePlaceholder" />
    <button type="button" class="btn btn--secondary">Go</button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
    setup() {
        const chapterPlaceholder: Ref<string> = ref("Chapter")
        const pagePlaceholder: Ref<string> = ref("Page")

        return {
            chapterPlaceholder,
            pagePlaceholder
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../scss/variables";

input[type="text"], button {
    height: 50px;
    margin: 5px;
    border-radius: 8px;
    font-size: 0.9em;
    @extend .transitioner-25;
}

input[type="text"] {
    width: 100px;
    padding-left: 12px;
    background: $background-light-b;
    border: 1px solid transparent;

    &:hover, &:focus {
        background: white;
        border: 1px solid $border;
        outline: none;
    }
}

button {
    aspect-ratio: 1;
    background: $primary-light;
    border: 1px solid $primary-light;
    color: $primary-dark;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 5px $primary-light-50;
    }
}

@media (prefers-color-scheme: dark) {
    input[type="text"] {
        background: $background-dark-b;
    }

    button {
        background: $primary-dark;
        border-color: $primary-dark;
        color: $primary-light;
    }
}
</style>