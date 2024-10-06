import { Form, Button } from 'react-bootstrap';

/* Aqui mero estan todos los chingados formularios, con el "export" antes de "const" se exportan solitos */

export const FormsComponent =({onChange, onClick}) => {

    return (

      <Form className='mt-3'>

        <Form.Group className='mt-3'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control onChange={onChange} name="name" type="text" placeholder="Ingrese su mayo nombre" />
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Apellido</Form.Label>
          <Form.Control onChange={onChange} name="last_name" type="text" placeholder="Ingrese su mayo apellido" />
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={onChange} name="email" type="email" placeholder="Ingrese su mayo email" />
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Numero de telefono</Form.Label>
          <Form.Control onChange={onChange} name="phone_number" type="number" placeholder="Ingrese su mayo numero de telefono" />
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Direccion</Form.Label>
          <Form.Control onChange={onChange} name="address" type="text" placeholder="Ingrese su mayo direccion" />
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Por que se quiere dar de mayo alta?</Form.Label>
          <Form.Control onChange={onChange} name="razones" as="textarea" style={{ resize: 'none' }} placeholder="Ingrese su mayo razones" />
        </Form.Group>

        <Form.Group className='mt-3'>
            <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
        </Form.Group>

      </Form>

    )

}


export const FormUno = ({onChange, onClick}) =>{
  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1. ¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?</Form.Label>
              <Form.Control name="uno1" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. ¿Qué impacto tiene la tecnología en las relaciones interpersonales?</Form.Label>
              <Form.Control name="dos1" onChange={onChange}  as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. Explica cómo las redes sociales han transformado el periodismo.</Form.Label>
              <Form.Control name="tres1" onChange={onChange}  as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?</Form.Label>
              <Form.Control name="cuatro1" onChange={onChange}  as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Cómo influye la digitalización en el sector educativo?</Form.Label>
              <Form.Control name="cinco1" onChange={onChange}  as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Cuál es el rol de la ética en el desarrollo tecnológico?</Form.Label>
              <Form.Control name="seis1" onChange={onChange}  as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )
}

export const FormDos = ({onChange, onClick}) => {

  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1. ¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?</Form.Label>
              <Form.Control name="uno2" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. Explica el papel de la energía renovable en la lucha contra el cambio climático.</Form.Label>
              <Form.Control name="dos2" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?</Form.Label>
              <Form.Control name="tres2" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿Qué desafíos enfrenta la humanidad para lograr una economía circular?</Form.Label>
              <Form.Control name="cuatro2" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?</Form.Label>
              <Form.Control name="cinco2" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Cómo afecta la contaminación plástica a los ecosistemas marinos?</Form.Label>
              <Form.Control name="seis2" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )

}

export const FormTres = ({onChange, onClick}) => {
  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1.  ¿Cuáles fueron las principales causas de la Primera Guerra Mundial?</Form.Label>
              <Form.Control name="uno3" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.</Form.Label>
              <Form.Control name="dos3" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?</Form.Label>
              <Form.Control name="tres3" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?</Form.Label>
              <Form.Control name="cuatro3" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?</Form.Label>
              <Form.Control name="cinco3" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?</Form.Label>
              <Form.Control name="seis3" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )
}

export const FormCuatro = ({onChange, onClick}) => {
  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1.  ¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?</Form.Label>
              <Form.Control name="uno" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. ¿Qué rol desempeñan los bancos centrales en la economía de un país?</Form.Label>
              <Form.Control name="dos" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?</Form.Label>
              <Form.Control name="tres" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿Qué impacto tiene el comercio internacional en el crecimiento económico?</Form.Label>
              <Form.Control name="cuatro" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿De qué manera la automatización está transformando el sector manufacturero?</Form.Label>
              <Form.Control name="cinco" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas?</Form.Label>
              <Form.Control name="seis" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )
}

export const FormCinco = ({onChange, onClick}) => {
  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1.  ¿Cómo influyen las tradiciones culturales en la identidad de un país?</Form.Label>
              <Form.Control name="" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. ¿Qué impacto tiene la globalización en la homogeneización cultural?</Form.Label>
              <Form.Control name="" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿Cuál es el papel de la música en la construcción de la identidad juvenil?</Form.Label>
              <Form.Control name="" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿De qué manera el cine refleja los problemas sociales de una época?</Form.Label>
              <Form.Control name="" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?</Form.Label>
              <Form.Control name="" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos?</Form.Label>
              <Form.Control name="" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )
}

