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

  generate_gym_name(): void {
    
    let names = ['Body', 'Build', 'Force', 'Energy', 'Life', 'Sport', 'Fit', 
    'Fitness', 'Tech', 'Gym', 'Smart', 'Total'];
  
    let positions = this.getRandomItens(names, 2);
    
    let firstName = positions[0];
    let lastName = positions[1];
  
    this.firstName = firstName;
    this.lastName = lastName;
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




