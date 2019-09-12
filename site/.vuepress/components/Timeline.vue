<template>
<div class="timeline-container-component">
    <div class="timeline-container">
        <div class="meta-data">
            <div class="full-circle"></div>
            <div class="small-full-circle"></div>
            <div class="meta-card">
                <span>{{timeline}}</span>
                <h2>{{heading}}</h2>
                <p v-html="content"></p>
                <slot name="inside"></slot>
            </div>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    props: ['timeline', 'heading', 'content']
}
</script>

<style lang="scss" scoped>
.timeline-container {
    position: relative;
    margin-bottom: 100px;
    // --svg-color: #ecc94b;
    // --svg-color: #e53e3e;
    // --svg-color: #ed8936;
    --svg-color: #48bb78;
    // --svg-color: var(--accent-color);
}


.full-circle {
    position: absolute;
    border-radius: 9999px;
    z-index: 2;
    opacity: 1;

    background-image: linear-gradient(225deg, #fbd38d, #ed8936);

    top: -70px;
    right: 180px;
    width: 120px;
    height: 120px;
}

.small-full-circle {
    position: absolute;
    border-radius: 9999px;
    z-index: 2;
    opacity: 1;

    background-image: linear-gradient(225deg, #9ae6b4, #48bb78);

    top: -90px;
    right: 300px;
    width: 35px;
    height: 35px;
}

.meta-data {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .meta-card {
        margin: 10px 20px;
        width: calc(100% - 80px);
        max-width: var(--content-max-width);
        box-sizing: border-box;
        border-radius: var(--border-radius);
        padding: 60px 60px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        background-image: var(--gradient);
        z-index: 1;
        position: relative;

        $color: #ffffff;

        span {
            font-size: 14px;
            font-weight: 500;
            color: $color;
        }

        p {
            color: $color;
            // font-size: 18px;
            font-size: 16px;
            text-shadow: none;

            // text-align: justify;
            // text-justify: distribute-all-lines;
        }

        h2 {
            border-bottom: none;
            padding-top: 0px;
            position: relative;
            margin-top: 5px;
            color: $color;
        }
    }
}

@media only screen and (max-width: 600px) {
    .full-circle {
        top: -30px;
        right: 10px;
        width: 80px;
        height: 80px;
    }

    .meta-data .meta-card {
        padding: 40px 20px;
        margin: 10px 0px;
        width: calc(100% - 40px);

        span {
            font-size: 12px;
        }

        p {
            font-size: 14px;
        }
    }
}
</style>
