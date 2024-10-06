import { Button, Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import { useState } from "react";

const Counter = () => {

    const [count, SetCount] = useState(0);
    const [list, setList] = useState([]);
    const [suma, setSuma] = useState(0);
    const [data, setData] = useState({})

    
    const mayoAddElement = () => {
        const nList = list;
        nList.push(nList.length + 1);
        setList([...nList]);
    
        let nuevaSuma = suma;
        for (const obtenerValor in data) {
            console.log(data[obtenerValor]);
            nuevaSuma += parseInt(data[obtenerValor] || 0);
        }
        setSuma(nuevaSuma);
    };
    
    const mayoRemoveElement = () => {
        const nList = list;
        nList.pop(nList.length - 1);
        setList([...nList]);
    
        let nuevaSuma = suma;
        for (const obtenerValor in data) {
            console.log(data[obtenerValor]);
            nuevaSuma -= parseInt(data[obtenerValor] || 0);
        }
        
        if (nuevaSuma < 0) { 
            nuevaSuma = 0;
        }
    
        setSuma(nuevaSuma);
    };
    
    const onChange = (e) => {
        e.preventDefault();
        const obj = data;
        obj[e.target.name] = e.target.value;
        setData(obj);
        console.log(data);
    };


    return (
        <>
            <Nav className="ml-auto">
                <Nav.Link href="/">Mayo Forms</Nav.Link>
                <Nav.Link href="/counter">Mayo Counter</Nav.Link>
            </Nav>
            <div className="d-flex flex-column justify-content-center text-center">
                <div className="mb-4 mb-lg-0">
                    <h2 >Mayo Counter: {count}</h2>
                    <Button className="m-3 w-25 h-25" variant="dark" onClick={() => SetCount(count + 1)}>+</Button>
                    <Button className="m-3 w-25 h-25" onClick={() => SetCount(count - 1)}>-</Button>
                </div>

                <div>
                    <h2>Mayo lista dinámica</h2>
                    <h3>Suma: {suma}</h3>

                    <Button className="m-3 w-25 h-25" variant="dark" onClick={() => mayoAddElement()}>+</Button>
                    <Button className="m-3 w-25 h-25" onClick={() => mayoRemoveElement()}>-</Button>

                    {list.map((item, index) => (
                        <Form className='d-flex flex-column justify-content-center text-center' key={index}>
                            <p>{item}, Index: {index}</p>
                            <Form.Control className="d-flex flex-row m-3 w-50" onChange={onChange} type="number"></Form.Control>
                        </Form>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Counter;