
import * as types from '../constants/ActionTypes';

const FetchData = (state = [], action) => {
    switch (action.type) {
        case types.Fetch_Data:
            action.data.forEach(e => {
                e.key = e.id
            });
            return action.data
        default:
            return state
    }
}
export default FetchData