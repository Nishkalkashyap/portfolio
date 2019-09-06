<template>
<div class="resume-item-container">
    <div class="header">
        <h4>{{title}}</h4>
        <span>{{timeline}}</span>
    </div>
    <p> {{content}} </p>
</div>
</template>

<script>
export default {
    props: ['title', 'timeline', 'content']
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
h4 {
    margin: 0px !important;
    padding: 0px;
    font-family: var(--font-family) !important;
}
</style>
