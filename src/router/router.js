import { sendApiRequest } from '../controllers/home';
import { next } from '../controllers/next';

    

export const router = ( router ) => {
    switch ( router ){  
        case '#/home': {
            sendApiRequest();
        }
        break;
        case '#/next': {
            next();
        }
        break;
    }
} 