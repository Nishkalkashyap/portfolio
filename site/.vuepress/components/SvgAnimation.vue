<template>
<div>
    <div class="svg-div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 14" height="70" preserveAspectRatio="none" aria-hidden="true" focusable="false" class="svg-container">
            <path d="M 27 11.8501 C 16.8374 10.7751 9.83737 4.85006 0 4.85006 L 0 0 L 54 0 L 54 10.7624 C 44.1626 10.7624 37.1626 12.925 27 11.8501 Z">
                <animate attributeName="d" values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" repeatCount="indefinite" dur="25s"></animate>
            </path>
        </svg>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.svg-div {
    position: relative;
    height: 100%;
    transform: matrix(1, 0, 0, -1, 0, 0);
}

.svg-container {
    display: block;
    position: absolute;
    width: 100%;
    height: 5.5rem;
}

path {
    // fill: rgb(240, 240, 240);
    fill: var(--background);
    width: 100%;
    animation: 25s linear 0s infinite alternate none running MyAnimation;
}

@keyframes MyAnimation {
    0% {
        d: path("M 27 10 C 21 8 14 3 0 3 L 0 0 L 54 0 L 54 14 C 40 14 33 12 27 10 Z");
    }

    50% {
        d: path("M 27 14 C 12 14 5 7 0 7 L 0 0 L 54 0 L 54 7 C 49 7 42 14 27 14 Z");
    }

    100% {
        d: path("M 27 10 C 21 12 14 14 0 14 L 0 0 L 54 0 L 54 3 C 40 3 33 8 27 10 Z");
    }
}
</style>
