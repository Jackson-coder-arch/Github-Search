import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='99332';
  private clientsecret ='Iv1.3066706d2225c3c2';


  constructor(private httpClient:HttpClient) {
console.log('service is now ready!');
this.username ='Jackson-coder-arch';
   }
   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/"+this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map((response: any) => response));
      }
}
