<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>Home</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Home</ion-title>
				</ion-toolbar>
			</ion-header>

			<div id="container">
				<ion-button v-on:click.native="$router.push({name: 'Second', params: {a: {b: 'c'}}})"
					>Go to second with params</ion-button
				>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from "@ionic/vue";
// import Second from "./Second.vue";
// import {defineComponent} from "vue";

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
	name: "Home",
	components: fixCompMode({
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonButton,
	}),
	methods: {
		test() {
			window.alert("in test");
		},
	},
	data() {
		return {
			open: false,
			customPopoverOptions: {
				header: "Hair Color",
				subHeader: "Select your hair color",
				message: "Only select your dominant hair color",
			},
		};
	},
};
</script>

<style scoped>
#container {
	text-align: center;

	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;

	color: #8c8c8c;

	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>
