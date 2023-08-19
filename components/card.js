import '../CSS/style.css';

const Card = (title, price, discount, image) => {
    const trendings = document.querySelector('#trendings');
    const trendingsTemplate = `
    <div class="card-container">
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
    trendings.innerHTML += trendingsTemplate;
}

export default Card;