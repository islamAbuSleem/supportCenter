<template>
  <div class="app-layout container">
    <header class="header">
      <div class="mt-5 text-center display-5">My Shirt Shop</div>
    </header>
      <navMenu></navMenu>

    <!-- router will be here -->
    <router-view></router-view>
  </div>
</template>
<script>
import navMenu from './components/navMenu'
export default {
  components:{navMenu}
}
</script>
