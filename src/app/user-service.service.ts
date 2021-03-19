import { Injectable } from '@angular/core';
@Injectable()
export class UserService {

  users = [
  {"name":"Adan","lastName":"Arias"},
  {"name":"Brenda","lastName":"Blanco"},
  {"name":"Carolina","lastName":"Castro"}
  ];

  constructor() { }

  addUser(pusr:any){
    this.users.push({"name":pusr.name,"lastName":pusr.lastName});
  }

  deleteUser(index:any){
    this.users.splice(index,1);
  }
  getUsers(){
    return this.users;
  }  
}