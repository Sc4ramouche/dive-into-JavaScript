'use strict';
// make firstName and lastName available, not only for
// reading, but for writing

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperty(this, 'firstName', {
    get: function() {
      return this.fullName.split(' ')[0];
    },

    set: function(value) {
      let splitName = this.fullName.split(' ');
      splitName[0] = value;
      this.fullName = splitName.join(' ');
    }
  });

  Object.defineProperty(this, 'lastName', {
    get: function() {
      return this.fullName.split(' ')[1];
    },

    set: function(value) {
      let splitName = this.fullName.split(' ');
      splitName[1] = value;
      this.fullName = splitName.join(' ');
    }
  });
}

// Another variant

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperty(this, 'firstName', {
    get: function() {
      return this.fullName.split(' ')[0];
    },

    set: function(newFirstName) {
      this.fullName = newFirstName + ' ' + this.lastName;
    }
  });

  Object.defineProperty(this, 'lastName', {
    get: function() {
      return this.fullName.split(' ')[1];
    },

    set: function(newLastName) {
      this.fullName = this.firstName + ' ' + newLastName;
    }
  });
}

var vasya = new User("Василий Попкин");
