
1///////////////////////////////////////

function mapping(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }

  let numbers = [1, 2, 3, 4, 5];

  function square(x) {
    return x * x;
  }

  let squaredNumbers = mapping(numbers, square);
  console.log(squaredNumbers); 

  ////////////////////////////////////////////////////


2////////////////////////////////////////////////////////


function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
  }

  let number = [1, 2, 3, 4, 5];

  function sum(a, b) {
    return a + b;
  }

  let total = myReduce(number, sum, 0);
  console.log(total); 


3///////////////////////////////////////////////////////////////



let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]
    
    
     const mappedUsers = users.map(user => user.name);
        console.log(mappedUsers);
    
    
     const filteredUsers = users.filter(user => user.isActive);
        console.log(filteredUsers);
    
     const foundUser = users.find(user => user.gender === "female");
        console.log(foundUser);
    
    
    users.forEach(user => console.log(user.name));
    
    users.push({
          index: 6,
          isActive: true,
          balance: "$2,345.67",
          name: "John Doe",
          gender: "male",
          phone: "+1 (123) 456-7890",
          address: "123 Main Street, Anytown, USA"
        });
    
        console.log(users);



       // Метод filter() 
       // Метод map() - 
       // Метод find()            Це немутабельний метод, оскільки не змінює оригінальний масив.
       // Метод forEach()


      /// Метод push()- Це мутабельний метод, оскільки змінює оригінальний масив.