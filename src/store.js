import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
	loading: false,
	characterList: [],
	dataInfo: [],
});

export function getCharacters() {
	store.loading = true;

	axios
		.get('https://rickandmortyapi.com/api/character')
		.then((resp) => {
			store.characterList = resp.data.results;
			store.dataInfo = resp.data.info;

			setTimeout(() => {
				store.loading = false;
			}, 1000);
		})

		.catch((error) => {
			store.loading = false;
			alert('Errore nel caricamento dei dati, ricarica la pagina');
		});
}
