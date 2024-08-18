import HornedBeast from './HornedBeast';
import hornedBeast from './hornedBeast.json';

function Gallery(){
    return (
        <>
        <HornedBeast title={"imagen1"} description={"Esta es una imagen de referencia"} imagenURL={"https://plus.unsplash.com/premium_photo-1661810799921-ded27d475104?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <HornedBeast title={"toro"} description={"Esta es una imagen de referencial de un toro"} imagenURL={"https://images.unsplash.com/photo-1532784774615-647af4990186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        {
            hornedBeast.map(data => {
                <HornedBeast title={data.title} description={data.description} imagenURL={data.image_url}/>
            })
        }
        </>
    );
}

export default Gallery;