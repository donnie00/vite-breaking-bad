<template>
	<div>
		<CharacterListHeader />
		<div class="card-container">
			<div class="row row-cols-3 row-cols-md-4 g-4">
				<SingleCharacter
					v-for="char in store.characterList"
					:character="char">
				</SingleCharacter>
			</div>
		</div>
	</div>
</template>
<script>
import {store, getCharacters} from '../store.js';

import CharacterFilter from './CharacterFilter.vue';
import SingleCharacter from './SingleCharacter.vue';
import CharacterListHeader from './CharacterListHeader.vue';

export default {
	components: {SingleCharacter, CharacterFilter, CharacterListHeader},

	data() {
		return {
			store,
		};
	},

	created() {
		getCharacters();
	},
};
</script>
<style></style>
