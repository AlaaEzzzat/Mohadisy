import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  imageSrc?: string ;

  myForm;

 

 constructor() { 
  this.myForm = new FormGroup({

    TypeService: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CompanyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CompNum:new FormControl('', [Validators.required]),
    
    file: new FormControl('', [Validators.required]),
 
    fileSource: new FormControl('', [Validators.required])
 
  });
 }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

   

 get f(){

   return this.myForm.controls;

 }

  

 onFileChange(event:any) {

   const reader = new FileReader();

   

   if(event.target.files && event.target.files.length) {

     const [file] = event.target.files;

     reader.readAsDataURL(file);

   

     reader.onload = () => {

  

       this.imageSrc = reader.result as string;

    

       this.myForm.patchValue({

         fileSource: reader.result

       });

  

     };

  

   }

 }

  

 submit(){

   console.log(this.myForm.value);

  //  this.http.post('http://localhost:8001/upload.php', this.myForm.value)

  //    .subscribe(res => {

  //      console.log(res);

  //      alert('Uploaded Successfully.');

  //    })

 }

}
