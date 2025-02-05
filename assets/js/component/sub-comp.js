// sub page layout component
import linkSetData from "/assets/data/gnb-data.js";
import store from "/assets/js/vuex_store_store.js";
export const subTop = {
  template: `
      <div class="sub-top">
        <div class="inner">
          <ul class="category-tab" v-for="(item, key) in linkSetData" :key="key">
            <h3 class="sub-title">{{key}}</h3>
            <li class="tab" 
                v-for="(subItem, subKey) in item.menu" :key="subKey"
                
                @click="getCatName(subKey)"
                :class="{on: $store.state.catName === subKey}" 
                >
                <router-link :to="'/' + subItem.name + '/' + subItem.params.cls">{{subKey}}</router-link>
            </li> 
          </ul>
        </div>
      </div>
    `,
data(){
  return {
    linkSetData,
  };
},
  methods: {
    getCatName(pm) {
      console.log("선택한 카테고리:", pm);
      store.commit("setListData", pm);
    },
  },
  created() {},
  mounted() {
    $('.category-tab').each((i,x)=>{
      console.log(i,x)
      if($(x).find('.on')) $(x).children('.on').parents().hide();
    });
  },
};

export const SubLayout = {
  props: ["showSubTop"],
  template: `
        <div class="sub-container" id="main">
            <sub-top-comp v-if="showSubTop"></sub-top-comp>
            <router-view></router-view>
        </div>
        
    `,
  components: {
    "sub-top-comp": subTop, // 상단 컴포넌트
  },
};

export const Community = {
  template: `
    <div class="content type2">
      <router-view></router-view>
    </div>
  `,
};
