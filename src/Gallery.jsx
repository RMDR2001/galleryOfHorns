import HornedBeast from './HornedBeast';
import hornedBeastLab2 from './hornedBeastLab2.json'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function Gallery() {
    return (
        <>
            <Container>
                <Row xs={2} sm={3} md={4} lg={5}>
                    {
                        hornedBeastLab2.map((data, index) =>
                            <HornedBeast
                                key={index}
                                title={data.title}
                                description={data.description}
                                imagenURL={data.image_url}
                                alt={data.keyword}
                                horns={data.horns} />)
                    }
                </Row>
            </Container>

        </>
    );
}

export default Gallery;