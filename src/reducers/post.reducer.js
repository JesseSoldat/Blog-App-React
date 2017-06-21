export default function(state = {}, action) {
	switch(action.type) {
		
		default: 
			console.log(action.payload);
			return state;
	}
}