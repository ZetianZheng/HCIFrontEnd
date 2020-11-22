<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">Focus list</a>
        <ul class="navbar-nav">
            <li>
                <router-link :to="{name: 'homeLink'}" class="nav-link">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'focusLink'}" class="nav-link">Focus</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li>
                <router-link :to="{name: 'loginLink'}" class="nav-link">Log in</router-link>
            </li>
            <li>
                <router-link :to="{name: 'registerLink'}" class="nav-link">Register</router-link>
<!--                <router-link :to="{name: 'registerLink'}" class="nav-link">Register</router-link>-->
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "appHeader",
        data() {
            return{

            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
    nav {
        background: linear-gradient(#ccccd6, #93b5cf);
        padding: 0 120px;
    }

</style>