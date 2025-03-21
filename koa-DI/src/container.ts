import 'reflect-metadata';

/**
 * IoC容器类，用于管理依赖注入
 * 实现了单例模式，确保整个应用中只有一个容器实例
 * 负责依赖的注册、解析和实例化
 */
export class Container {
  /** 单例实例 */
  private static instance: Container;
  /** 存储所有注册的依赖关系 */
  private dependencies: Map<string, any>;

  /** 私有构造函数，确保只能通过getInstance方法创建实例 */
  private constructor() {
    this.dependencies = new Map();
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  /**
   * 注册依赖到容器
   * @param key - 依赖的标识符
   * @param value - 依赖的值或类
   */
  public register(key: string, value: any): void {
    // 如果value是类，则创建实例
    if (typeof value === 'function') {
      const instance = this.createInstance(value);
      this.dependencies.set(key, instance);
    } else {
      this.dependencies.set(key, value);
    }
  }

  /**
   * 解析依赖
   * @param key - 依赖的标识符
   * @returns 解析后的依赖实例
   * @throws Error 当依赖未找到时抛出错误
   */
  public resolve<T>(key: string): T {
    const dependency = this.dependencies.get(key);
    if (!dependency) {
      throw new Error(`No dependency found for key: ${key}`);
    }
    return dependency;
  }

  /**
   * 创建类的实例，并注入其依赖
   * 使用reflect-metadata获取构造函数的参数类型
   * 递归解析所有依赖
   * @param Constructor - 要实例化的类
   * @returns 创建的实例
   */
  private createInstance<T>(Constructor: new (...args: any[]) => T): T {
    // 获取构造函数的参数类型
    const paramTypes = Reflect.getMetadata('design:paramtypes', Constructor) || [];
    
    // 递归解析构造函数的依赖
    const params = paramTypes.map((paramType: any) => {
      const paramInstance = this.resolve(paramType.name);
      return paramInstance;
    });

    // 创建新实例并注入依赖
    return new Constructor(...params);
  }
}

export const container = Container.getInstance();