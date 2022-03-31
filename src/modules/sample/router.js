const Default = () => import("layouts/Default.vue");
const HomeView = () => import("modules/sample/views/HomeView.vue");

const moduleRoute = [
  {
    path: "/",
    redirect: "/home",
    component: Default,
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          auth: false,
        },
        component: HomeView,
      },
    ],
  },
];

export default (router) => {
  router.addRoute(...moduleRoute);
};
