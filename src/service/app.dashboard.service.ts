import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from '../app/dashboard/dashboard.component';



@Injectable()
export class DashboardService {
    url:String;
    constructor(private http:HttpClient){
        this.url = "https://reqres.in/api/";
    }

    getListOfUsers():Observable<any>{

        let resp:Observable<any>;
        resp = this.http.get(`${this.url}/users`);
       return resp;

    }
   
}