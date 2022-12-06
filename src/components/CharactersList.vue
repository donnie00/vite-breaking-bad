<template>
	<div class="d-flex justify-content-between align-items-center mb-3">
		<h3 class="bg-dark text-white p-3 rounded-pill">
			You found {{ this.itemsCount }} characters
		</h3>
		<CharacterFilter />
	</div>
	<div class="card-container">
		<div class="row row-cols-3 row-cols-md-4 g-4">
			<SingleCharacter v-for="char in characterList" :character="char">
			</SingleCharacter>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import CharacterFilter from './CharacterFilter.vue';

import SingleCharacter from './SingleCharacter.vue';

export default {
	components: {SingleCharacter, CharacterFilter},

	data() {
		return {
			characterList: [],
			itemsCount: -1,
		};
	},

	created() {
		axios.get('https://rickandmortyapi.com/api/character').then((resp) => {
			console.log(resp.data.info);

			this.characterList = resp.data.results;
			this.itemsCount = resp.data.info.count;
		});
	},
};
</script>
<style></style>
