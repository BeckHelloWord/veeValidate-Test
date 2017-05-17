import hello from './components/hello';
import addbook from './components/addbook';
import booklist from './components/booklist';
import demo from './components/demo';

const router = {
  routes: [
    {
      path: "/",
      component: hello
    },
    {
      path: "/hello",
      component: hello
    },
    {
      path: "/add",
      component: addbook
    },
    {
      path: "/list",
      component: booklist
    },
    {
      path: "/demo",
      component: demo
    },
  ]
} //这里可以带有路由器的配置参数


export default router; //将路由器导出