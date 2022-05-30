<template>
  <div class="container my-5 my-lg-6">
    <div class="row row-cols-1 row-cols-lg-4 g-3 align-items-center">
      <div
        class="col d-none d-lg-block bg-dark text-light border border-2 border-white"
      >
        <p class="mb-0 px-3 py-4 h5">購物車結帳流程</p>
      </div>
      <div class="col d-none d-lg-block bg-light border border-2 border-white">
        <p class="mb-0 px-3 py-4 h5">1. 放入購物車</p>
      </div>
      <div class="col bg-dark text-light border border-2 border-white">
        <p class="mb-0 px-3 py-4 h5">2. 資料確認</p>
      </div>
      <div class="col d-none d-lg-block bg-light border border-2 border-white">
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
            {{ product.qty }}
          </td>
          <td>
            $ {{product.total}}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- footer -->
    <div class="row mb-3">
      <div class="col-md-12 text-end">
        <p>
          應付金額
          <span class="h4 fw-bold text-danger ms-1 ms-lg-2">
            NT$ {{ Math.round(cartData.total) }}
         </span>
        </p>
      </div>
    </div>
  </div>

  <v-form v-slot="{ errors }" ref="form" @submit="onSubmit" class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="h4 text-center fw-bold mb-3">訂單資訊</h1>
        <div class="mb-3">
          <label for="email" class="form-label">收件人信箱</label>
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="max:12||required"
            v-model="form.user.name"
          ></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人手機號碼</label>
          <v-field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            v-model="form.user.tel"
            :rules="isFormPhone"
          ></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
      </div>
      <div class="col-lg-8 text-end my-3 my-lg-4">
        <div class="row">
          <div class="col-lg-6 mb-3 my-lg-0">
            <button
              class="btn btn-outline-dark w-100"
              @click="goBackPage"
              type="button"
            >
              回上一頁
            </button>
          </div>
          <div class="col-lg-6 my-1 my-lg-0">
            <button
              class="btn btn-primary w-100"
              :disabled="Object.keys(errors).length > 0 || cartData.total === 0"
              type="submit"
            >
              送出訂單
            </button>
          </div>
        </div>
      </div>
  </v-form>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      // 購物車列表
      cartData: {
        carts: []
      },
      isLoadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          this.cartData = res.data.data
          emitter.emit('get-cart')
          this.isLoading = false
        })
    },
    goBackPage () {
      this.$router.go(-1)
    },
    isFormPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    onSubmit () {
      const order = this.form
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`,
          { data: order }
        )
        .then((res) => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.getCart()
          this.$router.push('/result')
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
