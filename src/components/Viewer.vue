<template>
    <div class="viewer">
        <div v-if="dir">
            <img v-for="page in pages" :key="page" :src="page" alt="Page" />
        </div>
        <div v-else>
            <img :src="pages" alt="Page">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Viewer",
    props: ["dir", "pages"]
})
</script>

<style lang="scss" scoped>
div.viewer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    div {
        height: inherit;
    }

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>