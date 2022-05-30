<template>
  <!-- 大圖 -->
  <div class="position-relative">
    <!-- 主圖 -->
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: 100%;
        background-image: url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
        background-repeat: no-repeat;
        background-position: center center;
      "
    ></div>
    <!-- 主圖下的灰色塊 -->
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row justify-content-center my-auto">
        <div
          class="col-md-4 text-center"
          style="height: 180px; background-color: black; opacity: 0.35"
        >
          <h1 class="mt-4 mb-4 text-white">家具</h1>
          <p class="text-white fs-4">選得好不如做得好</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 三格式商品 -->
  <div class="container">
    <div class="row mt-5">
      <!-- 商品欄 (1) -->
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <router-link to="../products">
          <img
              src="https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="card-img-top rounded-0"
              style="height: 342px"
              alt="桌椅"
            />
          </router-link>
          <div class="card-body text-center">
            <h4>木質系桌椅</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                具有高質感的木質系列桌子椅子系列，由日本知名設計師設計
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品欄 (2) -->
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <router-link to="../products">
            <img
              src="https://images.unsplash.com/photo-1616627988031-f912e383aebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1007&q=80"
              class="card-img-top rounded-0"
              style="height: 342px"
              alt="沙發"
            />
          </router-link>
          <div class="card-body text-center">
            <h4>沙發系列</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">好坐的沙發讓你腰痠 out</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品欄 (3) -->
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <router-link to="../products">
           <img
              src="https://images.unsplash.com/photo-1616627781431-23b776aad6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1093&q=80"
              class="card-img-top rounded-0"
              style="height: 342px"
              alt="電視櫃"
            />
          </router-link>
          <div class="card-body text-center">
            <h4>電視櫃系列</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">讓你的生活不再單調</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 左右格式商品介紹 -->
  <div class="container my-7">
    <!-- 第一張圖 -->
    <div class="row">
      <!-- 圖片 -->
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <!-- 文字 -->
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">保證</h4>
        <p class="text-muted">
          全商品為台灣製
        </p>
      </div>
    </div>

    <!-- 第二張圖 -->
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4 mb-4">售後服務</h4>
        <ol>
          <li class="mb-4">
            <p class="text-muted">
              於 Mine 家居購買之商品，自收貨日期起享有一年保固服務。保固範圍：木製框架/支撐零件/五金/門片桌板龜裂變形。
            </p>
          </li>
          <li class="mb-4">
            <p class="text-muted">
              人為因素或其他外力、環境破壞而導致商品受損，如板材刮傷撞傷、使用不當掉漆、地震造成損壞、人為踩踏碰撞、過度調節使用、進行過任何自行加工或增加配件等，皆不在保固範圍內。
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>

  <!-- 訂閱資訊 -->
  <div class="bg-light py-4">
    <div class="container">
      <!-- 訂閱文字 -->
      <p class="mb-2 fw-bold fs-2">訂閱我們</p>
      <p class="font-weight-normal text-muted mt-2">
        取得我們第一手的新品資訊、優惠資訊。
      </p>
      <!-- 訂閱送出資訊 -->
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
      >
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="email"
          />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              送出
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  mounted () {
    emitter.emit('render-products-by-category')
  }
}
</script>
