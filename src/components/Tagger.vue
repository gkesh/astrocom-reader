<template>
    <div class="field-row">
        <input type="text" class="big" id="tagger" name="tagger" placeholder="Add Genre" />
        <button
            class="btn btn--accent"
            @click.prevent="addTag">
            <FaIcon
                :color="buttonColor"
                :size="buttonSize"
                :draw="tag" />
        </button>
    </div>
    <div class="tags">
        <span 
            class="tag tag--accent-dark"
            v-for="(tag, index) in tags"
            :data-index="index"
            :key="tag">
            {{tag}}
        </span>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue"

// Components
import FaIcon from '../icons/FaIcon.vue'

// Icons
import { tag } from '../icons/faicons.json'

export default defineComponent({
    components: {
        FaIcon
    },
    setup() {
        const buttonColor = "#ba494b"
        const buttonSize = "40 30"

        const tags = ref([])

        const addTag = () => {
            const tagger = document.querySelector("input#tagger")
            tags.value?.push(tagger?.value)

            // Clearing tagger
            tagger.value = ""
        }

        return {
            buttonColor,
            buttonSize,
            tag,
            tags,
            addTag
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/globals";

input[type="text"] {
    flex: 26 !important;
}

.tags {
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

button {
    height: 70px;
}
</style>