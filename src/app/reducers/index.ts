import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface KawState {

}

export const reducers: ActionReducerMap<KawState> = {};


export const metaReducers: MetaReducer<KawState>[] = !environment.production ? [] : [];
