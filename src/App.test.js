import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

import Posts from './components/posts/Posts';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Basic component tests', () => {
  it('renders app component on initial load', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it('renders loading on initial posts load', () => {
    const queryClient = new QueryClient();
    const component = shallow(
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    );
    expect(component.html()).toContain('loading');
  });
});

describe('sessionStorage is avaible to IO', () => {
  it('set Item successfully', async () => {
    sessionStorage.setItem('_', 'foo');
    const val = sessionStorage.getItem('_');
    expect(val).toEqual('foo');
  });

  it('remove Item successfully', async () => {
    sessionStorage.removeItem('_');
    const val = sessionStorage.getItem('_');
    expect(val).toBeNull();
  });
});
