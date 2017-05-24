import {Injectable} from "@angular/core";
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
    private apiUrl = "https://sleepy-dawn-26392.herokuapp.com/";
    
    constructor(private http:Http){
    }    

    getTodos(){
        return this.http.get(this.apiUrl)
        .map(res => res.json());
    }

    deleteTodo(name){
        return this.http.get(this.apiUrl+"delete/"+name)
        .map(res=>res.json());
        
    }

    checkTodo(name){
        return this.http.get(this.apiUrl+"update/"+name+"/completed");
    }

    addTodo(name){
        return this.http.get(this.apiUrl+"insert/"+name);
    }

}
