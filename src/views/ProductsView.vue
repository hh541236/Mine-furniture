<template>
  <nav
    class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom"
  >
    <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
      <a class="nav-item nav-link text-nowrap px-2" href="#" @click.prevent="renderProductsByCategory()">全部商品</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#" @click.prevent="renderProductsByCategory('沙發')">沙發</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#" @click.prevent="renderProductsByCategory('椅子')">椅子</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#" @click.prevent="renderProductsByCategory('桌子')">桌子</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#" @click.prevent="renderProductsByCategory('電視櫃')">電視櫃</a>
    </div>
  </nav>

  <div class="container mt-md-5 mt-3 mb-7">
    <!-- 行動版, 桌面板 (lg 最大格數 3)-->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <!-- <img
            :src="product.imageUrl"
            class="card-img-top rounded-0"
          /> -->
          <!-- 圖片等高 -->
          <div :style="{
            backgroundImage:`url(${product.imageUrl})`}"
            style= "height: 300px;
              background-size: cover;
              background-position:center center"
          ></div>
          <a href="#" class="text-dark">
            <i
              class="far fa-heart position-absolute"
              style="right: 16px; top: 16px"
            ></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-2 mt-3">
              <router-link :to="`/product/${product.id}`"
              class="text-dark"
              style="text-decoration:none"
              >{{product.title}}</router-link>
              <span class="badge bg-primary ms-2">{{ product.category }}</span>
            </h4>
            <p class="card-text text-muted mb-0"
              style="height: 4.5rem;
              overflow: hidden;"
            >{{product.description}}</p>
            <del class="text-muted mt-3" v-if="product.origin_price===product.price">NT$ {{product.origin_price}}</del>
            <p class="text-muted mt-3">NT$ {{product.price}}</p>
          </div>
        </div>
      </div>

    </div>
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.renderProductsByCategory()
    },
    renderProductsByCategory (category) {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
      if (category) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?category=${category}`
      }
      this.$http.get(url).then((res) => {
        this.products = res.data.products
      })
    }
  },
  mounted () {
    this.getProducts()
    emitter.on('render-products-by-category', () => {
      this.renderProductsByCategory()
    })
  }
}
</script>
