const color: string = "Red";
const num: number = 1;
const truthy: boolean = true;
const nully: null = null;
const nothing: undefined = undefined;

// OBJECT TYPES
class Color {}

const myColor: Color = new Color();

const person: { age: number } = {
  age: 20
};

const strArr: string[] = ["1", "2", "3"];

const myFunc: (i: number) => void = (i: number) => {
  console.log(i);
};
myFunc(3);

const myArr = '{"x":10,"y":20,"z":30}';
const parsedArr: { x: number; y: number; z: number } = JSON.parse(myArr);
