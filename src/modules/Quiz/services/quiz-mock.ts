import { NEXT, REACT, TESTS } from "./quiz-const";
import { TQuiz } from "./quiz-type";

const quizJs: TQuiz[] = [
  {
    id: 1,
    question:
      "What is the output of the following code? \n Boolean('0') === true",
    answer: "true \n - Any non-empty string is true",
    category: "JS",
    level: 1,
  },
  {
    id: 2,
    question:
      "What is the output of the following code? \n Boolean(' ') === false",
    answer: "false \n - Any non-empty string is true",
    category: "JS",
    level: 1,
  },
  {
    id: 3,
    question: "What is the output of the following code? \n [] == ''",
    answer:
      "true - 0 == 0 \n - When comparing two different types, JavaScript converts the values to numbers.",
    category: "JS",
    level: 1,
  },
  {
    id: 4,
    question: "What is the output of the following code? \n null == undefined",
    answer:
      "true \n - null and undefined are equal to each other and nothing else.",
    category: "JS",
    level: 1,
  },
  {
    id: 5,
    question: `Calculate the sum of the elements (in TS) \n
    sum([1, 2, 3])`,
    answer: `const sum = (arr: numbers[]) => arr.reduce((total, el) => total + el, 0); \n`,
    category: "JS",
    level: 1,
  },
  {
    id: 6,
    question: `Create a function that allows you to override the default configuration (in TS) \n
    const DEFAULT_CONFIG: any = {
      domain: 'https://domain.com',
      port: '80',
    }; \n
    function createConfig(config: any): any {} \n
    createConfig({
      port: '80',
    });`,
    answer: `interface IConfig {
      domain: string;
      port: '80' | '90';
    }
    
    const DEFAULT_CONFIG: IConfig = {
      domain: 'https://domain.com',
      port: '80',
    };

    function createConfig(config: Partial<IConfig>): IConfig {
      return Object.assign({}, DEFAULT_CONFIG, config);
    }
    `,
    category: "JS",
    level: 2,
  },
  {
    id: 7,
    question: `Convert object to array`,
    answer: `const newObj = Object.entries(obj);`,
    category: "JS",
    level: 1,
  },
  {
    id: 8,
    question: `Convert array to object`,
    answer: `{ ...['a', 'b', 'c'] }
    // with custom keys
    const newObj = arr.reduce((acc, el) => ({ ...acc, [el]: el }), {});`,
    category: "JS",
    level: 1,
  },
  {
    id: 9,
    question: `Create function pick(obj, keys) that returns a new object with only the keys specified in the array keys (in TS) \n
    pick(user, 'name', 'age')`,
    answer: `const pick = <T, K extends string & keyof T>(obj: T, ...keys: K[]): Pick<T, K> => {
      return Object.entries(obj)
      .filter(([key]: Array<K>) => keys.includes(key))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) as Pick<T, K>;
      `,
    category: "JS",
    level: 2,
  },
  {
    id: 10,
    question: `How to save three first elements of the array to the variables a, b, c? \n
    const arr = [1, 2, [3, 4]]];`,
    answer: `const [a, b, [c]] = arr;`,
    category: "JS",
    level: 1,
  },
  {
    id: 11,
    question: `We ned to get the opening hours of the restaurant for Thursday and Friday. \n
    Save them to the different variables. \n
    const openingHours = {
      thu: {
        open: 12,
        close: 22,
        },
      fri: {
        open: 11,
        close: 23,
        },
    }`,
    answer: `const {  
      thu: { open: openThurs, close: closeThurs }, 
      fri: { open: openFri, close: closeFri } 
    } = openingHours;`,
    category: "JS",
    level: 1,
  },
  {
    id: 12,
    question: `const fruits = ['apple', 'banana', 'orange']; \n
    Create a new array with the first element removed.
    Create a new array with lemon added to the beginning of the array.`,
    answer: `const [, ...rest] = fruits;
    const newFruits = ['lemon', ...fruits];`,
    category: "JS",
    level: 1,
  },
  {
    id: 13,
    question: `const openingHours = {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 11,
        close: 23,
      },
    }; \n
    Save the opening hours of the restaurant for weekDays and sat to the different variables.`,
    answer: `const { sat, ...weekDays } = openingHours;`,
    category: "JS",
    level: 1,
  },
  {
    id: 14,
    question: `Create a function that accepts endless number of arguments and returns the sum of them.`,
    answer: `const sum = (...args: number[]) => args.reduce((acc, el) => acc + el, 0);`,
    category: "JS",
    level: 1,
  },
  {
    id: 15,
    question: `What is the output of the following code? \n
    console.log(2 || 'Anna');
    console.log('' || 'Anna');`,
    answer: `
      console.log(2 || 'Anna'); // 2
      console.log('' || 'Anna'); // Anna`,
    category: "JS",
    level: 1,
  },
  {
    id: 16,
    question: `Pass default value to the variable guestsCount if it is undefined.`,
    answer: `const guestsCount = passedValueOfGuests ?? 10;`,
    category: "JS",
    level: 1,
  },
  {
    id: 17,
    question: `Assign default value to the variable userName if it is undefined:`,
    answer: `const userName = passedValueOfUserName || 'Anna';`,
    category: "JS",
    level: 1,
  },
  {
    id: 18,
    question: `What is the output of the following code? \n
    console.log(0 && 'Anna');`,
    answer: `console.log(0 && 'Anna'); // 0`,
    category: "JS",
    level: 1,
  },
  {
    id: 19,
    question: `Use short syntax for the following code: \n
    if (user.printHello) {
      user.printHello('Anna');
    }`,
    answer: `user.printHello?.('Anna');`,
    category: "JS",
    level: 1,
  },
  {
    id: 20,
    question: `Use short syntax for the following code: \n
    const orderPizza = restaurant.orderPizza ?? restaurant.orderPizza();`,
    answer: `const orderPizza = restaurant.orderPizza?.();`,
    category: "JS",
    level: 1,
  },
  {
    id: 21,
    question: `Where is the potential problem with the following code? \n
    const height = 0;
    const myHeight = height || 100;
    const myHeight2 = height ?? 100;`,
    answer: `const height = 0;
    const myHeight = height || 100; // 100 - it can be a problem
    const myHeight2 = height ?? 100; // 0`,
    category: "JS",
    level: 1,
  },
  {
    id: 22,
    question: `How to write this code shorter? \n
    rest.numGuests = rest.numGuests ?? 10;`,
    answer: `rest.numGuests ??= 10;`,
    category: "JS",
    level: 1,
  },
  {
    id: 23,
    question: `How to write this code without if statement? \n
    if (team1.score > team2.score) {
      console.log('Team 1 wins');
    } else {
      console.log('Team 2 wins');
    })`,
    answer: `team1.score > team2.score && console.log('Team 1 wins');
    team1.score < team2.score && console.log('Team 2 wins');`,
    category: "JS",
    level: 1,
  },
  {
    id: 24,
    question: `How to loop the array without using function? \n
    It can be useful when working in an async function.`,
    answer: `for (const [i, el] of arr.entries()) {
      console.log(\`\${i + 1}: \${el}\`);
      }`,
    category: "JS",
    level: 1,
  },
  {
    id: 25,
    question: `const openingHours = {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
    }; \n
    Display message if the restaurant is open or closed for every day of the week.
    Use the for loop.`,
    answer: `for (const [day, { open, close }] of Object.entries(openingHours)) {
      console.log(\`On \${day} we open at \${open} and close at \${close}\`);
    }`,
    category: "JS",
    level: 1,
  },
  {
    id: 26,
    question: `const products = {
      bread: 10,
      milk: 15,
      cheese: 20,
    } \n
    Calculate average price of the products.`,
    answer: `const values = Object.values(products);
    with for loop it would be:
    let sum = 0;
    for (const value of values) {
      sum += value;
    }
    //const sum = values.reduce((acc, el) => acc + el, 0);
    const avg = sum / values.length;`,
    category: "JS",
    level: 1,
  },
  {
    id: 27,
    question: `const presents = ['teddy bear', 'car', 'doll', 'car'];
    Create an object with the key as a present and value as a number (quantity) of presents.
    Add type TPresentObj to the object.`,
    answer: `const presents = ['teddy bear', 'car', 'doll', 'car'] as const;
    type TPresentObj = {
      [key in typeof presents[number]]: number;
    };
    const presentObj = {} as TPresentObj;
    for (const present of presents) {
      presentObj[present] = presentObj[present] + 1 || 1;
    }`,
    category: "JS",
    level: 2,
  },
  {
    id: 28,
    question: `const game = {
      team1: 2.5,
      team2: 5.5,
      team3: 4.5
      } \n
      Print the team with the highest score.`,
    answer: `const entries = Object.entries(game);
      let max = 0;
      let winner;
      for (const [team, score] of entries) {
        if (score > max) {
          max = score;
          winner = team;
        }
      }
      console.log(\`\${winner} wins with \${max} points\`);`,
    category: "JS",
    level: 1,
  },
  {
    id: 29,
    question: `const stuff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
    Remove duplicates from the array.`,
    answer: `
    // if JS
    const uniqueStuff = [...new Set(stuff)];
    // if TS
    const uniqueStuff = Array.from(new Set(stuff));`,
    category: "JS",
    level: 1,
  },
  {
    id: 30,
    question: `Create a set of products`,
    answer: `const products = new Set(['bread', 'milk', 'cheese', 'bread']);`,
    category: "JS",
    level: 1,
  },
  {
    id: 31,
    question: `const str = 'hello world';
    Count how many different letters are in the string.`,
    answer: `const str = 'hello world';
    const letters = new Set(str);
    console.log(letters.size);`,
    category: "JS",
    level: 1,
  },
  {
    id: 32,
    question: `Create a map of products`,
    answer: `const products = new Map();
    products.set('bread', 10).set('milk', 15).set('cheese', 20);`,
    category: "JS",
    level: 1,
  },
  {
    id: 33,
    question: `How to get a position of the character in the string?`,
    answer: `const str = 'hello world';
    const pos = str.indexOf('o');`,
    category: "JS",
    level: 1,
  },
  {
    id: 34,
    question: `Create a function that checks if the seat is an aisle seat.
    Eg: 11B and 11C are aisle seats. 11A and 11D are not.`,
    answer: `const isAisleSeat = (seat: string):boolean => {
      const s = seat.slice(-1);
      return s === 'B' || s === 'C';
    }`,
    category: "JS",
    level: 1,
  },
  {
    id: 35,
    question: `Create a function that checks a commit message.
    It should have feat: or fix: prefix and at least 5 characters.
    If the letters of the prefix are capitalized it should convert them to lowercase.`,
    answer: `const isValidCommit = (message: string):boolean => {
      const prefix = message.slice(0, 5).toLowerCase();
      return (prefix === 'feat:' || prefix === 'fix:') && message.length > 5;
    }
    const isValidCommit1 = (message: string):boolean => {
      const converts = message.toLowerCase();
      return converts.startsWith('feat:') || converts.startsWith('fix:') && message.length > 5;
    }`,
    category: "JS",
    level: 2,
  },
  {
    id: 36,
    question: `from the string 'John Smith' create two variables: firstName and lastName`,
    answer: `const [firstName, lastName] = 'John Smith'.split(' ');`,
    category: "JS",
    level: 1,
  },
  {
    id: 37,
    question: `Create a function that takes a credit card number and only displays the last four characters.
    The rest of the card number must be replaced by ************.`,
    answer: `const maskCreditCard = (number: string):string => {
      const last = number.slice(-4);
      return last.padStart(number.length, '*');
    }`,
    category: "JS",
    level: 1,
  },
  {
    id: 38,
    question: `Create a function that converts a name variable from snake_case to camelCase.`,
    answer: `const toCamelCase = (name: string):string => {
      const [first, ...rest] = name.split('_');
      return first + rest.map(word => word[0].toUpperCase() + word.slice(1)).join('');
      }`,
    category: "JS",
    level: 1,
  },
  {
    id: 39,
    question: `Create a function that accepts a string and returns a one word string with no spaces.
    First letter of each word should be capitalized.`,
    answer: `const toCamelCase = (message: string):string => {
      const words = message.split(' ');
      return words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
      }`,
    category: "JS",
    level: 1,
  },
  {
    id: 40,
    question: `Create this function: greet('Hi')(‘John’)`,
    answer: `// we can use closure
    const greet = (greeting: string) => (name: string) => \`\${greeting} \${name}\`;`,
    category: "JS",
    level: 2,
  },
  {
    id: 41,
    question: `How to use this function:
    const company = {
      name: 'Eurowings',
      code: 'EW',
    }
    function book(user, flight) {
      console.log(\`\${user} booked a seat on \${this.name} flight \${this.code}\${flight}\`);
    }`,
    answer: `book.call(company, 'John', 123);
    book.apply(company, ['John', 123]);
    const bookEW = book.bind(company);
    bookEW('John', 123);
    // or book.bind(company)('John', 123);`,
    category: "JS",
    level: 2,
  },
  {
    id: 42,
    question: `Solve this problem with partial application:
    const person = {
      name: 'John',
    }
    function introduce(greeting, message) {
      console.log(\`\${greeting}! My name is \${this.name}. \${message}\`);
    }
    introduce('Hi', 'I am a developer');`,
    answer: `
    const personIntroduce = introduce.bind(person, 'Hi');
    personIntroduce('I am a developer');`,
    category: "JS",
    level: 2,
  },
  {
    id: 43,
    question: `Fix the problem:
    const euroWings = {
      planes: 300,
      buyPlane() {
        this.planes++;
        console.log(this);
      },
    }
    const btn = document.querySelector('.buy');
    btn.addEventListener('click', euroWings.buyPlane);`,
    answer: `btn.addEventListener('click', euroWings.buyPlane.bind(euroWings));`,
    category: "JS",
    level: 2,
  },
  {
    id: 44,
    question: `Improve this code with partial application:
    const addTax = (rate, value) => value + value * rate;`,
    answer: `const addVat = addTax.bind(null, 0.23);
    addVat(100);`,
    category: "JS",
    level: 2,
  },
  {
    id: 45,
    question: `Create own bind function`,
    answer: `const bind = (fn, context, ...args) => (...fnArgs) => fn.apply(context, [...args, ...fnArgs]);`,
    category: "JS",
    level: 2,
  },
  {
    id: 46,
    question: `Create a partial application function`,
    answer: `const partial = (fn, ...args) => (...fnArgs) => fn(...args, ...fnArgs);`,
    category: "JS",
    level: 2,
  },
  {
    id: 47,
    question: `Create a function const coerceAmount = (amount: number | { amount: number }) => {}
    that will return the amount if it is a number or the amount property if it is an object.`,
    answer: `const coerceAmount = (amount: number | { amount: number }):number => {
      if (typeof amount === 'number') {
        return amount;
      }
      return amount.amount;
    }`,
    category: "JS",
    level: 2,
  },
  {
    id: 48,
    question: `How to get the last element of the array?`,
    answer: `const last = <T>(array: T[]):T => array.at(-1);`,
    category: "JS",
    level: 1,
  },
  {
    id: 49,
    question: `Create a map with currency codes as keys and currency names as values.
    Iterate over the map and print the currency code and currency name.`,
    answer: `const currencies = new Map([
      ['USD', 'United States dollar'],
      ['EUR', 'Euro'],
      ['GBP', 'Pound sterling'],
      ]);
    // with for...of
    for (const [code, name] of currencies) {
      console.log(\`\${code}: \${name}\`);
    }
    // with forEach
    currencies.forEach((name, code) => {
      console.log(\`\${code}: \${name}\`);
    });`,
    category: "JS",
    level: 1,
  },
  {
    id: 50,
    question: `Create a set with currency codes.
    Iterate over the set and print the currency code.`,
    answer: `const currencies = new Set(['USD', 'EUR', 'GBP']);
    // with for...of
    for (const code of currencies) {
      console.log(code);
    }
    // with forEach
    currencies.forEach(code => {
      console.log(code);
    });`,
    category: "JS",
    level: 1,
  },
  {
    id: 51,
    question: `Display only positive numbers from the array [-3, 33, 38, 5]`,
    answer: `const array = [-3, 33, 38, 5];
    const positiveNumbers = array.filter(number => number > 0);`,
    category: "JS",
    level: 1,
  },
  {
    id: 52,
    question: `Create a copy of the object { name: 'John', age: 25 } and add the key isAdmin with the value false`,
    answer: `
    const user = { name: 'John', age: 25 };
    const admin = { ...user, isAdmin: false };
    // or
    const admin = Object.assign({}, user, { isAdmin: false });`,
    category: "JS",
    level: 1,
  },
  {
    id: 53,
    question: `Find the maximum number in the array [-3, 33, 38, 5]`,
    answer: `const array = [-3, 33, 38, 5];
    const max = Math.max(...array);
    // or
    const max = array.reduce((acc, value) => (value > acc ? value : acc), array[0]);`,
    category: "JS",
    level: 1,
  },
  {
    id: 54,
    question: `Sort the array of Users by name \n
    const users = [
      { name: 'John', age: 25 },
      { name: 'Adam', age: 30 },
    ];`,
    answer: `const users = [
      { name: 'John', age: 25 },
      { name: 'Adam', age: 30 },
      ];
      const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
      
      // or
      const sortedUsers = users.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });`,
    category: "JS",
    level: 1,
  },
  {
    id: 55,
    question: `Calculate the total amount of the transactions \n
    const users = [
      { name: 'John', transactions: [10, -5, 10] },
      { name: 'Adam', transactions: [5, 10] },
      ];`,
    answer: `const users = [
      { name: 'John', transactions: [10, -5, 10] },
      { name: 'Adam', transactions: [5, 10] },
      ];
      const totalAmount = users
        .flatMap(user => user.transactions)
        .reduce((acc, value) => acc + value, 0);`,
    category: "JS",
    level: 1,
  },
  {
    id: 56,
    question: `Create an array and fill it with 10 random numbers`,
    answer: `const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    // or
    const array = Array(10).fill(0).map(() => Math.floor(Math.random() * 10));`,
    category: "JS",
    level: 1,
  },
  {
    id: 57,
    question: `Pick all the list items \n
    <ul><li>100</li><li>200</li><li>300</li></ul> \n
    and calculate their sum`,
    answer: `const listItems = document.querySelectorAll('li');
    const sum = Array.from(listItems)
      .map(item => Number(item.textContent))
      .reduce((acc, value) => acc + value, 0);
      // or
      const sum = [...listItems]
      .map(item => Number(item.textContent))
      .reduce((acc, value) => acc + value, 0);`,
    category: "JS",
    level: 1,
  },
  {
    id: 58,
    question: `const users = [
      { name: 'John', movement: [10, -5, 10] },
      { name: 'Adam', movement: [5, 10] },
      ]; \n
      Calculate how many users have more than 10$ in their account`,
    answer: `const users = [
      { name: 'John', movement: [10, -5, 10] },
      { name: 'Adam', movement: [5, 10] },
      ];
      const usersWithMoreThan10 = users
      .filter(user => user.movement.reduce((acc, value) => acc + value, 0) > 10)
      .length;`,
    category: "JS",
    level: 1,
  },
  {
    id: 59,
    question: `const users = [
      { name: 'John', movement: [10, -5, 10] },
      { name: 'Adam', movement: [5, 10] },
      ]; \n
      Create a new object with the sum of deposits and withdrawals`,
    answer: `const users = [
      { name: 'John', movement: [10, -5, 10] },
      { name: 'Adam', movement: [5, 10] },
      ];
      const totalMovement = users.flatMap(user => user.movement)
      .reduce((acc, value) => {
        acc[value > 0 ? 'deposits' : 'withdrawals'] += value;
        return acc;
      }, { deposits: 0, withdrawals: 0 });`,
    category: "JS",
    level: 1,
  },
  {
    id: 60,
    question: `Create an array of 10 sorted numbers [1,2,3...10]`,
    answer: `const arr = [...Array(10).keys()]
    // In ES6
    Array.from(Array(10).keys())
    `,
    category: "JS",
    level: 1,
  },
  {
    id: 61,
    question: `const dogs = [
      { name: 'Max', age: 5, owners:['Alex', 'Sarah] },
      { name: 'Tob', age: 3, owners:['Alice', 'Bob] },]; \n
    Save the Sarah's dog in a variable.`,
    answer: `const dogs = [
      { name: 'Max', age: 5, owners:['Alex', 'Sarah] },
      { name: 'Tob', age: 3, owners:['Alice', 'Bob] },];
    const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));`,
    category: "JS",
    level: 1,
  },
  {
    id: 62,
    question: `const dogs = [
      { name: 'Max', age: 5, owners:['Alex', 'Sarah] },
      { name: 'Tob', age: 3, owners:['Alice', 'Bob] },]; \n
    Get the array of all the owners of the dogs older than 4 years`,
    answer: `const dogs = [
      { name: 'Max', age: 5, owners:['Alex', 'Sarah] },
      { name: 'Tob', age: 3, owners:['Alice', 'Bob] },];
      const owners = dogs
      .filter(dog => dog.age > 4)
      .flatMap(dog => dog.owners);`,
    category: "JS",
    level: 1,
  },
  {
    id: 63,
    question: `Create a Promise that resolves in 1 second and returns the string 'Hello'`,
    answer: `const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello');
        }, 1000);
        });
      promise.then((data) => console.log(data));`,
    category: "JS",
    level: 2,
  },
  {
    id: 64,
    question: `Create a win lottery function that returns a promise. 
    The function should have a 50% chance of winning the lottery (resolve) 
    and a 50% chance of losing it (reject).`,
    answer: `const lotteryPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() >= 0.5 ? resolve('You win') : reject('You lose');
        }, 2000);
        });
      lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));`,
    category: "JS",
    level: 2,
  },
  {
    id: 65,
    question: `Create a "wait" function that takes a number as a parameter.
    The function should return a promise that resolves after the number of seconds passed as a parameter.`,
    answer: `const wait = (seconds: number) => new Promise(
      (resolve) => setTimeout(resolve, seconds * 1000)
      );
    wait(3).then(() => console.log('Hello'));`,
    category: "JS",
    level: 2,
  },
  {
    id: 66,
    question: `Promisify the function: \n
    navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );`,
    answer: `const getPosition = () => new Promise(
      (resolve, reject) => { 
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );
    getPosition().then(pos => console.log(pos));`,
    category: "JS",
    level: 2,
  },
  {
    id: 67,
    question: `Rename variables MyCity and MyCountry when extracting values from an object: \n
    const user = {
      name: 'John',
      address: {
        city: 'New York',
        country: 'USA',
      },
    };`,
    answer: `
    const { name, address: { city: MyCity, country: MyCountry } } = user;
    console.log(name, MyCity, MyCountry);`,
    category: "JS",
    level: 1,
  },
  {
    id: 68,
    question: `Create a function getTodos for mocking API calls.`,
    answer: `const getTodos = () => new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockTodos);
          }, 1000);
        });`,
    category: "JS",
    level: 2,
  },
  {
    id: 69,
    question: `Create a function createImage, that returns a promise that resolves to an image element. \n
    The function should take a single parameter, the source of the image. \n
    When the image is loaded, append it to the DOM element with the id "image". \n
    If there is an error loading the image (listen for the error event) \n
    throw an error that includes the text "Image load failed".`,
    answer: `const createImage = (src: string) => new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = src;
      img.addEventListener('load', () => {
        document.getElementById('image').appendChild(img);
        resolve(img);
      });
      img.addEventListener('error', () => {
        reject(new Error('Image load failed'));
      });
      });`,
    category: "JS",
    level: 2,
  },
  {
    id: 70,
    question: `Create a function that fetches a user from API \n
    or closes by timeout if the API is not responding. \n
    Create a timeout function that will reject the promise after 5 seconds.`,
    answer: `
    const timeout = () => new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000));
    const data = await Promise.race([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      timeout(),
      ]);`,
    category: "JS",
    level: 2,
  },
  {
    id: 71,
    question: `Get the current date and time`,
    answer: `const date = new Date();
    console.log(date);`,
    category: "JS",
    level: 1,
  },
  {
    id: 72,
    question: `Save user name to the cookie`,
    answer: `document.cookie = 'name=John';`,
    category: "JS",
    level: 1,
  },
  {
    id: 73,
    question: `Create a function "dialog", using generators`,
    answer: `function* genDialog() {
      const response1 = yield "What's your name ?";
      console.log('response 1 : ', question1); 
      // "response 1 : ", "My name is Anna !"
      const response2 = yield "Where do you live ?"
    }
    const dialog = genDialog();
    console.log('question 1: '+ dialog.next('Hi').value);
    // "question 1: What's your name ?"
    const answer1 = 'My name is Anna !';
    console.log('question 2: '+ dialog.next(answer1).value);
    // "question 2: Where do you live ?"
    `,
    category: "JS",
    level: 3,
  },
  {
    id: 74,
    question: `How to copy Map`,
    answer: `const newMap = new Map(myMap)`,
    category: "JS",
    level: 2,
  },
  {
    id: 75,
    question: `Convert an object to Map and back`,
    answer: `const map = new Map(Object.entries(obj));
    const obj2 = Object.fromEntries(map)`,
    category: "JS",
    level: 2,
  },
  {
    id: 76,
    question: `How to get the current time in sec.`,
    answer: `Math.floor(Date.now() / 1000)`,
    category: "JS",
    level: 1,
  },
  {
    id: 77,
    question: `Create a function myOmit`,
    answer: `const myOmit = <T extends object, P extends keyof T>(
      obj: T,
      ...args: P[]
    ): Omit<T, P> => {
      const keys = Object.keys(obj);
      return keys.reduce((acc, prop) => {
        if (!args.includes(prop)) {
          console.log(prop);
          return (acc[prop] = obj[prop]);
        }
        return acc;
      }, {}) as Omit<T, P>;
    };`,
    category: "JS",
    level: 2,
  },
  {
    id: 78,
    question: `Create a function freeze(myObj:any):any`,
    answer: `const freeze = <T extends object>(myObj: T): Readonly<T> =>
    Object.freeze(myObj)`,
    category: "JS",
    level: 2,
  },
  {
    id: 79,
    question: `Create an analog of React.useState
    const [getValue, setValue] = useState<number>(1)`,
    answer: `const myState = <T>(initValue:T):[getter: () => T, setter: (v: T) => void] => {
      let value = initValue;
      return [
        () => value,
        (newValue: T) =>  value = newValue
      ]
    }
    \n
    const [getCounter, setCounter] = myState<number>(1)`,
    category: "JS",
    level: 2,
  },
  {
    id: 80,
    question: `Create a counter`,
    answer: `const myCounter = (initValue) => {
      let counter = initValue;
      return () => counter + 1;
    }`,
    category: "JS",
    level: 2,
  },
  {
    id: 80,
    question: `Create own filter function, use reduce`,
    answer: `const filter = <T>(arr: T[], cb: (item: T) => boolean): T[] => {
      return arr.reduce((acc, item) => {
        if (cb(item)) {
          arr.push(item);
        }
        return acc;
      }, []);
    };
    // way 2
    const filter = <T>(arr: T[], cb: (item: T) => boolean): T[] => {
      return arr.reduce((acc, item) => cb(item) ? [...acc, item] : acc, []);
    };
    `,
    category: "JS",
    level: 2,
  },
  {
    id: 81,
    question: `Create own map function, use reduce`,
    answer: `const myMap = <T, U>(arr: T[], cb: (item: T) => U): U[] => {
      return arr.reduce((acc, item) => {
        acc.push(cb(item));
        return acc;
      }, [] as U[]);
    };
    // way 2
    const myMap = <T, U>(arr: T[], cb: (item: T) => U): U[] => {
      return arr.reduce((acc, item) => [...acc, cb(item)], [] as U[]);
    };`,
    category: "JS",
    level: 2,
  },
  {
    id: 82,
    question: `We get from API array of users objects {id: 's2dd', name....}.
    Create a function that convert it to the object {'s2dd': { name....}}`,
    answer: `const getUsers = (users: TUser[]): Record<TUser['id'], Omit<TUser, 'id'>> 
    => users.reduce((acc, item) => {
      const {id, ...rest} = item;
      return {...acc, {[id]: rest}}
    }, {})`,
    category: "JS",
    level: 2,
  },
  {
    id: 83,
    question: `Create a logger function using factory method.
    The logger factory should create ProductionLogger or DevelopmentLogger
    interface ILogger {
      info(ms: string): void,
      error(ms: string): void // only for devMode
    }`,
    answer: `
    const productionLogger = (): ILogger => ({
      info(ms: string): void {
        console.log(ms);
      },
      error(ms: string): void {}
    });
    
    const developerLogger = (): ILogger => ({
      info(ms: string): void {
        console.log(ms);
      },
      error(ms: string): void {
        console.log(ms);
      }
    });
    
    export const createLogger = () => {
      if (process.env.NODE_ENV === "production") {
        return productionLogger();
      }
    
      return developerLogger();
    };
    
    const logger = createLogger();
    logger.error("test");`,
    category: "JS",
    level: 2,
  },
  {
    id: 84,
    question: `Improve this code:
    const canSave = Boolean(title) && Boolean(content) && Boolean(author)`,
    answer: `
    const canSave = [title, content, author].every(Boolean)`,
    category: "JS",
    level: 2,
  },
  {
    id: 85,
    question: `Convert number to currency: eg 1250 -> 1 250$`,
    answer: `
    const formatter = new Intl.NumberFormat("en-En", {
      style: "currency",
      currency: "USD"
    });
    
    const price = formatter.format(1234.5);`,
    category: "JS",
    level: 2,
  },
  {
    id: 85,
    question: `How to get price with data attributes`,
    answer: `
    <div id="product" data-price="45"></div>
    // JS
    const el = document.getElementById("product");
    const price = el.dataset.price;`,
    category: "JS",
    level: 2,
  },
  {
    id: 85,
    question: `Create a debounce function, give an using example`,
    answer: `
    const debounce = (cb, delay = 1000) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(cb(...args), delay
      }
    }
    // example
    const updateText = debounce((text) => { console.log(text)});
    const input = document.getElementById("myInput");
    input.addEventListener("input", (e) => {updateText(e.target.value)})`,
    category: "JS",
    level: 2,
    comment:
      "https://www.youtube.com/watch?v=cjIswDCKgu0&ab_channel=WebDevSimplified",
  },
  {
    id: 86,
    question: `Solve a console log issue:
    console.log(1);
    const a = new Promise((resolve, reject) => {
      console.log(2);
      reject();
    });
    a.then(() => console.log(3))
    .catch(() => console.log(4))
    .then(() => console.log(5));
    console.log(6);
    `,
    answer: `
    1 - 2 - 6 - 4 - 5`,
    category: "JS",
    level: 2,
    comment:
      "https://www.youtube.com/watch?v=cjIswDCKgu0&ab_channel=WebDevSimplified",
  },
  {
    id: 87,
    question: `Sort an array via date
    const arr = [
      {date: "10.10.2010"},
      {date: "05.05.2015"},
      {date: "26.10.2020"},
      {date: "02.12.2012"}
    ]`,
    answer: `
    arr.sort((a,b) => new Date(a.date) - new Date(b.date))`,
    category: "JS",
    level: 2,
    comment:
      "https://www.youtube.com/watch?v=cjIswDCKgu0&ab_channel=WebDevSimplified",
  },
];

