import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
	loading: false,
	currentPage: 1,
	characterList: [],
	dataInfo: [],
	filters: {},
});

export function getCharacters() {
	store.loading = true;

	axios
		.get('https://rickandmortyapi.com/api/character', {
			params: {
				page: store.currentPage,
				...store.filters,
			},
		})

		.then((resp) => {
			store.characterList = resp.data.results;
			store.dataInfo = resp.data.info;

			store.loading = false;
		})

		.catch((error) => {
			store.loading = false;
			alert('Errore nel caricamento dei dati, ricarica la pagina');
		});
}
