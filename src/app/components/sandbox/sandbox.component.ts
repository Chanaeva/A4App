import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent implements OnInit {
  users:any[];
  user = {
    id: '',
    name:'',
    email:'',
    phone:''
  }
  isEdit:boolean = false;

  constructor(public dataService:DataService)
  {
    this.dataService.getUsers().subscribe(users => {
       this.users = users;
    })

  }

  onSubmit(isEdit){
    if(isEdit){
      this.dataService.updateUser(this.user).subscribe(user => {
        for (let i = 0; i < this.users.length; i++) {
          if(this.users[i].id == this.user.id){
            this.users.splice(i,1);
          }
        }
        this.users.unshift(this.user);
      })

    } else {
      this.dataService.addUser(this.user).subscribe(user => {
        console.log(user);
        this.users.unshift(user);
      })
    }
  }

  onDelete(id){
    this.dataService.deleteUser(id).subscribe(res => {
     for (let i = 0; i < this.users.length; i++) {
         if(this.users[i].id == id){
           this.users.splice(i,1);
         }
     }
    })
  }

onEdit(user){
  this.isEdit = true;
  this.user = user;
}



  ngOnInit() {

  }

}
