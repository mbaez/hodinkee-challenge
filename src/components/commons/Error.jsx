import React from "react";
import { Message } from "./Layout";
/**
 * @param {*} param
 */
export default function Error({ children }) {
  return (
    <Message type="danger">
      <i className="fas fa-skull-crossbones" />
      &nbsp; Oops! an unexpected error occurred, please try again later
      {children}
    </Message>
  );
}
