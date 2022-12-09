<template>
	<div class="mb-3 flex-grow-1">
		<input
			v-model="filters.name"
			type="text"
			class="form-control mb-1 text-bg-dark border-dark" />
		<div class="input-group">
			<select
				v-model="filters.status"
				class="form-select text-bg-dark border-dark"
				aria-label="Default select example ">
				<option value="">Status</option>
				<option value="alive">Alive</option>
				<option value="dead">Dead</option>
				<option value="unknow">Unknown</option>
			</select>
			<select
				v-model="filters.species"
				class="form-select text-bg-dark border-dark"
				aria-label="Default select example">
				<option value="">Species</option>
				<option value="human">Human</option>
				<option value="alien">Alien</option>
				<option value="others">Others</option>
			</select>
			<select
				v-model="filters.gender"
				class="form-select text-bg-dark border-dark"
				aria-label="Default select example">
				<option value="">Gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="genderless">Genderless</option>
				<option value="unknown">Unknown</option>
			</select>
			<button class="btn btn-warning" @click="resetFilters">Reset</button>
			<button class="btn btn-success" @click="setFilters">Search</button>
		</div>
	</div>
</template>
<script>
import {store, getCharacters} from '../store.js';

export default {
	data() {
		return {
			store,
			filters: {
				name: '',
				status: '',
				species: '',
				gender: '',
			},
		};
	},

	methods: {
		resetFilters() {
			Object.keys(this.filters).forEach((prop) => {
				this.filters[prop] = '';
			});
		},

		setFilters() {
			this.store.filters = {...this.filters};
			getCharacters();
		},
	},
};
</script>
<style lang="scss"></style>
