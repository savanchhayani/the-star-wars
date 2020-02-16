import React from 'react';

/**
 * Generic message component to display message by message property.
 * @param {Object} props - components properties
 */
const Message = (props) =>
  <div className={`message-component ${props.className}`}>
    {props.message}
  </div>;

export default Message;
