import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2022';

  constructor(){
    const A = ['a', 'b', 'c', 'd', 'e'];
    const auxSplice = A.splice(1,1);
    console.log(A, auxSplice)


    const auxReduce = [1,2,3,4,5].reduce((prev, value, index)=>{
      return prev+value
    },0)
    console.log(auxReduce)

    const auxJSON = {
      id:1,
      name: 'Chasko',
      lastName: 'Berto'
    }

    const auxEntries = Object.entries(auxJSON)
    console.log(auxEntries)

    const auxKeys = Object.keys(auxJSON)
    console.log(auxKeys)

    const auxValues = Object.values(auxJSON)
    console.log(auxValues)

    const b = [1,2,3,4,5,6,7]
    const c = [...b, 7,8,9,10]
    console.log("Spread", c)

    this.getREST(1,2,'hola')

    const person = {
      id: 1,
      name: "Pelo",
      country: {
        idCountry: 3,
        cod: "Si"
      }
    }

    const {country} = person
    console.log(country)

  }

  getREST(...params: any[]){
    console.log('rest', params)
  }
}
