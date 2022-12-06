<template>
	<h3 class="bg-dark text-white">You found x characters</h3>
	<div class="card-container">
		<div class="row row-cols-3 row-cols-md-4 g-4">
			<SingleCharacter v-for="char in characterList" :character="char">
			</SingleCharacter>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

import SingleCharacter from './SingleCharacter.vue';

export default {
	components: {SingleCharacter},

	data() {
		return {
			characterList: [],
		};
	},

	created() {
		axios.get('https://thronesapi.com/api/v2/Characters').then((resp) => {
			console.log(resp);
			this.characterList = resp.data;
		});
	},
};
</script>
<style></style>
