<template>
    <form name="add" @submit.prevent="save($event.target)">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        type FormElement = HTMLInputElement |  HTMLSelectElement | HTMLTextAreaElement;

        const save = (target: HTMLFormElement) => {
            Array.from(target.elements).filter(
                (el: Node) => (el as HTMLElement).classList.contains("data")
            ).forEach(
                (el: Node) => console.log(el.nodeName, (el as FormElement).value)
            );
        };

        return {
            save
        }
    },
})
</script>
