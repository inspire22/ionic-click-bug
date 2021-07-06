<template>
	<ion-app>
		<ion-split-pane content-id="main">
			<ion-menu side="start" menu-id="first">
				<ion-content>
					<ion-list><ion-item>Hello</ion-item><ion-item>World</ion-item></ion-list></ion-content
				></ion-menu
			>

			<ion-router-outlet id="main" />
		</ion-split-pane>
	</ion-app>
</template>

<script lang="ts">
import {IonRouterOutlet} from "@ionic/vue";
import {defineComponent} from "vue";

export default defineComponent({
	name: "App",
	components: {
		IonRouterOutlet,
	},
});
</script>
