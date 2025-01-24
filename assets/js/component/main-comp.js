// main component
import productList from '/assets/data/product-list.js'

const bestProducts = productList.sort((a, b) => b.pSellin - a.pSellin).slice(0, 5);

export const Main = {
    data(){
        return {
            bestProducts: [],
        }
    },
    mounted(){
        this.bestProducts = bestProducts;

        const bestSlide = new Swiper(".best-slide", {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            breakpoints: {
                360: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    centeredSlides: false,
                },
            },
        });
    },
    template: `
    <main class="main-container" id="main">
            <!-- section visual s -->
            <section class="section visual">
                <h2 class="blind">메인 비주얼 영역</h2>
                <div class="video-wrap">
                    <video muted="muted" playsinline="" preload="auto" src="/assets/img/main/video-main.mp4" poster="/assets/img/main/img-main-video-cover.png" class="web"></video>
                    <video muted="muted" playsinline="" preload="auto" autoplay="true"  src="/assets/img/main/video-main-visual-mob.mp4" poster="/assets/img/main/img-main-video-cover.png" class="mob"></video>
                </div>
            </section>
            <!-- section visual e -->
            <!-- section best s -->
            <section class="section best">
                <div class="inner">
                    <h2 class="blind">베스트셀러 영역</h2>
                    <h3 class="section-tit">Bestseller</h3>
                    <div class="swiper best-slide">
                        <ul class="product-list swiper-wrapper"> 
                            <li v-for="product in bestProducts" :key="product.idx" class="swiper-slide">
                                <a :href="product.link" class="item">
                                <div class="img-box">
                                    <img :src="product.pImage" alt="product.pTitle">
                                </div>
                                <div class="info-box">
                                    <p class="name">{{ product.pTitle }}</p>
                                    <span class="fragrance">{{ product.pNote }}</span>
                                    <strong class="price">{{ product.pPrice }}</strong>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- section best e -->
            <!-- section new s -->
            <section class="section new">
                <div class="inner">
                    <h2 class="blind">신상품 영역</h2>
                    <div class="new-product-wrap">
                        <h3 class="section-tit">Evening Glow</h3>
                        <div class="intro-box">
                            <span>Rose Tinted by Sunset | Raspberry | Musk</span>
                            <p>
                                A rose is a rose is a rose.<br>
                                In every moment, a rose perfectly embodies its essence as a rose. From the initial sprout of a seed to its vibrant bloom, it constantly evolves yet always retains the refined beauty of a rose. As the sunset paints the rose in raspberry-red hues and layers of bright light from fresh dill and zesty lemon peel cascade, earthy patchouli and cypriol add a grounding depth, like sturdy and elegant thorns guarding its delicate petals, revealing yet another perfect rose.
                            </p>
                        </div>
                        <a href="#" class="link-btn">Go To Shop <span class="icon star"></span></a>
                    </div>
                </div>
            </section>
            <!-- section new e -->
            <!-- section store s -->
            <section class="section store">
                <div class="inner">
                    <h2 class="blind">매장소개 영역</h2>
                    <div class="store-wrap">
                        <div class="store-slide-wrap">
                            <div class="store-slide swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="/assets/img/store/img-store-hannam01.jpg" alt="플래그십 스토어 한남">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/assets/img/store/img-store-sungsu01.jpg" alt="플래그십 스토어 성수">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/assets/img/store/img-store-samchung01.jpg" alt="플래그십 스토어 삼청">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/assets/img/store/img-store-dosan01.jpg" alt="하우스 도산">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/assets/img/store/img-store-sinsa01.jpg" alt="플래그십 스토어 신사">
                                    </div>
                                </div>
                                <div class="swiper-scrollbar"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                            <p class="store-name">플래그십 스토어 한남</p>
                        </div>
                        <div class="store-info">
                            <h3 class="section-tit">스토어 로케이터</h3>
                            <p>지금 바로 가까운 매장에서 탬버린즈의 다양한 제품들을 체험해 보세요.</p>
                            <a href="#" class="link-btn">Find Store <span class="icon arrow"></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- section store e -->
        </main>
    `
}