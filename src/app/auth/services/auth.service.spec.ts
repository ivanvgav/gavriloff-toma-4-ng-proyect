import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/core/models/user.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AuthService } from './auth.service';

const expectedUser = new User(
  7,
  'michael.lawson@reqres.in',
  'Michael',
  'Lawson',
  'https://reqres.in/img/faces/7-image.jpg',
)


fdescribe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should work', (done) => {
    service.login({
      email: 'falseemail@email.com',
      password: 'asdfg'
    }).subscribe((user) => {
      expect(user).toEqual(expectedUser)
      done();
    })

    httpTestingController.expectOne({
      url: `${service.apiURL}/login`,
      method: 'POST',
    }).flush(
      { token: 'QpwL5tke4Pnpja7X2' }
    )

    httpTestingController.expectOne({
      url: `${service.apiURL}/users/7`,
      method: 'GET'
    }).flush({
      data: {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg'
      },
      support: {
          url: 'https://reqres.in/#support-heading',
          text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
      }
    })
  })


});
