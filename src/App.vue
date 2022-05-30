<template class="d-flex">
  <Navbar></Navbar>
  <router-view/>
  <!-- 頁尾 -->
  <div class="bg-dark align-items-end">
    <div class="container">
      <div
        class="d-flex align-items-end justify-content-between text-white py-4"
      >
        <p class="mb-0">© 2022 Mine furniture by Liu.</p>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/FrontNavbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./src/assets/stylesheets/all"
</style>
