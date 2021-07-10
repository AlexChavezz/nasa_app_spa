import  views  from '../views/something.html';

export const next = () => {
    // const div = document.createElement('div');
    // div.innerHTML= views;
    
    const root = document.querySelector('#root');
    root.innerHTML = views;
}