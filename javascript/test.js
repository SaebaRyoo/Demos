
// const tree = {
//   name: "root",
//   children: [
//     {
//       name: "child1",
//       children: [
//         { name: "grandchild1" },
//         { name: "grandchild2" }
//       ]
//     },
//     {
//       name: "child2",
//       children: [
//         {
//           name: "grandchild3",
//           children: [
//             { name: "great-grandchild1" }
//           ]
//         }
//       ]
//     }
//   ]
// };

// // 用遍历的方式去将树结构拍平
// function flattenTree(root) {
//   const stack = [root];
//   const result = [];

//   while (stack.length) {
//     const node = stack.shift();
//     result.push(node);

//     if (node.children && node.children.length) {
//       stack.push(...node.children);
//     }
//   }

//   return result;
// }



let str = '';
const arr = [];
for (let i = 0; i < 26; i++) {
  arr.push(String.fromCharCode(97 + i)); // 生成小写字母
}
for (let i = 0; i < 10; i++) {
  arr.push(i.toString()); // 生成数字
}

for (let i = 0; i< 10000000; i++) {
  let index = Math.floor(Math.random() * 36)
  str += arr[index];
}

console.log()

function extractNumber() {
  const startTime = performance.now();
  // 匹配数字的正则表达式
  const regex = /\d+/g;
  // 从字符串中匹配数字并组成数字字符串
  const numStr = str.match(regex).join('');

  const endTime = performance.now();

  // 计算代码执行时间
  const duration = endTime - startTime;
  // 输出结果
  // console.log(numStr);
  console.log(`extractNumber 代码执行时间：${duration}毫秒`);
}
extractNumber()


function extractNumberByLoop() {

  const startTime = performance.now();
  let map = {
    '0': true,
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
  };
  let result = '';
  for( let i = 0; i < str.length; i++) {
    let item = str[i];
    if(map[item]) {
      result += item;
    }
  }
  const endTime = performance.now();
  // 计算代码执行时间
  const duration = endTime - startTime;
  console.log(`extractNumberByLoop 代码执行时间：${duration}毫秒`);
}

extractNumberByLoop()
