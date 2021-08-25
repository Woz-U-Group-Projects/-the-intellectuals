import React, { Component } from 'react'


class Banner extends Component {

    render() {
        return (
            <section className="container-banner">


                <h2> {localStorage.username} </h2>


            </section>
        )
    }
}

export default Banner


