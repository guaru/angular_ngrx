import { createAction, props } from '@ngrx/store';

export type filtrosValidos = "todos" | "pendientes" | "completados";


export const setFiltro =  createAction('[Filtro] Set filtros', props<{filtro: filtrosValidos}>());