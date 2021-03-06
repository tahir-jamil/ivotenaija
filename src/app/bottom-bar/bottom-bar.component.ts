import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";
import * as utils from "tns-core-modules/utils/utils";
import { Router, NavigationExtras } from "@angular/router";
import { PageService } from "../page.service";


@Component({
  selector: "ns-bottom-bar",
  templateUrl: "./bottom-bar.component.html",
  styleUrls: ["./bottom-bar.component.css"],
  moduleId: module.id
})
export class BottomBarComponent implements OnInit {

  @Input() visible = true;

  bottomBarHeight: any = "";
  imgHeight: any = "";
  imgWidth: any = "";
  activeIndex = 0;
  opactiy = true;

  constructor(private routerExtensions: RouterExtensions, private router: Router, private userService: PageService) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.bottomBarHeight = deviceHeight * 0.1;
    this.imgHeight = deviceHeight * 0.04;
    this.imgWidth = deviceHeight * 0.04;

    // let data = this.userService.currentLeadUpdated$.subscribe((data) => {
      // console.log(data);
      // this.onChangeIndex(data);
    // })

     this.userService.currentLeadUpdated$.subscribe((data) => {
      console.log('sdfsd'+data);
      if (data == false) {
        this.opactiy = false;
      } else {
        this.opactiy = true;
      }
    })
  }


  onChangeIndex(args) {
    this.activeIndex = args;
    this.visible = true;

    switch (this.activeIndex) {
      case 0: {
        this.routerExtensions.navigate(["/feed"], {
          transition: {
            name: "fade",
            curve: "linear"
          }
        });
      }
        break;
      case 1: {
        this.routerExtensions.navigate(["/italk"], {
          transition: {
            name: "fade",
            curve: "linear"
          }
        });
      }
        break;
      case 2: {
        this.routerExtensions.navigate(["/timeline"], {
          transition: {
            name: "fade",
            curve: "linear"
          }
        });
      }
        break;
      case 3: {
        this.routerExtensions.navigate(["/more"], {
          transition: {
            name: "fade",
            curve: "linear"
          }
        });
        
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     "title": "Web",
        //     "url": "https://seefarma.it/chat/"
        //   }
        // };

        // this.router.navigate(["webview"], navigationExtras);
        // utils.openUrl("https://seefarma.it/chat/")
        break;
      }
      default:
        break;
    }
  }


  get activeIndexValue() {
    return this.activeIndex;
  }
}
