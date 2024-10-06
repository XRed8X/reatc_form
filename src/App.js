import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {  Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {FormsComponent, FormUno, FormDos, FormTres, FormCuatro, FormCinco, FormSeis, FormSiete, FormOcho, FormNueve, FormDiez} from './components/Formularios'

function App() {
  const [data, setData] = useState({})

  const onChange = (e) => {
    e.preventDefault();
    // console.log(e)
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj)
    console.log(data)

  }

  const onClick = () => {
    console.log(data)
  }

  /* Aqui guardo todos los chingados formularios con una clave y un valor */
  const comp_forms = {

    '0. Mayo Bolsa de Trabajo': <FormsComponent  onChange={onChange} onClick={onClick}/>,
    '1. Mayo Tecnologia y Sociedad': <FormUno onChange={onChange} onClick={onClick}/> ,
    '2. Mayo Ciencia y Medio Ambiente': <FormDos onChange={onChange} onClick={onClick}/> ,
    '3. Mayo Historia y Política': <FormTres onChange={onChange} onClick={onClick}/> ,
    '4. Mayo Economía y Finanzas': <FormCuatro onChange={onChange} onClick={onClick}/> ,
    '5. Mayo Cultura y Sociedad': <FormCinco onChange={onChange} onClick={onClick}/> ,
    '6. Mayo Ciencia y Tecnología': <FormSeis onChange={onChange} onClick={onClick}/>,
    '7. Mayo Psicología y Salud Mental': <FormSiete onChange={onChange} onClick={onClick}/> ,
    '8. Mayo Filosofía y Ética': <FormOcho onChange={onChange} onClick={onClick}/>,
    '9. Mayo Educación y Aprendizaje': <FormNueve onChange={onChange} onClick={onClick}/> ,
    '10. Mayo Deportes y Salud': <FormDiez onChange={onChange} onClick={onClick}/>,

  }

  /* Esta cosa de aqui toma los objetos de "comp_forms" y los convierte en un chingao arreglo con una clave y un valor
  y luego lo mapea para que la chingadera se pueda mostrar en pantalla */
  const showCards = Object.entries(comp_forms).map(([key, form]) => {
    return (
      <Col xs={12} sm={6} lg={4} className="mb-4">
        <Card className="mt-3" key={key}>
          <Card.Body className='d-flex flex-column justify-content-between'>
            <Card.Title className='text-center'>{key}</Card.Title>

            {form}

          </Card.Body>
        </Card>
      </Col>
    )
  })


  return (
    <>
      <Nav className="ml-auto">
        <Nav.Link href="/">Mayo Forms</Nav.Link>
        <Nav.Link href="/counter">Mayo Counter</Nav.Link>
      </Nav>
      <Container className="mt-3">
        <h1 className='text-center'>Mayo Formularios</h1>
        <Row>
          {/* Toma lo que hay dentro de "showCards" y lo pone aqui */}
          {showCards}
        </Row>
      </Container>
    </>
    
  )
  
}

export default App;
