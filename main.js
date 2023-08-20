import './CSS/style.css'
import Card from './components/card';

const trendings = [
    {
        _id: "1",
        title: "Armored Core 6",
        price: "19.99",
        discount: "-26",
        image: "/images/b4.webp"
    },
    {
        _id: "2",
        title: "Madden 24",
        price: "30.99",
        discount: "-23",
        image: "/images/b5.webp"
    },
    {
        _id: "3",
        title: "Reminant 2",
        price: "34.89",
        discount: "-30",
        image: "/images/b6.webp"
    }

]


trendings.map((item) => Card(item.title, item.price, item.discount, item.image));



