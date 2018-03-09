// create User constructor with private firstName
// and surname, setters and getter

function User() {
  let firstName = 'not set';
  let surname = 'not set';

  this.setFirstName = function (fName) {
    firstName = fName;
  };

  this.setSurname = function (sName) {
    surname = sName;
  };

  this.getFullName = () => `${firstName} ${surname}`;
}

const user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');

console.log(user.getFullName()); // Петя Иванов
