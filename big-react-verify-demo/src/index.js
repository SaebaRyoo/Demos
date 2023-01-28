import React from 'react';
import ReactDOM from 'react-dom'

/**
 * 下面的jsx代码会通过babel编译为react中实现的jsx(createElement)方法
 *
    const MyChildren = props => (0, _jsxRuntime.jsx)("span", {
      className: "color",
      children: props.name
    });
    (0, _jsxRuntime.jsxs)("div", {
      children: ["Hello ", (0, _jsxRuntime.jsx)(MyChildren, {
        name: "world"
      }), (0, _jsxRuntime.jsx)(MyChildren, {
        name: "pretty"
      })]
    });
 *
 *
 */

const MyChildren = (props) => <span className="word">{props.name}</span>;
// const jsx = (<div>Hello <MyChildren name="world"/><MyChildren name="pretty"/></div>)
// const jsx = (<div><span>hello</span></div>)

const App = () => (<div><span><MyChildren name="big-react"/></span></div>)

console.log(React)
console.log(ReactDOM)

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
