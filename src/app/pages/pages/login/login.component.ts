import { Component, OnInit, OnDestroy } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  public focus1;
  public focus2;
  user: User;
  constructor(private auth: FirebaseService, private navigator: Router) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
    var $page = document.getElementsByClassName("full-page")[0];
    var image_src;
    var image_container = document.createElement("div");
    image_container.classList.add("full-page-background");
    $page.classList.add("register-page");
    image_container.style.backgroundImage = "url(assets/img/bg16.jpg)";
    $page.appendChild(image_container);
  }
  ngOnDestroy() {
    var $page = document.getElementsByClassName("full-page")[0];
    $page.classList.remove("register-page");
  }
  async login() {
    await this.auth.signin();
    if (this.user != null) {
      this.navigator.navigate(["/dashboard"]);
    }
  }
}
