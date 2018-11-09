import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'ns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})
export class SignupComponent implements OnInit {

  appIconWidth;
  appIconHeight;
  textFieldWidth;
  btnHeight;

  day:any = "day";
  month:any = "Month";
  year:any = "Year";

  formOne: { gender: string, stateofOrgin: string } = {
    gender: "Ed Sheeran",
    stateofOrgin: "Ed Sheeran",
  };

  formTwo: { stateOfreg: string, party: string } = {
    stateOfreg: "Ed Sheeran",
    party: "Ed Sheeran",
  };

  constructor(private _page: Page) { }


  ngOnInit() {
    
    this._page.actionBarHidden = true;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.appIconWidth = deviceWidth * .20;
    this.appIconHeight = deviceHeight * .11;
    this.textFieldWidth = deviceWidth * 0.90;
    this.btnHeight = deviceHeight * 0.070;
  }

  get Day() {
    return this.day;
  }

  get Month() {
    return this.month;
  }

  get Year() {
    return this.year;
  }


  birthday;

  pickDate() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      title: 'Please enter your birthday',
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.birthday = result['year'] + '-' + result['month'] + '-' + result['day'];
      this.day = result['day'];
      this.month = result['month'];
      this.year = result['year'];
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  @ViewChild("CB1") FirstCheckBox: ElementRef;

  public toggleCheck() {
    this.FirstCheckBox.nativeElement.toggle();
  }

  public getCheckProp() {
    console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
  }

}
