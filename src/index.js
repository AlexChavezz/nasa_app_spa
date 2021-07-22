import './main.scss';
import { router } from './router/router';
import './controllers/home'
router(window.location.hash);
window.addEventListener('hashchange', async () => {
    router(window.location.hash);
});

