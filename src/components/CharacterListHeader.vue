<template>
	<div class="d-flex align-items-center justify-content-between gap-3">
		<h4 class="bg-dark text-white p-3 rounded-pill flex-shrink-0 m-0">
			You found {{ this.store.dataInfo.count }} characters
		</h4>

		<CharacterFilter />
	</div>
</template>

<script>
import {store} from '../store.js';

import CharacterFilter from './CharacterFilter.vue';

export default {
	components: {CharacterFilter},

	data() {
		return {
			store,
		};
	},
};
</script>
<style lang="scss"></style>
