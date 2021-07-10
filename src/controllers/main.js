const API_URL =  'https://api.nasa.gov/planetary/apod?api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah';
import { home } from '../controllers/home';

export async function sendApiRequest() {

    const API_KEY = "ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah";
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=2014-10-01&api_key=${API_KEY}`);

    const data = await response.json();

    home(data);
}

/*
function showData(data){
    const container = document.querySelector('.container').innerHTML = data.explanation;
    document.querySelector('.info').innerHTML = `<img src=${data.url}>`;
}

function getDate(){
    const year = document.querySelector('.year').value;
    const month = document.querySelector('.month').value;
    const day = document.querySelector('.day').value;
    return {
        year: year,
        month:month,
        day: day,
    };
}*/