"use strict";(self["webpackChunkfinal"]=self["webpackChunkfinal"]||[]).push([[810],{810:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var r=t(252),s=t(963),i=t(577);const n={class:"navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom"},o={class:"navbar-nav flex-row overflow-auto navbar-custom-scroll"},l={class:"container mt-md-5 mt-3 mb-7"},c={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3"},d={class:"card border-0 mb-4 position-relative position-relative"},p=(0,r._)("a",{href:"#",class:"text-dark"},[(0,r._)("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),u={class:"card-body p-0"},g={class:"mb-2 mt-3"},v={class:"badge bg-primary ms-2"},h={class:"card-text text-muted mb-0",style:{height:"4.5rem",overflow:"hidden"}},m={key:0,class:"text-muted mt-3"},f={class:"text-muted mt-3"},y=(0,r.uE)('<nav class="d-flex justify-content-center"><ul class="pagination"><li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li><li class="page-item active"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li></ul></nav>',1);function k(e,a,t,k,b,x){const w=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",n,[(0,r._)("div",o,[(0,r._)("a",{class:"nav-item nav-link text-nowrap px-2",href:"#",onClick:a[0]||(a[0]=(0,s.iM)((e=>x.renderProductsByCategory()),["prevent"]))},"全部商品"),(0,r._)("a",{class:"nav-item nav-link text-nowrap px-2",href:"#",onClick:a[1]||(a[1]=(0,s.iM)((e=>x.renderProductsByCategory("沙發")),["prevent"]))},"沙發"),(0,r._)("a",{class:"nav-item nav-link text-nowrap px-2",href:"#",onClick:a[2]||(a[2]=(0,s.iM)((e=>x.renderProductsByCategory("椅子")),["prevent"]))},"椅子"),(0,r._)("a",{class:"nav-item nav-link text-nowrap px-2",href:"#",onClick:a[3]||(a[3]=(0,s.iM)((e=>x.renderProductsByCategory("桌子")),["prevent"]))},"桌子"),(0,r._)("a",{class:"nav-item nav-link text-nowrap px-2",href:"#",onClick:a[4]||(a[4]=(0,s.iM)((e=>x.renderProductsByCategory("電視櫃")),["prevent"]))},"電視櫃")])]),(0,r._)("div",l,[(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.products,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:e.id},[(0,r._)("div",d,[(0,r._)("div",{style:(0,i.j5)([{backgroundImage:`url(${e.imageUrl})`},{height:"300px","background-size":"cover","background-position":"center center"}])},null,4),p,(0,r._)("div",u,[(0,r._)("h4",g,[(0,r.Wm)(w,{to:`/product/${e.id}`,class:"text-dark",style:{"text-decoration":"none"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["to"]),(0,r._)("span",v,(0,i.zw)(e.category),1)]),(0,r._)("p",h,(0,i.zw)(e.description),1),e.origin_price===e.price?((0,r.wg)(),(0,r.iD)("del",m,"NT$ "+(0,i.zw)(e.origin_price),1)):(0,r.kq)("",!0),(0,r._)("p",f,"NT$ "+(0,i.zw)(e.price),1)])])])))),128))]),y])],64)}var b=t(868),x={data(){return{products:[]}},methods:{getProducts(){this.renderProductsByCategory()},renderProductsByCategory(e){let a="https://vue3-course-api.hexschool.io/v2/api/fengchiliu/products/all";e&&(a=`https://vue3-course-api.hexschool.io/v2/api/fengchiliu/products?category=${e}`),this.$http.get(a).then((e=>{this.products=e.data.products}))}},mounted(){this.getProducts(),b.Z.on("render-products-by-category",(()=>{this.renderProductsByCategory()}))}},w=t(744);const _=(0,w.Z)(x,[["render",k]]);var C=_}}]);
//# sourceMappingURL=810.0be30876.js.map