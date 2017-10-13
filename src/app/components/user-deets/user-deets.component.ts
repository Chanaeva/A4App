import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-deets',
  templateUrl: './user-deets.component.html',
  styleUrls: ['./user-deets.component.css']
})
export class UserDeetsComponent implements OnInit {
 id:number;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.route.params.subscribe((params:Params)=> {
      this.id = params.id;
      console.log(params.id);
    })
  }

  ngOnInit() {
  }

}
