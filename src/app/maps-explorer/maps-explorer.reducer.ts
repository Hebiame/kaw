import { Action, createReducer, on } from '@ngrx/store';

export interface MapsExplorerState {
  selectedReferenceField: FilterState,
  selectedMapType: FilterState,
  selectedElectionType: FilterState,
  selectedElectionYear: FilterState,
  list: [],
  selectedMapName: string
}

class FilterState {
  constructor(
    private label: string,
    private enabled: boolean = false,
    private selected: boolean = false,
    private value: string = null
  ) { }
}

export const initialState: MapsExplorerState = {
  selectedReferenceField: new FilterState('Okręg'),
  selectedMapType: new FilterState('Mapa'),
  selectedElectionType: new FilterState('Wybory'),
  selectedElectionYear: new FilterState('Rok'),
  list: [],
  selectedMapName: null
};

const mapsExplorerReducer = createReducer(
  initialState
);

export function reducer(state: MapsExplorerState | undefined, action: Action) {
  return mapsExplorerReducer(state, action);
}

export const mapsExplorerFeatureKey = 'mapsExplorer';
