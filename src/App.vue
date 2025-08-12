
<!-- App.vue -->
<template>
<div class="container">
  <div>{{ msg }}</div>
  <ContactUs name="Sanskar" :phone="123456" :ownerName="sans"
  />
</div>

</template>

<script setup>
import { reactive } from 'vue'
import ButtonCounter from './components/ButtonCounter.vue'
import ContactUs from './components/ContactUs.vue' // if you have this component

const msg = 'hello world' // use ref('hello world') if you plan to change it later
const contactsOwner="sans@gmail.com"
const contacts=reactive([
    {
        name:"asss",
        phone:12332211,
        ownerName:ownerName.value,
        isFavourite:false
    },{
        name:"asddcd",
        phone:1232211,
        ownerName:ownerName.value,
        isFavourite:true

    },{
        name:"ben",
        phone:123221123211,
        ownerName:ownerName.value,
        isFavourite:false

    }
])

</script>

<style>
/* styles */
</style>
