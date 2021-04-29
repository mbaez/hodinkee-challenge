import React from 'react';
import { Message } from './Layout';
/**
 * @param {*} param
 */
export default function NoData({ children }) {
  return (
    <Message type="info">
      <i className="fas fa-info-circle" />
      &nbsp; Oops! There is no data available to display.
      {children}
    </Message>
  );
}
