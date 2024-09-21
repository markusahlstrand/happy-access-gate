import Index from "./pages/Index.svelte";
import { Home } from "lucide-svelte";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: Home,
    component: Index,
  },
];