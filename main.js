import './CSS/style.css'
import Card from './components/card';
import PlatformItem from './components/platformItem';

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

];

const platformItems = [
    {
        _id: 1,
        title: "Stream",
        icon: "./public/images/stream.png"
    },
    {
        _id: 2,
        title: "Rockstar",
        icon: "./public/images/rockstar.png"
    },
    {
        _id: 3,
        title: "Epic",
        icon: "./public/images/epic.png"
    },
    {
        _id: 4,
        title: "Microsoft Store",
        icon: "./public/images/microsoft.png"
    },
    {
        _id: 5,
        title: "Xbox",
        icon: "./public/images/xbox.png"
    },
    {
        _id: 6,
        title: "Playstation",
        icon: "./public/images/playstation.png"
    }
]

const prepaidItems = [
    {
        _id: 1,
        title: "Stream Gift Cards",
        icon: "./public/images/card3.png"
    },
    {
        _id: 2,
        title: "IG Gift cards",
        icon: "./public/images/card2.png"
    },
    {
        _id: 3,
        title: "Blizzard Gift Cards",
        icon: "./public/images/card1.png"
    }
];



trendings.map((item) => Card(item.title, item.price, item.discount, item.image));

platformItems.map(item => PlatformItem(item.title, item.icon, "platform-item", "#platformBody"));
prepaidItems.map(item => PlatformItem(item.title, item.icon, "prepaid-item", "#prepaidBody"));


