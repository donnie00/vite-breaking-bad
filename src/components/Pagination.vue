<template>
	<div class="pages d-flex align-items-center">
		<button @click="prevPageClick" class="btn btn-dark rounded-5 p-2">
			&LeftArrow;
		</button>
		<span class="fw-bold fs-5 px-4"
			>{{ currentPage }} - {{ this.store.dataInfo.pages }}</span
		>
		<button @click="nextPageClick" class="btn btn-dark rounded-5 p-2">
			&RightArrow;
		</button>
	</div>
</template>
<script>
import {store} from '../store.js';

export default {
	props: {
		currentPage: {
			type: Number,
			default: 1,
		},
	},

	data() {
		return {
			store,
		};
	},

	methods: {
		prevPageClick() {
			if (this.currentPage !== 1) {
				this.$emit('changePage', this.currentPage - 1);
			}
		},

		nextPageClick() {
			if (this.currentPage !== this.store.dataInfo.pages) {
				this.$emit('changePage', this.currentPage + 1);
			}
		},
	},
};
</script>
<style lang=""></style>
