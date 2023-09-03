<template>
    <nav class="nav-wrapper">
        <ul class="left-side">
            <li v-for="page in pages" class="nav-link-wrapper">
                <RouterLink 
                    :to="page.url"
                    :title="`Link fører til the ${page.name} page`"
                >{{ page.name }}</RouterLink>
            </li>
        </ul>
        <div class="right-side">
            <div class="brand">
                <div>Logo</div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: [],

    data() {
        return {
            pages: [
                { name: 'Home', url: '/' },
                { name: 'Create Artist', url: '/create-artist' }
            ],
        }
    },
}
</script>

<style scoped>
.nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 45px;
    background-color: white;
}

.nav-wrapper > .left-side > li {
    list-style-type: none;
    margin-right: 22px;
    font-size: 1.3rem;
}

.left-side {
    display: flex;
    margin-bottom: 0px;
}

.right-side {
    padding-right: 32px;
}

.brand {
    font-size: 1.3rem;
}

.nav-link-wrapper {
    height: 31px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;
}

.nav-link-wrapper a {
    color: lightgray;
    text-decoration: none;
    transition: color 0.5s;
    font-family: 'Zen Dots', cursive;
}

.nav-link-wrapper:hover {
    border-bottom: 1px solid black;
}

.nav-link-wrapper a:hover {
    color: black;
}
</style>