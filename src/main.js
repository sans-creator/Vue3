import { createApp } from "vue";
import App from "./App.vue";
import ContactUs from "./components/ContactUs.vue";
import ButtonCounter from './components/ButtonCounter.vue'

//global component
const app=createApp(App)
// app.component("contact-us",ContactUs)
// app.component("increment",ButtonCounter)

app.mount("#app")