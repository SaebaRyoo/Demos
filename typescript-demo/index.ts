interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  job: string;
}

declare let foo: Foo;
declare let bar: Bar;

const tmp: string = 'hello'
// console.log(tmp)
// const bigint1: bigint = 888888888888888888888n

const symbol1: symbol = Symbol('unique')

// 在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型。
// 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。
// 但更推荐进一步区分，也就是使用 Record<string, unknown> 或 Record<string, any> 表示对象，
// unknown[] 或 any[] 表示数组，(...args: any[]) => any表示函数这样。
const obj: Record<string, unknown> = {name: 'ryo'}
const obj1: Record<string, unknown[]> = {data: ['aaa', 'bbb'], name: ['ryo']}

// console.log(obj1)

// 字面量类型
const str: 'foo'= 'foo'
// 联合类型
let str1: 'foo' | string | number;
str1 = 'foo'
str1 = 'foo1'
str1 = 123


// 枚举
enum Status {
  Success = 'success',
  Failed = 'failed',
  Fetching = 'fetching'
}

// console.log(Status.Success)

// 函数的类型签名

const fn = (name: string): number => {
  return name.length
}

// 像对变量及逆行类型标注一样，对foo这个变量及逆行类型声明 （不推荐使用，代码可读性太差了）
const fn1: (name: string) => number = (name) => name.length


// TypeScript中的重载是伪重载，它只有一个具体实现，它的重载体现在方法调用的签名上而非具体的实现上。
// 而在如Java等语言中，重载提现在多个名称一致，但是入参不同的函数实现

// ES5函数重载
function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

// 箭头函数重载
interface Func {
  (foo: number, bar: true): string;
  (foo: number, bar?: false): number;
  (foo: number, bar?: boolean): string | number;
}

const func1 = ((foo: number, bar?: any) => {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}) as Func


// console.log(func1(599)); // number
// console.log(func1(599, true)); // string
// console.log(func1(599, false)); // number


// 类
// 基类
class Base {
  private static foo = 1;

  fn = (): number => {
    return Base.foo * 3
  }
}

// 派生类
class Derived extends Base {
  override fn = (): number => {
    return 10 * 3
  }
}
// console.log(new Base().fn())
// console.log(new Derived().fn())


// 关于any类型的使用tips:
// 如果是类型不兼容报错导致你使用 any，考虑用类型断言替代，我们下面就会开始介绍类型断言的作用。
// 如果是类型太复杂导致你不想全部声明而使用 any，考虑将这一处的类型去断言为你需要的最简类型。如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
// 如果你是想表达一个未知类型，更合理的方式是使用 unknown。

let unknowVal: any | unknown = {foo: () => {console.log('foo')}};



// 类型断言，要对 unknown 类型进行属性访问，需要进行类型断言（别急，马上就讲类型断言！），即“虽然这是一个未知的类型，但我跟你保证它在这里就是这个类型
// 类型断言的正确使用方式是，在 TypeScript 类型分析不正确或不符合预期时，将其断言为此处的正确类型：
(unknowVal as {foo: () => {}}).foo()

// 非空断言
// 非空断言的运行时仍然会保持调用链，因此在运行时可能会报错。而可选链则会在某一个部分收到 undefined 或 null 时直接短路掉，不会再发生后面的调用。
declare const tmp1: {
  func?: () => ({
    prop?: number | null;
  })
};
tmp1.func!().prop!.toFixed();
// 可选链
tmp1.func?.().prop?.toFixed();


