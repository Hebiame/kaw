import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mapsExplorerFeatureKey, MapsExplorerState } from "./maps-explorer.reducer";

export const selectMapsExplorer = createFeatureSelector<MapsExplorerState>(mapsExplorerFeatureKey);

export const getFiltersData = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) =>state.filtersData
);

export const getReferenceFieldSelect = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => state.referenceFieldSelect
);

export const getMapTypesSelect = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => state.mapTypesSelect
);

export const getElectionTypesSelect = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => state.electionTypesSelect
);

export const getYearsSelect = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => state.yearsSelect
);

export const getMapDataPath = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => {
    if ((state.referenceFieldSelect.isEnabled && state.referenceFieldSelect.value === null)
    || (state.mapTypesSelect.isEnabled && state.mapTypesSelect.value === null)
    || (state.electionTypesSelect.isEnabled && state.electionTypesSelect.value === null)
    || (state.yearsSelect.isEnabled && state.yearsSelect.value === null)) {
      return null;
    }

    let path = '';

    path += state.referenceFieldSelect.value !== null
      ? '/assets/maps/' + state.referenceFieldSelect.options[state.referenceFieldSelect.value]
      : '';

    path += state.mapTypesSelect.value !== null
      ? '/' + state.mapTypesSelect.options[state.mapTypesSelect.value]
      : '';

    path += state.electionTypesSelect.value !== null
      ? '/' + state.electionTypesSelect.options[state.electionTypesSelect.value]
      : '';

    path += state.yearsSelect.value !== null
      ? '/' + state.yearsSelect.options[state.yearsSelect.value]
      : '';

    return path;
  }
);

export const getMapListPath = createSelector(
  getMapDataPath,
  (path: string) => path ? path + '/list.json' : null
);

export const getMapImgPath = createSelector(
  selectMapsExplorer,
  getMapDataPath,
  (state: MapsExplorerState, path: string) =>
    state.selectedMapName && path ? path + '/' + state.selectedMapName : null
);

export const getMapData = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => state.mapData
);

export const getSelectedMapName = createSelector(
  selectMapsExplorer,
  (state: MapsExplorerState) => state.selectedMapName
);
