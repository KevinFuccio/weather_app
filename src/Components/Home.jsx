import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Spinner,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Home = () => {
  const  city = useSelector((state) => state.city)
  const verification = useSelector((state)=> state.verification)
  const [inputField, setInputField] = useState("");
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  const handleChange = (e) => {
    setInputField(e.target.value);
  };

  const fetchSubmit = async (e) => {
    e.preventDefault();

    let citySearched = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputField}&limit=5&appid=31e7a42eab2d0f23945d16d2e4a60acd`
    );
    if (citySearched.ok) {
      let dataCity = await citySearched.json();
      console.log(dataCity);
      dispatch({
        type:"CITY_ADD",
        payload: dataCity[0]
      })
      
     if(dataCity.length === 0){
      dispatch({
        type:"SET_VERIFICATION_TRUE",
      })
     }
     else{
      dispatch({
        type:"SET_VERIFICATION_FALSE",
      })
     }
    }
  }
  const fetchWeather = async()=>{
    let responseWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=31e7a42eab2d0f23945d16d2e4a60acd&units=metric`
    );
    let responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=31e7a42eab2d0f23945d16d2e4a60acd&units=metric`)
    if (responseWeather.ok && responseForecast.ok) {
      let dataWeather = await responseWeather.json();
      let dataForecast = await responseForecast.json()
         setWeather(dataWeather);

    }
  }
  
  useEffect(()=>{
    if(city){
      fetchWeather()
    }
  },[city])

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5 mb-5">
        <Col xs={12} md={6}>
          <Form onSubmit={fetchSubmit}>
            <Form.Control
              type="search"
              placeholder="insert your city"
              value={inputField}
              onChange={handleChange}
            />
          </Form>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center ">
        <Col xs={12} md={6}>
          {verification?(<p>Non ci sono citta</p>):(
          weather ? (
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{weather.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  Temp: {Math.round(weather.main.temp)}??C
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  {weather.weather[0].description}
                </Card.Subtitle>
                <Link to="/more-informations">
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "MORE_INFO",
                        payload: weather,
                      });
                    }}
                  >
                    More Informations
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ): (
            <p className="text-center">Select a city...</p>
          )
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
