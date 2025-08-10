
<!-- App.vue -->
<template>
  <div>{{ msg }}</div>
  <ContactUs />
  <ButtonCounter />
    <ButtonCounter />

</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
import ContactUs from './components/ContactUs.vue' // if you have this component

const msg = 'hello world' // use ref('hello world') if you plan to change it later
</script>

<style>
/* styles */
</style>
