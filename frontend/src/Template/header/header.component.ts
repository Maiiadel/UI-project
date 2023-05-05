import { Component , OnInit} from '@angular/core';
import { AuthService } from 'C:/Users/Mai/UI project/src/app/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService) { }
  ngOnInit(): void { }
}
