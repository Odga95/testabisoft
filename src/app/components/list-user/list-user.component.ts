import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.usersService.getUser().subscribe(data => {
      this.users = [];
      data.forEach((element: any) => {
        //   console.log(element.payload.doc.data());
        // });
        this.users.push({
          id: element.payload.doc.id,
          ... element.payload.doc.data()
        })

      });
      console.log(this.users);
    })
  }    
}
