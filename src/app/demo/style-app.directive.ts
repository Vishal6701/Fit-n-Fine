import { style } from '@angular/animations';
import { Directive ,HostBinding,HostListener} from '@angular/core';

@Directive({
  selector: '[appStyleApp]'
})
export class StyleAppDirective {

  constructor() { }

  @HostListener ('click') onClick()
  {
    this.textColor="Red";
  }

  @HostBinding('style.color') textColor:any;



  

}
