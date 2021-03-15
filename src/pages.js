import React from 'react'
import {Link, Outlet} from "react-router-dom"

export function Home(){
    return (
        <div>
            <h1> Company website </h1>
            <nav>
                <Link to="about">about </Link>
                <Link to="events">events </Link>
                <Link to="contact">contact </Link>
            </nav>
        </div>
    )
}

export function About(){
    return (
        <div>
            <h1> About Company </h1>
            <Outlet/>
        </div>
    )
}

export function Events (){
    return (
        <div>
            <h1> Company Events  </h1>
        </div>
    )
}

export function Contact(){
    return (
        <div>
            <h1> Contact site </h1>
        </div>
    )
}

export function Services(){
    return (
        <div>
            <h2> Our Services </h2>
        </div>
    )
}

export function CompanyHistory(){
    return (
        <div>
            <h2> Our Company History </h2>
        </div>
    )
}

export function Location(){
    return (
        <div>
            <h2> Our Location </h2>
        </div>
    )
}

export function Woops404(){
    return (
        <div>
            <h1> This page does not exist! </h1>
        </div>
    )
}