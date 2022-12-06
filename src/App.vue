<script>
import 'bootstrap/scss/bootstrap.scss';
import {store} from './store';

import TheHeader from './components/TheHeader.vue';
import CharacterFilter from './components/CharacterFilter.vue';
import TheMain from './components/TheMain.vue';
import TheLoader from './components/TheLoader.vue';

export default {
	components: {TheHeader, TheMain, CharacterFilter, TheLoader},

	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<div class="bg-dark">
		<TheHeader />
		<div class="container">
			<TheLoader v-if="store.loading"></TheLoader>
			<TheMain />
		</div>
	</div>
</template>

<style lang="scss"></style>
