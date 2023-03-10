import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reactiveforms';
  reactiveForm!:FormGroup;
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null,  [Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null,  [Validators.required, Validators.email])
      }),
      gender: new FormControl('male'),
      country: new FormControl('kenya'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),

      ])
    })
    // this.reactiveForm.reset()
  }
  onSubmit(){
    console.log(this.reactiveForm);

  }
  noSpaceAllowed(control:FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed:true}
    }
    return null
  }
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
    console.log(1);

  }
}
