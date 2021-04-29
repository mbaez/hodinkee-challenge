import React from 'react';
import Page from './navigation/Page';
import Posts from './posts/Posts';

/**
 * Componente secundario que recibe los parametros del componente
 * padre de la página.
 *
 * @param {*} param
 */
export default function Home() {
  return (
    <Page>
      <Posts />
    </Page>
  );
}
