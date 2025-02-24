import { useState, useEffect } from "react";
import axios from "axios";

// creazione GestionalePost
export default function GestionalePost() {

    // utilizzo useState per gestione dati (array articoli) 
    const [posts, setPosts] = useState([]);

    // funzione gestione chiamata API
    function fetchPosts() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((error) => {
                console.error("Errore nella chiamata API:", error);
            });
    }

    // richiamo la funzione di richiesta dati al caricamento del componente solo al primo rendering
    useEffect(fetchPosts, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul className="posts_container">
                {posts.map((post) => (
                    <li className="post" key={post.id}>
                        <h2 id="titolo">{post.title}</h2>
                        <img id="img_post" src={post.image} alt={post.title} />
                        <p id="contenuto">{post.content}</p>
                        <p id="categoria">{post.tags}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}