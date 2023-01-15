import { REACT, TESTS } from "./quiz-const";
import { TQuiz } from "./quiz-type";

const quizJs: TQuiz[] = [
  {
    id: 1,
    question:
      "What is the output of the following code? \n Boolean('0') === false",
    answer: "false \n - Any non-empty string is true",
    category: "JS",
  },
  {
    id: 2,
    question:
      "What is the output of the following code? \n Boolean(' ') === false",
    answer: "false \n - Any non-empty string is true",
    category: "JS",
  },
  {
    id: 3,
    question: "What is the output of the following code? \n [] == ''",
    answer:
      "true - 0 == 0 \n - When comparing two different types, JavaScript converts the values to numbers.",
    category: "JS",
  },
  {
    id: 4,
    question: "What is the output of the following code? \n null == undefined",
    answer:
      "true \n - null and undefined are equal to each other and nothing else.",
    category: "JS",
  },
  {
    id: 5,
    question: `Calculate the sum of the elements (in TS) \n
    sum([1, 2, 3])`,
    answer: `const sum = (arr: numbers[]) => arr.reduce((total, el) => total + el, 0); \n`,
    category: "JS",
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
  },
  {
    id: 7,
    question: `Convert object to array`,
    answer: `const newObj = Object.entries(obj);`,
    category: "JS",
  },
  {
    id: 8,
    question: `Convert array to object`,
    answer: `const newObj = arr.reduce((acc, el) => ({ ...acc, [el.id]: el }), {});`,
    category: "JS",
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
  },
  {
    id: 10,
    question: `How to save three first elements of the array to the variables a, b, c? \n
    const arr = [1, 2, [3, 4]]];`,
    answer: `const [a, b, [c]] = arr;`,
    category: "JS",
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
  },  
  {
    id: 12,
    question: `const fruits = ['apple', 'banana', 'orange']; \n
    Create a new array with the first element removed.
    Create a new array with lemon added to the beginning of the array.`,
    answer: `const [, ...rest] = fruits;
    const newFruits = ['lemon', ...fruits];`,
    category: "JS",
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
  },
  {
    id: 14,
    question: `Create a function that accepts endless number of arguments and returns the sum of them.`,
    answer: `const sum = (...args: number[]) => args.reduce((acc, el) => acc + el, 0);`,
    category: "JS",
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
  },
  {
    id: 16,
    question: `Pass default value to the variable if it is undefined: \n    `,
    answer: `const guests = passedValueOfGuests ?? 10;`,
    category: "JS",
  },
  {
    id: 17,
    question: `Assign default value to the variable userName if it is undefined:`,
    answer: `const userName = passedValueOfUserName || 'Anna';`,
    category: "JS",
  },
  {
    id: 18,
    question: `What is the output of the following code? \n
    console.log(0 && 'Anna');`,
    answer: `console.log(0 && 'Anna'); // 0`,
    category: "JS",
  },
  {
    id: 19,
    question: `Use short syntax for the following code: \n
    if (user.printHello) {
      user.printHello('Anna');
    }`,
    answer: `user.printHello?.('Anna');`,
    category: "JS",
  },
  {
    id: 20,
    question: `Use short syntax for the following code: \n
    const orderPizza = restaurant.orderPizza ?? restaurant.orderPizza();`,
    answer: `const orderPizza = restaurant.orderPizza?.();`,
    category: "JS",
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
  },
  {
    id: 22,
    question: `How to write this code shorter? \n
    rest.numGuests = rest.numGuests ?? 10;`,
    answer: `rest.numGuests ??= 10;`,
    category: "JS",
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
  },
  {
    id: 23,
    question: `How to loop the array without using function? \n
    It can be useful when working in an async function.`,
    answer: `for (const [i, el] of arr.entries()) {
      console.log(\`\${i + 1}: \${el}\`);
      }`,
    category: "JS",
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
  },
  {
    id: 105,
    question: `Write type for the function: \n
    function printMe (content: any) { console.log(content); return content;}`,
    answer: `type TPrintMe = <T>(content: T) => T;`,
    category: "TS",
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
  },
  {
    id: 107,
    question: `Add types to the function below: \n
    function map(array: unknown[], f: (item: unknown) => {
      let result = []
      for (let i = 0; i < array.length; i++) {
      result[i] = f(array[i])
      }
      return result
    }`,
    answer: `function map<T, U>(array: T[], f: (item: T) => U): U[] {}`,
    category: "TS",
  },
  {
    id: 108,
    question: `What are conditional types? How do you create them?`,
    answer: `C extends B ? TypeX : TypeY \n
    type MyExclude<T, U> = T extends U ? never : T;`,
    category: "TS",
  },
  {
    id: 109,
    question: `To compile a TypeScript file, you use the following command`,
    answer: `tsc`,
    category: "TS",
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
  },
  {
    id: 112,
    question: `Get all the keys from the response object APIResponse`,
    answer: `type ResponseKeys = keyof APIResponse`,
    category: "TS",
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
  },
  {
    id: 114,
    question: `Protect an object from modification when passed to a function: \n
    function mutableAction(person: IPerson) {}`,
    answer: `function mutableAction(person: Readonly<IPerson>) {}`,
    category: "TS",
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
  },
  {
    id: 116,
    question: `When can we use a Partial type?`,
    answer: `- override some parameters of the config object: createConfig({ port: '90' }) \n
     - updating the fields of an object: updateTask({ id: 1, completed: true })`,
    category: "TS",
  },
  {
    id: 117,
    question: `Describe the utility type Required:`,
    answer: `type Required<T> = {
      [P in keyof T]-?: T[P];`,
    category: "TS",
  },
  {
    id: 118,
    question: `Describe the Mapped type`,
    answer: `type MappedType<T> = {
      [K in keyof T]: T[K];
    };`,
    category: "TS",
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
  },
  {
    id: 121,
    question: `Write an Exclusive<T, U> type that computes types that are either in T or in U, but not in both at once.\n
     For example, Exclusive<1 | 2 | 3, 2 | 3 | 4> should be resolved as 1|4.`,
    answer: `type Exclusive<T, U> = T extends U ? never : T | U extends T ? never : T | U;`,
    category: "TS",
  },
  {
    id: 122,
    question: `Implement the built-in Pick<T, K> generic without using it.`,
    answer: `type MyPick<T, K extends keyof T> = {
      [P in K]: T[P];
      };`,
    category: "TS",
  },
  {
    id: 123,
    question: `Implement the built-in Readonly<T> generic without using it.`,
    answer: `type MyReadonly<T> = {
      readonly [P in keyof T]: T[P];
    };`,
    category: "TS",
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
  },
  {
    id: 125,
    question: `How to get the type from the array? \n
    const animals = ['cat', 'dog', 'mouse'] as const;`,
    answer: `type Animal = typeof animals[number];`,
    category: "TS",
  },
  {
    id: 126,
    question: `Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F \n
    type A = If<true, 'a', 'b'>  // expected to be 'a'`,
    answer: `type If<C extends boolean, T, F> = C extends true ? T : F;`,
    category: "TS",
  },
  {
    id: 127,
    question: `Implement the built-in Exclude<T, U> \n
    type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'`,
    answer: `type MyExclude<T, U> = T extends U ? never : T;`,
    category: "TS",
  },
  {
    id: 128,
    question: `Implement the dictionary for objects type \n
    const fruits = {apple: {name: 'apple', price: 10}, banana: {name: 'banana', price: 5}}`,
    answer: `type Dictionary<T> = {
      [key: string]: T;
      };`,
    category: "TS",
  },
  {
    id: 129,
    question: `Add types for a general List component \n 
    const List = ({items, renderFn}) => { ... }`,
    answer: `type Dictionary<T> = {
      [key: string]: T;
      };`,
    category: "TS",
  },
  {
    id: 130,
    question: `We have interface IUser with the fields: name, age, occupation, id, role. \n
    Create a type with all fields except id and role`,
    answer: `type IPublicUser = Omit<User, 'id' | 'role'>;`,
    category: "TS",
  },
  {
    id: 131,
    question: `We have interface ICategory with the fields: name, id, parentId, products. \n
    Create a type with id and name fields`,
    answer: `type ICategoryShort = Pick<ICategory, 'id' | 'name'>;`,
    category: "TS",
  },
  {
    id: 132,
    question: `We have interface ICategory with the fields: name, id, parentId, products. \n
    Create a type with all fields but not required`,
    answer: `type ICategoryAPI = Partial<ICategory>;`,
    category: "TS",
  },
  {
    id: 133,
    question: `We have interface IUser with the fields: name, id \n
    Create a new interface the field role with the type 'admin' | 'user'`,
    answer: `interface IUserWithRole extends IUser {
      role: 'admin' | 'user';
      }`,
    category: "TS",
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
  },
  {
    id: 137,
    question: `we should add some guests to the seats in the room \n
    [A1]: 'John', [A2]: 'Mary', [B1]: 'Bob', [B2]: 'Kate' \n
    Create class SeatAssignment with index property signature \n
    Why will we use it? \n`,
    answer: `class SeatAssignment {
      [seat: string]: string;
      }
      const seats = new SeatAssignment();
      seats.A1 = 'John';
      Answer: we don't know how many properties will be in the object`,
    category: "TS",
  },
];

