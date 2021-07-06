import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import {IonicVue} from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const app = createApp(App)
	.use(IonicVue)
	.use(router);

import * as IonComponents from "@ionic/vue";

Object.keys(IonComponents).forEach((key) => {
	if (/^Ion[A-Z]\w+$/.test(key)) {
		// disable 3.1 compatibility for ionic
		IonComponents[key].compatConfig = {MODE: 3};
		app.component(key, IonComponents[key]);
	}
	// can't get popovers to work, but other ones do OK?
	if (/^\w+Controller$/.test(key)) {
		IonComponents[key].compatConfig = {MODE: 3};
	}
});

router.isReady().then(() => {
	app.mount("#app");
});
