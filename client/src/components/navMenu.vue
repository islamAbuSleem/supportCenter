<template>
    <nav class="menu mt-5 text-center">
        <router-link :to="{name:'Home'}" class="link me-3" exact>Home</router-link>
        <router-link :to="{name:'faq'}" class="link me-3">FAQ</router-link>
    </nav>
</template>


<style lang="scss" scoped>
    .menu{
        .link{
            font-size: 1.3rem;
            text-decoration: none;
            &.router-link-active{
                color: rgb(255, 95, 95);
            }
        }
    }
</style>