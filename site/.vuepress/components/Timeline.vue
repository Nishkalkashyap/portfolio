<template>
<div class="timeline-container-component">
    <div class="timeline-container">
        <div class="meta-data">
            <div class="meta-card">
                <span>{{timeline}}</span>
                <h2>{{heading}}</h2>
                <p>{{content}}</p>
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
.meta-data {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .meta-card {
        max-width: 860px;
        border: solid 1px var(--line-rule-color);
        border-radius: 2px;
        padding: 20px 40px;

        span {
            font-size: 14px;
            font-weight: 500;
        }

        h2 {
            border-bottom: none;
            padding-top: 0px;
            position: relative;
            margin-top: 5px;
        }
    }
}
</style>
