import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  // Inject the cart service
  constructor(
    private cartService: CartService
  ) { 
    // Set the shippingCosts property using the getShippingPrices() method
    this.shippingCosts = this.cartService.getShippingPrices();
   }

  ngOnInit() {
  }

}