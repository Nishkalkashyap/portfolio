<template>
<div class="resume-item-container" :class="(grow && 'flex-grow')">
    <div class="flares" v-if="flares">
        <span v-html="flares"></span>
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
            // flares: ((this.flare || "").concat(this.timeline ? `,<span style="color:var(--accent-color)">${this.timeline}</span>` : '')).replace(/\,/gi, " • "),
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
    // line-height: var(--heading-font-size) !important;
    color: var(--text-color--medium) !important;
}

.actual-content {
    font-size: var(--content-font-size);
    // line-height: calc(2px + var(--content-font-size));
    margin: 0px;
    text-align: justify;
    position: relative;
}

.actual-content::before {
    content: '.';
    color: transparent;
    font-size: 0px;

    border: solid 2px var(--text-color--dark);
    width: 1px;
    height: 1px;
    border-radius: 200px;
    // background-color: var(--text-color--dark);

    position: absolute;
    top: 4px;
    left: -10px;
}

.flares {
    font-size: var(--flare-font-size);
    margin-bottom: -2px;

    span {
        color: var(--text-color--light);
    }
}
</style>
