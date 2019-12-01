import { Action, createReducer, on } from '@ngrx/store';

export interface MapsExplorerState {
  referenceFieldSelect: SelectState,
  mapTypeSelect: SelectState,
  electionTypeSelect: SelectState,
  electionYearSelect: SelectState,
  list: [],
  selectedMapName: string
}

class SelectState {
  constructor(
    private label: string,
    private isEnabled: boolean = false,
    private isValueSelected: boolean = false,
    private value: string = null
  ) { }
}

export const initialState: MapsExplorerState = {
  referenceFieldSelect: new SelectState('Okręg'),
  mapTypeSelect: new SelectState('Mapa'),
  electionTypeSelect: new SelectState('Wybory'),
  electionYearSelect: new SelectState('Rok'),
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
