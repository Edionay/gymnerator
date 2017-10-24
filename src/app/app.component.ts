import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Gymnerator';

  firstName: string;
  lastName: string;
  dominioDisponivel: String;

  constructor(private http:HttpClient){

  }

  generate_gym_name(): void {
    
    let names = ['Body', 'Build', 'Force', 'Form', 'Shape', 'Energy', 'Life', 'Sport', 'Fit', 
    'Fitness', 'Tech', 'Gym', 'Smart', 'Total'];
  
    let positions = this.getRandomItens(names, 2);
    
    let firstName = positions[0];
    let lastName = positions[1];
  
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.check_domain_availability();
  }


  check_domain_availability(): void {

    let jwaCustometId: string = "336218051", jwaApiKey: string = "b_BKhi2KgPZnGVFj0pNV3g";
    let user =jwaCustometId + ":" + jwaApiKey;
    let user64Based = btoa(user);
    
    let authorizationHeader = new HttpHeaders({
      "Authorization": "Basic " + user64Based
    });
    this.http.get("https://jsonwhoisapi.com/api/v1/whois?identifier=" + this.firstName.toLocaleLowerCase() +
    this.lastName.toLowerCase() +".com.br", {
      headers: authorizationHeader
    }).subscribe(data => {
      let disponivel: boolean = data["registered"];
      this.dominioDisponivel = disponivel ? "Domínio Indisponível": "Domínio Disponível";
      })
  }

  getRandomItens(array, n): string[] {
    var result = new Array(n),
        len = array.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = array[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
  }
}




