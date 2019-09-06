<template>
<div class="divider-container">
    <div class="divider">
        <h3>{{title}}</h3>
        <hr />
    </div>
</div>
</template>

<script>
export default {
    props: ['title']
};
</script>

<style lang="scss" scoped>
.divider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
        margin: 0px !important;
        padding-top: 0px;
    }
    hr {
        overflow: auto;
        flex-grow: 1;
        margin-left: 20px;
        position: relative;
        top: 3px;
        color: var(--divider-color);
    }
}
</style>
