
function sleep(name){
   console.log(name + " sleeps for 8 hours");
}
function run(){
    /*sleep("Tigger")
    eat("Tigger", "meat")
    eat("Tigger", "bacon")*/

    var tigger = new Tiger ("Tigger");
    tigger.eat("meat");


    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    pooh.sleep();

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmellow");
    rarity.sleep();

    var gemma = new Giraffes("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();

    var stinger = new Bees("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    stinger.sleep();

    var animal = [tigger,pooh,rarity,gemma,stinger];


    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals(animal,"chicken");

    Animal.getPopulation();
    tigger.getPopulation();
}

/*var favoriteFood = "bacon"

function eat(name,food){
    var yum;
    console.log(name+" eats "+food)
    yum = (food == favoriteFood) ? console.log("YUM!!! " +name+ " wants more " + food):""
}*/


/*class Polygon extends Shape {

  constructor(height, width) {
    super('Polygon');
    this.height = height;
    this.width = width;
  }

  sayHistory() {
    console.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

}

class Shape {

    constructor(name) {
        this.name = name;
	   this.special = true;
    }

    sayName() {
   console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}"YUCK!!! " + this.name + " will not eat " + food
*/

var animalPopulation = 0;

class Animal {
    constructor(name,favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }
    static getPopulation() {
        console.log(animalPopulation);
        return animalPopulation;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name+" eats "+food);
        (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
    }
}



class Tiger extends Animal {
    constructor(name) {
        super(name,"meat");
    }
}


class Bear extends Animal{
    constructor(name) {
        super(name,"fish");
        sleep();
    }
    sleep() {
        // complete your sleep function here
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmellow");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffes extends Animal{
    constructor(name){
        super(name,"leaves");
    }
    eat(food){
        (food==this.favoriteFood) ? console.log(this.name + " eats " + food):console.log("YUCK!!! " + this.name + " will not eat " + food);
        (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
    }
}

class Bees extends Animal{
    constructor(name){
        super(name,"pollen");
    }
    eat(food){
        (food==this.favoriteFood) ? console.log(this.name + " eats " + food):console.log("YUCK!!! " + this.name + " will not eat " + food);
        (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}

class Zookeeper{
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals,food){
        var count = animals.length;
        console.log(this.name+" is feeding "+food+ " to "+ count +" of "+Animal.getPopulation()+" animals.");
        for(var i=0;i<animals.length;i++){
            animals[i].eat(food);
        }
        console.log(Animal.getPopulation())
    }
}


