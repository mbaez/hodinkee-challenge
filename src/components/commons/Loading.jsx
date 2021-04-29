import React from 'react';
import { Message } from './Layout';
/**
 * @param {*} param
 */
export default function Loading() {
  return (
    <Message type="warning">
      <div className="loading">
        <i className="fas fa-spinner fa-spin" />
        Loading...
      </div>
    </Message>
  );
}
