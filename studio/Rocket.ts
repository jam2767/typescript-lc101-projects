import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';


export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, 
        totalCapacityKg:number,
        cargoItems: [],
        astronauts: []){
            this.name = name;
            this.totalCapacityKg = totalCapacityKg;
            this.cargoItems = cargoItems;
            this.astronauts = astronauts;
    }

    sumMass(items: Payload[]): number{
        let sum = Cargo.massKg.reduce(function(a,b){
            return a + b;
        }, 0);
        }

    }
