<template>
<div class="resume-item-container" :class="(grow && 'flex-grow')">
    <div class="flares" v-if="flares">
        <span>{{flares}}</span>
    </div>
    <div class="cont" v-if="actualContent">
        <p class="actual-content" v-html="actualContent"></p>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'timeline', 'content', 'flare', 'grow'],
    data() {
        return {
            flares: ((this.flare || "").concat(this.timeline ? `,${this.timeline}` : '')).replace(/\,/gi, " • "),
            actualContent: `<b>${this.title}</b> - ` + this.content
        };
    }
};
</script>

<style lang="scss" scoped>
b {
    margin: 0px !important;
    padding: 0px;
    font-family: var(--font-family) !important;
    font-size: var(--heading-font-size) !important;
    line-height: var(--heading-font-size) !important;
    color: var(--text-color--medium) !important;
}

.actual-content {
    font-size: var(--content-font-size);
    line-height: calc(2px + var(--content-font-size));
    margin: 0px;
    text-align: justify;
}

.flares {
    font-size: var(--flare-font-size);
    margin-bottom: -2px;

    span {
        color: var(--text-color--light);
    }
}
</style>
