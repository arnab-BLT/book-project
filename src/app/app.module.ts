import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component"
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { booksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations:[AppComponent, CartComponent],
  imports: [BrowserModule,FormsModule,booksModule],
  bootstrap:[AppComponent]

})
export class AppModule{}
