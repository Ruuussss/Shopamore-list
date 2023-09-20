<template>
  <ion-page>
  
    <ion-content :fullscreen="true">
      <ion-header >
        <ion-toolbar>
          <div style="display: flex; flex-direction: row">
          <ion-title> App Name </ion-title>
          <ion-searchbar v-model="searchText"></ion-searchbar>
        </div>
        </ion-toolbar>
      </ion-header>


      <div style="padding: 15px;">
        <div style="font-size: 1.8em; font-weight: bold;"> Products</div>

   
      <ion-grid>
        <ion-row>
          <ion-col size="4" v-for="item in computedData" :key="item.id">
            <div @click="router.push({name:'productPage', params :{id:item.id}})">
              <div>{{ item.title }}</div>

              <img class="image" :src="item.image" />
            </div>
          </ion-col>
        </ion-row>
      </ion-grid> </div>
    
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar
} from "@ionic/vue";
import fetch from "../data/getData";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar
  },

  setup() {
    const router = useRouter()
    const products = ref([]);
    const searchText = ref('')

    onMounted(async () => {
      products.value = await fetch("https://fakestoreapi.com/products/");
    });

    const computedData = computed(()=>{
      if(products.value.data){

        return products.value.data.filter(item=>{
          if(item.title){
            const title = item.title.toLowerCase()
            const search = searchText.value.toLowerCase()

            return title.includes(search)
          }
        })

      }
    })

    return {
      computedData,
      router,
      products,
      searchText
    };
  },
};
</script>

<style >
.image {
  width: 100%;
  height: 250px;
}
</style>