export const FormSeis = ({onChange, onClick}) => {
  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1.  ¿Qué importancia tiene la ciencia de datos en la toma de decisiones empresariales?</Form.Label>
              <Form.Control onChange={onChange} name="uno" as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. Explica cómo la inteligencia artificial está revolucionando el campo de la medicina.</Form.Label>
              <Form.Control onChange={onChange} name="dos" as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿Qué rol juegan los avances en materiales en la innovación tecnológica?</Form.Label>
              <Form.Control as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿Cómo influye la computación cuántica en el futuro de la ciberseguridad?</Form.Label>
              <Form.Control as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Qué impacto tienen los vehículos autónomos en la industria del transporte?</Form.Label>
              <Form.Control as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Cómo afecta el desarrollo de robots en la automatización industrial?</Form.Label>
              <Form.Control as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )
}

export const FormSiete = ({onChange, onClick}) => {

  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1. ¿Cómo influyen las redes sociales en la autoestima de los adolescentes?</Form.Label>
              <Form.Control name="uno" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. Explica la relación entre el estrés y las enfermedades físicas.</Form.Label>
              <Form.Control name="dos" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿Qué factores psicológicos influyen en la toma de decisiones?</Form.Label>
              <Form.Control name="tres" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿De qué manera la pandemia afectó la salud mental a nivel global?</Form.Label>
              <Form.Control name="cuatro" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?</Form.Label>
              <Form.Control name="cinco" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Qué impacto tiene la meditación en el control de la ansiedad?</Form.Label>
              <Form.Control name="seis" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )

}

export const FormOcho = ({onChange, onClick}) => {

  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1. ¿Cuál es el significado de la "libertad" en la filosofía de Jean-Paul Sartre?</Form.Label>
              <Form.Control name="uno" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. ¿De qué manera la ética utilitarista influye en la toma de decisiones morales?</Form.Label>
              <Form.Control name="dos" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. Explica el concepto de "justicia" según John Rawls.</Form.Label>
              <Form.Control name="tres" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?</Form.Label>
              <Form.Control name="cuatro" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Cómo ha evolucionado la concepción del "bien común" a lo largo de la historia de la filosofía?</Form.Label>
              <Form.Control name="cinco" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?</Form.Label>
              <Form.Control name="seis" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )

}

export const FormNueve = ({onChange, onClick}) => {

  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1. ¿Qué papel juega la motivación intrínseca en el aprendizaje?</Form.Label>
              <Form.Control name="uno" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. ¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?</Form.Label>
              <Form.Control name="dos" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?</Form.Label>
              <Form.Control name="tres" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?</Form.Label>
              <Form.Control name="cuatro" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?</Form.Label>
              <Form.Control name="cinco" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?</Form.Label>
              <Form.Control name="seis" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )

}

export const FormDiez = ({onChange, onClick}) => {

  return (
      <Form>

          <Form.Group className='mt-3'>
              <Form.Label>1. ¿Cómo influye la práctica regular de ejercicio en la salud mental?</Form.Label>
              <Form.Control name="uno" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>2. ¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?</Form.Label>
              <Form.Control name="dos" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>3. ¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?</Form.Label>
              <Form.Control name="tres" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>4. ¿De qué manera la nutrición influye en el rendimiento deportivo?</Form.Label>
              <Form.Control name="cuatro" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>5. ¿Cómo afecta el dopaje en la ética del deporte profesional?</Form.Label>
              <Form.Control name="cinco" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Form.Label>6. ¿Qué impacto tiene el deporte en la cohesión social y comunitaria?</Form.Label>
              <Form.Control name="seis" onChange={onChange} as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Ingrese su respuesta"/>
          </Form.Group>

          <Form.Group className='mt-3'>
              <Button onClick={()=>onClick()}  variant="dark">Enviar mayo respuestas</Button>
          </Form.Group>

      </Form>
  )

}