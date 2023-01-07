import { REACT } from "./quiz-const";
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
    answer: `C extends B ? TypeX : TypeY`,
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
    answer: `const ToggleComponent = ({renderToggleOn, renderToggleOff}) => {
      return (
        <div>
          {renderToggleOn()}
          {renderToggleOff()}
        </div>
      )
        const ParentComponent = () => {
          return (
            <ToggleComponent
              renderToggleOn={() => <button>On</button>}
              renderToggleOff={() => <button>Off</button>}
            />
          )
      `,
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
];

export const quiz = [...quizJs, ...quizReact, ...quizTs];
