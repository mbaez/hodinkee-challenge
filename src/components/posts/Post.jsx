import React from 'react';

/**
 *
 * @param {*} param
 */
export default function Post({
  title,
  description,
  content,
  author,
  publishedAt,
  urlToImage,
}) {
  const dateFormat = (str) => {
    const d = new Date(str);
    return d.toLocaleString();
  };

  return (
    <div className="columns post">
      <div className="column is-7">
        <div className="post-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="post-footer">
          <span>By&nbsp;</span>
          <b>{author}</b>
          <b>&nbsp;-&nbsp;</b> {dateFormat(publishedAt)}
        </div>
      </div>
      <div className="column is-5 post-image">
        <img alt={title} src={urlToImage} />
      </div>
    </div>
  );
}
