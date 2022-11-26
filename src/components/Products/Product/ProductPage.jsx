import React from "react";
import { useState, useEffect } from 'react';
import { Link  , useLocation} from "react-router-dom";

const ProductPage = () => {
    const [posts, setPost] = useState([]);
console.log(useLocation())
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    return (
        <div>
            <h1>Our Products</h1>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/products/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductPage