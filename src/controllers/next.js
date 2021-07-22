/*import  views  from '../views/home.html';

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML= views;
    const data  = await sendApiRequest();

    console.log( data )
    // showContent(divElement, data)
    return divElement;
}


const sendApiRequest = async () => {
    const API_KEY = "ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah";
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-07-13&end_date=2021-07-18&api_key=${API_KEY}`);
    return await response.json();

}

// const showContent = (divElement, data) => {
//     divElement.querySelector('.count').innerHTML = data.element_count;
// }
*/