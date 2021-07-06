import {createRouter, createWebHistory} from "@ionic/vue-router";
import Home from "../views/Home.vue";
import Second from "../views/Second.vue";

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
		props: true,
	},
	{
		path: "/second",
		name: "Second",
		component: Second,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
