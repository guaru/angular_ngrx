import { createReducer, on } from "@ngrx/store";
import { crear, toggle, editar, borrar, toggleAll, clearCompleted } from './todo.actions';
import { Todo } from "./models/todo.model";

export const initialState: Todo[] = [ 
    new Todo('JavaScript'),
    new Todo('Java'),
    new Todo('Python'),
    new Todo('C#')
];

export const _todoReducer = createReducer(
initialState,
 on(crear, (state, {texto}) =>  [...state, new Todo(texto)]  ) ,
 on(borrar, (state, {id}) =>  state.filter( todo => todo.id !== id)),
 on(clearCompleted, (state) =>  state.filter( todo => !todo.completado)),
 on(toggle, (state, {id}) => {
        return  state.map(todo => {
            if(todo.id=== id){
                return  {
                    ...todo,
                     completado: !todo.completado
                }
            }else{
                return todo; 
            }
        })
    }) ,
    on(editar, (state, {id, texto}) => {
        return  state.map(todo => {
            if(todo.id=== id){
                return  {
                    ...todo,
                     texto
                }
            }else{
                return todo; 
            }
        })
    }),
    on(toggleAll, (state, {completado}) => {
        return  state.map(todo => {
            return  {
                ...todo,
                 completado
            }
        })
    }) 
 );


 