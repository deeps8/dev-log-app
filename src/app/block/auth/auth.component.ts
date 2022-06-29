import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  type:boolean = true;
  filepath:string = 'assets/default-user.png';
  loginForm!:FormGroup;
  regForm!:FormGroup;
  errorMsg:string="";

  constructor(private activatedRouter:ActivatedRoute,
              private router:Router,
              private authService: AuthService) {

    //  reusing the route cuz : we are navigating again to same route but with different paramters.
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>{return false;}

    // checking for parameters as Login / Register.
    if(this.activatedRouter.snapshot.params['type']==='login')
      this.type = true;
    else if(this.activatedRouter.snapshot.params['type']==='register')
      this.type = false;

  }

  ngOnInit(): void {
    //login formcontrol
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(25)])
    });

    //register formcontrol
    this.regForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(25)])
    });
  }

  inputFieldValidation(form:FormGroup,fcname:string,type:string){
    return form.get(fcname)?.hasError(type);
  }

  getLoginData(form:any){
    if((form.value.username.trim()!="" || form.value.password.trim()!="") && form.valid){
      console.log(form.value);
      this.authService.loginUser(form.value);
      this.errorMsg = "";
    }
    else{
      this.errorMsg = "Invalid Username and Password";
    }
  }

  getRegData(form:any){
    if((form.value.username.trim()!="" || form.value.password.trim()!="") && form.valid){
      console.log(form.value);
      this.errorMsg = "";
    }
    else{
      this.errorMsg = "Invalid Username, Password and password";
    }
  }

  preview(event:any){
    const file = <File>event.target.files[0];

    const reader = new FileReader();
    reader.onload = ()=>{
      const fp = reader.result as string;
      this.filepath = fp;
    }

    reader.readAsDataURL(file);
  }

}
