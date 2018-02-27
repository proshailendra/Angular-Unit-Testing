import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styles: []
})
export class ServiceComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
