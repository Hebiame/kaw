import { Action, createReducer, on } from '@ngrx/store';
import * as mapsExplorerActions from './maps-explorer.actions';
import { ReferenceField } from "../shared/models/reference-field.model";
import { MapData } from "../shared/models/map-data.model";

export interface MapsExplorerState {
  filtersData: ReferenceField[],
  referenceFieldSelect: SelectState,
  mapTypesSelect: SelectState,
  electionTypesSelect: SelectState,
  yearsSelect: SelectState,
  mapData: MapData[],
  selectedMapNameMd: string,
  selectedMapNameLg: string
}

export class SelectState {
  constructor(
    public label: string = '',
    public isEnabled: boolean = false,
    public options: string[] = [],
    public value: number = null
  ) { }
}

export const initialState: MapsExplorerState = {
  filtersData: [],
  referenceFieldSelect: new SelectState('Okręg', true),
  mapTypesSelect: new SelectState('Mapa'),
  electionTypesSelect: new SelectState('Wybory'),
  yearsSelect: new SelectState('Rok'),
  mapData: [],
  selectedMapNameMd: null,
  selectedMapNameLg: null
};

const mapsExplorerReducer = createReducer(
  initialState,
  on(mapsExplorerActions.getFiltersDataSuccess, (state, { filtersData }) => ({
    ...state,
    filtersData: filtersData
  })),
  on(mapsExplorerActions.setReferenceFieldSelectOptions, (state, { options }) => ({
    ...state,
    referenceFieldSelect: {
      ...state.referenceFieldSelect,
      options: options
    }
  })),
  on(mapsExplorerActions.referenceFieldChange, (state, { value }) => {
    const mapTypesOptions = value != null && state.filtersData[value] != null
      ? state.filtersData[value].mapTypes.map(it => it.name)
      : [];

    return ({
      ...state,
      referenceFieldSelect: {
        ...state.referenceFieldSelect,
        value: value
      },
      mapTypesSelect: {
        ...state.mapTypesSelect,
        value: null,
        options: mapTypesOptions,
        isEnabled: mapTypesOptions.length > 0
      },
      electionTypesSelect: {
        ...state.electionTypesSelect,
        value: null,
        isEnabled: false
      },
      yearsSelect: {
        ...state.yearsSelect,
        value: null,
        isEnabled: false
      },
      mapData: null,
      selectedMapNameMd: null,
      selectedMapNameLg: null
    });
  }),
  on(mapsExplorerActions.mapTypeChange, (state, { value }) => {
    const currentMapType = state.filtersData[state.referenceFieldSelect.value].mapTypes[value];

    const electionTypesOptions = value != null && currentMapType != null
      ? currentMapType.electionTypes.map(it => it.name)
      : [];

    const yearsLabel = currentMapType && currentMapType.yearsLabel
      ? currentMapType.yearsLabel
      : state.yearsSelect.label;

    return ({
      ...state,
      mapTypesSelect: {
        ...state.mapTypesSelect,
        value: value
      },
      electionTypesSelect: {
        ...state.electionTypesSelect,
        value: null,
        options: electionTypesOptions,
        isEnabled: electionTypesOptions.length > 0
      },
      yearsSelect: {
        ...state.yearsSelect,
        label: yearsLabel,
        value: null,
        isEnabled: false
      },
      mapData: null,
      selectedMapNameMd: null,
      selectedMapNameLg: null
    });
  }),
  on(mapsExplorerActions.electionTypeChange, (state, { value }) => {
    const electionTypes = state.filtersData[state.referenceFieldSelect.value]
      .mapTypes[state.mapTypesSelect.value].electionTypes;

    const yearsOptions = value != null && electionTypes[value] != null ? electionTypes[value].years : [];

    return ({
      ...state,
      electionTypesSelect: {
        ...state.electionTypesSelect,
        value: value
      },
      yearsSelect: {
        ...state.yearsSelect,
        value: null,
        options: yearsOptions,
        isEnabled: yearsOptions.length > 0
      },
      mapData: null,
      selectedMapNameMd: null,
      selectedMapNameLg: null
    });
  }),
  on(mapsExplorerActions.yearChange, (state, { value }) => {
    const years = state.filtersData[state.referenceFieldSelect.value]
      .mapTypes[state.mapTypesSelect.value]
      .electionTypes[state.electionTypesSelect.value].years;

    return ({
      ...state,
      yearsSelect: {
        ...state.yearsSelect,
        value: value,
        options: years != null ? years : []
      },
      mapData: null,
      selectedMapNameMd: null,
      selectedMapNameLg: null
    });
  }),
  on(mapsExplorerActions.setMapData, (state, { data }) => ({
    ...state,
    mapData: data
  })),
  on(mapsExplorerActions.itemListChange, (state, { medium, large }) => ({
    ...state,
    selectedMapNameMd: medium,
    selectedMapNameLg: large
  }))
);

export function reducer(state: MapsExplorerState | undefined, action: Action) {
  return mapsExplorerReducer(state, action);
}

export const mapsExplorerFeatureKey = 'mapsExplorer';
