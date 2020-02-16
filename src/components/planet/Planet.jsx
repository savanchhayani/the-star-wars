import React from 'react'
import './planet.scss';

export default function Planet(props) {
  const styles = props.size
    ? { height: props.size, width: props.size }
    : {};

  return (
    <div className="planet" style={styles}> 
      <div className="wrap" style={styles}>
        <div className="background" style={styles}></div>
        <div className="clouds" style={styles}></div>   
      </div>
      <div className="mask" style={styles}></div>
    </div>
  );
}
