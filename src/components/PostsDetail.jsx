import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostsDetail() {

    const { id } = useParams();
    const [post, setPost] = useState({});

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    return (
        <>
            <li className="post" key={post.id}>
                <h2 id="titolo">{post.title}</h2>
                <img id="img_post" src={post.image} alt={post.title} />
                <p id="contenuto">{post.content}</p>
                <p id="categoria">{post.tags}</p>
            </li>
            <nav>
                <Link to={`/posts/${parseInt(id) - 1}`}>Prev Post</Link>
                <Link to={`/posts/${parseInt(id) + 1}`}>Next Post</Link>
            </nav>
        </>
    )
}