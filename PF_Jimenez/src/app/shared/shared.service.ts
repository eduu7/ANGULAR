import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class SharedService {
  // public _title= new BehaviorSubject<any>([]);
  // _title$ = this._title.asObservable();


  private resultList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public resultList$: Observable<any[]> = this.resultList.asObservable();

  updateResultList(updatedList:any) {
    this.resultList.next(updatedList);
  }
  

  private yourVariable: Subject<any> = new Subject<any>();


    public listenYourVariable() {
        return this.yourVariable.asObservable();

    }


    public yourVariableObserver(value ?: any) {
      // console.log('title changed to: ');
      // console.log(value);
        this.yourVariable.next(value);
    }
  // public banners$: Subject<any[]> = new BehaviorSubject<any[]>([]);

  // setBanners(banners: any[]): void {
  //   console.log('values cambiar: ');
  //   console.log(banners);
  //     this.banners$.next(banners);
  // }

  // constructor(  ) { 
    
   
  // }



  
  // getTitle(){
  //   return this.banners$;
  // }

  // setTitle(title:string){
  //   console.log('setTitle' +title)
  //   this._title.next(title);
  //   // this.title=title;
  // }

}