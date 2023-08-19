import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return <div className='container'>
        <Header></Header>
        <Menu></Menu>
        <Footer></Footer>
    </div>
}

function Header() {
    return <header className='header'>
        <h1>First React Pizza App</h1>
    </header>
}


function Menu() {

    return <div className='menu'>
        <h2>Our Menu</h2>
        <ul className='pizzas'>
            {pizzaData.map((item) => (
                <Pizza name={item.name}
                    ingredients={item.ingredients}
                    price={item.price}
                    photoName={item.photoName}
                    soldOut={item.soldOut}
                    key={item.name}>
                </Pizza>
            ))}
        </ul>
    </div >
}

function Pizza(props) {

    return <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
        <img src={props.photoName} alt="funghi" />
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <span>{props.soldOut ? 'Sold Out' : props.price}</span>
        </div>
    </ li>


}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isopen = hour > openHour && hour < closeHour;
    console.log(isopen);

    return <footer className='footer'>
        {
            isopen ? (<div className='order'>
                <p>We are Open Come Visit us or Order Online</p>
                <button className='btn'>Order</button>
            </div>
            ) : <p>Closed</p>
        }

    </footer>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);