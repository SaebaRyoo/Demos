import 'reflect-metadata';
import { container } from './container';

/**
 * 类装饰器，用于标记可注入的类
 * 将类注册到IoC容器中，使其可以被其他类注入
 * @returns ClassDecorator
 */
export function Injectable(): ClassDecorator {
  return (target: any) => {
    container.register(target.name, target);
    return target;
  };
}

/**
 * 服务类装饰器，用于标记服务类
 * 可以指定自定义的注入键名，如果未指定则使用类名
 * @param key - 可选的依赖注入键名
 * @returns ClassDecorator
 */
export function Service(key?: string): ClassDecorator {
  return (target: any) => {
    const serviceKey = key || target.name;
    container.register(serviceKey, target);
    return target;
  };
}

/**
 * 控制器装饰器，用于标记控制器类
 * 将控制器类注册到IoC容器中
 * @returns ClassDecorator
 */
export function Controller(): ClassDecorator {
  return (target: any) => {
    container.register(target.name, target);
    return target;
  };
}

/**
 * 属性装饰器，用于注入依赖
 * 通过reflect-metadata获取属性类型，并从容器中解析依赖
 * 使用getter实现延迟注入，避免循环依赖问题
 * @param key - 可选的依赖注入键名
 * @returns PropertyDecorator
 */
export function Inject(key?: string): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    const dependencyKey = key || type.name;
    
    Object.defineProperty(target, propertyKey, {
      get: () => container.resolve(dependencyKey),
      enumerable: true,
      configurable: true
    });
  };
}