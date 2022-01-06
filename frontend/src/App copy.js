//frontend/src/app.js
import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/boxapi/');
            const posts = await res.json();
            this.setState({
                posts
            });
            console.log(posts);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.movieNm}>
                        <h1>{item.movieNm}</h1>
                        <h1>개봉일 {item.openDT}</h1>
                        <span>매출액 {item.salesAmt}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;