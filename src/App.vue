<script>
import 'bootstrap/scss/bootstrap.scss';

import TheHeader from './components/TheHeader.vue';
import CharacterFilter from './components/CharacterFilter.vue';
import TheMain from './components/TheMain.vue';

export default {
	components: {TheHeader, TheMain, CharacterFilter},

	data() {
		return {};
	},
};
</script>

<template>
	<div class="bg-dark">
		<TheHeader />
		<div class="container">
			<CharacterFilter />
			<TheMain />
		</div>
	</div>
</template>

<style lang="scss"></style>
