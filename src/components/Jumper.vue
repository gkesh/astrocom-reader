<template>
    <div class="jumper">
        <input 
            type="text" 
            id="ichapter" 
            @keyup="validate('chapter', $event.target)"
            :placeholder="chapterPlaceholder" />
        <input 
            type="text"
            class="small"
            id="ipage" 
            @keyup="validate('page', $event.target)"
            :placeholder="pagePlaceholder" />
        <button 
            type="button" 
            class="btn btn--primary"
            @click="jump">Go
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ["limits"],
    setup(props) {
        const valid = {
            chapter: false,
            page: false
        };

        const chapterPlaceholder = "Chapter";
        const pagePlaceholder = "Page";

        const jump = () => {
            if (!(valid.chapter && valid.page)) return;

            const ichapter = Number(document.getElementById("ichapter").value) || -1;
            const ipage = Number(document.getElementById("ipage").value) || -1;

            if (ichapter === -1 || ipage === -1) return;

            const url = window.location.pathname.split("-")[0];
            window.location.href = `${url}-${ichapter}#page-${ipage}`;
        }

        const validate = (input, target) => {
            console.log(props.limits.length);
            const limit = input === 'chapter' ? props.limits.length: props.limits[Number(document.getElementById("ichapter").value) - 1];

            if (target.value > limit) {
                target.classList.add("error");
                valid[input] = false;
                return;
            }

            target.classList.remove("error");
            valid[input] = true;
        }

        return {
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
</style>