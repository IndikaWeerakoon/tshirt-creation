import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tshirts =[
    {
      src:"/assets/images/yellowt.jpg",
      name:"Yellow T-Shirt",
      discription:"This is our premium T-shirt design.",
      price : "Rs. 800/="    
    },
    {
      src:"/assets/images/bluet.jpg",
      name:"Blue T-Shirt",
      discription:"This is our premium T-shirt design.",
      price : "Rs. 800/="   
    },
    {
      src:"/assets/images/pinkt.jpg",
      name:"Pink T-Shirt",
      discription:"This is our premium T-shirt design.",
      price : "Rs. 800/="   
    },
    {
      src:"/assets/images/yellowt.jpg",
      name:"Yellow T-Shirt",
      discription:"This is our premium T-shirt design.",
      price : "Rs. 800/="   
    }
  ]

  ngOnInit() {
  }

}
