const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const dog_btn = document.getElementById('dog_btn');
const cat_btn = document.getElementById('cat_btn');

dog_btn.addEventListener('click', getRandomDogImage);
cat_btn.addEventListener('click', getRandomCatImage);

function getRandomDogImage() {
    fetch('https://random.dog/woof.json/')
        .then(res => res.json())
        .then(data => {
            dog_result.innerHTML = `<img src="${data.url}" >`;
        })
        .catch(err => {
            dog_result.innerHTML = `<p style="color: red;">${err.message}</p>`;
        });
}

function getRandomCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search/')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src="${data[0].url}" >`;
        })
        .catch(err => {
            cat_result.innerHTML = `<p style="color: red;">${err.message}</p>`;
        });
}