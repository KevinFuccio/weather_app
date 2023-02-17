import { Link } from "react-router-dom";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const MoreInformations = ()=>{
    const weather = useSelector((state)=> state.weather)

    return(
        <Container>
      <Row className="d-flexd-flex justify-content-center ">
        <Col xs={12} md={6}>
          {weather ? (
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{weather.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  Temp: {weather.main.temp} feels: {weather.main.feels_like}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Humidity: {weather.main.humidity}%
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                 Weather: {weather.weather[0].description}, 
                  Windspeed: {weather.wind.speed}, direction: {weather.wind.deg}deg
                </Card.Subtitle>
                <Link to="/home">
                  <Button>
                    Go Back
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ) : (
            // <Spinner animation="border" role="status">
            //   <span className="visually-hidden">Loading...</span>
            // </Spinner>
            <p>Insert a city...</p>
          )}
        </Col>
      </Row>
    </Container>
    )
}
export default MoreInformations