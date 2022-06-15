```js
// abstract class
class Duck {
    isSwim = false;
    audio = new Audio('../assets/Duck-quack.mp3');
    constructor(width , type , info ){
        this.type = type;
        this.info = info;
        this.width = width;
    }
    toggleSwim(){

    }
    swim(){

    }
    quack(){

    }
    // abstract methods
    // i dont know each Duck how will it look?
    render(){

    }
    // abstract
    renderSwim(){

    }
    // abstract
    renderInfo(){

    }
}

class WhiteDuck extends Duck {
    constructor(width , type , info){
        super(width , type , info)
    }
    // implement abstract methods
    render(){
    }
    renderSwim(){
    }
    renderInfo(){
    }
}

class MallardDuck extends Duck {
    constructor(width , type , info){
        super(width , type , info)
    }
    // implement abstract methods
    render(){
    }
    renderSwim(){
    }
    renderInfo(){
    } 
}

class RedHeadDuck extends Duck {
    constructor(width , type , info){
        super(width , type , info)
    }
    // implement abstract methods
    render(){
    }
    renderSwim(){
    }
    renderInfo(){
    } 
}

// change behaviour by inheritance
class RubberDuck extends Duck {
    constructor(width , type , info){
        super(width , type , info)
    }
    // implement abstract methods
    render(){
    }
    renderSwim(){
    }
    renderInfo(){
    }   
    //override type behaviour
    quack(){
        // squeak
    }
}

// change behaviour by inheritance
class DecoyDuck extends Duck {
    constructor(width , type , info){
        super(width , type , info)
    }
    // implement abstract methods
    render(){
    }
    renderSwim(){
    }
    renderInfo(){
    }   
    //override
    quack(){
        // muted
    }
}

// now need to add a new behaviour (Fly)
// where i should change ?


/* change behaviour by abstraction */

// abstract class
class Duck {
    isSwim = false;
    audio = new Audio('../assets/Duck-quack.mp3');
    constructor(width , type , info ){
        this.type = type;
        this.info = info;
        this.width = width;
    }
    // constant behaviours all Ducks swim and quack
    toggleSwim(){
    }
    swim(){
    }
    // i dont know each Duck how will it look?
    // abstract
    quack(){
    }
    render(){
    }
    // abstract
    renderSwim(){
    }
    // abstract
    renderInfo(){
    }
}
```