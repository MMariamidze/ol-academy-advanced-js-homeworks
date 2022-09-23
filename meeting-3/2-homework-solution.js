class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }
}

class Car extends Vehicle{

    constructor(make, model,year){
    super(make,model)    
    this.year=year
    }
    
    owners=[]
    

    getCarInfo=function(){
        return this.make + " " + this.model + " released in " + this.year
    } 
    addOwner=function(owner){
        this.owners.push(owner)
    }
    removeOwner=function(owner){
        let index=this.owners.indexOf(owner);
        this.owners.splice(index, 1);
    }
    getOwnersCount=function(){
        return this.owners.length
    }
    getOwnerNames=function(){    
        let result=[]

        for (let index = 0; index < this.owners.length; index++) {
            const element = this.owners[index];

            result.push(element.fullName())     
        }
        return result    
    }

    getFullInfo=function(){
       return this.make+" "+ this.model+" from "+this.year+" "+this.getOwnersCount()+" person owns this car. "+"these are - "+ this.getOwnerNames()

    }
}
   

  class Person{
    constructor(name, surname, age, gender, cars=[]){
    this.name=name
    this.surname=surname
    this.age=age
    this.gener=gender
    this.cars=cars
}

    fullName=function(){
        return this.name + " " + this.surname
    }
    countCars=function(){
        return this.cars.length 
    }
    buysCar=function(car){
        car.addOwner(this)
        this.cars.push(car)
    }
    sellsCar=function(car){
        car.removeOwner(this)
        let carindex=this.cars.indexOf(car);
        this.cars.splice(carindex, 1);
    }
    getAllCarsInfo=function(){
        let result = this.name+" owns these cars: "
        let carInfos=[]

        for (let index = 0; index < this.cars.length; index++) {
            const element = this.cars[index];
            const cCarInfo=element.getCarInfo()

            carInfos.push(cCarInfo)
        } 
        
        return result+carInfos.join(', ')
    }
    }

   