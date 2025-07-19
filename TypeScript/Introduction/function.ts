function sum(num: number): number {
  //   return "Hello";  
  return num + 5;
}

const isAdd = false

function add(num: number): number | boolean {
  if (isAdd) {
    return false;
  }
  return num + 5;
}

let value = add(3);

export {}