const quizTs: TQuiz[] = [
  {
    id: 101,
    question: `Write type for the function: \n
    const log = (message, userId = "Not signed in") => {
        let time = new Date().toISOString();
        console.log(time, message, userId);
    };`,
    answer: `type TLog = (message: string, userId?: string) => void;

    const log: TLog = (message, userId = "Not signed in") => {
      let time = new Date().toISOString();
      console.log(time, message, userId);
    };`,
    category: "TS",
    level: 1,
  },
  {
    id: 102,
    question: `Add types to the function below: \n
    const filter = (array, predicate) => {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (predicate(item)) {
          result.push(item);
        }
      }
      return result;
    };`,
    answer: `type TFilter = <T>(array:T[], predicate: (item:T)=> boolean)=>T[];

    const filter: TFilter = (array, predicate) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (predicate(item)) {
            result.push(item);
            }
        }
        return result;
    };`,
    category: "TS",
    level: 1,
  },
  {
    id: 103,
    question: `You have a function that can receive a union type argument. \n
    It is necessary to check the presence of the property and return it. \n`,
    answer: `const getProp = (obj: { a: number } | { b: string }) => {
        if ('a' in obj) {
          return obj.a;
        }
        return obj.b;
    };`,
    category: "TS",
    level: 1,
  },
  {
    id: 104,
    question: `Напишите программу с двумя пользовательскими типами, Dog и Fish, \n 
    объявленными с помощью классов. Каждый из этих типов должен иметь свойство name. \n
    Класс Dog должен иметь метод sayHello(): string, а класс Fish — метод dive(howDeep: number): string.\n
    Объявите новый тип Pet в качестве объединения Dog и Fish. \n
    Напишите функцию talkToPet(pet: Pet): string, которая будет использовать защиты типов \n
    и либо вызывать метод sayHello() для экземпляра Dog, либо выводить сообщение «Fish cannot talk, sorry».\n`,
    answer: `class Dog {
        name: string;
        constructor(readonly name: string) { };
        sayHello(): string {
          return "Dog says hello!";
        }
    }
    class Fish {
        constructor(readonly name: string) { };
        dive(howDeep: number): string {
          return "Fish is diving!";
        }
    }
    type Pet = Dog | Fish;
    const talkToPet = (pet: Pet): string => {
        if (pet instanceof Dog) {
          return pet.sayHello();
        }
        return "Fish cannot talk, sorry";
    };`,
    category: "TS",
    level: 1,
  },
  {
    id: 105,
    question: `Write type for the function: \n
    function printMe (content: any) { console.log(content); return content;}`,
    answer: `type TPrintMe = <T>(content: T) => T;`,
    category: "TS",
    level: 2,
  },
  {
    id: 106,
    question: `Write type for the function: \n
    function filterBy(property, value, array) {
      return array.filter(item => item[property] === value);
      }`,
    answer: `type TFilterBy = <T, P extends keyof T>(property: P,
      value: T[P], array: T[]) => T[];`,
    category: "TS",
    level: 2,
  },
  {
    id: 107,
    question: `Add types to the function below: \n
    function map(array, f) => {
      let result = []
      for (let i = 0; i < array.length; i++) {
      result[i] = f(array[i])
      }
      return result
    }`,
    answer: `function map<T, U>(array: T[], f: (item: T) => U): U[] {}`,
    category: "TS",
    level: 2,
  },
  {
    id: 108,
    question: `What are conditional types? How do you create them?`,
    answer: `C extends B ? TypeX : TypeY \n
    type MyExclude<T, U> = T extends U ? never : T;`,
    category: "TS",
    level: 2,
  },
  {
    id: 109,
    question: `To compile a TypeScript file, you use the following command`,
    answer: `tsc`,
    category: "TS",
    level: 2,
  },
  {
    id: 110,
    question: `Add types to the function below: \n
    function call(
      f: (...args: unknown[]) => unknown,
      ...args: unknown[]
      ): unknown {
      return f(...args)
    }
    call(fill, 10, 'a')`,
    answer: `function call<T extends unknown[], R>(
      f: (...args: T) => R,
      ...args: T
      ): R { .... }`,
    category: "TS",
    level: 2,
  },
  {
    id: 111,
    question: `Create class Cat that implements interface Animal (with name, eat(food), sleep(hours))`,
    answer: `interface Animal {
      readonly name: string
      eat(food: string): void
      sleep(hours: number): void
      }
      class Cat implements Animal {
        name = 'Whiskers'
        eat(food: string) {}
        sleep(hours: number) {}
      }`,
    category: "TS",
    level: 2,
  },
  {
    id: 112,
    question: `Get all the keys from the response object APIResponse`,
    answer: `type ResponseKeys = keyof APIResponse`,
    category: "TS",
    level: 2,
  },
  {
    id: 113,
    question: `Make all fields nullable: \n
    type Account = {
      id: number
      isEmployee: boolean
      notes: string[]
    }`,
    answer: `type NullableAccount = {
      [K in keyof Account]: Account[K] | null
      } or with Nullable<T>`,
    category: "TS",
    level: 2,
  },
  {
    id: 114,
    question: `Protect an object from modification when passed to a function: \n
    function mutableAction(person: IPerson) {}`,
    answer: `function mutableAction(person: Readonly<IPerson>) {}`,
    category: "TS",
    level: 2,
  },
  {
    id: 115,
    question: `Make a function call possible with only one parameter: \n
    interface IConfig {
      domain: string;
      port: '80' | '90';
    }
    
    const DEFAULT_CONFIG: IConfig = {
      domain: 'https://domain.com',
      port: '80',
    };
    
    function createConfig(config: any): any {
      return Object.assign({}, DEFAULT_CONFIG, config);
    }
    createConfig({
      port: '80',
    });`,
    answer: `function createConfig(config: Partial<IConfig>): IConfig {
      return Object.assign({}, DEFAULT_CONFIG, config);
    }`,
    category: "TS",
    level: 2,
  },
  {
    id: 116,
    question: `When can we use a Partial type? (2 examples))`,
    answer: `- override some parameters of the config object: createConfig({ port: '90' }) \n
     - updating the fields of an object: updateTask({ id: 1, completed: true })`,
    category: "TS",
    level: 2,
  },
  {
    id: 117,
    question: `Describe the utility type Required:`,
    answer: `type Required<T> = {
      [P in keyof T]-?: T[P];`,
    category: "TS",
    level: 2,
  },
  {
    id: 118,
    question: `Describe the Mapped type`,
    answer: `type MappedType<T> = {
      [K in keyof T]: T[K];
    };`,
    category: "TS",
    level: 2,
  },
  {
    id: 119,
    question: `Create a Type Guard for API response: \n
    type TResponse = TSuccessResponse | TErrorResponse;
    function processResponse(response: TResponse) {
      // Type Guard
    }`,
    answer: `function isErrorResponse(response: TResponse): response is TErrorResponse {
      return (response as TErrorResponse).error !== undefined;
      }`,
    category: "TS",
    level: 2,
  },
  {
    id: 120,
    question: `Create a function that return the second level menu \n
    const menu = {
      client: {
        react: React,
        angular: Angular,
      },
      server: {
        node: Node,
      }
    }
    const secondLevelMenu = getSecondLevelMenu(menu, 'client', 'react')`,
    answer: `function getSecondLevelMenu<T extends object, L1 extends keyof T, L2 extends keyof T[L1]>
    (obj: T, level1: L1, level2: L2) {
      return obj[level1][level2]
      }`,
    category: "TS",
    level: 2,
  },
  {
    id: 121,
    question: `Write an Exclusive<T, U> type that computes types that are either in T or in U, but not in both at once.\n
     For example, Exclusive<1 | 2 | 3, 2 | 3 | 4> should be resolved as 1|4.`,
    answer: `type Exclusive<T, U> = T extends U ? never : T | U extends T ? never : T | U;`,
    category: "TS",
    level: 2,
  },
  {
    id: 122,
    question: `Implement the built-in Pick<T, K> generic without using it.`,
    answer: `type MyPick<T, K extends keyof T> = {
      [P in K]: T[P];
      };`,
    category: "TS",
    level: 2,
  },
  {
    id: 123,
    question: `Implement the built-in Readonly<T> generic without using it.`,
    answer: `type MyReadonly<T> = {
      readonly [P in keyof T]: T[P];
    };`,
    category: "TS",
    level: 2,
  },
  {
    id: 124,
    question: `Given an array, transform it into an object type and the key/value must be in the provided array. \n
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const; \n
    type result = TupleToObject<typeof tuple>; \n
    Expected { tesla: 'tesla', 'model 3': 'model 3' ...}`,
    answer: `type TupleToObject<T extends readonly any[]> = {
      [P in T[number]]: P;
      };`,
    category: "TS",
    level: 2,
  },
  {
    id: 125,
    question: `How to get the type from the array? \n
    const animals = ['cat', 'dog', 'mouse'] as const;`,
    answer: `type Animal = typeof animals[number];`,
    category: "TS",
    level: 2,
  },
  {
    id: 126,
    question: `Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F \n
    type A = If<true, 'a', 'b'>  // expected to be 'a'`,
    answer: `type If<C extends boolean, T, F> = C extends true ? T : F;`,
    category: "TS",
    level: 2,
  },
  {
    id: 127,
    question: `Implement the built-in Exclude<T, U> \n
    type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'`,
    answer: `type MyExclude<T, U> = T extends U ? never : T;`,
    category: "TS",
    level: 2,
  },
  {
    id: 128,
    question: `Implement the dictionary for objects type \n
    const fruits = {apple: {name: 'apple', price: 10}, banana: {name: 'banana', price: 5}}`,
    answer: `type Dictionary<T> = {
      [key: string]: T;
      };`,
    category: "TS",
    level: 2,
  },
  {
    id: 129,
    question: `Add types for a general List component \n 
    const List = ({items, renderFn}) => { ... }`,
    answer: `const List = <T extends {}>({items, render} : {
      items: T[], 
      render: (item: T) => ReactNode
    }) => (<ul>
      {items.map((item, ind) => (<li key={ind}>{render(item)}</li>))}
      </ul>)`,
    category: "TS",
    level: 2,
  },
  {
    id: 130,
    question: `We have interface IUser with the fields: name, age, occupation, id, role. \n
    Create a type with all fields except id and role`,
    answer: `type IPublicUser = Omit<User, 'id' | 'role'>;`,
    category: "TS",
    level: 2,
  },
  {
    id: 131,
    question: `We have interface ICategory with the fields: name, id, parentId, products. \n
    Create a type with id and name fields`,
    answer: `type ICategoryShort = Pick<ICategory, 'id' | 'name'>;`,
    category: "TS",
    level: 2,
  },
  {
    id: 132,
    question: `We have interface ICategory with the fields: name, id, parentId, products. \n
    Create a type with all fields but not required`,
    answer: `type ICategoryAPI = Partial<ICategory>;`,
    category: "TS",
    level: 2,
  },
  {
    id: 133,
    question: `We have interface IUser with the fields: name, id \n
    Create a new interface the field role with the type 'admin' | 'user'`,
    answer: `interface IUserWithRole extends IUser {
      role: 'admin' | 'user';
      }`,
    category: "TS",
    level: 2,
  },
  {
    id: 134,
    question: `Create interface IResponse with the fields: data, status, error. \n
    Use it in the function "fetchByUrl" to get the data from the server \n`,
    answer: `interface IResponse<T> {
      data: T  | null;
      status: number;
      error: string | null;
      }
      const fetchByUrl = async <T>(url: string): Promise<IResponse<T>> => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return { data, status: response.status, error: null };
          } catch (error) {
            return { data: null, status: 500, error: error.message };
            }
        }
        
      fetchByUrl<User>(url)`,
    category: "TS",
    level: 2,
  },
  {
    id: 135,
    question: `Create class User with the fields: name, age and not public property keyId \n
    Add to the constructor the generation of the keyId \n
    Add method "login" that returns the string "$name $age" \n
    Create a new object from User`,
    answer: `class User {
      private keyId: string;
      constructor(public name: string, public age: number) {
        this.keyId = Math.random().toString(36).substr(2, 9);
      }
      get login() {
        return \`\${this.name} \${this.age}\`;
      }
      }
      const user = new User('John', 30);
      user.login`,
    category: "TS",
    level: 2,
  },
  {
    id: 136,
    question: `Create class Customer that inherits from class User (name, age) \n
    Add the field "discount" \n`,
    answer: `class Customer extends User {
      constructor(name: string, age: number, public discount: number) {
        super(name, age);
    }
      const customer = new Customer('John', 30, 10);`,
    category: "TS",
    level: 2,
  },
  {
    id: 137,
    question: `we should add some guests to the seats in the room \n
    [A1]: 'John', [A2]: 'Mary', [B1]: 'Bob', [B2]: 'Kate' \n
    Create class SeatAssignment with index property signature \n
    Why will we use it?`,
    answer: `class SeatAssignment {
      [seat: string]: string;
      }
      const seats = new SeatAssignment();
      seats.A1 = 'John';
      Answer: we don't know how many properties will be in the object`,
    category: "TS",
    level: 2,
  },
  {
    id: 138,
    question: `Write type for the function: \n
    interface LukeSkywalker {
      name: string;
    }
    const fetchLukeSkywalker = async (): LukeSkywalker => {
      const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
        return res.json();
      });
    
      return data;
    };`,
    answer: `type TFetchLukeSkywalker = () => Promise<LukeSkywalker>;`,
    category: "TS",
    level: 2,
  },
  {
    id: 139,
    question: `Should give a type error when you try to pass a non-string \n
    const users = new Set();`,
    answer: `const users = new Set<string>();`,
    category: "TS",
    level: 2,
  },
  {
    id: 140,
    question: `interface User {
      id: string;
      firstName: string;
      lastName: string;
    }
    How to create a new object type with _only_ the firstName and lastName properties of User?`,
    answer: `type TUser = Omit<User, 'id'>;`,
    category: "TS",
    level: 2,
  },
  {
    id: 141,
    question: `const myFunc = () => {
      return "hello";
    };
    How do we extract MyFuncReturn from myFunc?
    type MyFuncReturn = unknown;`,
    answer: `type MyFuncReturn = ReturnType<typeof myFunc>;`,
    category: "TS",
    level: 2,
  },
  {
    id: 142,
    question: `Create a union type for the following object: \n
    const testingFrameworks = {
      vitest: {
        label: "Vitest",
      },
      jest: {
        label: "Jest",
      },
      mocha: {
        label: "Mocha",
      },
    };
    // "vitest" | "jest" | "mocha"`,
    answer: `type TTestingFrameworks = keyof typeof testingFrameworks;`,
    category: "TS",
    level: 2,
  },
  {
    id: 143,
    question: `Write the objet that was describe: \n
    type T1 = { [P in "a" | "b"]: number };
    type T2 = { [P in "a" | "b"]: P}`,
    answer: `const T1: T1 = { a: 1, b: 2 };
    const T2: T2 = { a: "a", b: "b" };`,
    category: "TS",
    level: 2,
  },
  {
    id: 144,
    question: `Create own Partial type`,
    answer: `type TPartial<T> = { [P in keyof T]?: T[P] };`,
    category: "TS",
    level: 2,
  },
  {
    id: 145,
    question: `const myObj:any = {a: 3, b: 2} \n
    Create a type for myObj with Utility types.`,
    answer: `const myObj: Record<string, number> = {...}`,
    category: "TS",
    level: 2,
  },
  {
    id: 145,
    question: `type TPages = {
      [key:string] : TPageInfo
    } \n
    Rewrite this type with Utility Type`,
    answer: `type TPages = Record<string, TPageInfo>
    or don't create a separate type
    const pages:Record<string, TPageInfo> = {..}`,
    category: "TS",
    level: 2,
  },
  {
    id: 146,
    question: `type TColors =  "yellow" | "green" | [number, number, number] \n
    Create a type with only the string values (type TButtonColors)`,
    answer: `type TButtonColors = Extract<TColors, string>`,
    category: "TS",
    level: 2,
  },
  {
    id: 147,
    question: `Create a Type Guard for numbers`,
    answer: `const isNumber = (value : unknown): value is number => typeof value === 'number'`,
    category: "TS",
    level: 2,
  },
  {
    id: 148,
    question: `Create a Type Guard for not null and undefined`,
    answer: `const isNonNullable = <T>(value: T): value is NonNullable<T> =>
      typeof value !== "undefined" && value !== null;`,
    category: "TS",
    level: 2,
  },
  {
    id: 149,
    question: `Add types for 
    const get = (obj, key) => obj[key]`,
    answer: `const get = <T extend object, K extends keyof T>(obj:T, key:K) => obj[key]`,
    category: "TS",
    level: 2,
  },
  {
    id: 150,
    question: `Create a Type Guard "hasOwn" it checks if property exist in the obj
    hasOwn(obj, key)`,
    answer: `const hasOwn = <T extends object>(obj:T, key: PropertyKey): key is keyof T => Object.hasOwn(obj, key)`,
    category: "TS",
    level: 2,
  },
  {
    id: 151,
    question: `Create a Type Guard "isNumber" and use it with arrays filter`,
    answer: `const isNumber = (value : unknown): value is number => typeof value === 'number' \n
    const result = arr.filter(isNumber)`,
    category: "TS",
    level: 2,
  },
  {
    id: 152,
    question: `Create own ReturnType`,
    answer: `// new TS with constraints "extends (...args: any []) => any"
    type myReturnType<T extends (...args: any []) => any> = T extends (
      ...args: any[]
      ) => infer R ? R : never \n
    //or 
    type myReturnType<T> = T extends (
      ...args: any[]
      ) => infer R ? R : any`,
    category: "TS",
    level: 2,
  },
  {
    id: 153,
    question: `Create a function "pluck" that accepts an array of objects and property and return an array of values
    const dogs = [{name: 'Mimi', age: 12}, {name: 'Pluto', age: 8}];
    pluck(dogs, "age") -> [12, 8]`,
    answer: `const pluck = <T, K extends keyof T>(items: T[], prop: K):T[K][] => {
      return items.map((item) => item[key])
    }`,
    category: "TS",
    level: 2,
  },
];

