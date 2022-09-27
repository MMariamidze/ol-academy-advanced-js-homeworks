
const carB={

    addOwner(owner){
        this.owners.push(owner)
    },

    removeOwner(owner){
        let index=this.owners.indexOf(owner);
        this.owners.splice(index, 1);
    },

    getOwnersCount(){
        return this.owners.length
    },

    getOwnerNames(){    
        let result=[]

        for (let index = 0; index < this.owners.length; index++) {
            const element = this.owners[index];

            result.push(element.fullName())     
        }
        return result    
    },
  
    getCarInfo(){
        return this.make + " " + this.model + " released in " + this.year

    },

    getFullInfo(){
        return this.make+" "+ this.model+" from "+this.year+" "+this.getOwnersCount()+" person owns this car. "+"these are - "+ this.getOwnerNames()

    },

};


function createCar(make, model, year) {
    let car=Object.create(carB);
    car.make=make;
    car.model=model;
    car.year=year;
    car.owners=[];
    return car;
};
   

const personB={

    fullName(){
        return this.name + " " + this.surname
    },

    countCars(){
        return this.cars.length 
    },

    buysCar(car){
        car.addOwner(this)
        this.cars.push(car)
    },

    sellsCar(car){
        car.removeOwner(this)
        let carindex=this.cars.indexOf(car);
        this.cars.splice(carindex, 1);
    },

    getAllCarsInfo(){
        let result = this.name+" owns these cars: "
        let carInfos=[]

        for (let index = 0; index < this.cars.length; index++) {
            const element = this.cars[index];
            const cCarInfo=element.getCarInfo()

            carInfos.push(cCarInfo)
        } 
        
        return result+carInfos.join(', ')
    },
   
};


  function createPerson(name, surname, age, gender, cars=[]) {
    let person = Object.create(personB);
    person.name=name;
    person.surname=surname;
    person.age=age;
    person.gener=gender;
    person.cars=cars;
    return person;

}



   