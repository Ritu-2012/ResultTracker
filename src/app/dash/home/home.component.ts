import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor(private dataservice: DataService) { }

  cards;
  cards2;
  ngOnInit(): void {

    this.dataservice.getCards().subscribe((response:any) => this.cards=response.response);

    this.dataservice.getCards2().subscribe((response:any) =>this.cards2 = response);
    

  }

}