const quizReact: TQuiz[] = [
  {
    id: 201,
    question: "Create a reducer to add an element (only case)",
    answer: "case 'ITEM__ADDED': return [...state, action.payload]",
    category: REACT,
    level: 2,
  },
  {
    id: 202,
    question: "Create a reducer to remove an element (only case)",
    answer:
      "case 'ITEM__REMOVED': return state.filter(item => item.id !== action.payload)",
    category: REACT,
    level: 2,
  },
  {
    id: 203,
    question:
      "Create a reducer to update an element in array of elements (only case)",
    answer:
      "case 'ITEM__UPDATED': return state.map(item => item.id === action.payload.id ? action.payload : item)",
    category: REACT,
    level: 2,
  },
  {
    id: 204,
    question: "Create a reducer to update a price of the element (only case)",
    answer:
      "case 'ITEM__PRICE_UPDATED': return state.map(item => item.id === action.payload.id ? {...item, price: action.payload.price} : item)",
    category: REACT,
    level: 2,
  },
  {
    id: 205,
    question: "Create a Component with a Render Props pattern",
    answer: `const Widget = ({renderContent}) => {
      // get data from the server, some logic
    return (
      <Card>
      <CardHeader title="Widget" />
        {data.map(item => <div>{renderContent(item)}</div>)
      </Card>
    });
    const UserWidget = () => <Widget renderContent={(item) => <UserItem item={item}>} />
    const ProductWidget = () => <Widget renderContent={(item) => <ProductItem item={item}>} />`,
    category: REACT,
    level: 3,
  },
  {
    id: 206,
    question: "Add routs to the App (with createBrowserRouter)",
    answer: ` Create an array with routes objects:
    const router = createBrowserRouter([
      {path: '/', element: <Home />, loader: async () => {}},}])
      And then add it to the App:
      <RouterProvider router={router}>`,
    category: REACT,
    level: 2,
  },
  {
    id: 207,
    question: "How to display a nested route?",
    answer: `Add a nested route in the App:
    <Route path="help" element={<HelpLayout />}>
      <Route path="faq" element={<Faq />} />
      </Route>
      And then in HelpLayout component:
    <Outlet />`,
    category: REACT,
    level: 2,
  },
  {
    id: 208,
    question: "How to fetch data in the route?",
    answer: `Use loader in the route:
    const userLoader = async ({params}) => {
      const response = await fetch(\`URL + params.id\`);
      return response.json();
    }
    And then add it to the route:
    const router = createBrowserRouter([
        {path: '/user/:id', element: <User />, loader: userLoader},
    ])
    And then use hook useLoaderData in the component:
    const data = useLoaderData();
    `,
    category: REACT,
    level: 3,
  },
  {
    id: 209,
    question: "Create a user slice with redux-toolkit. Add a setUser action.",
    answer: `export const userSlice = createSlice({
      name: 'user',
      initialState: {},
      reducers: {
        setUser: (state, action) => {
          const { id, email, token } = action.payload;
          state.id = id;
          state.email = email;
          state.token = token;
        },
      },
      extraReducers: {},
      })
      export const {setUser} = userSlice.actions;`,
    category: REACT,
    level: 2,
  },
  {
    id: 210,
    question: "Create a controlled input for email",
    answer: `const [email, setEmail] = useState('');
    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />`,
    category: REACT,
    level: 2,
  },
  {
    id: 211,
    question: `Configure React hook form with validation fields onBlur`,
    answer: `const { register, handleSubmit, formState: { errors } } = useForm<TInputs>({
      mode: 'onBlur',
      });`,
    category: REACT,
    level: 3,
  },
  {
    id: 212,
    question: `Create slice with redux-toolkit for counter with initial state 0. Add action with payload (add Types): increment.`,
    answer: `export const counterSlice = createSlice({
      name: 'counter',
      initialState: 0,
      reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
        },
        extraReducers: {},
        })
      export const {increment} = counterSlice.actions;`,
    category: REACT,
    level: 2,
  },
  {
    id: 213,
    question: `Create a Filter component with list of fruits. Add a filter by input value.`,
    answer: `
    const fruits = ['apple', 'banana', 'orange'];
    const Filter = () => {
      const [search, setSearch] = useState('');
      const filteredFruits = fruits.filter(fruit => fruit.includes(search));
      return (
        <div>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
          <ul>
            {filteredFruits.map(fruit => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </div>
      )}`,
    category: REACT,
    level: 3,
  },
  {
    id: 214,
    question: `Improve this component \n
    const Page = ({isLoading, errorMessage, content}) => {
      return (<div>
        <h1>Page</h1>
        {if (isLoading) {
          <div>Loading...</div>
        } else if (errorMessage) {
          <div>{errorMessage}</div>
        } else {
          <>
          <Search />
          <h3>Table</h3>
          <table>....</table>
          </>
        }}
    }`,
    answer: `const Page = ({isLoading, errorMessage, content}) => {
      const renderContent = () => {
        if (isLoading) {
          return <div>Loading...</div>
        }
        if (errorMessage) {
          return <div>{errorMessage}</div>
        }
        return (
          <>
          <Search />
          <h3>Table</h3>
          <table>....</table>
          </>
        )
      }
      return (
        <div>
          <h1>Page</h1>
          {renderContent()}
        </div>
      )
    }`,
    category: REACT,
    level: 3,
  },
  {
    id: 215,
    question:
      "Create a form with email input with React hook form. Add validation and errors for email.",
    answer: `const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    const onSubmit: SubmitHandler<TInputs> = data => console.log(data);
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && <span>This field is required</span>}
      </form>
    `,
    category: REACT,
    level: 3,
  },
  {
    id: 216,
    question: `Typing RootState in Redux`,
    answer: `export type RootState = ReturnType<typeof store.getState>;`,
    category: REACT,
    level: 3,
  },
  {
    id: 217,
    question: `Create a selector for user ids, the result should be sorted by number \n
    const users = [
      {id: 1, name: 'user 1'},
      {id: 2, name: 'user 2'},
    ]
    Get this data in the component.`,
    answer: `const selectUserIds = createSelector(
      (state: RootState) => state.users,
      users => users.map(user => user.id).sort((a, b) => a - b)
      ) \n
    const userIds = useSelector(selectUserIds);`,
    category: REACT,
    level: 3,
  },
  {
    id: 218,
    question: `Create a selector for user ids, the result should be sorted by number \n
    const state.ids = [2,6,3]
    Get this data in the component.`,
    answer: `const selectIds = createSelector(
      (state: RootState) => state.ids,
      ids => [...ids].sort((a, b) => a - b)
      ) \n
      const ids = useSelector(selectIds);`,
    category: REACT,
    level: 3,
  },
  {
    id: 219,
    question: `Get the page info by ID from the Redux store \n
    Current id is in the store`,
    answer: `const selectPageById = createSelector(
      (state: RootState) => state.pages,
      (state: RootState) => state.currentId,
      (pages, currentId) => pages.find(page => page.id === currentId)
      ) \n
      const page = useSelector(selectPageById)`,
    category: REACT,
    level: 3,
  },
  {
    id: 220,
    question: `Create a saga file (watcher and worker) for a counter \n
    As a side effect - display count ("s.counter.count") in the console`,
    answer: `function* workerCounterSaga() {
      const count = yield select(s => s.counter.count);
      console.log(count)
    }
    function* watchCounterSaga() {
      yield takeLatest(INCREASE_COUNT, workerCounterSaga);
      yield takeLatest(DECREASE_COUNT, workerCounterSaga);
    }
    `,
    category: REACT,
    level: 3,
  },
  {
    id: 220,
    question: `Create a module "latestNews" \n
    it should contain:
    - a button component, that request latest news,
    - action creator file with the actions: getLatestNews and setLatestNews,
    - a saga file, that make request and store information`,
    answer: `// a button component
    const handleGetNews = () => {
      dispatch(getLatestNews());
    }
    <button onclick={handleGetNews} />
    // AC file
    export const getLatestNews = () => ({
      type: GET_LATEST_NEWS
    })
    export const setLatestNews = (payload) => ({
      type: SET_LATEST_NEWS,
      payload
    })
    // Saga
    function* workerNewsSaga(){
      const news = yield call(fetchLatestNews);
      put(setLatestNews(news));
    }
    function* watcherNewsSaga(){
      yield takeLatest(GET_LATEST_NEWS, workerNewsSaga);
    }`,
    category: REACT,
    level: 3,
  },
  {
    id: 221,
    question: `Create a redux middleware: logger`,
    answer: `const logger = (store) => (next) => (action) => {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result
    }
    const store = createStore(reducer, undefined, applyMiddleware(logger)) // deprecated in RToolKit
    const store = configureStore({
      reducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    }); // new approach for RToolKit`,
    category: REACT,
    level: 3,
  },
  {
    id: 222,
    question: `Create a custom input element with autofocus`,
    answer: `export const WsInput = (props) => {
      const inputRef = useRef(null);

      useEffect(()=>{
        inputRef.current?.focus();
      }, []);

      return <input {...props} ref={inputRef} />
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 223,
    question: `Create a tooltip component. It should be closed by clicking outside the component.
    Add this component to App. `,
    answer: `const Tooltip = ({opened, onClose}) => {
      const tooltipRef = useRef(null);
      useEffect(()=>{
        if (!opened) return;

        const handleClick = (e) => {
          if (!tooltipRef.current) return;
          if (tooltipRef.current.contains(e.target)) return;
          onClose();
        }

        document.addEventListener('click', handleClick); // "mousedown" on R18
        return () => {
          document.removeEventListener('click', handleClick);
        } 
      }, [opened, onClose]);

      if (!opened) return null;

      return (<div ref={tooltipRef} className="tooltip">Some text</div>)
    }
    const App = () => {
      const [opened, setOpened] = useState(false);

      const onClose = useCallback(()=>{
        setOpened(false)
      }, []);
      return (
        <div className="tooltip__container">
         <Tooltip opened={opened} onClose={onClose} />
         <button 
            className="tooltip__trigger"  
            onClick={() => setOpened((s) => !s)}
        >Open Tooltip</button>
        </div>
      )
    }
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 224,
    question: `Create a useFavorites hook. It should return an add function and a list of favorites ids. \n
    Consider as an app with one user and no saving data on the server.
    Add this hook to the ProductList component`,
    answer: `export const useFavorites = (): {
      favorites: Set<number>,
      addFavorite: (id) => void
    } => {
      const [favorites, setFavorites] = useState<Set<number>>(new Set());
      const addFavorite = useCallback((id: number) => {
        setFavorites((currentSet) => {
          const newSet = new Set(currentSet);
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            newSet.add(id);
          }
          return newSet;
        });
      }, []);
      return {
        favorites,
        addFavorite
      };
    };
    // ProductList component
    const {favorites, addFavorite} = useFavorite();
    return ({products.map(product => <Product 
      key={} 
      isFavorite={favorites.has(product.id)} 
      addFavorite={addFavorite}
      />)})`,
    category: REACT,
    level: 2,
  },
  {
    id: 225,
    question: `Add a "window resize" event handler to the component`,
    answer: `function MyComponent() {
      useEffect(() => {
        const handleWindowResize = (e: UIEvent) => {
          // Called when browser window is resized
        };
    
        window.addEventListener("resize", handleWindowResize);
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, []);
    
      return <>...</>;
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 226,
    question: `Create a ProductCard component using "Compound components" pattern and "Component as props".
    Because the action button and the information block may be different for different clients.`,
    answer: `// Compound components
    // some styles for blocks product_card, product_card__info, product_card__actions
    export const ProductCard = ({
      image,
      info,
      actions
    }: {
      image?: ReactNode;
      info?: ReactNode;
      actions?: ReactNode;
    }) => {
      return (
        <div>
          {image}
          <div className="product_card__info">{info}</div>
          <div className="product_card__actions">{actions}</div>
        </div>
      );
    };`,
    category: REACT,
    level: 2,
  },
  {
    id: 227,
    question: `Create a WsButton component using "Liskov substitution" principle`,
    answer: `interface WsButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant: string;
    }
    
    export const WsButton = (props: WsButtonProps) => {
      const { variant, ...rest } = props;
      return <button {...rest}>Txt</button>;
    };
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 228,
    question: `Create a password Input with the hide/show password button`,
    answer: `interface WsPasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    rightAddon: React.ReactNode;
  }
  export const WsPasswordInput = (props: WsPasswordInputProps) => {
    const { rightAddon, ...rest } = props;
    const [show, setShow] = useState(false);
  
    return (
      <div>
        <input type={show ? "text" : "password"} {...rest} />
        <button
          onClick={() => {
            setShow((s) => !s);
          }}
        >
          {rightAddon}
        </button>
      </div>
    );
  };`,
    category: REACT,
    level: 2,
  },
  {
    id: 229,
    question: `There is a Gallery module, 
    type TGalleryProps = {
      photo: TPhoto[], 
      options? : TOptions
    }
    export const Gallery = ({photo, options = {}}:TGalleryProps) => {
      return <div>
        {photo.map((item) => <img key={item.id} width="100" src={item.src} />)}
      </div>
    }
    You need to create navigation buttons`,
    answer: `// add to Gallery
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [nextPhoto, setNextPhoto] = useState(currentPhoto + 1);
    const [prevPhoto, setPrevPhoto] = useState(currentPhoto - 1);
  
    const nextPhotoHandler = () => {
      setNextPhoto((s) => s + 1);
      setCurrentPhoto((s) => s + 1);
    };
    const prevPhotoHandler = () => {
      setPrevPhoto((s) => s - 1);
      setCurrentPhoto((s) => s - 1);
    };
    // return
    <GalleryNavigation
        nextPhoto={nextPhoto}
        nextPhotoHandler={nextPhotoHandler}
        prevPhoto={prevPhoto}
        prevPhotoHandler={prevPhotoHandler}
      />
    
      // Component
    export const GalleryNavigation = ({
        nextPhoto,
        nextPhotoHandler,
        prevPhoto,
        prevPhotoHandler
      }: {
        nextPhoto: number;
        nextPhotoHandler: () => void;
        prevPhoto: number;
        prevPhotoHandler: () => void;
      }) => {
        return (
          <div>
            {prevPhoto ? <button onClick={prevPhotoHandler}>Left</button> : null}
      
            {nextPhoto ? <button onClick={nextPhotoHandler}>Right</button> : null}
          </div>
        );
      };  
      `,
    category: REACT,
    level: 2,
  },
  {
    id: 230,
    question: `There is a carousel component. 
    export const GalleryPreview = ({
      currentPhotoIndex,
      photos
    }: {
      currentPhotoIndex: number;
      photos: TPhoto[];
    }) => {
      return <div>{photos.map(...)}</div>;
    };
    You need to add an animation effect (translate3d(...)).
    For moving active element to the left.`,
    answer: `export const GalleryPreview = ({
      currentPhotoIndex,
      photos
    }: {
      currentPhotoIndex: number;
      photos: TPhoto[];
    }) => {
      const galleryRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
        if (!galleryRef.current) return;
    
        galleryRef.current.style.transform = \`translate3d
        (-\${currentPhotoIndex * 180}px 0 0)\`
      }, [currentPhotoIndex])
      return <div ref={galleryRef}>{photos.map(...)}</div>;
    };`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/kXiLmTvGIdU?si=3P0vtEuKB0Fgs_GV&t=3694",
  },
  {
    id: 231,
    question: `Create an Auto Counter (Timer) component`,
    answer: `export const Counter = () => {
    const [value, setValue] = useState(1);

    useEffect(() => {
      const timer = setInterval(() => setValue((s) => s + 1), 5000);
      return () => clearInterval(timer);
    }, []);

    return <div>{value}</div>;
    };
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 232,
    question: `Fix the problem with extra rerenders
    const UncontrolledForm = () => {
      const [state1, setState1] = useState("");
      const [state2, setState2] = useState("");
    
      const handleSubmit = useCallback(() => {
        sendRequest({
          state1,
          state2
        });
      }, [state1, state2]);
    
      return (
        <FormComponent
          onSubmit={handleSubmit} // the issue
          onChange1={setState1}
          onChange2={setState2}
        />
      );
    }`,
    answer: `const UncontrolledFormComponent = () => {
      const [state1, setState1] = useState("");
      const [state2, setState2] = useState("");
    
      const stateRef = useRef({state1, state2});
      stateRef.current = { state1, state2};
    
      const handleSubmit = useCallback(() => {
        sendRequest({
          state1: stateRef.current.state1,
          state2: stateRef.current.state2
        });
      }, [stateRef]);
    
      return (
        <FormComponent
          onSubmit={handleSubmit}
          onChange1={setState1}
          onChange2={setState2}
        />
      );
    };`,
    category: REACT,
    level: 2,
  },
  {
    id: 233,
    question: `Create hook useLatest, it can accept the fn or value and return persistent ref to it`,
    answer: `const useLatest = (value) => {
      const refValue = useRef(value);
      useLayoutEffect(() => {
        refValue.current = value
      }, [value])

      return refValue;
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 234,
    question: `Create hook useWindowEvent, it should accept event type and cb.`,
    answer: `const useWindowEvent = (type: string, cb: (e: Event) => void) => {
      const cbRef = useRef(cb);
    
      useLayoutEffect(() => {
        cbRef.current = cb;
      }, [cb]);
    
      useEffect(() => {
        const handler = (e: Event) => {
          cbRef.current(e);
        };
        window.addEventListener(type, handler);
    
        return window.removeEventListener(type, handler);
      }, [type, cbRef]);
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 235,
    question: `We're creating a chat app. We have an input and a custom send button. 
    <MyInput value={text} onChange={changeHandler} />
    <MyBtn onClick={clickHandler} />
    We have to memorize clickHandler.
    Why can't we use a useCallback?
    Create a hook useEvent(fn), it should return memoizable link to fn and accept args.`,
    answer: `export const useEvent = <T extends (...args: any[]) => any>(cb: T) => {
      const cbRef = useRef(null);
    
      useLayoutEffect(() => {
        cbRef.current = cb;
      }, []);
    
      return useCallback(
        (...args: Parameters<T>) => {
          return cbRef.current.apply(null, args);
        },
        []
      );
    };
    // using
    const onClick = useEvent((text)=>{ // action })`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/XOSgHVzHEV4?si=-uUuVmNblTwBYyiQ",
  },
  {
    id: 236,
    question: `Improve hook useWindowEvent with useEvent(cb)
    const useWindowEvent = (type: string, cb: (e: Event) => void) => {
      const cbRef = useRef(cb);
    
      useLayoutEffect(() => {
        cbRef.current = cb;
      }, [cb]);
    
      useEffect(() => {
        const handler = (e: Event) => {
          cbRef.current(e);
        };
        window.addEventListener(type, handler);
    
        return window.removeEventListener(type, handler);
      }, [type, cbRef]);
    }`,
    answer: `const useWindowEvent = (type: string, cb: (e: Event) => void): void => {
      const eventCb = useEvent(cb)
    
      useEffect(() => {
        window.addEventListener(type, eventCb);
    
        return () => window.removeEventListener(type, eventCb);
      }, [type, eventCb]);
    }`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/XOSgHVzHEV4?si=-uUuVmNblTwBYyiQ",
  },
  {
    id: 237,
    question: `
    You have hook:
    const useWindowEvent = (type: string, cb: (e: Event) => void):void => {}
    But when you try to use it with window events, it does not support its own properties.
    Eg: 
    const Component = () => {
      useWindowEvent("mousemove", (e) => {
        e.clientX; // error - it does not know clientX
      });
    };
    Add extra types for hook useWindowEvent, it should support "GetWindowEvent" types.`,
    answer: `
    type GetWindowEvent<T extends string> = T extends keyof WindowEventMap
    ? windowEventMap[T]
    : Event
    function useWindowEvent<T extends string>(type: T, cb(e: GetWindowEvent<T>)) => void 
    function useWindowEvent (type: string, cb: (e: Event) => void): void {}`,
    category: REACT,
    level: 2,
  },
  {
    id: 238,
    question: `Create hook useIsMounted(), it should check if component is still mounted
    and return isMounted`,
    answer: `const useIsMounted = () => {
      const isMounted = useRef(false);

      useEffect(() => {
        isMounted.current = true;

        return () => {
          isMounted.current = false;
        }
      }, [])
      return isMounted;
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 239,
    question: `Create hook usePrev(val), it should return the previous value (from render time or from prev render)`,
    answer: `const usePrev = <T>(val: T) => {
      const prevValue = useRef<T | null>(val);

      useEffect(() => {
        prevValue.current = value;
      }, [value])
      return prevValue;
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 240,
    question: `Create a force state update button`,
    answer: `const [ , forceUpdate] = useReducer(v=> v + 1, 0)
    <button onClick={forceUpdate}>Update</button>`,
    category: REACT,
    level: 2,
  },
  {
    id: 241,
    question: `Create a RTK Query slice for getting articles form the server.`,
    answer: `import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
    export const articleApi = createApi({
      reducerPath: "articleApi",
      baseQuery: fetchBaseQuery({ baseUrl: "SERVER_URL" }),
      endpoints: (build) => ({
        getArticles: build.query<TArticles>({
            query: (limit) => ({ 
              url: '/articles',
              params: { limit }
            })
        })
      }),
    });
    
    export const { useGetArticlesQuery } = articleApi;
    // component 
    const { data: articles, isLoading} = useGetArticlesQuery(5)
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 242,
    question: `Implement authentication: 
    Build a Redux Saga that handles the authentication process for a web app. 
    This Saga should 
     - make API calls to the backend, 
     - handle authentication errors, 
     - and store the user's token in the application state.`,
    answer: `
    function* login(action) {
      try {
        const { email, password } = action.payload;
        const response = yield call(sendLogin, { email, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        yield put(loginSuccess(token));
      } catch (error) {
        yield put(loginFailure(error.message));
      }
    }

    function* logout() {
      localStorage.removeItem('token');
    }

    export function* authSaga() {
      yield takeLatest(LOGIN_REQUEST, login);
      yield takeLatest('LOGOUT', logout);
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 243,
    question: `Fetch data from an API: 
    Create a Redux Saga that fetches data from a third-party API and stores it in the application state. 
    The Saga should handle loading and error states, as well as pagination and filtering options.`,
    answer: `
    const setProduct = (payload) => ({
      type: 'PRODUCTS__SET',
      payload
    })
    function* getProductWorker({payload}) {
      try {
        const products = yield call(fetchProducts, payload.params);
        yield put(setProduct(products))
      } catch (e) {
        yield put({
          type: 'PRODUCTS__FAILED'
        })
      }
    
    }
    
    export function* ProductsSaga() {
      yield takeLatest('PRODUCTS__GET', getProductWorker)
    } `,
    category: REACT,
    level: 2,
  },
  {
    id: 244,
    question: `Create AuthSlice with Redux toolkit.
    It should have a state { user, token } and methods { setCredentials, logOut }`,
    answer: `const authSlice = createSlice({
      name: 'auth',
      initialState: {
        user: null,
        token: null
      },
        
      reducers: {
          setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
          },
          logOut: (state) => {
            state.user = null;
            state.token = null;
          },
      }, 
    });`,
    category: REACT,
    level: 2,
  },
  {
    id: 245,
    question: `Create fetchBaseQuery() for auth with RTK`,
    answer: `const baseQuery = fetchBaseQuery({
      baseUrl: "http://localhost:3000/api",
      credentials: "include",
      prepareHeaders(headers, { getState }) {
        const token = (getState() as RootState).auth.token;
        if (token) {
          headers.set("authorization", 'Bearer ...');
        }
        return headers;
      },
    });`,
    category: REACT,
    level: 2,
  },
  {
    id: 246,
    question: `Create an Automatic re-authorization by extending fetchBaseQuery`,
    answer: `const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
      // try to get a new token
      const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
      if (refreshResult.data) {
        // store the new token
        api.dispatch(setCredentials(refreshResult.data))
        // retry the initial query
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
    }
    return result
    }`,
    category: REACT,
    level: 2,
  },
  {
    id: 246,
    question: `How to defer loading the React component?`,
    answer: `export const CompAsync = lazy(() => import("./Comp"));
    and add <Suspense fallback={<Loading />}>...routes</Suspense>`,
    category: REACT,
    level: 2,
  },
  {
    id: 247,
    question: `Create an "Save money" App. It should have an amount and 2 buttons, save X$ and remove x$. Use Redux for state.`,
    answer: `export const App = () => {
      const dispatch = useDispatch();
      const [value, setValue] = useState(0);
      const balance = useSelector(balanceSelector);

      const increaseHandler = () => {
        dispatch(increase, value)
      }
      const decreaseHandler = () => {
        dispatch(decrease, value)
      }

      return (<>
        <div>{balance}</div>
        <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}}/>
        <button onClick={increaseHandler} />
        <button onClick={decreaseHandler} />
        <>)
    }
    // reducer
    const reducer = (state = {total: 0}, action) => {
      switch (action.type) {
        case INCR : {
          return {...state, total: state.total + action.payload}
        }
        case DECR : {
          return {...state, total: state.total - action.payload}
        }
        default: state
      }
    }
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 248,
    question: `Create a slice and a thunk for Redux Toolkit. It should fetch and store posts.`,
    answer: `export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
      try {
        const response = await api.fetchPosts('url');
        return response.data;
      } catch (e) {
        return e.message;
      }
    })
    const postsSlice = createSlice({
      name: 'posts',
      initialState: {
        posts: [],
        isLoading: false,
      },
      reducers: {},
      extraReducers(builder) {
        builder.addCase(
          fetchPosts.pending, (st, action)=>{
            st.isLoading = true;
          }
        )
        .addCase(
          fetchPosts.fulfilled, (st, action)=> {
            st.isLoading = false;
          } 
        )
      }
    })
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 248,
    question: `Get post by ID from redux and display it in the Post component.`,
    answer: `// use a currying approach to tackle the issue
    export const selectPostByID = (id: number) => (st: RootSt) => st.posts.find(post => post.id === id);
    // component
    const { postId } = useParams();
    const post = useSelector(selectPostById(Number(postId))
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 249,
    question: `Get posts by userId from state.posts (Redux)`,
    answer: `const selectPostsByUserId = createSelector(
      (state: RootState) => state.posts,
      (state: RootState, userId: number) => userId,
      (posts, userId) => posts.filter(post => post.userId === userId)
      ) \n
      // component
      const { userId } = useParams()
      const posts = useSelector((st) => selectPostsByUserId(st, userId))`,
    category: REACT,
    level: 2,
  },
  {
    id: 250,
    question: `Add a new article to the server. Use RTK query.`,
    answer: `const postApi = createApi({
      reducerPath: 'postApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'SERVER_URL'}).
      tagTypes: ['Post'],
      endpoints: (build) => ({
        fetchAllPosts: build.query({
          query:()=>({...}),
          providesTags: result = ['Post]
        }),
        addPost: build.mutation({
          query: (post) => {
            url: '/post',
            method: 'POST',
            body: post
          },
          invalidatesTags:['Post]
        })
      })
    })
    
    export const { useFetchAllPostsQuery, useAddPostMutation} = postApi;
    //component
    const [ addPost , {isLoading}] = useAddPostMutation;
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 251,
    question: `Give an example using the useTransition hook from React 19`,
    answer: `// component
    const [name, setName ] = useState("");
    const [isPending, startTransition] = useTransitions();
    const handleSubmit = async () => {
      startTransition(async () => {await updateName(name)})
    }
    
    return <>
      <input value={name} onChange={(e) => { setName(e.target.value)}} />
      <button onClick={handleSubmit} disabled={isPending}>{isPending? 'Loading' : 'Update'}</button>
    </>`,
    category: REACT,
    level: 2,
  },
  {
    id: 252,
    question: `Convert this code for React 19 using "use"
    const PersonComponent = () => {
      const [person, setPerson] = useState(null);
      useEffect(() => {
        fetchPerson().then((data) => setPerson(data))
      }, [])
      return <>{person.name}</>
    }
    `,
    answer: `// parent component
    <Suspense fallback={<>Loading ...</>}
    <PersonComponent />
    </Suspense>
    
    return <>
      <input value={name} onChange={(e) => { setName(e.target.value)}} />
      <button onClick={handleSubmit} disabled={isPending}>{isPending? 'Loading' : 'Update'}</button>
    </>`,
    category: REACT,
    level: 2,
  },
  {
    id: 253,
    question: `In case where you are working with a value that updates frequently, such as a text input.
    Create a custom hook useDebounce() that allows you to debounce such values.
    `,
    answer: `const useDebounce = <T>(value:T, delay = 500) => {
      const [debounce, setDebounce] = useState<T>(value);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setDebounce(value);
        }, delay);
        return () => {
          cleatTimeout(timer);
        };
      }, [value, delay]);
    
      return debounce;
    };
    // component
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);
    useEffect(()=>{
      // fetching debouncedSearch
    }, [debouncedSearch])
    `,
    category: REACT,
    level: 2,
    comment:
      "https://www.youtube.com/watch?v=gwIkg1acujU&ab_channel=CosdenSolutions",
  },
  {
    id: 254,
    question: `Create a generic list component <UL />. It should accept list of elements and render function`,
    answer: `const UL = 
      <T>({
        items, 
        render})
        : React.DetailedHTMLProps<....> & {
          items : T[], 
          render: (item: T) => ReactNode
        } => {
      return (<ul>{items.map((item, ind) => (<li key={ind}>{render(item)}</li>))}</ul>)
    }`,
    category: REACT,
    level: 2,
    comment:
      "https://www.youtube.com/watch?v=W5TXxJIyBP0&ab_channel=JackHerrington",
  },
  {
    id: 255,
    question: `Create a counter app. 
    It should stop updating shown value, when the mouse is hovering h1.
    But the inner timer should not stop.
    If the mouse leaves h1 it should start updating the shown counter.

    export const Counter = () => {
      const counter = 0;
   
      return <h1>{counter}</h1>;
    };`,
    answer: `export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [fixed, setFixed] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCounter((st) => st + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    const handlerMouseOver = (e) => {
      setIsHover(true);
      setFixed(counter);
    };

    const handlerMouseOut = () => {
      setIsHover(false);
    };

    return (
      <h1 onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut}>
        {!isHover ? counter : fixed}
      </h1>
    );
  };`,
    category: REACT,
    level: 2,
  },
  {
    id: 256,
    question: `How to cancel the fetch request and why it can happen?
    export const Todos = () => {
      const [todos, setTodos ] = useState([]);

      useEffect(() => {
        fetch("api/todos")
        .then((result) => result.json())
        .then((data) => setTodos(data))
      }, [])

      return <div>....</div>
    }`,
    answer: `export const Todos = () => {
      const [todos, setTodos ] = useState([]);

      useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("api/todos", {signal})
        .then((result) => result.json())
        .then((data) => setTodos(data));

        return () => { controller.abort(); }
      }, [])

      return <div>....</div>
    }`,
    category: REACT,
    level: 2,
    comment:
      "https://www.youtube.com/watch?v=gwIkg1acujU&ab_channel=CosdenSolutions",
  },
  {
    id: 257,
    question: `Create logic for todos App. Use Redux Tool Kit. 
    It should fetch todos.`,
    answer: `export const fetchTodos = createAsyncThunk(
      "todos/fetchTodos",
      async (_, { rejectWithValue }) => {
        try {
          const result = await fetch("/todos");
          if (!result.ok) {
            throw new Error("fetching error");
          }
          const data = await result.json();
          return data;
        } catch (e) {
          console.log(e);
          rejectWithValue(e.message);
        }
      }
    );
    
    type TTodo = {
      id: string;
      title: string;
    };
    
    export const todosSlice = createSlice({
      name: "todos",
      initialState: {
        todos: [] as TTodo[],
        isLoading: false,
        error: "",
      },
      reducers: {},
      extraReducers(builder) {
        builder
          .addCase(fetchTodos.pending, (st) => {
            st.isLoading = true;
          })
          .addCase(fetchTodos.fulfilled, (st, action) => {
            st.todos = action.payload;
            st.isLoading = false;
          })
          .addCase(fetchTodos.rejected, (st, action) => {
            st.isLoading = false;
            st.error = action.payload;
          });
      },
    });
    
    export default todosSlice.reducer;`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/6RTbC8Acj1M?si=ZWgeWmY0u3ZA-iNR",
  },
  {
    id: 258,
    question: `Create logic for todos App. Use Redux Tool Kit. 
    It should add and remove todos.`,
    answer: `
    export const addTodos = createAsyncThunk(
      "todos/addTodo",
      async (todo, { rejectWithValue, dispatch }) => {
        try {
          const result = await fetch("/todos", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(todo),
          });
    
          if (!result.ok) {
            throw new Error("adding error");
          }
    
          dispatch(addTodo(todo));
        } catch (e) {
          console.log(e);
          rejectWithValue(e.message);
        }
      }
    );
    export const deleteTodo = createAsyncThunk(
      "todos/deleteTodo",
      async (id, { rejectWithValue, dispatch }) => {
        try {
          const result = await fetch("/todos/"+id, {
            method: "DELETE",
          });
          if (!result.ok) {
            throw new Error("adding error");
          }
          dispatch(removeTodo({ id }));
        } catch (e) {
          console.log(e);
          rejectWithValue(e.message);
        }
      }
    );
    
    type TTodo = {
      id: string;
      title: string;
    };
    
    export const todosSlice = createSlice({
      name: "todos",
      initialState: {
        todos: [] as TTodo[],
        isLoading: false,
        error: "",
      },
      reducers: {
        addTodo(st, action) {
          st.todos.push(action.payload);
        },
        removeTodo(st, action) {
          st.todos = st.todos.filter((item) => item.id !== action.payload.id);
        },
      },
      extraReducers(builder) {
        builder
          .addCase(addTodo.rejected, (st, action) => {
            st.error = action.payload;
          });
      },
    });
    
    export const { addTodo, removeTodo } = todosSlice.actions;
    export default todosSlice.reducer;`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/6RTbC8Acj1M?si=ZWgeWmY0u3ZA-iNR",
  },
  {
    id: 259,
    question: `Create logic for todos App. Use Redux Tool Kit. 
    It should toggle status for todos.

    type TTodo = {
      id: string;
      title: string;
      complete: boolean;
    };`,
    answer: `export const toggleStatus = createAsyncThunk(
      "todos/toggleStatus",
      async (id, { rejectWithValue, dispatch, getState }) => {
        const todo: TTodo = getState().todos.todos.find((item) => item.id === id);
        try {
          const result = await fetch("/todos/" + id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ complete: !todo.complete }),
          });
          if (!result.ok) {
            throw new Error("adding error");
          }
          dispatch(toggleTodo({ id }));
        } catch (e) {
          console.log(e);
          rejectWithValue(e.message);
        }
      }
    );
    
    type TTodo = {
      id: string;
      title: string;
      complete: boolean;
    };
    
    export const todosSlice = createSlice({
      name: "todos",
      initialState: {
        todos: [] as TTodo[],
        isLoading: false,
        error: "",
      },
      reducers: {
        toggleTodo(st, action) {
          const todo = st.todos.find((item) => item.id === action.payload.id);
          if (todo) {
            todo.complete = !todo.complete;
          }
        },
      },
      extraReducers(builder) {},
    });
    
    export const { toggleTodo } = todosSlice.actions;
    export default todosSlice.reducer;`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/6RTbC8Acj1M?si=ZWgeWmY0u3ZA-iNR",
  },
  {
    id: 260,
    question: `Create useLocalStorage hook.`,
    answer: `import { useEffect, useState } from "react";

    const getSavedValue = <T>(key: string, initialValue: T) => {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        return JSON.parse(savedValue);
      }
      return initialValue;
    };
    
    export const useLocalStorage = <T>(key: string, initialValue: T) => {
      const [value, setValue] = useState(() => getSavedValue(key, initialValue));
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value]);
    
      return [value, setValue];
    };`,
    category: REACT,
    level: 2,
    comment: "https://youtu.be/6ThXsUwLWvc?si=KPtphtrac5VYUejD",
  },
  {
    id: 261,
    question: `Create a styled component for "a". 
    It should do not have underline when not hovering
    and has one when hovering. The color can be passed via tag.`,
    answer: `export const AppNavLink = styled(NavLink)<{ color: string }>\`
    text-decoration: none;
    color: \${(props) => props.color};
  
    &:hover {
      text-decoration: underline;
    }
    \`;
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 262,
    question: `Create a theme toggler (dark - light).
    Use styled components. `,
    answer: `// add theme scheme
    const darkTheme = {
      color: white
    }
    const lightTheme = {
      color: black
    }

    //wrap app with the theme provider from the styled components
    const currentTheme = useSelector(s => s.theme.currentTheme);
    const theme = currentTheme === 'dark' ? darkTheme : lightTheme;
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

    // in toggler component
    const currentTheme = useSelector(s => s.theme.currentTheme);
    const toggle = () => {
      dispatch({
        action: TOGGLE_THEME
      })
    }
    `,
    category: REACT,
    level: 2,
  },
  {
    id: 262,
    question: `Convert this CSS to styled components:
    .toggle-switch {
      position: relative;
      // ..styles
    }
    .toggle-switch input[type="checkbox"] {
      display: none;
    }
    .toggle-switch .switch {
      position: absolute;
      background-color: #b6b6b6;
      transition: background-color 0.2s ease;
      // .. styles
    }
    .toggle-switch .switch::before {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: #333;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
    .toggle-switch input[type="checkbox"]:checked + .switch::before {
      transform: translateX(25px);
      background-color: #333;
    }
    .toggle-switch input[type="checkbox"]:checked + .switch {
      background-color: #2bc6ff;
    }
    `,
    answer: `const Panel = styled.div\`
    position: absolute;
    cursor: pointer;
    background-color: \${(props) => props.theme.primary};
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  \`;
  
  const Circle = styled.div\`
    position: absolute;
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: \${(props) => props.theme.text};
    border-radius: 50%;
    transition: transform 0.3s ease;
  \`;
  
  const SwitchWrapper = styled.label\`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: 0 0.75rem;
  
    input[type="checkbox"] {
      display: none;
    }
  
    input[type="checkbox"]:checked + \${Panel} > \${Circle} {
      transform: translateX(25px);
      background-color: \${(props) => props.theme.text};
    }
  
    input[type="checkbox"]:checked + \${Panel} {
      background-color: \${(props) => props.theme.secondary};
    }
  \`;

  // components
  <SwitchWrapper>
  <input type="checkbox" checked={isToggled} onChange={onToggle} />
  <Panel>
    <Circle />
  </Panel>
</SwitchWrapper>
    `,
    category: REACT,
    level: 2,
  },
];

