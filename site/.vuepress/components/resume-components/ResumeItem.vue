<template>
<div class="resume-item-container" :class="(grow && 'flex-grow')">
    <div class="flares" v-if="flares">
        <span>{{flares}}</span>
    </div>
    <div class="header">
        <h4>{{title}}</h4>
        <span>{{timeline}}</span>
    </div>
    <p> {{content}} </p>
</div>
</template>

<script>
export default {
    props: ['title', 'timeline', 'content', 'flare','grow'],
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

    span {
        color: var(--accent-color);
        font-size: 11px;
    }
}

h4 {
    margin: 0px !important;
    padding: 0px;
    font-family: var(--font-family) !important;
    font-size: var(--heading-font-size) !important;
    line-height: var(--heading-font-size) !important;
    color: var(--text-color--medium) !important;
}

.flares {
    font-size: var(--flare-font-size);
    margin-bottom: -2px;

    span {
        color: var(--text-color--light);
    }
}

p {
    font-size: var(--content-font-size);
    line-height: calc(2px + var(--content-font-size));
    margin: 0px;
    margin-top: 0px;
}
</style>
