<template>
    <div class="container">
        {{ title }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Vuejs & Parcel"
            };
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        color: blue;
    }
</style>