const quizTests: TQuiz[] = [
  {
    id: 301,
    question: `Cover a component List with tests (2 or more) \n
    const List = <T extends {}>({items}: {items: T[]}) => {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      )
    }`,
    answer: `import { render, screen } from '@testing-library/react';
    import List from './List';
    const items = [
      {id: 1, name: 'item 1'},
      {id: 2, name: 'item 2'},
      {id: 3, name: 'item 3'},
      ];
    
    describe('List', () => {
      it('should render list', () => {
        // Arrange
        render(<List items={items} />);

        // Act - empty
        
        // Assert
          const list = screen.getByRole('list');
          expect(list).toBeInTheDocument();
        });

        it('should render list items', () => {
          render(<List items={items} />);
          const listItems = screen.getAllByRole('listitem');
          expect(listItems).toHaveLength(items.length);
        });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 302,
    question: `Cover a case with a test: If no data is passed to the component, it shouldn't render anything.\n
    const List = ({items}) => {
      if (!items.length)
        return null;
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      )
    }`,
    answer: `it('should not render list, if no data is passed', () => {
      render(<List items={[]} />);
      const list = screen.queryByRole('list');
      expect(list).not.toBeInTheDocument();
      });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 303,
    question: `Check if the Search component (<Search onChange={onChange} />) renders an input.`,
    answer: `it('should render input', () => {
      const onChange = jest.fn();
      render(<Search onChange={onChange} />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 304,
    question: `Check if onChange is called when the input value changes.\n
    const Search = ({onChange}) => (<input type="text" onChange={onChange} />)`,
    answer: `it('should call onChange when input value changes', () => {
      const onChange = jest.fn();
      render(<Search onChange={onChange} />);
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'test');
      expect(onChange).toHaveBeenCalledTimes(4);
      });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 305,
    question: `There is a Filter with two components: List of fruits and Search.\n
    The list of fruits is filtered by the search value. Write tests for the Filter component.\n`,
    answer: `it('should filter list of fruits by search value', () => {
      render(<Filter />);
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'apple');
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(1);
      });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 306,
    question: `Create an useCounter() hook (returns { count, increment}) and add some test.`,
    answer: `const useCounter = () => {
      const [count, setCount] = useState(0);
      const increment = useCallback(()=> setCount(s => s + 1), [])
      return { count, increment }
    }
    it('should increment', () => {
      const { result } = renderHook(() => useCounter());
      act(() => {result.current.increment()});
      expect(result.current.count).toBe(1);
    });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 307,
    question: `Create a happy path test for a sagaWorker. Use redux-saga-test-plan:

    function* fetchUserDataWorker({ payload }: { payload: string }) {
      const userPosts = yield call(getUserPosts, payload);
      yield put({
        type: "USER_POSTS_FETCH",
        payload: {
          data: userPosts
        }
      });
    }
    `,
    answer: `
    // Mock the getUserPosts function
    jest.mock('./api', () => ({
    getUserPosts: jest.fn()
    }));
    it("should fetch user data", () => {
      const payload = 'user123'; // Define the payload for the test

      const userPosts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]; // Define the mocked userPosts data
    
      return expectSaga(fetchUserDataWorker, { payload })
        .provide([
          [call(getUserPosts, payload), userPosts] // Provide the mocked response for the call effect
        ])
        .put({
          type: 'USER_POSTS_FETCH',
          payload: {
            data: userPosts
          }
        })
        .run(); // Run the test
    });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 308,
    question: `Create a happy path test for the validate function:

    function isAgeValid(age) {
      return age < 45 && age > 1
    }
    `,
    answer: `it("should be valid age", () => {
      expect(isAgeValid(3)).toBe(true)
    });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 309,
    question: `Create a happy path test for the function:

    function mapArrayToStrings(array) {
      return array.map(String)
    }
    `,
    answer: `it("should convert to string", () => {
      expect(mapArrayToStrings[1,2,3]).toEqual(['1','2','3'])
    });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 310,
    question: `Check if method pow was called in the function:

    function square(val) {
      if(val === 1) {
        return 1;
      }
      return Math.pow(val, 2)
    }
    `,
    answer: `it("should call the method pow", () => {
      const spyPow = jest.spyOn(Math, pow);
      square(2);
      expect(spyPow).toBeCalledTimes(1)
    });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 311,
    question: `Cover the function delay with test:

    const delay = (cb: CallableFunction, ms: number) => new Promise((resolve) => {
      const timerId = setTimeout(() => {
        resolve(cb()); // Execute the callback and resolve the promise
      }, ms);
  
      // Optional: Add functionality to clear the timeout if needed
      return () => clearTimeout(timerId);
    }) 
    `,
    answer: `
    it("should call async callback", async () => {
      const mockFn = jest.fn(() => true);
      await delay(mockFn, 5000);
      expect(mockFn).toBeCalledTimes(1);
    });
    it("should make calculation", async () => {
      const result = await delay(() => 5+5, 5000);
      expect(result).toBe(10)
    });`,
    category: TESTS,
    level: 3,
  },
  {
    id: 312,
    question: `Check if fetchDataAndProcess called fetchData:

    // fetchApi.ts
    export const fetchData = async () => {
      // some async logic
    };
    
    // moduleToTest.js
    import { fetchData } from './fetchApi';
    
    export const fetchDataAndProcess = async () => {
      const data = await fetchData();
      // process the data
    };
    `,
    answer: `
    // moduleToTest.test.js
    import { fetchDataAndProcess } from './moduleToTest';
    import { fetchData } from './fetchApi';
    
    const fetchData = jest.fn();
    
    test('fetchDataAndProcess called fetchData', async () => {
      await fetchDataAndProcess();
      expect(fetchData).toHaveBeenCalled();
    });
    `,
    category: TESTS,
    level: 3,
  },
  {
    id: 313,
    question: `Add test for component, check if toggler works:

    export const SideBar = () => {
      const [isOpened, toggleIsOpened] = useState(true);
      const togglerHandler = () => toggleIsOpened((st) => !st)
      return (
          <div data-testid="sidebar" className={!isOpened ? 'closed' : ''}>
              <Button data-testid="sidebar-toggle" onClick={togglerHandler}>
                  {isOpened ? 'Opened' : 'Open'}
              </Button>
              SideBar
          </div>
      );
    };`,
    answer: `
    test("should toggle isOpened state when sidebar toggle button is clicked", () => {
        render(<SideBar />);
    
        const sidebarToggleBtn = screen.getByTestId("sidebar-toggle");
        const sidebar = screen.getByTestId("sidebar");
    
        expect(sidebar).not.toHaveClass("closed");
    
        fireEvent.click(sidebarToggleBtn);
        expect(sidebar).toHaveClass("closed");
      });
    `,
    category: TESTS,
    level: 3,
  },
  {
    id: 314,
    question: `Add test for async Thunk:

    export const fetchPet = createAsyncThunk(
      "pets/fetchPets",
      async ({ id, accessToken }: TGetPetProps, thunkAPI) => {
        try {
          const pet = await APIPetfinder.fetchDetails(id, accessToken);
          return pet;
        } catch (e) {
          console.log(e);
          return thunkAPI.rejectWithValue("error");
        }
      }
    );`,
    answer: `
    jest.mock('../../../app/services/API/petfinder');

    describe("getPetAsyncSlice/fetchPet", () => {
      let dispatch: Dispatch<any>;
      let getState: () => StateSchema;
      beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
      });

      it("should fetch pet details successfully", async () => {
        const id = 1;
        const mockPet = { id, name: 'Fluffy' };
        const mockAccessToken = 'yourAccessToken';

        APIPetfinder.fetchDetails = jest.fn().mockResolvedValue(mockPet);

        const thunk = fetchPet({ id: 1, accessToken: mockAccessToken });

        const result = await thunk(dispatch, getState, {});

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(APIPetfinder.fetchDetails).toHaveBeenCalledWith(1, mockAccessToken);
      });
    });`,
    category: TESTS,
    level: 3,
    comment: "https://youtu.be/qb7xVPVfPlQ?si=m0uf5616ej0kDk9l",
  },
  {
    id: 315,
    question: `Add test for async Thunk:

    const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, { rejectWithValue }) => {
      try {
        const result = await fetch("/todos");
        if (!result.ok) {
          throw new Error("fetching error");
        }
        const data = await result.json();
        return data;
      } catch (e) {
        console.log(e);
        return rejectWithValue(error.message);
      }
    });`,
    answer: `
    import { fetchTodos } from "./todos-slice.answer";
    global.fetch = jest.fn();
    it("should fetch data", async () => {
      const mockTodos = [
      {
        id: "123",
        title: "test",
      },];
      const mockResult = {
        ok: true,
        json: () => Promise.resolve(mockTodos),
      };
      const dispatch = jest.fn();
      const getState = () => {};
      fetch.mockResolvedValue(mockResult);

      const thunk = fetchTodos();
      const result = await thunk(dispatch, getState);
  
      expect(result.meta.requestStatus).toBe('fulfilled');
    });
    `,
    category: TESTS,
    level: 3,
    comment: "https://youtu.be/qb7xVPVfPlQ?si=5lpj8pGJwk84WlPk",
  },
];

