import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  //userList: { id: number; name: string; email: string; mobile: number; }[];
  userId: any
  userdetails: any;
  userList: any;
  

 
  constructor(private serviceProvider : UserServiceService ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userList = [{id:1, name:"arun",email:"26ak1997@gmail.com",mobile:9750158511},{id:2, name:"raja",email:"raja@gmail.com",mobile:6235282922}]
    this.route.params.subscribe(parmas => {
      this.userId = parmas.id;
      this.getuser()
    });
    
  }
  getuser(){
    this.serviceProvider.getUser().subscribe(result=>{
      this.userList= result
      this.userdetails = this.userList.filter(obj => obj.id == this.userId)
    })
   
  
  }
}
