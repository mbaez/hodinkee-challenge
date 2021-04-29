import React from 'react';

export default function TextField(props) {
  const { title, error, type } = props;
  const errorClazz = error ? 'is-danger' : '';
  return (
    <div className="field ">
      <p className="label is-small">{title}</p>
      <div className="control has-icons-left ">
        <span className="icon is-small is-left">
          <i className="fas fa-asterisk " />
        </span>
        {type !== 'textarea' && (
          <input className={`input is-small ${errorClazz}`} {...props} />
        )}
        {type === 'textarea' && (
          <textarea className={`textarea is-small ${errorClazz}`} {...props} />
        )}
      </div>
      {error && <p className="help is-danger">This field is required.</p>}
    </div>
  );
}
