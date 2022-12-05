import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
  private _title= new BehaviorSubject<any>([]);
  _title$ = this._title.asObservable();

  constructor(  ) { 
    
   
  }

  setTitle(title:string){
    // console.log('setTitle' +title)
    this._title.next(title);
    // this.title=title;
  }

}