import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/firebase.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  SignInForm!: FormGroup;
  usersList: any = [];
  specificUser: any;
  userServ: any;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private db: FirebaseService
  ) {}
  ngOnInit() {
    console.log('Sign in Entered');
    // console.log(
    //   'Entering firebaseService...' +
    //     this.db.get_user('kirolosyassa2017@gmail.com')
    // );

    // this.db.getItems().subscribe((items) => {
    //   console.log(items);
    // });
    this.SignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // this.db.fetchUsers().subscribe((data) => {
    //   console.log('users list : ' + JSON.stringify(data));
    //   this.usersList = data;
    // });
  }
  onSubmit(myform: FormGroup, Email: string, Pswd: string) {
    this.authService.SignIn(Email, Pswd);
    //hn3ml hena b2a el byredirect l component eh ka home page bt3t el user el folani da (userid)
    // bs el awl nt2kd mn l db en da user f3ln w e7na kda kda ma3ana el form inputs.
    // for (let user of this.usersList) {
    //   if (user.email === Email && user.Password === Pswd) {
    //     //kda we've got the specific email hn5od l id bta3o b2a n7oto fel service 3a4an tb2acommon been kolo

    //     this.db.get_user(user.Email).subscribe((user) => {
    //       console.warn('users list : ' + user);
    //       this.usersList = user;
    //     });

    //     this.userServ.userid = user.id;
    //     console.log(this.userServ.userid);
    //     this.userServ.fetchSpecificUser().subscribe((data: any) => {
    //       //console.log(data);
    //       this.specificUser = data; //3a4an nt2kd tani enna 3mleen fetch ll data bt3t el user el folani el sa7
    //       //console.log(this.specificUser.Type);
    //       if (this.specificUser.Type === 'Client') {
    //         //bnshof ba2a 3ala 7asab el type bta3o ynavigate l anhi home page
    //         this.router.navigate(['/ClientHome']);
    //         //this.router.navigate(['/ClientHome/'+this.specificUser.id]); // da el routing el sa7
    //       } else if (this.specificUser.Type === 'Provider') {
    //         this.router.navigate(['/ProviderHome']);
    //         // this.router.navigate(['/ProviderHome/'+ this.specificUser.id]); // da el routing elsa7
    //       }
    //     });
    //     //console.log(this.specificUser+'rjj'); // howa kda l specific user m4 mtshaf bara l subscribe
    //   }
    // }
    // Swal.fire({
    //   title: 'Incorrect Email or Password,please try again ',
    //   icon: 'info',
    // }).then();
  }
}
