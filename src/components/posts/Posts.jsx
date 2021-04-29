import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Post from './Post';
import Loading from '../commons/Loading';
import { getPosts } from '../../api/post-api';
import Error from '../commons/Error';

/**
 *
 * @param {*} param
 */
export default function Posts() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery('posts', getPosts, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page < lastPage.pageTotal ? lastPage.page + 1 : undefined;
    },
  });

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: !!error,
  });

  return (
    <>
      {!isLoading &&
        !error &&
        data.pages.map((el) => {
          return el.articles.map((item) => (
            <Post
              key={item.title + item.urlToImage}
              title={item.title}
              description={item.description}
              content={item.content}
              author={item.author}
              publishedAt={item.publishedAt}
              urlToImage={item.urlToImage}
            />
          ));
        })}
      {error && <Error />}
      {!error && (isLoading || hasNextPage) && (
        <div ref={sentryRef}>
          <Loading />
        </div>
      )}
    </>
  );
}
