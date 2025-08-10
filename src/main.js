import { createApp,ref } from "vue";
import App from "./App.vue";
import ContactUs from "./components/ContactUs.vue";
import ButtonCounter from './components/ButtonCounter.vue'

//global import
const app=createApp(App)
app.component("contact-us",ContactUs)
app.component("increment",ButtonCounter)

app.mount("#app")