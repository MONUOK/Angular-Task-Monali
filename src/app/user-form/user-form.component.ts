import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm!:FormGroup
  hide = true;
  submitted = false;

  constructor(public fb:FormBuilder){
   
  }

  onSubmit(){
    if(this.userForm.valid){
      alert(this.userForm.value.email)
    }
  }
  
  ngOnInit(){
    this.userForm = this.fb.group({
      userName:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")])],
      email:['',Validators.compose([Validators.required,Validators.email,Validators.pattern(".*\\S.")])],
      password:['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')])]
    })
  }
}
