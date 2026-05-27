function add(a: number, b: number, print1: boolean, some1: string) {
  if (print1) {
    console.log(`${some1}`, +a + b);
  } else {
  }
}

const a = 5;
const b = 10;
const some1 = "hey i am lucky and focused";
const print1 = true;

add(a, b, print1, some1);