const quizNext: TQuiz[] = [
  {
    id: 401,
    question: `Create a product page "/car/3" for NextJs 12 and NextJS 13.

    Get the product ID in the product component.
    `,
    answer: `// NextJS 12
    folders: pages/car/[id].tsx \n
    const CarPage: NextPage = () => {
      const { query } = useRouter();
      return <div>Car N {query.id}</div>;
    };

    // Next13-14
    folders: app/car/[id]/page.tsx
    "use client";
    const CarPage: NextPage = ({params}: Props) => {
      return <div>Car N {params.id}</div>;
    };
    `,
    category: NEXT,
    level: 4,
  },
  {
    id: 402,
    question: `Add "Go home" button in the component`,
    answer: `"use client";
    // component
    const { push} = useRouter();
    <button onClick={()=>push('/')}`,
    category: NEXT,
    level: 4,
  },
  {
    id: 403,
    question: `How to add a meta description and icon to an App (Next 13+)`,
    answer: `//app/layout.tsx
    export const metadata: Metadata = {
      title: 'My App',
      description: 'My app is great!',
      icon: {
        icon: '/icons/logo.svg'
      }
    } `,
    category: NEXT,
    level: 4,
  },
  {
    id: 404,
    question: `How to add 2 different nested page layouts for an App. 
    For example for the authorization page and dashboard.`,
    answer: `// use route groups 
    // (auth)/layout.tsx + (auth)/sign-in/page.tsx
    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return <main>{children}</main>;
    }
    // (root)/layout.tsx + /(root)/page.tsx
    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return <main><Sidebar /> {children}</main>;
    }
    `,
    category: NEXT,
    level: 4,
  },
  {
    id: 405,
    question: `How to highlight an active link.`,
    answer: `"use client"
    // component
    const pathname = usePathname();
    const cn = pathname === '/' ? 'active' : '';
    <Link className={cn} href="/">
        Home
      </Link>
    `,
    category: NEXT,
    level: 4,
  },
  {
    id: 405,
    question: `How to add an Articles section and the latest comments sections on the home page.
    Both sections should be loaded separately.  Use Next 13+`,
    answer: `//@articles/page.tsx + loading.tsx
    //@comments/page.tsx + loading.tsx
    
    // /layout.tsx
    export default function RootLayout({
      children,
      articles,
      comments
    }: Readonly<{
      children: React.ReactNode;
      articles: React.ReactNode;
      comments: React.ReactNode;
    }>) {
      return (
        <main>
          {children}
          {articles}
          {comments}
        </main>
      );
    }`,
    category: NEXT,
    level: 4,
  },
];

