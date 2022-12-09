<template>
	<div class="pages d-flex align-items-center">
		<button @click="prevPageClick" class="btn btn-dark rounded-5 p-2">
			&LeftArrow;
		</button>
		<span class="fw-bold fs-5 px-4">1 - {{ this.store.dataInfo.pages }}</span>
		<button @click="nextPageClick" class="btn btn-dark rounded-5 p-2">
			&RightArrow;
		</button>
	</div>
</template>
<script>
import {store} from '../store.js';

export default {
	data() {
		return {
			store,
		};
	},

	methods: {
		prevPageClick() {
			if (this.store.currentPage !== 1) {
				this.$emit('changePage', this.store.currentPage - 1);
			}
		},

		nextPageClick() {
			if (this.store.currentPage !== this.store.dataInfo.pages) {
				this.$emit('changePage', this.store.currentPage + 1);
			}
		},
	},
};
</script>
<style lang=""></style>
