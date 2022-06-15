# Composition vs Inheritance

- Inheritance has been one of the most popular characteristics of OOP since it was introduced. But it seems not to be recommended as good practice in programming these days.

Inheritance: is a. . The car is a vehicle.
Composition: has a. . The car has a steering wheel.

```js
// inheritance 
class Car  {
    constructor(){
    }
    drive(){

    }
    stop(){

    }
    openDoor(){

    }
}
class Car extends Vehicle {
    constructor(){
        super();
    }
}
class Bike  extends Vehicle {
    constructor(){
        super();
    }
    // openDoor has been inherited and i dont have doors! 
}

// Composition 
class Door {
    constructor(){

    }
    openDoor(){
        
    }
}
class CardDoor extends Door {

}
class BikeDoor extends Door {
    openDoor(){
        // 
    }
}
class Car  {
    door;
    constructor(){
    }
    drive(){

    }
    stop(){

    }

}
class Car extends Vehicle {
    constructor(door){
        super();
        this.door = door;
    }
}
class Bike  extends Vehicle {
    constructor(door){
        super();
        this.door = door
    }
    
}
```

- changing in super class may destory all sub
- but composing to super class will not affect sub classes
- references
  - <https://betterprogramming.pub/inheritance-vs-composition-2fa0cdd2f939>

## Mixins Vs Composition API

- mixins refer to inheritance
- Composition API refer to  composition
