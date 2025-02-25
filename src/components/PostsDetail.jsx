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
            <h1>Post Detail {post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
            <p>{post.tags}</p>
            <nav>
                <Link to={`/posts/${parseInt(id) - 1}`}>Prev Post</Link>
                <Link to={`/posts/${parseInt(id) + 1}`}>Next Post</Link>
            </nav>
        </>
    )
}