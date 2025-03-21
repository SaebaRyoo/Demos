import 'reflect-metadata';
import Koa from 'koa';
import Router from '@koa/router';
import { UserController } from './controllers/user.controller';
import { container } from './container';

/**
 * 依赖注入系统启动入口
 * 1. 引入reflect-metadata以支持装饰器和反射功能
 * 2. 导入必要的依赖和控制器
 * 3. 使用IoC容器管理依赖注入
 */

// 手动注册UserController到IoC容器
// 也可以使用@Controller()装饰器自动注册
container.register('UserController', UserController);

/**
 * 应用初始化
 * 1. 创建Koa应用实例
 * 2. 初始化路由
 * 3. 从IoC容器中解析UserController实例
 */
const app = new Koa();
const router = new Router();

// 从IoC容器中获取UserController实例
// 容器会自动处理依赖注入，确保所有依赖都被正确实例化
const userController = container.resolve<UserController>('UserController');

/**
 * 路由配置
 * 将控制器方法与HTTP路由绑定
 * 使用依赖注入的控制器处理请求
 */
router.get('/users', (ctx) => userController.getUsers(ctx));
router.get('/users/:id', (ctx) => userController.getUserById(ctx));

// 注册Koa中间件
app.use(router.routes());
app.use(router.allowedMethods());

/**
 * 启动HTTP服务器
 * 监听指定端口，开始接收HTTP请求
 */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});