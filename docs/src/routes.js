import Bruker from "./pages/Bruker.vue";
import Admin from "./pages/Admin.vue";

export default [
  { path: "/bruker", component: Bruker },
  { path: "/admin", component: Admin },
  { path: "*", redirect: "/bruker" }
];
