import { Component, OnInit } from '@angular/core';
import { RequestCreate } from './out.model';
import { OutsService } from './out.service';



@Component({
  selector: 'app-outs',
  templateUrl: './outs.component.html',
  styleUrls: ['./outs.component.css']
})

export class OutsComponent implements OnInit {

  request: RequestCreate = {
    userId: 1,
    value: 1,
    category: "123",
    output: false,
    date: "10101020",
    description: "123",
  }

  constructor(private OutsService: OutsService) { }
  ngOnInit(): void {
  }

  save() {
    console.log(this.request);
    this.OutsService.createInput(this.request).subscribe(res => {

    });

  }

}
