import * as types from '../constants/ActionTypes';

export const fetchData = (data) => {
    return {
        type: types.Fetch_Data,
        data: data
    }
}