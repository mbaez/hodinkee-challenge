import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Content,
  Description,
  Panel,
  Wizard,
} from '../commons/Layout';
import Loading from '../commons/Loading';
import Page from '../navigation/Page';
import Post from '../posts/Post';
import LocalPostForm from './LocalPostForm';

export default function LocalPostList() {
  const [data, setData] = useState([]);

  const getLocalPosts = () => {
    const item = sessionStorage.getItem('posts');
    return item ? JSON.parse(item) : [];
  };

  useEffect(() => {
    setData(getLocalPosts());
  }, []);

  const persistLocalPosts = (dataArray) => {
    const jsonStr = JSON.stringify(dataArray);
    sessionStorage.setItem('posts', jsonStr);
  };

  const onSaveData = (value, index) => {
    const newData = [...data];
    console.log(newData);
    newData[index] = value;
    persistLocalPosts(newData);
    setData(newData);
  };

  const onRemoveData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    persistLocalPosts(newData);
    setData(newData);
  };

  const addPost = () => {
    const newData = [...data];
    newData.push({});
    setData(newData);
  };

  return (
    <Page>
      <Panel title="List of local posts">
        <Description>
          List of local posts stored in browser storage. Be careful because the
          localstorage has a size limit of 10MB.
        </Description>
        {data.map((item, index) => {
          return (
            <Content>
              <LocalPostForm
                key={item.title + item.urlToImage}
                title={item.title}
                description={item.description}
                author={item.author}
                publishedAt={item.publishedAt}
                content={item.content}
                urlToImage={item.urlToImage}
                onSave={(value) => {
                  onSaveData(value, index);
                }}
                onRemove={() => {
                  onRemoveData(index);
                }}
              />
            </Content>
          );
        })}
        <Content>
          <button
            type="button"
            className="button"
            onClick={(evt) => addPost(evt)}
          >
            <i className="fas fa-plus" />
            &nbsp; Add Post
          </button>
        </Content>
      </Panel>
    </Page>
  );
}
