
<!-- app component is compirsed of : template(html)+script(js)+style(css) -->



<template>
    <div>{{ msg }}</div>
    <contact-us></contact-us>
    <increment></increment>
</template>


<script>

//use setup in every vue file
export default {
    setup(){
        const msg="hello world"
        return {msg}
    }
}
    
  




</script>

<style>
</style>