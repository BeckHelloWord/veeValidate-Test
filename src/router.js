import demo from './components/demo';

const router = {
  routes: [
    {
      path: "/",
      component: demo
    },
    {
      path: "/demo",
      component: demo
    },
  ]
} //这里可以带有路由器的配置参数


export default router; //将路由器导出