<template>
    <div>
        <h1>Contact Us
        </h1>
        <p>Please send an email to {{ email }}</p>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        const email=ref("hello.netmastery")

        return {email}

    }
}
</script>