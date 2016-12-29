import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http,  Headers, RequestOptions } from '@angular/http';
@Injectable()
export class DataService {


  constructor(private http: Http ) { }

  fetchFolderData(){
    return this.http.get('public/folders.json').map(
      (res) => res.json()
    );
  }
  fetchFileData(id: string){
    return this.http.get('/public/'+id+'.json').map(
      (res) => res.json()
    );
  }
  
}
