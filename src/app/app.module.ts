import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ReactiveFormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { _todoReducer } from './todos/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
       maxAge: 25,
       logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
