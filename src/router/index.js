import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/create-artist',
      name: 'CreateArtist',
      component: () => import('../views/CreateArtist.vue'),
      meta: {
        enterClass: "animate__animated animate__fadeIn",
        leaveClass: "animate__animated animate__fadeOutRight"
      }
    },
    {
      path: '/',
      name: 'LineUp',
      component: () => import('../views/LineUp.vue'),
      meta: {
        enterClass: "animate__animated animate__fadeInUpBig",
        leaveClass: "animate__animated animate__fadeOut"
      }
    }
  ]
});

export default router;
