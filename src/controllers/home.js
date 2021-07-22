import view from '../views/home.html';

export default () => {
    const divElement = document.createElement('article');
    divElement.innerHTML = view ;
    return divElement;
}
