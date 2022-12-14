import { State } from "./state.mjs";

const $root = document.querySelector("#root");
const $add = document.querySelector("#add");

$add.addEventListener("click", () => {
    memory.state.products.push({
        id: 4,
        title: "cavallucci",
        price: 35,
    })
});

const memory = new State({
    products: [
        {
            id: 1,
            title: "panettone",
            price: 20,
        },
        {
            id: 2,
            title: "pandoro",
            price: 15,
        },
        {
            id: 3,
            title: "torrone",
            price: 25,
        }
    ],
}, () => {
    renderPage();
});

const renderPage = () => {
    const html = memory.state.products.map((product) => {
        return `
        <div>
            <span>${product.title} - ${product.price}€</span>
        </div>
        `
    }).join("");

    $root.innerHTML = html;
}

renderPage();


