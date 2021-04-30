import React, { useEffect, useState } from 'react';
import { Content, Description, Message, Panel } from '../commons/Layout';
import NoData from '../commons/NoData';
import Page from '../navigation/Page';
import LocalPostForm from './LocalPostForm';

export default function LocalPostList() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

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
    setRefresh(refresh + 1);
  };

  const onSaveData = (value, index) => {
    const newData = [...data];
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
        {refresh !== 0 && (
          <Message type="success">
            <i className="fas fa-smile-beam" />
            <button
              className="delete"
              type="button"
              onClick={() => setRefresh(0)}
            >
              &nbsp;
            </button>
            &nbsp;The operation has been successfully completed
          </Message>
        )}
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
        {data.length === 0 && <NoData />}
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
