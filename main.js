import './CSS/style.css'
import Card from './components/card';

const trendings = [
    {
        _id: "1",
        title: "Sengoku Dynasty",
        price: "19.99",
        discount: "-26"
    },
    {
        _id: "2",
        title: "Sims 4 Horse Ranch",
        price: "30.99",
        discount: "-23"
    },
    {
        _id: "3",
        title: "Reminant 2",
        price: "34.89",
        discount: "-30"
    }

]


trendings.map((item) => Card(item.title, item.price, item.discount));



