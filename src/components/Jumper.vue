<template>
    <div class="jumper">
        <input 
            type="text" 
            id="ichapter" 
            @keyup="validate('chapter', $event.target)"
            @blur="validate('chapter', $event.target)"
            :placeholder="chapterPlaceholder" />
        <input 
            type="text"
            class="small"
            id="ipage" 
            @keyup="validate('page', $event.target)"
            @blur="validate('page', $event.target)"
            :placeholder="pagePlaceholder" />
        <button 
            type="button" 
            class="btn btn--primary"
            @click="jump">
            <FaIcon
                :color="buttonColor"
                :size="buttonSize"
                :draw="run" />
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

// API Calls
import { gqlFetch } from '../graphql/client'
import { getChapter } from '../graphql/queries'

// Components
import FaIcon from '../icons/FaIcon.vue'

// Icons
import { run } from '../icons/faicons.json'

export default defineComponent({
    components: {
        FaIcon
    },
    props: ["limit", "comic"],
    setup(props) {
        const buttonColor = "#2c7c54"
        const buttonSize = "20 20"

        const valid = {
            chapter: false,
            page: false
        }

        const chapterPlaceholder = "Chapter"
        const pagePlaceholder = "Page"

        const jump = () => {
            if (!(valid.chapter && valid.page)) return

            const ichapter = Number(document.getElementById("ichapter").value) || -1
            const ipage = Number(document.getElementById("ipage").value) || -1

            if (ichapter === -1 || ipage === -1) return

            const url = window.location.pathname.split("-")[0]
            window.location.href = `${url}-${ichapter}#page-${ipage}`
        }

        const validate = (input, target) => {
            const errorize = () => {
                target.classList.add("error")
                valid[input] = false
            }

            const derrorize = () => {
                target.classList.remove("error")
                valid[input] = true 
            }

            if (input === 'chapter') {
                if (parseInt(target.value) > props.limit) {
                    errorize()
                    return
                } else {
                    derrorize()
                    return
                }
            }

            const chapter = document.getElementById("ichapter")

            if (chapter.value === "") {
                target.value = ""
                chapter.focus()
                return
            }

            gqlFetch(getChapter(props.comic, parseInt(chapter.value))).then(data => {
                const pages = parseInt(data.data.chapter.data.pages)

                if (parseInt(target.value) > pages) {
                    errorize()
                    return
                }

                derrorize()
            })
        }

        return {
            run,
            buttonColor,
            buttonSize,
            chapterPlaceholder,
            pagePlaceholder,
            jump,
            validate
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/globals";

div.jumper {
    @extend .flex-centered;
}
</style>