function Car(make, model, year) {
    this.make=make
    this.model=model
    this.year=year
    this.owners=[]

    this.getCarInfo=function(){
        return this.make + " " + this.model + " released in " + this.year
    } 
    this.addOwner=function(owner){
        this.owners.push(owner)
    }
    this.removeOwner=function(owner){
        let index=this.owners.indexOf(owner);
        this.owners.splice(index, 1);
    }
    this.getOwnersCount=function(){
        return this.owners.length
    }
    this.getOwnerNames=function(){    
        let result=[]

        for (let index = 0; index < this.owners.length; index++) {
            const element = this.owners[index];

            result.push(element.fullName())     
        }
        return result    
    }

    this.getFullInfo=function(){
       return this.make+" "+ this.model+" from "+this.year+" "+this.getOwnersCount()+" person owns this car. "+"these are - "+ this.getOwnerNames()

    }
}
   

  function Person(name, surname, age, gender, cars=[]) {
    this.name=name
    this.surname=surname
    this.age=age
    this.gener=gender
    this.cars=cars
    this.fullName=function(){
        return this.name + " " + this.surname
    }
    this.countCars=function(){
        return this.cars.length 
    }
    this.buysCar=function(car){
        car.addOwner(this)
        this.cars.push(car)
    }
    this.sellsCar=function(car){
        car.removeOwner(this)
        let carindex=this.cars.indexOf(car);
        this.cars.splice(carindex, 1);
    }
    this.getAllCarsInfo=function(){
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


   