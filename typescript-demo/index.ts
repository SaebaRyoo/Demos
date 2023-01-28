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

const data1: Record<string, unknown>[] = [{name: '1'}, {name: 1, data: []}]

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
type Func = {
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


// 类型断言，要对 unknown 类型进行属性访问，需要进行类型断言（别急，马上就讲类型断言！），即“虽然这是一个未知的类型，但我跟你保证它在这里就是这个类型
// 类型断言的正确使用方式是，在 TypeScript 类型分析不正确或不符合预期时，将其断言为此处的正确类型：
let unknowVal: any | unknown = {};
// (unknowVal as {foo: () => {}}).foo()

// 非空断言
// 非空断言的运行时仍然会保持调用链，因此在运行时可能会报错。而可选链则会在某一个部分收到 undefined 或 null 时直接短路掉，不会再发生后面的调用。
// declare const tmp1: {
//   func?: () => ({
//     prop?: number | null;
//   })
// };
// tmp1.func!().prop!.toFixed();
// // 可选链
// tmp1.func?.().prop?.toFixed();

//类型断言作为代码提示的辅助工具，比如在实现一个比较复杂的接口时
interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

// 如果像下面这种使用类型标注来实现一个对象，得到的是一堆类型报错，必须完整的实现整个接口
// const obj: IStruct = {};

// 但是用类型断言，可以保留类型提示，且不需要完整实现接口结构
const obj4 = ({
  foo: 'test'
} as IStruct)
// const obj5 = <IStruct>{
//   foo: 'test',
// }





// 类型编程

// 类型别名
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);

const status1: StatusCode = 301

// 类型别名声明可以接受泛型，然后就会变为工具类型，它的基本功能任然是创建类型，只不过更像一个函数了。
// 泛型就是入参，根据入参能返回一个新的类型，变得更加的灵活，
type Fac<T> = T | number | string;

type Itmp6 = {
  foo: string;
  bar: (str: string) => string;
}
// 如下：上面定义了一个类型工具Fac<T>,T(该字母不是固定的，类似于function的形参，随便定义)表示入参类型，
// 然后在定义一个tmp6时使用类型工具Fac<Itmp6>，并将Itmp6类型传入。这样，就表示tmp6需要实现Itmp6的类型
// const tmp6: Fac<Itmp6> = {
//   foo: 'test',
//   bar: (str) => {return str}
// }

// 当然，我们一般不会直接使用工具类型来做类型标注，而是再度声明一个新的类型别名：
type Tmp6 = Fac<Itmp6>;
const tmp6: Tmp6 = {
  foo: 'test',
  bar: (str) => {return str}
}

// 比较常用的类型工具
type MaybeNull<T> = T | null;
function process(input: MaybeNull<{handler: () => {}}>) {
  input?.handler();
}

type MaybeArray<T> = T | T[];
function ensureArray<T>(data: MaybeArray<T>): T[] {
  return Array.isArray(data) ? data : [data]
}
console.log(ensureArray(1))
console.log(ensureArray([1,2,3,4,5]))

function ensurePromise<P>(data: P): Promise<P> {
  return Promise.resolve(data)
}

ensurePromise('hello').then((data) => console.log(data))
ensurePromise(
  new Promise((resolve) => {
    resolve('hhhhhhh')
  })
).then((data) => console.log(data))

interface Foo {
  propA: number;
  propB: boolean;
  propC: string;
}

type PropType = Foo[keyof Foo]

// 索引签名类型(快速声明一个键值类型一致的类型结构)
// 应用场景，常见常见是在重构JavaScript代码时，为内部属性较多的对象声明一个any的索引签名类型，
// 以此来暂时支持对类型为未明确属性的访问，并在后续补全类型，如下：
// 声明一个值为any的类型结构
type AnyTypes = {
  [key: string]: any
}

type p1 = AnyTypes['123']
type Factory1<T = boolean> = T |  number | string
const foo1: Factory1<boolean> = false
// 索引类型查询

// 映射类型

// 类型查询操作符 typeof,返回一个typescript类型
const P2 = '123'
// 类型标注中使用typeof
type p2 = typeof P2;

const func2 = (input: string) => {
  return input.length > 10
}

// 在工具类型中使用typeof，这里就是在func3上使用func2推导出来的函数签名
const func3: typeof func2 = (name) => {
  return name === 'abc'
}

// 在ReturnType工具类型中使用，ReturnType会推导出使用类型查询操作查询的函数的返回值的类型
type FuncReturnType = ReturnType<typeof func2>


// 泛型

// 泛型和类型别名结合
type AnyType<T> = T | string | number;

function f1<T>(tmp: AnyType<T>): AnyType<T> {
  return tmp;
}

// 条件类型
type isEqual<T> = T extends true ? 1 : 2;
type A = isEqual<true>; // 1
type B = isEqual<false>; // 2
type c = isEqual<'ryp'>; // 2

