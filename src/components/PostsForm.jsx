import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialFormData = {
    title: "",
    image: "",
    content: "",
    tags: []
}

export default function PostsForm() {

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/posts", formData)
            .then(res => {
                console.log(res);
                navigate("/posts");
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* valore categoria */}
            <div className="form_container">
                <h3>Aggiungi un nuovo post</h3>
                <input
                    name="tags"
                    type="text"
                    value={formData.tags}
                    placeholder="Tags post"
                    onChange={handleFormData}
                    id="form_categoria"
                />
                <input
                    name="image"
                    type="text"
                    value={formData.image}
                    placeholder="URL img post"
                    onChange={handleFormData}
                    id="form_img"
                />
                {/* valore titolo */}
                <input
                    name="title"
                    type="text"
                    value={formData.title}
                    placeholder="Titolo post"
                    onChange={handleFormData}
                    id="form_titolo"
                />
                {/* valore contenuto */}
                <textarea name="content" value={formData.content} onChange={handleFormData} placeholder="Contenuto post" id="form_contenuto"
                ></textarea>
                <button>
                    Aggiungi Post
                </button>
            </div>
        </form>
    )

}