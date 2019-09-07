<template>
<div class="footer-container">
    <!-- <div class="avatar">
        <img src="~@buildAssets/pictures/avatar.jpg" alt="avatar" align="middle">
    </div> -->
    <div class="social-icons">
        <p class="contact" title="Email">
            <a class="block-elements" href="mailto:hello@nishkal.in?subject=Hey%20Nishkal," target="_blank">hello@nishkal.in</a>
        </p>
        <SocialIcons />
    </div>
    <div class="local-container">
        <!-- <p class="quote">
        Your time is limited,
        so don’t waste it living someone else’s life.
        Don’t be trapped by dogma — which is living with the results of other people’s thinking.
        Don’t let the noise of others’ opinions drown out your own inner voice.
        And most important, have the courage to follow your heart and intuition.
        They somehow already know what you truly want to become.
        Everything else is secondary.
      </p>
      <p class="title">– Steve Jobs, June 12, 2005.</p>-->
        <p class="quote">
            Deep in the sea
            all molecules repeat
            the patterns of one another
            till complex new ones are formed.
            They make others like themselves
            and a new dance starts.
            Growing in size and complexity
            living things
            masses of atoms
            DNA, protein
            dancing a pattern ever more intricate.
            Out of the cradle
            onto dry land
            here it is
            standing:
            atoms with consciousness;
            matter with curiosity.
            Stands at the sea,
            wonders at wondering: I
            a universe of atoms
            an atom in the Universe.
        </p>
        <p class="title">– Prof. Richard Feynman, Nobel Prize in Physics - 1965</p>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.avatar {
    text-align: center;
    max-width: 960px;
    border-top: solid 1px #ffffff22;

    padding-top: 60px;
    margin: 20px 50px 0px 50px;

    img {
        width: 150px;
        height: 150px;
        display: inline-block;
        border-radius: 999999px;
        object-fit: cover;
        border: solid 4px var(--gradient-shadow);
    }
}

.social-icons {
    text-align: center;
    margin-bottom: 40px;

    p a {
        color: var(--text-color);
        border-bottom: solid 2px var(--gradient-shadow);
    }
}

.local-container {
    max-width: 960px;
    margin: 0px 20px;

    color: var(--text-color);
    text-align: center;

    p.quote {
        font-style: italic;
    }

    p.title {
        font-size: 1.2em;
    }
}
</style>
