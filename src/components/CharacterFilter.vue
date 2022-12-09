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
				<option value="all">Status</option>
				<option value="alive">Alive</option>
				<option value="dead">Dead</option>
				<option value="unknow">Unknown</option>
			</select>
			<select
				v-model="filters.species"
				class="form-select text-bg-dark border-dark"
				aria-label="Default select example">
				<option selected value="all">Species</option>
				<option value="human">Human</option>
				<option value="alien">Alien</option>
				<option value="others">Others</option>
			</select>
			<select
				v-model="filters.gender"
				class="form-select text-bg-dark border-dark"
				aria-label="Default select example">
				<option selected value="all" disabled>Gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="genderless">Genderless</option>
				<option value="unknown">Unknown</option>
			</select>
			<button class="btn btn-warning">Reset</button>
			<button class="btn btn-success">Search</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			filters: {
				name: '',
				status: '',
				species: '',
				gender: '',
			},
		};
	},
};
</script>
<style lang="scss"></style>
