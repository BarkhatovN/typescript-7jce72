interface A {
  a: string;
  b: string;
}
const c: `${keyof A}`[] = ['a', 'b', 'c'];
