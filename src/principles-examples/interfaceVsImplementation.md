```js
/* in a strong type language  */
Dog dog = new Dog();
dog.makeSound();

Animal dog = new Dog(); // programming to super type open runtime 
Animal dog = getAnimal();

/* APIs Services 
we hit end point without knowing what really happens there 
and we expect response have status , data 
*/

/* in our Duck Behaviours */
const  quackBehaviour = Quack(props);
const  flyBehaviour =   FlyWithWings(props);
// changing implementation affects Client and require update

const flyBehaviour = getFlyBehaviour();
const quackBehaviour = getQuackBehaviour();

/* another example */
class Car extends Vehicle {
    constructor(){
        super();
        this.door = new CarDoor(props);
    }
}
class Car extends Vehicle {
    constructor(door){
        super();
        this.door = door;
    }
}
/* */
```