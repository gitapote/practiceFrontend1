import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
    toDate = new Date();

    msg = "Hello J32";

    num:number = 3813.23435;
    // num:number = 3.23435;

    per=.34;

    curr: number = 175;
}
