import mapKeys from 'lodash/mapKeys';
import {FETCH_POSTS} from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return mapKeys(action.payload.data, "id");
		default: 
			return state;
	}
}