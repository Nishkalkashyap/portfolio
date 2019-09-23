<template>
<div class="theme-changer-component">
    <div class="button" id="theme-changer" @click="nextColor()" title="Change theme">
        <div class="social-icon" v-html="svg"></div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        const currentIndex = typeof localStorage == 'undefined'? 0 : Number(localStorage.getItem('currentIndex') || 0);
        return {
            svg: require("!!svg-inline-loader!@buildAssets/landing-page-svgs/palette.svg"),
            currentIndex
            // currentIndex: Number(localStorage.getItem('currentIndex') || 0)
        }
    },
    mounted() {
        this.nextColor(this.currentIndex);
    },
    methods: {
        nextColor(index) {
            const colors = [
                ['linear-gradient(72deg, #4c51bf, #667eea)', '#4c51bf88'],
                ['linear-gradient(30deg, rgb(90, 189, 255) 0%, rgb(71, 104, 180)', ' rgba(52, 152, 219, 0.3)'],
                ['linear-gradient(30deg, #FBAB7E 0%, #F7CE68 100%)', '#FBAB7E88'],
                ['linear-gradient(225deg, #ef699e, #feb2b2)', '#ef699e88']
            ];

            this.currentIndex = typeof index == 'number' ? index : (this.currentIndex + 1);
            if (!colors[this.currentIndex]) {
                this.currentIndex = 0;
            }

            localStorage.setItem('currentIndex', this.currentIndex);

            document.body.style.setProperty('--gradient', colors[this.currentIndex][0]);
            document.body.style.setProperty('--gradient-shadow', colors[this.currentIndex][1]);
        }
    }
};
</script>

<style lang="scss" scoped>
.button {
    background: var(--gradient);
    box-shadow: var(--gradient-shadow) 0px 10px 15px;
}

#theme-changer {
    position: fixed;
    min-width: 40px;
    max-width: 40px;
    z-index: 200;
    border-radius: 5px;
    cursor: pointer;

    top: calc(100vh - 100px);
    right: 40px;
}

@media only screen and (max-width: 600px) {
    #theme-changer {
        top: calc(100vh - 60px);
        right: 20px;
    }
}
</style>
