import { useLayoutEffect, useState } from "react";

const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>(0);
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setWidth((ref.current as HTMLElement).clientWidth);
    });
    resizeObserver.observe(ref.current as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);
  return width;
};
export default useResizeObserver;
