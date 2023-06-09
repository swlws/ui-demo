import { createApp, defineCustomElement } from "vue";
import router from "./router/index";
import "./style.css";
import App from "./App.vue";
import HelloWorldVue from "./components/HelloWorld.vue";

customElements.define("hello-world-vue", defineCustomElement(HelloWorldVue));

const app = createApp(App);

app.use(router);
app.mount("#app");
