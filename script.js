const button = document.querySelector('#btn');

let adviceId = document.getElementById('advice-id');
let advice = document.getElementById('quote')

const getQuotes = async () => {
    try {
        let response = await fetch ("https://api.adviceslip.com/advice")
        let data = await response.json()
        console.log(data)
        adviceId.innerHTML = `Advice #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
    } catch (error) {
        console.log(error)
    }
}


button.addEventListener('click', getQuotes)