const quizCSS: TQuiz[] = [
  {
    id: 801,
    question: `Convert this CSS to SCSS
    .gallery {
      position: relative;
    }
    .galleryPhoto {
      position: absolute;
      opacity: 0;
    }
    .galleryPhotoActive {
      opacity: 1;
    }
    .galleryPhotoActive:hover {
      border: 1ps solid red;
    }`,
    answer: `
    .gallery {
      position: relative;
    
      &Photo {
        position: absolute;
        opacity: 0;

        &Active {
          opacity: 1;

          &:hover {
            border: 1ps solid red;
          }
        }
      }
    }`,
    category: "CSS",
    level: 1,
  },
  {
    id: 802,
    question: `How to add css variables?`,
    answer: `:root {
      --main-color: blue;
    }
    .my-element {
      color: var(--main-color);
    }`,
    category: "CSS",
    level: 1,
  },
  {
    id: 803,
    question: `How to rotate a div`,
    answer: `div {transform: rotate(90deg)}`,
    category: "CSS",
    level: 1,
  },
  {
    id: 804,
    question: `How to make a button bigger when hovering. It should be smooth`,
    answer: `
    button { transition: transform 100ms}
    button:hover { transform: scale(1.2)}`,
    category: "CSS",
    level: 1,
  },
  {
    id: 805,
    question: `How to centered element using translate`,
    answer: `div {
      position: absolute; 
      top: 0; 
      left: 50%; 
      transform: translate(-50%)}`,
    category: "CSS",
    level: 1,
  },
];

