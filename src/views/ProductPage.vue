<template>

<ion-page>

    <ion-content>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
                <ion-title v-if="product">{{product.data.title}}</ion-title>
            </ion-toolbar>


        </ion-header>

        <div v-if="product" >
        
            
            <img style="width: 100%; height: 300px; object-position: center; object-fit: scale-down;"  :src="product.data.image"/>
            <div><span style="padding-right: 5px; font-weight: bold;">Name</span>{{ product.data.title }}</div>
            <div><span style="padding-right: 5px; font-weight: bold;">Price</span>{{ product.data.price }}</div>
            <div><span style="padding-right: 5px; font-weight: bold;">Category</span>{{ product.data.category }}</div>
            <div><span style="padding-right: 5px; font-weight: bold;">Description</span>{{ product.data.description }}</div>
            <div><span style="padding-right: 5px; font-weight: bold;">Rating</span>{{ product.data.rating.rate }} <span style="padding-inline: 3px;">from</span>{{ product.data.rating.count }}<span style="padding-inline: 3px;">reviews</span></div>
            <div><span style="padding-right: 5px; font-weight: bold;">Description</span>{{ product.data.description }}</div>
        </div>




        
       

    </ion-content>


</ion-page>
</template>

<script>
import { useRoute } from "vue-router";
import fetch from '../data/getData'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonGrid,IonRow,IonCol,IonBackButton,IonButtons } from '@ionic/vue';
import { onMounted, ref } from 'vue';


    export default {
        components:{IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonGrid,IonRow,IonCol,IonBackButton,IonButtons},
        setup(){
            const router = useRoute()
            const id = router.params.id

            const product = ref(null)

            onMounted(async()=>{
                product.value = await fetch(`https://fakestoreapi.com/products/${id}`)
            })
            

            return {
                product
            }



        }
    }

</script>

<style>

</style>