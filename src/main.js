import './style.css';
import App from './App.vue';
import { routes } from './router';
import { ViteSSG } from 'vite-ssg';

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, ({ router }) => {
  router.afterEach(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
});
