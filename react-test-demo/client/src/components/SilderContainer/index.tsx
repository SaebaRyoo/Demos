import React, {
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import type { ReactElement } from "react";
import "./index.css";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import useResizeObserver from "../../hooks/useResizeObserver";

export interface SliderContainerProps {
  width: number;
  children: ReactElement; // 需要包括的内容
}

const LEFT = "left";
const RIGHT = "right";

export const SliderContainer: React.FC<SliderContainerProps> = ({
  width = "inherit",
  children,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useResizeObserver(containerRef);
  const [listWidth, setListWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  // 缓存
  const cache = useRef(containerWidth);

  // 处理容器宽度变化时，内部元素的吸附效果
  useEffect(() => {
    if (
      containerWidth > cache.current && // 当容器可拖拽时，表示用户正在向右拖拽
      translateX < 0 && // 表示左侧有内容被隐藏
      listWidth - Math.abs(translateX) - containerWidth <= 0 //表示右侧已经没有被隐藏的内容了
    ) {
      const distance = containerWidth - cache.current;
      setTranslateX((cur) => cur + distance);
    }
    // 更新缓存
    cache.current = containerWidth;
  }, [containerWidth, translateX, listWidth]);

  useLayoutEffect(() => {
    setListWidth((listRef.current as HTMLDivElement).clientWidth);
  }, [children]);

  // 判断按钮是否可见
  const [leftArrowVisible, rightArrowVisible] = useMemo(() => {
    let leftArrowVisible,
      rightArrowVisible = false;
    // listWidth - Math.abs(translateX) - containerWidth 为右侧隐藏内容
    if (listWidth - Math.abs(translateX) - containerWidth > 0) {
      rightArrowVisible = true;
    }

    if (translateX < 0) {
      leftArrowVisible = true;
    }

    return [leftArrowVisible, rightArrowVisible];
  }, [listWidth, translateX, containerWidth]);

  const handleArrowClick = (direction: string) => {
    if (direction === LEFT) {
      // 左侧隐藏内容
      const leftSpaceWidth = Math.abs(translateX);
      if (leftSpaceWidth > containerWidth) {
        setTranslateX((cur) => cur + containerWidth);
      } else {
        setTranslateX((cur) => cur + leftSpaceWidth);
      }
    }

    if (direction === RIGHT) {
      // 右侧隐藏内容
      const rightSpaceWidth = listWidth - Math.abs(translateX) - containerWidth;
      if (rightSpaceWidth > containerWidth) {
        setTranslateX((cur) => cur - containerWidth);
      } else {
        setTranslateX((cur) => cur - rightSpaceWidth);
      }
    }
  };

  return (
    <div ref={containerRef} style={{ width: width }} className="container">
      {leftArrowVisible && (
        <>
          <button
            color="white"
            className="leftArrow btn"
            onClick={() => handleArrowClick(LEFT)}
          >
            <img src={ArrowLeft} alt="" />
          </button>
          <div className="linerGrid leftGradient"></div>
        </>
      )}
      <div
        ref={listRef}
        className="list"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "all 0.3s linear",
        }}
      >
        {children}
      </div>
      {rightArrowVisible && (
        <>
          <div className="linerGrid rightGradient"></div>
          <button
            color="white"
            className="rightArrow btn"
            onClick={() => handleArrowClick(RIGHT)}
          >
            <img src={ArrowRight} alt="" />
          </button>
        </>
      )}
    </div>
  );
};
