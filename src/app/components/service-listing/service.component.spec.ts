import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ServiceComponent } from './service.component';
import { UserService } from '../../services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('Component with Service : ', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceComponent],
      imports: [HttpModule],
      providers: [UserService]
    });

    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
  });

  it('should load all users', () => {
    const mockUsers = [
      {
        "id": 1,
        "name": "Ankit",
        "email": "ankit@gmail.com",
        "address": 'Noida'
      },
      {
        "id": 2,
        "name": "Mohan Chauhan",
        "email": "mohan@gmail.com",
        "address": 'Delhi'
      }
    ]

    spyOn(userService, 'GetUsers').and.returnValues(Observable.of(mockUsers));
    component.ngOnInit();
    expect(component.users).toEqual(mockUsers);
  });
});
