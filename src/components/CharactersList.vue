<template>
	<div>
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h4 class="bg-dark text-white p-3 rounded-pill">
				You found {{ this.dataInfo.count }} characters
			</h4>
			<div class="pages">
				<span>&LeftArrow;</span>
				<span class="fw-bold px-4">1 - {{ this.dataInfo.pages }}</span>
				<span>&RightArrow;</span>
			</div>

			<CharacterFilter />
		</div>
		<div class="card-container">
			<div class="row row-cols-3 row-cols-md-4 g-4">
				<SingleCharacter v-for="char in characterList" :character="char">
				</SingleCharacter>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import {store} from '../store.js';

import CharacterFilter from './CharacterFilter.vue';
import SingleCharacter from './SingleCharacter.vue';

export default {
	components: {SingleCharacter, CharacterFilter},

	data() {
		return {
			characterList: [],
			dataInfo: [],
			store,
		};
	},

	created() {
		this.store.loading = true;

		axios
			.get('https://rickandmortyapi.com/api/character')
			.then((resp) => {
				this.characterList = resp.data.results;
				this.dataInfo = resp.data.info;

				setTimeout(() => {
					this.store.loading = false;
				}, 1000);
			})

			.catch((error) => {
				this.store.loading = false;
				alert('Errore nel caricamento dei dati, ricarica la pagina');
			});
	},
};
</script>
<style></style>
