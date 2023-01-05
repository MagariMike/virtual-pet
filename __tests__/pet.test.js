const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    describe('constructor', () => {
      
        it('sets the name property', () => {
          const pet = new Pet('Fido');
      
          expect(pet.name).toEqual('Fido');
        });
      });
    
      describe('constructor', () => {
      
        it('has a initial age of 0', () => {
          const pet = new Pet('Fido');
      
          expect(pet.age).toEqual(0);
        });
      });
    
      describe('growUp', () => {
        it('increments the age by 1', () => {
          const pet = new Pet('Fido');
      
          pet.growUp();
      
          expect(pet.age).toEqual(1);
        
       
        })
        it('expect hunger to be 0', () => {
            const pet = new Pet('Greg');
            
            expect(pet.hunger).toEqual(0);
        });

        it('growUp increases hunger by 5', () => {
            const pet = new Pet('Chris');

            pet.growUp();

            expect(pet.hunger).toEqual(5);
        })
       
        it('expect fitness to be 10', () => {
            const pet = new Pet('Fitty');

            expect(pet.fitness).toEqual(10);

        })

        it('growUp decreases fitness by 3', () => {
            const pet = new Pet('Wendy');

            pet.growUp();

            expect(pet.fitness).toEqual(7);
        })
      });
     
    
      describe('walk',() => {
         it('increases fitness by 4', () => {
            const pet = new Pet('Fat Pet'); 
            
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
         })

            it('increases fitness to a maximum of 10', () => {
                const pet = new Pet('Dave');
                pet.fitness = 8;
                pet.walk();
                expect(pet.fitness).toEqual(10);
            })
         })
      
    describe('Keeping Fed', () => {

            it('decreases hunger by 3', () => {
                const pet = new Pet('Tom');
                pet.hunger = 5;
                pet.feed();
                expect(pet.hunger).toEqual(2);
            })


            it('decreases hunger by 3 with a minimum hunger of 0', () => {
                
                const pet = new Pet('MB');
                pet.hunger = 1;
                pet.feed();
                expect(pet.hunger).toEqual(0);
    
            })

            xit('throws an error if pet is not alive', () => {
                const pet = new Pet('Wendy');
                pet.age = 30;
                console.log(!this.isAlive);
                expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
            });
            
        });
    
    describe('Checkup', () => {
            
            it("if fitness is 3 or less, returns 'I need a walk'", () => {
                const pet = new Pet('troy');
                pet.fitness = 3;
                pet.checkup();
                expect(pet.checkup()).toEqual('I need a walk');

            })
            
            it("if hunger is 5 or more, returns 'I am Hungry", () => {
                const pet = new Pet('Khalid');
                pet.hunger = 5;
                pet.checkup();
                expect(pet.checkup()).toEqual('I am hungry');
            })
             
            it("if both of the above are true, returns 'I am hungry AND i need a walk'", () => {
                const pet = new Pet('Lottie');
                pet.fitness = 3;
                pet.hunger = 6;
                pet.checkup();
                expect(pet.checkup()).toEqual('I am hungry and i need a walk');
            })

            it("if neither of the above are true, returns 'I feel Great'",() => {
                const pet = new Pet('Thomas');
                pet.fitness = 4;
                pet.hunger = 1;
                pet.checkup();
                expect(pet.checkup()).toEqual('I feel great');
            })
    })

        describe('isAlive', () => {
            it('if pets fitness is 0 or less, should return false',() => {
                const pet = new Pet('Jenny');
                pet.fitness = 0;
                pet.isAlive();
                expect(pet.isAlive()).toEqual(false);
            })

            it('if pets hunger is 10 or more, should return false', () => {
                const pet = new Pet('Jacky');
                pet.hunger = 11;
                pet.isAlive();
                expect(pet.isAlive()).toEqual(false);
            })

            it('if pets age is 30 or more, should return false', () => {
                const pet = new Pet('Robbo');
                pet.age = 39;
                pet.isAlive();
                expect(pet.isAlive()).toEqual(false);
            })

            it('returns true if none of the above are false', () => { 
                const pet = new Pet('flo');
                pet.isAlive();
                expect(pet.isAlive()).toEqual(true);
            })
    })
});
  