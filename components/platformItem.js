import '../CSS/style.css';

const PlatformItem = (title, imgSrc, className, elementID) => {
    const platform = document.querySelector(elementID);
    const template = `
    <div class="${className}">
        <img src="${imgSrc}" alt="${title}">
        <p>${title}</p>
    </div>
`;

    platform.innerHTML += template;
}

export default PlatformItem;