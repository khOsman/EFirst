import '../CSS/style.css';

const Card = (id, title, price, discount, image) => {
    const trending = document.querySelector('#trendings');
    const trendingTemplate = `
    <div id="card${id}" class="card-container">
    <!-- item cover -->
    <div class="card-bg">
        <img src="${image}"
        <!-- badge -->
        <div class="card-badge-curve">
        <p>${discount}%</p>
        </div>
    </div>
    <!-- item details -->
    <div class="card-item-details">
        <!-- item name -->
        <div>
        <p>${title}</p>
        </div>
        <!-- price -->
        <div>
        <p>${price}&euro;</p>
        </div>
    </div>
    </div>
`;
    trending.innerHTML += trendingTemplate;

}

export default Card;