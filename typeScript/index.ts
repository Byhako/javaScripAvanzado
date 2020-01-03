function add(a: number, b: number): number {
  return a + b;
};

console.log(add(1,2));

// interfaces
interface Rectangulo {
  ancho: number,
  alto: number
};

let rec: Rectangulo = {
  ancho: 2,
  alto: 6
};

function area(r: Rectangulo): number {
  return r.ancho * r.alto;
};

console.log(area(rec));