const quizReact: TQuiz[] = [
  {
    id: 201,
    question: "Create a reducer to add an element (only case)",
    answer: "case 'ITEM__ADDED': return [...state, action.payload]",
    category: REACT,
  },
  {
    id: 202,
    question: "Create a reducer to remove an element (only case)",
    answer:
      "case 'ITEM__REMOVED': return state.filter(item => item.id !== action.payload)",
    category: REACT,
  },
  {
    id: 203,
    question:
      "Create a reducer to update an element in array of elements (only case)",
    answer:
      "case 'ITEM__UPDATED': return state.map(item => item.id === action.payload.id ? action.payload : item)",
    category: REACT,
  },
  {
    id: 204,
    question: "Create a reducer to update a price of the element (only case)",
    answer:
      "case 'ITEM__PRICE_UPDATED': return state.map(item => item.id === action.payload.id ? {...item, price: action.payload.price} : item)",
    category: REACT,
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
  },
  {
    id: 210,
    question: "Create a controlled input for email",
    answer: `const [email, setEmail] = useState('');
    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />`,
    category: REACT,
  },
  {
    id: 210,
    question: "Create a form with email input with React hook form. Add validation and errors for email.",
    answer: `const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    const onSubmit: SubmitHandler<TInputs> = data => console.log(data);
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && <span>This field is required</span>}
      </form>
    `,
    category: REACT,
  },
  {
    id: 211,
    question: `Configure React hook form with validation fields onBlur`,
    answer: `const { register, handleSubmit, formState: { errors } } = useForm<TInputs>({
      mode: 'onBlur',
      });`,
    category: REACT,
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
  },
  {
    id: 212,
    question: `Typing RootState in Redux`,
    answer: `export type RootState = ReturnType<typeof store.getState>;`,
    category: REACT,
  },
  {
    id: 213,
    question: `Create a Filter component with list of fruits. Add a filter by input value.`,
    answer: `const Filter = () => {
      const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
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
  },
];

const quizTests: TQuiz[] = [
  {
    id: 301,
    question: `Cover a component List with tests (2 or more) \n
    const List = ({items}) => {
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
  },
  {
    id: 302,
    question: `If no data is passed to the component, it shouldn't render anything.\n
    const List = ({items}) => {
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
  },

];

export const quiz = [...quizJs, ...quizReact, ...quizTs, ...quizTests];
