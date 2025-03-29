# 梦幻酒店网站项目

## 项目概述

这是一个基于现代前端技术栈构建的酒店预订网站，采用服务器端渲染（SSR）架构，提供高性能的用户体验和优秀的搜索引擎优化（SEO）能力。网站包含多个页面，包括首页、房间列表、房间详情、设施介绍、联系我们和预订页面。

## 技术栈

### 前端技术

- **React 18**: 用于构建用户界面的 JavaScript 库
- **TypeScript**: 为 JavaScript 提供类型安全
- **React Router 7**: 用于处理前端路由
- **内联样式**: 使用 React 内联样式进行样式管理

### 后端技术

- **Node.js**: JavaScript 运行时环境
- **Express**: 基于 Node.js 的 Web 应用框架
- **EJS**: 服务器端模板引擎

### 构建工具

- **Webpack 5**: 模块打包工具
- **Babel**: JavaScript 编译器
- **Yarn**: 包管理工具

## 实现原理

### 服务器端渲染（SSR）

该项目使用了同构 JavaScript 架构，这意味着同一套 React 代码既可以在服务器端运行，也可以在客户端运行。

**服务器端渲染流程**:

1. 当用户首次访问网站时，Express 服务器接收请求
2. 服务器使用`ReactDOMServer.renderToString`方法将 React 组件渲染为 HTML 字符串
3. 这个 HTML 字符串被注入到 EJS 模板中
4. 完整的 HTML 页面被发送到客户端，用户可以立即看到页面内容

**水合(Hydration)流程**:

1. 浏览器加载 HTML 和 JavaScript
2. React 在客户端执行"水合"过程，接管服务器渲染的 HTML
3. 页面变为完全交互式，React 事件处理器开始工作

### 路由处理

项目使用了两种不同的路由处理方式：

**服务器端路由**:

- Express 服务器使用通配符路由(`*`)捕获所有请求
- 对于任何 URL，服务器都返回相同的 HTML 骨架，但不包含路由逻辑
- 这种方式避免了服务器端渲染中常见的路由上下文问题

**客户端路由**:

- 客户端使用 React Router 处理前端路由
- `BrowserRouter`组件管理客户端导航
- 页面之间的跳转不需要刷新整个页面

### 架构分离

为了解决 SSR 中常见的路由上下文问题，我们采用了以下策略：

1. **服务器端 App 简化**:

   - 服务器端使用简化版的 App 组件，不包含路由逻辑
   - Layout 组件有条件地使用 HTML `<a>` 标签而不是 React Router 的 `<Link>` 组件

2. **客户端 App 完整化**:
   - 客户端使用完整的 App 组件，包含所有路由逻辑
   - 通过水合过程接管服务器渲染的 HTML，提供完整的客户端交互

## 项目结构

```
react-hooks-ts-ssr/
├── client/                    # 客户端代码
│   ├── app.tsx                # 服务器端渲染使用的简化App组件
│   ├── ClientApp.tsx          # 客户端使用的完整App组件(包含路由)
│   ├── client.tsx             # 客户端入口文件
│   ├── components/            # 共享组件
│   │   ├── Layout.tsx         # 布局组件
│   │   └── styles.ts          # 共享样式定义
│   └── pages/                 # 页面组件
│       ├── HomePage.tsx       # 首页
│       ├── RoomsPage.tsx      # 房间列表页
│       ├── RoomDetailPage.tsx # 房间详情页
│       ├── FacilitiesPage.tsx # 设施页面
│       ├── ContactPage.tsx    # 联系我们页面
│       └── BookingPage.tsx    # 预订页面
├── server/                    # 服务器端代码
│   ├── server.ts              # Express服务器
│   └── views/                 # 视图模板
│       └── client.ejs         # 主HTML模板
├── dist/                      # 构建输出目录
│   ├── server.js              # 编译后的服务器代码
│   ├── static/                # 静态资源
│   │   ├── client.js          # 编译后的客户端代码
│   │   ├── manifest.json      # 资源清单
│   │   └── images/            # 图片资源
│   └── views/                 # 编译后的视图模板
├── webpack.client.js          # 客户端webpack配置
├── webpack.server.js          # 服务器端webpack配置
├── tsconfig.client.json       # 客户端TypeScript配置
├── tsconfig.server.json       # 服务器端TypeScript配置
├── package.json               # 项目依赖和脚本
└── yarn.lock                  # 依赖版本锁定文件
```

## 构建和运行

```bash
# 安装依赖
yarn install

# 构建客户端
yarn build:client

# 构建服务器端
yarn build:server

# 启动服务器
yarn start
```

## 性能优化

1. **服务器端渲染**: 提高首屏加载速度和 SEO 表现
2. **代码分割**: 页面组件分离
3. **客户端水合**: 确保交互的快速激活
4. **无刷新导航**: 提高页面间导航速度

## SSR 相关问题解决方案

1. **路由上下文问题**:

   - 服务器端使用普通 HTML 标签
   - 客户端使用 React Router 组件

2. **数据获取**:

   - 服务器端渲染基础 UI
   - 客户端水合后获取动态数据

3. **环境差异**:
   - 使用条件渲染区分服务器和客户端环境
   - 避免在服务器端使用依赖浏览器 API 的代码

## 总结

这个项目展示了如何使用 React、TypeScript 和 Express 构建一个服务器端渲染的现代 Web 应用。通过同构 JavaScript 架构，我们可以既获得服务器端渲染的 SEO 和首屏加载优势，又保持了单页应用程序的交互体验。

针对 React Router 在 SSR 环境下的常见问题，我们采用了分离服务器端和客户端路由逻辑的解决方案，确保应用在两种环境下都能正确工作。
