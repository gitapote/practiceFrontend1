import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrl: './pipe-async.component.css'
})

export class PipeAsyncComponent {
    promise = new Promise((data)=>{
      data(1);
      data(2);
      data(3);
    } ).then (e=>console.log('promise'+e));


    // obs = new Observable((data)=>{
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    // } ).subscibe(e=> console.log('promise'+e));


    // asyncPipe = new Observable( (data) => {
    //     data.next("Hi");
    //     data.next("Hello");
    //     data.next("Hiieee");
    // }
    // );    //will print last, but internally use all


    asyncPipe = new Observable( (data) => 
      {
        let i=0;
        setInterval( () => { data.next("hello"+i); i++; }, 2000 );

      }
    ); 

    booleanOb = new Observable( (data) => 
      {
        let i=0;
        setTimeout( () => { data.next("true"); }, 2000 );
      }
    ); 

}
