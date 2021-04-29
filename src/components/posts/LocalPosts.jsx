import React, { useEffect, useState } from 'react';
import Post from './Post';
import Page from '../navigation/Page';
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
    </Page>
  );
}
