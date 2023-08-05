import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  Ref,
} from "react";

type ChildRef = {
  getBoundingClientRect: () => DOMRect | undefined;
  handleClick: () => void;
};
const Foo: React.FC = () => {
  const childRef = useRef<ChildRef>(null);

  useEffect(() => {
    console.log(childRef.current?.getBoundingClientRect());
  }, []);

  useEffect(() => {
    console.log("effect first");
    return () => {
      console.log("return first");
    };
  }, [{}]);

  const handleClick = () => {
    childRef.current?.handleClick();
  };
  return (
    <div>
      <h1>foo page</h1>
      <button onClick={handleClick}>父组件添加</button>
      <Child ref={childRef} />
    </div>
  );
};

export default Foo;

const Child = React.forwardRef((props, ref: Ref<ChildRef>) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useImperativeHandle(ref, () => {
    return {
      getBoundingClientRect: () => {
        return divRef.current?.getBoundingClientRect();
      },
      handleClick: () => handleClick(),
    };
  });

  return (
    <div ref={divRef}>
      {count}
      <button onClick={handleClick}>添加</button>
    </div>
  );
});
