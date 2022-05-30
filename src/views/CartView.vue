<template>
  <div class="container my-5 my-lg-6">
    <div class="row row-cols-1 row-cols-lg-4 g-3 align-items-center">
      <div
        class="col d-none d-lg-block bg-dark text-light border border-2 border-white"
      >
        <p class="mb-0 px-3 py-4 h5">購物車結帳流程</p>
      </div>
      <div class="col d-none d-lg-block bg-dark text-light border border-2 border-white">
        <p class="mb-0 px-3 py-4 h5">1. 放入購物車</p>
      </div>
      <div class="col d-none d-lg-block bg-light border border-2 border-white">
        <p class="mb-0 px-3 py-4 h5">2. 資料確認</p>
      </div>
      <div class="col  d-none d-lg-block bg-light border border-2 border-white">
        <p class="mb-0 px-3 py-4 h5">3. 完成購物</p>
      </div>
    </div>
  </div>

  <div class="container" v-if="this.cartData.carts.length">
    <h2>選購的商品</h2>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>單一價格</th>
          <th>數量</th>
          <th>單品總價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cartData.carts" :key="product.id">
          <td style="width: 200px">
            <div
              :style="{
                backgroundImage: `url(${product.product.imageUrl})`,
              }"
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
            ></div>
          </td>
          <td>
            {{ product.product.title }}
          </td>
          <td>
            <div class="h5" v-if="product.product.price === product.product.origin_price">
              現在只要 {{ product.product.price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ product.product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.product.price }} 元</div>
            </div>
          </td>
          <td>
            <select
              class="form-select"
              v-model="product.qty"
              @change="updateCartItem(product)"
              :disabled="isLoadingItem === product.id"
            >
              <option
                :value="num"
                v-for="num in 10"
                :key="`${num} + ${product.id}`"
              >
                {{ num}}
              </option>
            </select>
          </td>
          <td>
            $ {{product.total}}
          </td>
          <td>
            <button
                type="button"
                class="btn btn-outline-danger"
                @click="delToCart(product.id)"
                :disabled="isLoadingItem === product.id"
              >
                <!-- 加入 BS 讀取效果、加入判斷條件 -->
                <span
                  class="spinner-border spinner-border-sm"
                  v-show="isLoadingItem === product.id"
                ></span>
                刪除品項
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- footer -->
    <div class="row mb-3">
      <div class="col-md-12 text-end">
        <p>
          應付金額
          <span class="h4 fw-bold text-danger"> NT$ {{ cartData.total }}</span>
        </p>
      </div>
      <div class="col-12">
        <div class="row justify-content-end">
          <div class="col-lg-3 mb-3">
            <button
              class="btn btn-outline-dark w-100"
              @click="goProductsPage"
              type="button"
            >
              繼續購物
            </button>
          </div>
          <div class="col-lg-3">
            <button
              class="btn btn-primary w-100"
              type="button"
              @click="goOrderPage"
              :disabled="cartData.total === 0"
            >
              確認訂單，結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-else>
    <h1>目前沒有選購任何商品</h1>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      isLoadingItem: ''
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          console.log('getCart(CartView):', res)
          this.cartData = res.data.data
        })
    },
    delToCart (id) {
      this.isLoadingItem = id
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`).then((res) => {
        this.isLoadingItem = ''
        emitter.emit('get-cart')
        this.getCart()
      })
    },
    updateCartItem (item) { // 更新單一商品數量
      const data = { // 建構資料格式(在api文獻中)
        product_id: item.id,
        qty: item.qty
      }
      this.isLoadingItem = item.id
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data }).then((res) => {
        console.log('updateCartItem:', res)
        this.getCart() // 當我加入購物車後再重新取得購物車的內容
        this.isLoadingItem = ''// 清空重置
      })
    },
    goOrderPage () {
      this.$router.push('/order')
    },
    goProductsPage () {
      this.$router.push('/products')
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
