import * as type from './type';

const initialState = {

	showFunction: false,
	power: 'OFF'
};

const reducer = (currentState = initialState, action) => {

	switch (action.type) {

		case type.MOUNT:
			return {
				...currentState,
				showFunction: true
			}

		case type.UNMOUNT:
			return {
				...currentState,
				showFunction: false
			}

		case type.TURN_ON:
			return {
				...currentState,
				power: 'ON'
			}

		case type.TURN_OFF:
			return {
				...currentState,
				power: 'OFF'
			}

		default: return currentState;
	}
};

export default reducer;
