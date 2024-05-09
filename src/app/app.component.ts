import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Python', 'Java', 'C#'];
  gender = ['Male', 'Female', 'Not to Disclose']
  userModel = new User('','','', '','', '', undefined , undefined, '', '', '');
  submitted = false;
  errorMsg = '';
  submit_form = "Form Submitted SuccessFully";
  title_form = "REGISTRATION FORM";


  constructor(private _enrollmentService: EnrollmentService){}
  
  OnSubmit() {
    // console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe({
        next: (data: any) => console.log('Success', data),
        error: (error: any) => this.errorMsg = error.statusText
      });
}
  OnCancel(){
    var conf= confirm("Data will lose. Really want to Cancel? ")
    if(conf){
      this.userModel = {
      firstname: '',
      middlename: '',
      lastname: '',
      gender: '',
      email: '',
      phone: null,
      state: '',
      district: '',
      zipcode: null,
      topic: '',
      timePreference: ''
    };
  }
}
}
