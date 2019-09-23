<template>
<div class="skills-container">
    <div class="dropdown-container">
        <div class="dropdown-item">
            <div class="dropdown-heading">
                <h5>Skills</h5>
            </div>
            <DropDown maxHeight="350px">
                <table>
                    <tr>
                    <td>Programming Languages</td>
                    <td>JavaScript, TypeScript</td>
                </tr>
                <tr>
                    <td>Frontend technologies</td>
                    <td>Electron.js, Angular 2+, Vue.js, React.js, Babel, Webpack, SCSS/CSS, HTML</td>
                </tr>
                <tr>
                    <td>Backend technologies</td>
                    <td>Node.js, Express.js, Cloud Functions, App Engine, heroku</td>
                </tr>
                <tr>
                    <td>Databases</td>
                    <td>Firebase Database, Firebase Firestore</td>
                </tr>
                <tr>
                    <td>DevOps</td>
                    <td>Travis CI and Appveyor CI</td>
                </tr>
                <tr>
                    <td>Electronics & MCU's</td>
                    <td>Arduino based boards, Node MCU, ESP, Nextion HMI display, OBD-2 (ELM-327)</td>
                </tr>
                <tr>
                    <td>Core Engineering</td>
                    <td>Solidworks, IC Engines, Automobile electronics, Manufacturing processes</td>
                </tr>
                </table>
            </DropDown>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dropdown-container {
    position: relative;
    // display: inline-block;

    .dropdown-item {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .dropdown-heading {
        font-size: 20px;
        height: 50px;
        min-width: 100%;
        border-radius: 5px;
        border: solid 1px var(--text-color);

        h5 {
            padding: 15px;
            margin: 0px;
            color: var(--text-color) !important;

            // text-align: left;
            // margin-left: 20px;
        }
    }
}

table {
    color: var(--text-color);
    box-sizing: border-box;
    text-shadow: none;

    td {
        padding: 5px 15px;
    }

    tr:nth-child(2n) {
        background-color: transparent;
    }
}
</style>
