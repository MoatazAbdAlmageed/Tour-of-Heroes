import {Component} from '@angular/core';

export class Hero {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const HEROES: Hero[] = [
  {id: 1, firstName: 'Moataz', lastName: 'Mohammady', email: 'moataz.mohammady@gmail.com'},
  {id: 2, firstName: 'Ali', lastName: 'Mohamed', email: 'Ali@gmail.com'},
  {id: 3, firstName: 'Eman', lastName: 'Zaki', email: 'Eman@mail.com'},
  {id: 4, firstName: 'Taher', lastName: 'Khaled', email: 'Taher.Khaled@gmail.com'},
];

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  // hero: Hero = {
  //   id: 1,
  //   firstName: 'Moataz',
  //   lastName: 'mohammady',
  //   email: 'm.mohammady@gmail.com',
  // };
}
