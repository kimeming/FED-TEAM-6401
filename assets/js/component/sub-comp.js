// sub page layout component
export const subTop = {
    template: `
        <div class="sub-top">
            <div class="inner">
                <h3 class="sub-title">서브 타이틀</h3>
                <ul class="category-tab">
                    <li class="on"><a href="#">서브 카테고리 1</a></li>
                    <li><a href="#">서브 카테고리 2</a></li>
                    <li><a href="#">서브 카테고리 3</a></li>
                </ul>
            </div>
        </div>
    `,
}

export const SubContainer = {
    template: `
        <!-- sub-container s -->
        <div class="sub-container" id="main">
            <!-- sub-top s -->
            <sub-top-comp></sub-top-comp>
            <!-- sub-top e -->
            <!-- contents s -->
            <div class="contents">
                <!-- 여기부터 컨텐츠 추가 -->
            </div>
            <!-- contents e -->
        </div>
        <!-- sub-container e -->
    `,
    components: {
        "sub-top-comp": subTop,
    },
}