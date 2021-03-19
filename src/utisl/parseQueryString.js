import queryString from 'query-string';

export default function parseQueryString(query) {
    return  queryString.parse(query);
};
