<template>
	<div>
		<CharacterListHeader />
		<div class="d-flex justify-content-center mb-3">
			<Pagination
				:currentPage="store.currentPage"
				@changePage="switchPage"></Pagination>
		</div>

		<div class="card-container mb-3">
			<div class="row row-cols-3 row-cols-md-4 g-4">
				<SingleCharacter
					v-for="(char, i) in store.characterList"
					:key="i"
					:character="char">
				</SingleCharacter>
			</div>
		</div>
		<div class="list-footer d-flex justify-content-center">
			<Pagination @changePage="switchPage"></Pagination>
		</div>
	</div>
</template>
<script>
import {store, getCharacters} from '../store.js';

import CharacterFilter from './CharacterFilter.vue';
import SingleCharacter from './SingleCharacter.vue';
import CharacterListHeader from './CharacterListHeader.vue';
import Pagination from './Pagination.vue';

export default {
	components: {
		SingleCharacter,
		CharacterFilter,
		CharacterListHeader,
		Pagination,
	},

	data() {
		return {
			store,
		};
	},

	methods: {
		switchPage(pageNumber) {
			this.store.currentPage = pageNumber;
			getCharacters();
		},
	},

	created() {
		getCharacters();
	},
};
</script>
<style></style>
