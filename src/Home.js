import React from "react";
import Routing from './Routing/Routes';
import { useNavigate } from 'react-router-dom';
import './Home.css';




function Home() {
    const Navigate = useNavigate()
    return (
        <>
            <header >
            <div class="overlay">
    <section id="home">
        <h1 class="h-primary">Welcome to <br/><span className="word">Spoon & Forks</span></h1>
        <br/>
        <p>Here We serve you best Dishes </p>
        <button class="btn1">Order Now</button>
    </section>
</div>

            </header>

        </>
    )
}


export default Home
