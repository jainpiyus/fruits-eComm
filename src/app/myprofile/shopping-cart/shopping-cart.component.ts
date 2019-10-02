import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
 cart = [];
  constructor(private cartService: CartService) { 
    this.cartService.getCarts().subscribe(res=>{
      this.cart = res;
    });
  }

  ngOnInit() {
  }

}
