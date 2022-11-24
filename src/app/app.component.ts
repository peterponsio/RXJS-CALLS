import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, distinctUntilChanged, finalize, from, map, of, retry, skip, skipLast, Subject, take, takeUntil, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  testSubject:Subject<string> = new Subject();
  testSubjectBehaviour:BehaviorSubject<string> = new BehaviorSubject("initial text");
  destroySubject = new Subject();
  testObjBehaviour = new BehaviorSubject({name:"Pere",age:23});

  constructor(private http:HttpClient){}

  ngOnInit() {


    //Subject 
    // this.testSubject.next("Pill subject");

    // this.testSubject
    // .subscribe(res=>{
    //   console.log("Observer Subject: ", res ?? "no value")})

    // this.testSubject.next("Pill rxjs");


    //Behaviour Subject
    // this.testSubjectBehaviour
    // .subscribe(res=>{
    //   console.log("Observer Behaviour: ", res ?? "no value")})

    // this.testSubjectBehaviour.next("Pill rxjs");
    // console.log("Beahaviour value access", this.testSubjectBehaviour.value)
    // this.testSubjectBehaviour.next("Pill rxjs Behaviour Subject");

   // ******************Operadores********************

  //pipe() tap()
  //  this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  //  .pipe(
  //   tap(data=> console.log(data)),
  //   map(data=>{
  //     return data.filter((res: any) => res.id > 50);
  //   })
  //  )
  //  .subscribe(res=>{
  //   console.log("Observer: ", res ?? "no value")})


  //take() skip() skipLast()
    // from([5,2,3,4])
    // .pipe(
    //   skip(1),
    //   skipLast(1),
    //   take(1),
    // )
    // .subscribe(res=>{
    //  console.log("Observer: ", res ?? "no value")})
    

  //takeUntil()
    // from([1,2,3,4,5,6,10])
    // .pipe(  
    //   takeUntil(this.destroySubject)
    // )
    // .subscribe(res=>{
    // res >= 5 ? this.destroySubject.next(true) : '';
    // console.log("Observer: ", res ?? "no value")})
     
  //distinctUntilChanged()
  // of(1,1,1,2,2,2,3,4,4,4,5)
  // .pipe(distinctUntilChanged())
  // .subscribe(res=> console.log("diff data", res))

  // distinctUntilChanged() complex obj
  // this.testObjBehaviour
  //   .pipe(distinctUntilChanged((prev,current)=> JSON.stringify(prev)===JSON.stringify(current)))
  //   .subscribe(res=>{
  //     console.log("Diff data", res)})
  
  // this.testObjBehaviour.next({name:"Pere",age:25});
  // this.testObjBehaviour.next({name:"Pere",age:25});
  // this.testObjBehaviour.next({name:"Ruben",age:24});


  //finalize()
  // this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  //   .pipe(
  //     finalize(()=>alert("Stop emit"))
  //   ).subscribe(res=>{console.log("Observer: ", res ?? "no value")})
  

  //retry() catchError()
  this.http.get<any>("https://jsonplaceholder.typicode.com/postssssssssssssssss")
    .pipe(
      retry(3),
      catchError(err=>{
        console.error("Error url", err);
        return throwError(err);
      })
    ).subscribe(res=>{console.log("Observer: ", res ?? "no value")})


  } 

}
