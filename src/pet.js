const MAXIMUM_FITNESS = 10;

const MINIMUM_FITNESS = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}
Pet.prototype.growUp = function () { 
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
   if ((this.fitness + 4) <= 10) {
    this.fitness += 4;
   } else {
    this.fitness = MAXIMUM_FITNESS;
   }
};


Pet.prototype.feed = function () {

if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };

    if((this.hunger - 3) <= MINIMUM_FITNESS) {
        this.hunger = 0;
    } else {
        this.hunger -= 3;
    }
};

Pet.prototype.checkup = function () {
    if(this.fitness <= 3 && this.hunger >= 5) {
    return 'I am hungry and i need a walk';
    } else if (this.hunger >= 5){
        return 'I am hungry';
    } else if (this.fitness <= 3){
        return 'I need a walk';
    } else {
        return 'I feel great';
    };
};

Pet.prototype.isAlive = function () {
    if(!this.fitness) {
        return false;
    } else if (this.hunger >= 10) {
        return false;
    } else if (this.age >= 30) {
        return false;
    } else {
        return true;
    };
}
module.exports = Pet;

