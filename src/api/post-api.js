import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export function getPosts({ pageParam = 1 }) {
  const args = {
    q: 'watches',
    apiKey: 'c9362c34a3d0492ca4424f163d761e22',
    pageSize: 10,
    page: pageParam,
  };

  return api.get('/everything', { params: args }).then((result) => {
    const { data } = result;
    data.page = args.page;
    data.pageTotal = Math.round(data.totalResults / args.pageSize);
    return data;
  });
}
export function getPost() {}
