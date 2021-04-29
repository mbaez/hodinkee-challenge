import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import Page from '../navigation/Page';
import NoData from '../commons/NoData';

/**
 *
 * @param {*} param
 */
export default function LocalPosts() {
  const [data, setData] = useState([]);

  const getLocalPosts = () => {
    const item = sessionStorage.getItem('posts');
    return item ? JSON.parse(item) : [];
  };

  useEffect(() => {
    setData(getLocalPosts());
  }, []);

  return (
    <Page>
      {data &&
        data.map((item) => (
          <Post
            key={item.title + item.urlToImage}
            title={item.title}
            description={item.description}
            content={item.content}
            author={item.author}
            publishedAt={item.publishedAt}
            urlToImage={item.urlToImage}
          />
        ))}
      {(!data || data.length === 0) && (
        <NoData>
          To add local posts go to&nbsp;
          <strong>
            <Link to="/admin/posts" className=" is-text">
              <i className="fas fa-external-link-alt" />
              &nbsp; Aadmin Posts
            </Link>
          </strong>
          &nbsp;section
        </NoData>
      )}
    </Page>
  );
}
