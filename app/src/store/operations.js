import {
	dataRequestErrorAction,
	dataRequestSuccessAction,
	requestDataAction,
	setLoadingDataAction,
	updateDataAction
} from './actions';


export const getUsers = () => (dispatch) => {
	dispatch(requestDataAction());
	fetch("https://venbest-test.herokuapp.com")
		.then(resp => {
			if (resp.ok) {
				dispatch(dataRequestSuccessAction())
				resp.json()
					.then(resp => {
						dispatch(updateDataAction(normalizeData(resp)))
						dispatch(setLoadingDataAction(false))
					})
			} else {
				dispatch(dataRequestErrorAction())
			}
		})
}

const normalizeData = (data) => {
	let id = 1;
	return data.map(el => {
		el.id = id++;
		return el;
	})
}

