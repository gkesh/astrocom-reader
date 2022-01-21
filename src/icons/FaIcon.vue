<template>
    <svg
        aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="arrow-right" 
        :height="height"
        :width="width"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
            :fill="color" 
            :d="draw">
        </path>
    </svg>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ["color", "size", "draw"],
    setup (props) {
        const color = props.color
        const [width, height] = props.size.split(" ")
        const draw = props.draw

        return {
            color,
            width,
            height,
            draw
        }
    }
})
</script>