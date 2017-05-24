import { Component } from '@angular/core';
import {AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppService]
})
export class AppComponent {
  todos = [];
  constructor(private todoService:AppService){}

  ngOnInit(){
    this.setTodos();
  }
  setTodos(){
    this.todoService.getTodos()
                .subscribe( 
                  data => this.todos = data,
                  error => alert(error),
                  () => console.log("FINISHED")
                
                );
               
  }
  deleteTodo(name){
    this.todoService.deleteTodo(name).subscribe(
      data => console.log(data),
      error => alert(error),
      () => console.log("Finished")
    )

  }

  addTodo(name){
    var ok = 0;
    for(var i = 0; i < this.todos.length; i++){
      if( this.todos[i].name == name )
        ok = 1;
    }
    if( ok == 0){
    this.todos.push({"name":name,"status":"not completed"});
    this.todoService.addTodo(name).subscribe(
      data => console.log(data),
      error => alert(error),
      () => console.log("Element added")
    )
  }
  else alert("This task is already in process!");
  }
  findTodo(name){
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].name == name){
        return i;
      }
    }
    return -1;
  }
}
