<template>
    <div class="skipper">
        <button 
            class="btn btn--primary"
            v-on:click="prev">
            <FaIcon 
                :color="buttonColor" 
                :size="buttonSize" 
                :draw="arrowLeft" />
        </button>
        <button 
            class="btn btn--primary"
            v-on:click="next">
            <FaIcon 
                :color="buttonColor" 
                :size="buttonSize" 
                :draw="arrowRight" />
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import FaIcon from '../icons/FaIcon.vue'

// Icons
import { arrowLeft, arrowRight } from '../icons/faicons.json'

export default defineComponent({
    components: {
        FaIcon
    },
    setup() {
        const buttonColor = "#2c7c54"
        const buttonSize = "20 20"

        const next = () => {
            console.log("next")
        }

        const prev = () => {
            console.log("prev")
        }

        return {
            next,
            prev,
            buttonSize,
            buttonColor,
            arrowLeft,
            arrowRight
        }
    }
})

</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/globals";

div.skipper {
    display: flex;
    flex-direction: row;
    gap: 5px;
}
</style>