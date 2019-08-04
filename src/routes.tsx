import { HomePage } from './pages/home';
import { AuthPage } from './pages/auth';
import { AboutPage } from './pages/about';
import { Framework7Params } from 'framework7/components/app/app-class';

export const f7params: Framework7Params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  // @ts-ignore
  routes: [
    {
      path: '/home',
      component: HomePage,
    },
    {
      path: '/about/',
      component: AboutPage,
    },
    {
      path: '/',
      component: AuthPage,
    },
  ],
};
