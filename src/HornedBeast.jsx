function HornedBeast(props) {
    return(
        <>
        <h2>{props.title}</h2>
        <img src={props.imagenURL} style={{width:'200px'}} alt={props.title}/>
        <p>{props.description}</p>
        </>
    );
}

export default HornedBeast;