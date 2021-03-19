import { Component } from "@angular/core";
import { UserService } from './user-service.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  users = null;
  usrName = null;
  usrLastName = null;
  userService = null;

  ngOnInit(): void {
    this.userService = new UserService;
    this.users = this.userService.getUsers();
  }

  delete(i){
    this.userService.deleteUser(i);
  }

  add(){
    var usr = {
      "name": null,
      "lastName": null
    }
    usr.name = this.usrName;
    usr.lastName = this.usrLastName;
    this.userService.addUser(usr);
    this.usrName = null;
    this.usrLastName = null;
 ;
  }
}
