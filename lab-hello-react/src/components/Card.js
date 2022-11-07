function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;