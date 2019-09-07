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
    margin-top: 5px;

    span {
        color: var(--accent-color);
        font-size: 11px;
    }
}

h4 {
    margin: 0px !important;
    padding: 0px;
    font-family: var(--font-family) !important;
    font-size: 15px !important;
    color: var(--text-color) !important;
}

.flares {
    font-size: 8px;
    margin-top: -2px;

    span {
        color: var(--text-color--light);
    }
}

p {
    font-size: var(--content-font-size);
    line-height: calc(5px + var(--content-font-size));
    margin: 0px;
    margin-top: 0px;
}
</style>
