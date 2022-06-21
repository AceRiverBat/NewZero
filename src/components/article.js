import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Article(props) {
    const { id } = useParams(props);
    useEffect[id] = () => {
        fetch(`http://127.0.0.1:8000/api/articles`)
            .then(response => response.json())
            .then(data => this.setState({ articles: data }));
        return() => {
            this.setstate({ articles: [] });
        }
    }
    return (
        <div>
            <Header />
            <h1>Article {id}</h1>
            <div className="container">
                <div className="row">
                    <img class="card-img-top" src={props.image} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{props.titre}</h5>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};


