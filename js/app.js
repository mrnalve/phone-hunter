let loadPhone = async(searchValue)=>{
    let url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    let res = await fetch(url)
    let data = await res.json()
    displayPhone(data.data);
}

let displayPhone = data =>{
    // console.log(data);
    let cardSection = document.getElementById('cardSection')
    cardSection.innerHTML= ''
    data.forEach(phone => {
        console.log(phone);
        let card = document.createElement('div');
        card.classList.add('card', 'w-96', 'bg-base-100', 'shadow-xl', 'p-4', 'my-4')
        card.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        cardSection.appendChild(card)
    });
}

// get specific phone when search button clicked
let searchBtn = ()=>{
    let searchField = document.getElementById('searchField');
    let searchFieldValue = searchField.value;
    loadPhone(searchFieldValue)
}

// key enter
document.getElementById('searchField').addEventListener('keyup', (e)=>{
    if (e.key === 'Enter') {
        searchBtn()
    }
})