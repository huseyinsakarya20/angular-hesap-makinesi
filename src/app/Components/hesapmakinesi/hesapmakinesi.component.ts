import { Component, OnInit } from '@angular/core';
import{ FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-hesapmakinesi',
  templateUrl: './hesapmakinesi.component.html',
  styleUrls: ['./hesapmakinesi.component.css']
})
export class HesapmakinesiComponent implements OnInit{
  title: string = "Hesap Makinesi"

  inptutYazi : any;

  ngOnInit(): void {
    this.inptutYazi = new FormGroup({
      text: new FormControl()
    })
  }
  buttonTikla(buttonElemalnlar: any) {
   let butonText =  buttonElemalnlar.textContent

   if(this.inptutYazi.controls.text.value != null){
    this.inptutYazi.controls.text.setValue(
    
      this.inptutYazi.controls.text.value
      + butonText)
   }else{
    this.inptutYazi.controls.text.setValue(butonText)
   }
  
  }
  clear(){
    this.inptutYazi.controls.text.setValue(' ')
  }
  hesapla(){
    let x = eval( this.inptutYazi.controls.text.value)
    this.inptutYazi.controls.text.setValue(x)
  }
  del(){
    let y = this.inptutYazi.controls.text.value
    y = y.slice(0,-1)
    this.inptutYazi.controls.text.setValue(y)
  }
  kareKokAl(){
    let z = Math.sqrt(this.inptutYazi.controls.text.value)
    this.inptutYazi.controls.text.setValue(z)
  }
  kareAl(){
    let t = this.inptutYazi.controls.text.value
    this.inptutYazi.controls.text.setValue(t*t)
  }
}
