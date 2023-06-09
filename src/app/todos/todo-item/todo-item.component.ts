import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef | null = null;
  txtInput: FormControl;
  checkInput: FormControl;
  editando = false;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl();
    this.checkInput = new FormControl();

  }


  ngOnInit(): void {
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkInput = new FormControl(this.todo.completado);
    this.checkInput.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    }
    );
  }


  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 1);

  }


  save() {
    this.editando = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }


}
