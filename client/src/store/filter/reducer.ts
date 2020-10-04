import { FilterState, GET_FILTERS, FilterActionTypes } from './types';

const initialState: FilterState = {
    filters: []
}

export const filterReducer = (state = initialState, action: FilterActionTypes): FilterState => {
    switch (action.type) {
        case GET_FILTERS:
            return Object.assign({}, state, {
                filters: state.filters
            })
        default:
            return state
    }
}