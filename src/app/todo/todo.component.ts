import { Component, OnInit , Input} from '@angular/core';
import {AppService} from"../app.service";
import {AppComponent} from "../app.component";
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers:[AppService]
})
export class TodoComponent implements OnInit {
  @Input() todoName:String;
  @Input() todoStatus:String;
  constructor(private app: AppComponent, private todoService: AppService) { }

  ngOnInit() {
  }

  checkTodo(){
    this.todoService.checkTodo(this.todoName).subscribe(
      data => console.log(data),
      error => alert(error),
      () => console.log("todo checked")
    )

    var index = this.app.findTodo(this.todoName);
    console.log(index);
    if(index > -1){
    this.app.todos[index].status="completed"; 
    }
  }

  deleteTodo(){
   this.todoService.deleteTodo(this.todoName).subscribe(
      data => console.log(data),
      error => alert(error),
      () => console.log("Finished")
   )

   // 1) takes more time to load data from the api
   this.app.setTodos();
   
   //2) needs redux approach
   /*var index = -1;
   for(var i = 0; i < this.app.todos.length; i++){
     if(this.app.todos[i].name == this.todoName){
        index = i;
     }
   }
   if(index>-1){
     this.app.todos.splice(index, 1);
   }
   console.log(this.app.todos);*/
  }
}

  
