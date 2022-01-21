<template>
    <div class="jumper">
        <input 
            type="text" 
            id="ichapter" 
            :placeholder="chapterPlaceholder" />
        <input 
            type="text"
            class="small"
            id="ipage" 
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
    setup() {
        const chapterPlaceholder = "Chapter"
        const pagePlaceholder = "Page"

        const jump = () => {
            const ichapter = Number(document.getElementById("ichapter").value) || -1
            const ipage = Number(document.getElementById("ipage").value) || -1

            if (ichapter === -1 || ipage === -1) return

            // Execute jump procedure
            alert(`Jumping to Chapter ${ichapter} Page ${ipage}`)
        }

        return {
            chapterPlaceholder,
            pagePlaceholder,
            jump
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/globals";
</style>