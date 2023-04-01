import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import  * as actions from 'src/app/filtro/filtro.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual : actions.filtrosValidos = 'todos' as actions.filtrosValidos;
  filtros:  actions.filtrosValidos [] = ['todos','pendientes','completados'];
  pendientes: number = 0;
  constructor(private store: Store<AppState>){

  }
  
  ngOnInit(): void {
    this.store.subscribe( state =>  { 
        this.filtroActual =  state.filtro;
        this.pendientes =  state.todos.filter(todo => !todo.completado).length;
     });
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.filtroActual =  filtro;
    this.store.dispatch(actions.setFiltro({filtro: filtro}));
  }

  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }


}
