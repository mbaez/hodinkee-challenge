import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Componente que representa el formulario de alta y modificación de un
 * recurso.
 */
export function Panel({ title, children }) {
  return (
    <div className="section">
      <nav className="panel">
        <p className="panel-heading">{title}</p>
        <div className="panel-block panel-content is-block">{children}</div>
      </nav>
    </div>
  );
}

export function Description({ children }) {
  return <p className="field is-justify">{children}</p>;
}

export function Content({ children }) {
  return <section className="box">{children}</section>;
}

export function Wizard({ children }) {
  return (
    <div className="wizard">
      <ul className="wizard-breadcrumbs">{children}</ul>
    </div>
  );
}

export function Breadcrumb({ children, badge, active, to }) {
  const content = (
    <>
      {children} &nbsp;
      <span className="badge">{badge}</span>
    </>
  );
  return (
    <li className={active ? 'active' : ''}>
      {to && <Link to={to}>{content} </Link>}
      {!to && <span>{content}</span>}
    </li>
  );
}

export function Message({ type, title, children }) {
  return (
    <article className={`message is-${type}`}>
      {title && (
        <div className="message-header">
          <p>{title}</p>
        </div>
      )}
      <div className="message-body">{children}</div>
    </article>
  );
}