const quizOther: TQuiz[] = [
  {
    id: 901,
    question: `Configure WebPack with different entry points`,
    answer: `module.exports = {
      entry: {
        app: './src/app.js',
        admin: './src/admin.js'
      },
      output: {
        filename: "[name].js"
      }
    }`,
    category: "Other",
    level: 3,
  },
  {
    id: 902,
    question: `How to configure WebPack with TS`,
    answer: `We need to use loaders (ts-loader)
    module.exports = {
      entry: {...},
      output: {...},
      module: { 
        rules : [ { ..., use: "ts-loader"} ]
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"]
      }
    }`,
    category: "Other",
    level: 3,
  },
  {
    id: 903,
    question: `How to configure WebPack in develope mode. 
    It should be controlled using a terminal command.
    Eg: npm run build:dev`,
    answer: `// command should be saved in package.json
    // "build:dev" : "webpack --env mode=development"
    // configuration in webpack.config.ts - you need to pass "env"
    module.exports = (env) => ({
      mode: env.mode ?? 'development,
      entry: {...},
      output: {...},
    })`,
    category: "Other",
    level: 3,
  },
  {
    id: 904,
    question: `How to run server on 3000 port using webpack.`,
    answer: `// first install "webpack-dev-server"
    // command should be saved in package.json
    // "start" : "webpack serve --env port=3000"
    // configuration in webpack.config.ts - you need to pass "env"
    module.exports = (env) => ({
      entry: {...},
      output: {...},
      devServer: {
        port: env.port,
        open: true,
      },
    })`,
    category: "Other",
    level: 3,
  },
  {
    id: 905,
    question: `How to undo a commit?`,
    answer: `// git reset <hash> - will erase all commits before this one, but it added changes to the files (you can save them)
    // git reset --hard <hash> - will erase all commits and changes before this one
    // git reverse <hash> - added a new commit with rolled back changes from this commit`,
    category: "Other",
    level: 3,
  },
];

export const quiz = [
  ...quizJs,
  ...quizTs,
  ...quizReact,
  ...quizTests,
  ...quizNext,
  ...quizCSS,
  ...quizOther,
];
