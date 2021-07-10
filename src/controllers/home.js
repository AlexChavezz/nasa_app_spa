import  view from '../views/home.html';
const home = ( data ) => {

    const root = document.getElementById('root');
    root.innerHTML = view;
    document.querySelector('.image').innerHTML = `<img src=${data.url}>`
    document.querySelector('.description').innerHTML = data.explanation;
    document.querySelector('.title').innerHTML = data.title;
    document.querySelector('.date').innerHTML = `Date: ${data.date}`;
    document.querySelector('.copy').innerHTML = `Image Credit & Copyright:  <b>${ data.copyright }</b>`;
   

    document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = getDate();
    console.log(date)
    sendApiRequest( date );
    }); 
    
}
function getDate(){
    const day = document.querySelector('#year').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#day').value;
    return {
        day: day,
        month:month,
        year: year
    }
}
export async function sendApiRequest( {day, year, month} ) {

    const API_KEY = "ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah";
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${ year }-${ month }-${ day }&api_key=${API_KEY}`);

    const data = await response.json();
    home( data );

}

