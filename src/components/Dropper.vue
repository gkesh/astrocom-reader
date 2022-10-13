<template>
    <div class="dropper">
        <input type="text" class="big data" :name="name" :placeholder="placeholder" required>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String,
        placeholder: String
    },
    setup() {
        
    }
})
</script>

<style lang="scss">
@import "../scss/globals";
</style>