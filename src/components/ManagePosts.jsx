import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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

    const rimuoviPost = (idPost) => {
        // creiamo nuovo array senza il post che non cancelliamo
        const nuoviPosts = posts.filter((post) => post.id !== idPost)
        // chiamata ad API sulla rotta di delete
        axios.delete(`http://localhost:3000/posts/${idPost}`)
            .then(res =>
                console.log(res),
                // lo sostituiamo anche nel FE
                setPosts(nuoviPosts)
            )
            .catch(err => console.log(err))


    }


    return (
        <div>
            <h1 id="titolo-posts">Posts</h1>
            <ul className="posts_container">
                {posts.map((post) => (
                    <li className="post" key={post.id}>
                        <h2 id="titolo">{post.title}</h2>
                        <img id="img_post" src={post.image} alt={post.title} />
                        <p id="contenuto">{post.content}</p>
                        <p id="categoria">{Array.isArray(post.tags) ? post.tags.join(", ") : post.tags}</p>
                        <Link className="dettaglioPost" to={`/posts/${post.id}`}>Vai al post</Link>
                        <span id="icona"><FontAwesomeIcon icon={faTrashCan} onClick={() => rimuoviPost(post.id)
                        } /></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}