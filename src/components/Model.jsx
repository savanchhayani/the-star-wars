import React, { useState } from 'react';
import { Button, Modal as Model } from 'react-bootstrap';

function AppModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    item: {
      name,
      population,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
    },
    icon,
  } = props;

  return (
    <>
      <div onClick={handleShow}>
        {icon}
      </div>

      <Model show={show} onHide={handleClose} animation={true}>
        <Model.Header closeButton>
          <Model.Title>{name}</Model.Title>
        </Model.Header>
        <Model.Body>
          <label>Population: {population}</label>
          <label>Orbital Period: {orbital_period}</label>
          <label>Diameter: {diameter}</label>
          <label>Climate: {climate}</label>
          <label>Gravity: {gravity}</label>
          <label>Terrain: {terrain}</label>
          <label>Surface Water: {surface_water}</label>
        </Model.Body>
      </Model>
    </>
  );
}

export default AppModel;
