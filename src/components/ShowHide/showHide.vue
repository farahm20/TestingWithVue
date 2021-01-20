<template>
    <div class="">
        <button @click="toggleVisible"> Show/ Hide alternativ </button>
        <p class="content" v-show="isVisible">
            Ett mycket spännande men något långrandigt innehåll, som man kan vilja dölja så att man inte ser det hela tiden.
        </p>
        <button @click="showMe"> Show me Button </button>
        <p class="hide" v-show="showIt"> Now you see me </p>
    </div>
</template>

<script>
export default {
    data: () => ({
        isVisible: true,
        showIt: true
    }),
    methods: {
        toggleVisible() {
            this.isVisible = !this.isVisible;
        },
        showMe() {
            this.showIt = !this.showIt;
        }
    }
}
</script>

<style scoped>
</style>