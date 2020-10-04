export interface FilterState {
    filters: Array<number>;
}

export const GET_FILTERS = 'GET_FILTERS';

interface GetFiltersAction {
  type: typeof GET_FILTERS;
}

export type FilterActionTypes = GetFiltersAction;