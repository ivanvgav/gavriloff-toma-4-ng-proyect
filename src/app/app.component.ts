import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gavriloff Angular Project';
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.verifyToken()
  }
}
