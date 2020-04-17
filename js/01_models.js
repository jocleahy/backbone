import Backbone from 'Backbone';
// Models are the heart of any JavaScript application, containing the interactive data as well as a large part of the logic surrounding it: conversions, validations, computed properties, and access control.

// create an Animal model
let Animal = Backbone.Model.extend({
    // setting defaults
    defaults: {
        name: 'Newborn',
        isPet: false
    },
    // called everytime is instantiated
    initialize: function () {
        console.log(`New animal created`);
        // we can listen to all changes or
        // bind an attribute to the change event
        this.on('change:isPet', function (model) {
            console.log(`${model.get('name')} is now your pet`);
        })
    },
    // custom functions
    keepAsPet: function () {
        this.set({ isPet: true })
    }


});

let dog = new Animal();
// all new animals will have the name attribute
console.log(dog.get('name')); // Newborn

// we can override it:
dog.set({ name: 'Rover' });

console.log(dog.get('name')); // Rover

// or override default on creation
let cat = new Animal({ name: 'Tiddles' });

console.log(cat.get('name')); // Tiddles

// models can contain custom functions
console.log(cat.get('isPet')); // false

// will trigger change event
cat.keepAsPet();

console.log(cat.get('isPet')); // true




