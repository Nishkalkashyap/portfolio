<template>
<div class="resume-item-container">
    <div class="header">
        <h4>{{title}}</h4>
        <span>{{timeline}}</span>
    </div>
    <div class="flares" v-if="flares">
        <span>{{flares}}</span>
    </div>
    <p> {{content}} </p>
</div>
</template>

<script>
export default {
    props: ['title', 'timeline', 'content', 'flare'],
    data() {
        return {
            flares: (this.flare || "").replace(/\,/gi, " • ")
        };
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    span {
        color: var(--accent-color);
        font-size: 13px;
    }
}

h4 {
    margin: 0px !important;
    padding: 0px;
    font-family: var(--font-family) !important;
}

.flares {
    span {
        font-size: 12px;
    }
}

P {
    font-size: var(--content-font-size);
}
</style>
