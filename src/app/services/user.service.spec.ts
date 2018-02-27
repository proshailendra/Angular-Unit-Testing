/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { UserService } from './user.service';
import { User } from '../models/user';
import { mockUsers } from './users.data.mock';

describe('User Service : ', () => {
  let service: UserService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        MockBackend,
        BaseRequestOptions,
        //define and set mock Http service
        {
          provide: Http, //provider for Http
          //A list of tokens which need to be resolved by the injector. 
          deps: [MockBackend, BaseRequestOptions], //depends on MockBackend and BaseRequestOptions
          // The function is invoked with resolved values of tokens in the deps field
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
            return new Http(backend, options); //return a new instance of the Http class. 
          }
        },
      ]
    });

    // Get the MockBackend
    backend = TestBed.get(MockBackend);
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(UserService);
  });

  it('should return users', () => {
    let responseOptions = new ResponseOptions({
      body: JSON.stringify(mockUsers)
    });
    const response = new Response(responseOptions);
    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(response)
    );

    return service.GetUsers().subscribe(data => {
      expect(data).toEqual(mockUsers);
    });
  });

  it('should return single user', () => {
    let id = 1;
    let user: User = mockUsers.find(u => u.id == id);
    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(
        new Response(
          new ResponseOptions({
            body: JSON.stringify(user)
          })
        )
      ));

    return service.GetUser(id).subscribe(data => {
      expect(data).toEqual(user);
    });
  });

  it('should add a single user', () => {
    let user: User = { "id": 3, "name": "Rohan", "email": "rohan@gmail.com", "address": 'Delhi' };
    mockUsers.push(user);
    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(
        new Response(
          new ResponseOptions({status:201})
        )
      ));

    return service.AddUser(user).subscribe(data => {
      expect(data.status).toBe(201);
    });
  });
});