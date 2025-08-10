

<template>
<button @click="count++">Clicked {{ count }} times</button>



</template>

<script setup>
import { ref } from 'vue'
const count=ref(0)

</script>


<!-- 
<script setup>
import { ref } from 'vue'
const count=ref(0)

</script> -->

<!-- equivalent to ::
<script>
import { ref } from 'vue'

export default {
    setup(){
        const email=ref("hello.netmastery")

        return {email}

    }
}
</script> -->
