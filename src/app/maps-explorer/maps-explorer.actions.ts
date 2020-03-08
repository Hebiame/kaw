import { createAction, props } from '@ngrx/store';
import { ReferenceField } from "../shared/models/reference-field.model";

export const getFiltersData = createAction(
  '[Maps explorer Service] Get filters data from json'
);

export const getFiltersDataSuccess = createAction(
  '[Maps explorer Service] Get filters data SUCCESS',
  props<{ filtersData: ReferenceField[] }>()
);

export const getFiltersDataFailure = createAction(
  '[Maps explorer Service] Get filters data FAILURE',
  props<{ error: string }>()
);

export const setReferenceFieldSelectOptions = createAction(
  '[Filters Component] Set reference field select options',
  props<{ options: string[] }>()
);

export const referenceFieldChange = createAction(
  '[Filters Component] Reference field select change',
  props<{ value: number }>()
);

export const mapTypeChange = createAction(
  '[Filters Component] Map type select change',
  props<{ value: number }>()
);

export const electionTypeChange = createAction(
  '[Filters Component] Election type select change',
  props<{ value: number }>()
);

export const yearChange = createAction(
  '[Filters Component] Year select change',
  props<{ value: number }>()
);
