import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { _todoReducer } from "./todos/todo.reducer";
import { filtrosValidos } from "./filtro/filtro.actions";
import { _filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: _todoReducer,
    filtro: _filtroReducer
}