// 泛型默认值和泛型约束
// 泛型也向函数一样，给一个参数设置一个默认值
type Factory<T = boolean> = T | string | number;
// 这样在调用时可以不带任何参数
const f: Factory = true;


// 结构化类型系统 和 鸭子类型 两个概念基本一致。
// 在结构化类型系统 中，因为其概念，导致美元和人民币这两中不同的货币，因为有看上去相似的结构类型。导致能够直接相加不报错
class Cat {
  meow() {}
  eat() {}
}
class Dog {
  eat() {}
}

function feedCat(cat: Cat) {}

// feedCat(new Dog())

// 标称类型系统
// 通过自己实现标称类型来实现一个Nominal工具类型解决上述问题
export declare class TagProtector<T extends string> {
  protected __tag: T;
}

export type Nominal<T, U extends string> = T & [U]

export type CNY1 = Nominal<number, 'CNY'>;

export type USD1 = Nominal<number, 'USD'>;

const CNYCount = 100 as CNY1;

const USDCount = 100 as USD1;

function addCNY(source: CNY1, input: CNY1) {
  return (source + input) as CNY1;
}

// addCNY(CNYCount, CNYCount);

// // 报错了！
// addCNY(CNYCount, USDCount);



// class CNY {
//   private __tag!: void;
//   constructor(public value: number) {}
// }
// class USD {
//   private __tag!: void;
//   constructor(public value: number) {}
// }
// const CNYCount = new CNY(100);
// const USDCount = new USD(100);

// function addCNY(source: CNY, input: CNY) {
//   return (source.value + input.value);
// }

// addCNY(CNYCount, CNYCount);
// // 报错了！
// addCNY(CNYCount, USDCount);

type MyArray<T> = [T];

const tmp7: MyArray<string> = ['test']


// 泛型的应用
interface IRes<Data = unknown> {
  code: number;
  errorMsg?: string;
  data: Data;
}
interface IUserProfileRes {
  name: string;
  homepage: string;
  avatar: string;
}
const fetchUserProfile = (): Promise<IRes<IUserProfileRes>> => new Promise((resolve) => {
  resolve({
    code: 200,
    errorMsg: '',
    data: {
      name: 'ryo',
      homepage: 'your url',
      avatar: 'img url'
    }
  })
})

// 类型层级
type Result1 = 'ryo' extends string ? 1 : 2;
type Result2 = 1 extends number ? 1 : 2;
type Result3 = true extends boolean ? 1 : 2;
type Result4 = {name: string} extends object ? 1 :2;
type Result5 = {name: 'ryo'} extends object ? 1: 2;
type Result6 = [] extends object ? 1: 2;


type LiteralType<T> = T extends string ? "string" : "other";
const literal1: LiteralType<string> = 'string'
const literal2: LiteralType<number> = 'other'
const literal3: LiteralType<boolean> = 'other'


// 条件类型
type LiteralToPrimitive<T> = T extends number ? number
                        : T extends bigint ? bigint
                        : T extends string ? string
                        : never;
function universalAdd<T extends number| bigint | string>(x: T, y: T): LiteralToPrimitive<T> {
  return x + (y as any);
}
universalAdd('abc', 'def') // type: string
universalAdd(1, 2) // type: number
universalAdd(10n, 10n) // type: bigint


type ReturnAny = (...args: any[]) => any;
type ReturnString = (...args: any) => string

// 泛型约束为ReturnAny类型(确保它有返回值)，再通过使用extends完成条件类型判断
type FunctionConditionType<T extends ReturnAny> = T extends ReturnString ? 'A string return func!' : 'A non-string return func!';

// type StringResult = FunctionConditionType<()=> 'ryo'>
// type NonStringResult = FunctionConditionType<()=> boolean>

// infer关键字
type FunctionReturnType<T extends ReturnAny> = T extends (...args: any[]) => infer R ? R : never

type StringResult = FunctionReturnType<()=> 'ryo'>
type NonStringResult = FunctionReturnType<()=> boolean>


type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T
type SwapResult1 = Swap<[1,2]>
type SwapResult2 = Swap<[1,2,3]>

const swap = (data: any[]): SwapResult1 => {

  return [data[1], data[0]]
}

console.log(swap([2,3]))

// type OT = {name: string, age: number}
// const o1: Partial<OT> = {}

type Partial<T> = { [P in keyof T]?: T[P] }
type Required<T> = { [P in keyof T]-?: T[P] }
type Readonly<T> = { readonly [P in keyof T]: T[P] }

class Foo {
  foo!: number;
}

class Bar extends Foo {
  bar!: number;
}
let f2: { (input: Foo | Bar): void };
// Foo | Bar
f2 = (input) => {};

let f3:
  | { (raw: number): (input: Foo) => void }
  | { (raw: number): (input: Bar) => void };

// raw → number
f3 = (raw) => {
  // input → Bar
  return (input) => {};
};
