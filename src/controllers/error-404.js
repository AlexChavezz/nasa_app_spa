import view from '../views/404.html';

export const error_404 = () => {
    const divElement = document.createElement('article');
    divElement.innerHTML = view;
    return divElement;
}