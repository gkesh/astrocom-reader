<template>
    <main class="poster">
        <h1>{{title}}</h1>
    </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Placeholder",
    props: ["title"]
})
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/globals";

main.poster {
    @extend .flex-centered;
    height: 100vh;

    h1 {
        color: $secondary-dark;
        font-size: 2.5em;
        font-weight: 900;
        margin: 0;
        padding: 0;
    }

    @media (prefers-color-scheme: dark) {
        h1 {
            color: $secondary-light;
        }
    }
}
</style>