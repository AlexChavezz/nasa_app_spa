import { pictureOfDay } from '../controllers/pictureOfDay';
import next from '../controllers/next';
import { error_404 } from '../controllers/error-404';
import home from '../controllers/home';
export const router = async (router) => {

    const root = document.querySelector('#root');
    root.innerHTML = '';
    switch (router) {
        case '': {
            root.appendChild( home() );
        }
            break;
        case '#/PictureOfDay': {
            root.appendChild(await pictureOfDay());
        }
            break;
        default: {
            root.appendChild( error_404() );
        }
            break;
    }
}