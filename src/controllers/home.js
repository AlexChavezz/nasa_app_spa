import  view from '../views/home.html';

export const home = async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    const data = await sendApiRequest( divElement );
    showInfo(divElement, data);
    findUp( divElement );
    return divElement;
}
const sendApiRequest = async ( divElement ) => {
    const { day, month, year } =  getDate( divElement );
    if( day.value === "" || month === "" || year === "" ){
        const API_KEY = "ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah";
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        return await response.json();
    }else{
        const API_KEY = "ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah";
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${year.value}-${month.value}-${day.value}&api_key=${API_KEY}`);
        return await response.json();
    }
}
const getDate = ( divElement ) => {
    const day = divElement.querySelector('#day');
    const month = divElement.querySelector('#month');
    const year = divElement.querySelector('#year');
    return {
        day: day,
        month: month,
        year: year,
    }
}
const findUp = ( divElement ) => {
    divElement.querySelector('form').addEventListener('submit',() => {
        const data = sendApiRequest( divElement )
        .then( data => showInfo( divElement, data ) );
   
    });
}
const showInfo = async ( divElement, data ) => {
    divElement.querySelector('.image').innerHTML = `<img src=${await data.url}>`
    divElement.querySelector('.description').innerHTML = await data.explanation;
    divElement.querySelector('.title').innerHTML = await data.title;
    divElement.querySelector('.date').innerHTML = `Date: ${await data.date}`;
    divElement.querySelector('.copy').innerHTML = `Image Credit & Copyright:  <b>${await data.copyright }</b>`;
}
