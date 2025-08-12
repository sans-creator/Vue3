<template>
    <div class="bg-info rounded p-4 m-2">
        <h3>Name:{{ name }}
        </h3>
        <p> email  {{ email }}</p>
        <p>Phone Number:{{ phone }}</p>
        <p class="float-end small" v-if="ownerName!=''">
            this conatct belong to {{ ownerName  }}
        </p>
    </div>
</template>

<!-- we can bind props with local vaibale and propeties -->

<script setup>
import { ref,defineProps } from 'vue'


        const email=ref("sanskarj163.") //local variable of email(more prefrence)
        const props=defineProps({
            name:{
                type:String,
                required:true
            },
            phone:Number,
            ownerName:String
        })

</script>