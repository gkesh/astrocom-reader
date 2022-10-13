<template>
    <article>
        <input type="hidden" class="big data" name="status" :value="status" />
        <button 
            :class="status? 'active': ''"
            @click="toggle($event.target)">
        {{left}}
        </button>
        <button
            :class="status? '': 'active'"
            @click="toggle($event.target)">
        {{right}}
        </button>
    </article>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
    props: ["right", "left"],
    setup() {
        const status = ref(true);

        const toggle = (target) => {
            if (target.classList.contains("active")) return
            status.value = !status.value
        }

        return {
            status,
            toggle
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../scss/globals.scss';

article {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 5px;

    @media screen and (max-width: 1110px) {
        & {
            width: 100%;

            button {
                width: 50%;
            }
        }
    }

    button {
        margin: 0;
        border: 0;
        height: auto;
        font-size: 1.1em;
        padding: 24px;
        cursor: pointer;

        &.active {
            background-color: $accent-light;
        }

        @media (prefers-color-scheme: dark) {
            background: $background-dark-b;
            color: white;

            &.active {
                background-color: $accent-dark;
            }
        }

        &:first-of-type {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        &:last-of-type {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
}
</style>