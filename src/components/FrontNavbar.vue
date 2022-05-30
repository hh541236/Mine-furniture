<template>
  <div class="header-warp bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <router-link
          class="navbar-brand position-absolute"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
          to="/"
          >首頁</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-white custom-header-md-open"
          id="navbarNav"
        >
          <!-- logo -->
          <router-link to="/" class="header-logo active router-link-active">
            Mine
          </router-link>
          <!-- 分頁資訊 -->
          <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end w-100">
            <li class="nav-item">
              <router-link class="nav-link" to="../products">
                產品頁面
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                先去首頁
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="../about">
                關於我們
              </router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <!-- <a href="#"><i class="bi bi-heart-fill"></i></a> -->
          <router-link class="position-relative px-1" to="../cart">
            <i class="bi bi-bag fs-5"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{cartData.carts.length}}
              <span class="visually-hidden">unread messages</span>
            </span>
          </router-link>
          <!-- <a href="#" class="position-relative px-1">
            <i class="bi bi-bag fs-5"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{cartData.carts.length}}
              <span class="visually-hidden">unread messages</span>
            </span>
          </a> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'

export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          console.log('getCart(Front):', res)
          this.cartData = res.data.data
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
.header-logo{
  margin-right: auto;
  font-family: Kaushan Script,cursive;
  font-size: 2.75rem;
  text-decoration:none
}
.nav-item{
    display: block;
    padding: 1rem;
}
.nav-link:hover {
  border-bottom: 1px solid tan;
}
</style>
