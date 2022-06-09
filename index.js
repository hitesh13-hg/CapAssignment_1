const charactersList = document.getElementById('cityList');
const searchBar = document.getElementById('form1');

hpCharacters = [{"name":"Bengaluru","places":"100","indian":true,"image":"./images/bnglr.jpeg"},
{"name":"Goa","places":"250","indian":true,"image":"./images/goa.jpg"},
{"name":"Paris","places":"100","indian":false,"image":"./images/paris.jfif"},
{"name":"Kolkata","places":"100","indian":true,"image":"./images/kolkata.jpg"},
{"name":"Malaysia","places":"100","indian":false,"image":"./images/malasia.jpeg"},
{"name":"New York","places":"100","indian":false,"image":"./images/newyork.jpg"},
{"name":"Bangkok","places":"100","indian":false,"image":"./images/bangkok.jpg"},
{"name":"Singapore","places":"250","indian":false,"image":"./images/singapore.jpg"},
{"name":"Mumbai","places":"100","indian":true,"image":"./images/mumbai.jpg"},
{"name":"Rishikesh","places":"250","indian":true,"image":"./images/rishi.jpg"},
{"name":"Amritsar","places":"100","indian":true,"image":"./images/asr.jfif"},
{"name":"Bali","places":"250","indian":false,"image":"./images/bali.jfif"}];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) 
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = () => {
    try {
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

var hpCharacters;
const displayCharacters = (cities) => {
    const htmlString = cities.map((city) => {
            return `
            <div class="col-lg-3 col-sm-6 my-5 city" country="${city.indian}" places=${city.places}>
                <a href="./form.html" id="bengaluru">
                  <div class="placeimg">
                    <img src="${city.image}" class="img-fluid">
                    <div class="text-center city-text">
                      <h4>${city.name}</h4>
                      <h5>${city.places}+places</h5>
                    </div>
                  </div>
                </a>
              </div>
        `;
        })
        .join('');
    cityList.innerHTML = htmlString;
};

loadCharacters();


function objectFilterD(){
    
    
        document.getElementById("menu").addEventListener('change', (e) => {
        e.preventDefault()
            const storeProducts = document.querySelectorAll('.city');
            const filter = e.target.value;
            console.log(filter);
        
            storeProducts.forEach((product)=> {
            let attributeValue = product.getAttribute("country");
            console.log(product);
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (attributeValue===filter){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
        });

}
objectFilterD();

var debBtn=document.getElementById("nmenu");
const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
} 


function objectFilterDn(){
    
    
        debBtn.addEventListener('change', debounce((e) => {
        e.preventDefault()
            const storeProducts = document.querySelectorAll('.city');
            const filter = e.target.value;
            console.log(filter);
        
            storeProducts.forEach((product)=> {
            let attributeValue = product.getAttribute("places");
            console.log(attributeValue);
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (attributeValue===filter){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
        },1000));

}
objectFilterDn();