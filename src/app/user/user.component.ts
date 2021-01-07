import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: any;
  

 
  constructor(private serviceProvider : UserServiceService) { }

  ngOnInit(): void {
   this.getuser()
    
  }
  getuser(){
    this.serviceProvider.getUser().subscribe(result=>{
      this.userList= result
      console.log(this.userList)
    })
   
  
  }

}
