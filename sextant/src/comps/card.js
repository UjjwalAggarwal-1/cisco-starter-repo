import './comps.css';

function Card({title, desc}){

    return (
        <div class="card">
            <div class="container">
                <h4><b>{title}</b></h4>
                <p>{desc}</p>
            </div>
        </div>
    )

}

export default Card;