import { WelcomePage } from './pages/welcome-page'

export const params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  routes: [
    {
      path: '/',
      component: WelcomePage,
    },
    {
      path: '/login',
      component: WelcomePage,
    },
    // {
    //   path: '/home/',
    //   component: homePage,
    // },
  ],
};