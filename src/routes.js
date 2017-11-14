import Home from './components/Home.vue';
import Callback from './components/Callback.vue';

export const routes = [
    { path: "", component: Home },
    { path: "/auth/google/callback",  component: Callback }


]