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
     
    
  });
  