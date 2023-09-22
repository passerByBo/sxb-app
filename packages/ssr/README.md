## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 笔记

### 路由

- prefetch
- Router Cache
- Partial Rendering


app-router 在app目录下，app-router的优先级高于page-router

路由中的每个文件夹代表一个路由段，每个路由段映射到URL路径中的相应段

嵌套路由=文件夹嵌套

- layout
- page
- loading
- node-found
- error
- global-error
- route
- template
- default 

如上这些文件夹不具备路由和嵌套路由的功能，全局的一些UI和行为

在固定的路由段中定义的特殊文件将作用于当前层次的结构中

任何段落中都可以自定义布局，该布局会作用于当前路由和所有的子路由当中

使用Route Group 共享布局

默认情况下Layout组件为服务端组件  也可以设置为客户端组件

layout组件可以获取数据

父子布局之间不可以共享数据，可以多次获取数据

布局不能访问到子的路由段，要访问所有的路有段可以在客户端组件中使用

嵌套路由中，子路由组件将嵌在父路由的组件中使用  useSelectedLayoutSegment or useSelectedLayoutSegments api获取

jsx tsx js可以作为布局或者页面的扩展后缀

layout.js 和  page.js 可以在文件夹中同时存在

app目录下的文件 当子目录中包含page.js或者route.js 才会作为路由展示，其他的正常保存的components lib api等等只要子目录中不包含page和route就不会作为路由展示

app下必须存在根路由的layout布局组件，该组件必须返回html，作为服务器返回的初始HTML

template.js 在layout内 包裹page.js  三个层级关系 layout-template-page

为解决seo优化问题  如果需要每个页面单独修改head属性  可以在layout或者page中 使用next提供的Metadata来修改Head  导出metadata即可

页面之间的导航 <Link>组件， useRouter Hook

usePathname() next/navigation 获取当前的链接

Link组件支持锚点属性 链接自动滚动

useRouter next/navigation 只能在客户端组件中使用

客户端路由和服务端路由混用，在客户端上nextjs预取并缓存路由段，当当行到一个新的路由时浏览器不会刷新重新加载页面，只会加载新的路由片段 提高导航性能

==预取==

预取：在用户访问路由之前在后台预加载路由的一种方法，两种方式 第一种是<link>组件当路由在用户viewport可见时会自动预取，预取在首次加载或者滚动进入视图时发生
第二种方式是  router.prefetch useRouter hook可以使用编程的方式预取路由

静态路由和动态路由预取的方式不同，静态路由预取默认为真整个路由预取和缓存。动态路由预取方式默认为自动，只预取共享布局直到第一个loading.js 文件被缓存30s，降低了整个动态路由的成本，意味着可以显示及时加载状态展现更好的视觉反馈

可以设置prefetch为false 禁止预取

nextjs有一个 in-memory client-side cache  RouterCache  当用户在应用程序中导航时，预取路由段和访问路由的React Server Component Payload 缓存在内存中，导航的时候尽可能重用缓存而不是通过减少请求数量或者向服务器发出新的请求


局部渲染：客户端重新渲染导航时更改的路由段，保留共享和布局的部分






