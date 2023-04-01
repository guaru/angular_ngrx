import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodos'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos ): Todo[] {
      switch (filtro) {
        case 'pendientes':
            return todos.filter(x=> !x.completado);
        case 'completados': 
            return todos.filter(x=> x.completado);
        default:
             return todos;
      }
  }

}
