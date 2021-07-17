import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  type:boolean = true;
  filepath:string = '../../../assets/default-user.png';

  constructor(private activatedRouter:ActivatedRoute, private router:Router) {

    //  reusing the route cuz : we are navigating again to same route but with different paramters.
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>{return false;}

    // checking for parameters as Login / Register.
    if(this.activatedRouter.snapshot.params['type']==='login')
      this.type = true;
    else if(this.activatedRouter.snapshot.params['type']==='register')
      this.type = false;

  }

  ngOnInit(): void {
  }

  loginUser(form:any){
    console.log(form.value);
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
