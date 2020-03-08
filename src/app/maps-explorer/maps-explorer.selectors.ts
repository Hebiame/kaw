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
