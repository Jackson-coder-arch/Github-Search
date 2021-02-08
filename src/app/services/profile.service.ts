import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='99332';
  private clientsecret = '1cf7e63d839617814bc481b7c618dbd1dd735dd8';


  constructor(private httpClient:HttpClient) {
console.log('service is now ready!');
this.username ='Jackson-coder-arch';
   }
   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/"+this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map((response: any) => response));
      }
      getProfileRepos(){
        return this.httpClient.get("https://api.github.com/users/"+this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map((response: any) => response));
      }
      updateProfile(username:string){
        this.username =username;
      }
}
