import '../CSS/style.css';

const SearchBarItem = (id, title, image, arrow) => {
    const searchBarItems = document.querySelector('#searchBarItems');
    const template = `
    <!-- ${title} -->
    <div id="searchBarItem${id}" class="search-bar-item">
        <img src="${image}" alt="${title}">
        <p>${title}</p>
        <img class="down-arrow" src="${arrow}" alt="down-arrow">
    </div>
`;
    searchBarItems.innerHTML += template;

}

export default SearchBarItem;