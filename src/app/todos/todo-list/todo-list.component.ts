import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  completado: boolean  = false;
  filtroActual : filtrosValidos = 'todos';

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
      this.store.subscribe(state => {
          this.todos =  state.todos;
          this.filtroActual = state.filtro;
       });
  }

  toggleAll(){
      this.completado =  !this.completado;
      this.store.dispatch(actions.toggleAll({completado: this.completado}));
  }

}
