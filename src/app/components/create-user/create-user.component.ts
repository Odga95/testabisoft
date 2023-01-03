import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUser: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createUser = this.fb.group({
      name: ['', Validators.required],
      userAge: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      cost: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  addUser() {
    console.log(this.createUser)
    const user: any = {

      name: this.createUser.value.name,
      userAge: this.createUser.value.userAge,
      dateofBirth: this.createUser.value.dateofBirth,
      cost: this.createUser.value.cost,
      enrollementDagte: new Date()
    }
    this.router.navigate(['/user'])
    this.userService.addUser(user).then(() => {
      console.log('registrado');
    }).catch(error => {
      console.log(error);
    })
  }


}
