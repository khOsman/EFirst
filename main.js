import './CSS/style.css'
import Card from './components/card';
import PlatformItem from './components/platformItem';
import SearchBarItem from './components/searchBarItem';

const searchBarItems = [
    {
        _id: 1,
        title: "PC",
        icon: "/images/pc.png",
        arrow: "/images/down_arrow.png"
    },
    {
        _id: 2,
        title: "Playstation",
        icon: "/images/playstation.png",
        arrow: "/images/down_arrow.png"
    },
    {
        _id: 3,
        title: "Xbox",
        icon: "/images/xbox.png",
        arrow: "/images/down_arrow.png"
    },
    {
        _id: 4,
        title: "Nintendo",
        icon: "/images/nintendo.png",
        arrow: "/images/down_arrow.png"
    },
]

const trending = [
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

const body = document.querySelector('body');
const crossBtn = document.getElementById('crossBtn');
const panelCrossBtn = document.getElementById('panelCrossBtn');
const searchBtn = document.getElementById('searchBtn');
const searchNavContainer = document.getElementById('searchNavContainer');
const searchBarInput = document.getElementById('searchBarInput');
const dropdownMenu = document.getElementById('dropdownMenu');

const searchBarItemIDs = [];

searchBarItems.map((item) => {
    SearchBarItem(item._id, item.title, item.icon, item.arrow);
    searchBarItemIDs.push(`searchBarItem${item._id}`);
});
trending.map((item) => Card(item._id, item.title, item.price, item.discount, item.image));
platformItems.map(item => PlatformItem(item.title, item.icon, "platform-item", "#platformBody"));
prepaidItems.map(item => PlatformItem(item.title, item.icon, "prepaid-item", "#prepaidBody"));



const handleOnClickBtn = (element, showElement, hideElement, callback) => {
    element.addEventListener('click', () => {
        if (showElement) showElement.classList.remove("hide");
        else {
            searchBarItemIDs.map(e => {
                document.getElementById(e).classList.remove('active');
            })
        }
        if (hideElement) {
            hideElement.classList.add("hide");
            callback();
        }
        console.log(element + " Pointer down event");
    });
}

//Search Btn handler
handleOnClickBtn(searchBtn, searchBarInput, searchNavContainer, () => {
    if (!dropdownMenu.classList.contains('hide')) dropdownMenu.classList.add('hide');
});
//Cross Btn handler
handleOnClickBtn(crossBtn, searchNavContainer, searchBarInput);
handleOnClickBtn(panelCrossBtn, null, dropdownMenu);


searchBarItemIDs.map(element => {
    console.log('element', element);
    const searchBarItem = document.getElementById(element);
    //Cross Btn handler
    searchBarItem.addEventListener('click', () => {
        dropdownMenu.classList.remove('hide');
        searchBarItemIDs.map(e => {
            document.getElementById(e).classList.remove('active');
        })
        searchBarItem.classList.add('active');
    })
});

console.log(searchBarItemIDs);


