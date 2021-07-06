<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>Blank</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Second</ion-title>
				</ion-toolbar>
			</ion-header>

			<div id="container">
				<ion-button v-on:click.native="$router.push({name: 'Home', params: {a: {b: 'c'}}})">Go to home</ion-button>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from "@ionic/vue";
// import {defineComponent} from "vue";
// import Home from "./Home.vue";

// you would of course import this from a module in each of your components
function fixCompMode(components) {
	// return components;
	Object.entries(components).map(([name, component]) => {
		if (!component.compatConfig && name.startsWith("Ion")) {
			component.compatConfig = {MODE: 3};
		}
	});
}
//defineComponent(
export default {
	name: "Second",
	components: fixCompMode({
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonButton,
	}),
	props: {
		a: Object,
	},
	mounted() {
		console.log("param a", this.a);
	},
	methods: {
		test() {
			window.alert("in test");
		},
	},
};
</script>
