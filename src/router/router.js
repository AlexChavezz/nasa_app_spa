import { home }  from '.././controllers/home';
import   next  from '../controllers/next';


export const router = async ( router ) => {
    const root  = document.querySelector('#root');
    root.innerHTML = '';
    switch ( router ){  
        case '#/PictureOfDay': {
            root.appendChild( await home() )  
        }
        break;
        case '#/NeoWs': {
            root.appendChild( await next() );
        }
        break;
    }
} 