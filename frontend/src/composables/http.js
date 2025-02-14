import axios from "axios";

const $fetcher = axios.create({
  baseURL: 'https://api.ahmedfarag.info/api/v1/',
  headers: {
    'my-api-key': 'niqr10bg7pyr022njuje9l2qqrqvyce8l7j36onrv6sqqe34vwkoq63rfcml6u7862ncr120e2w166cuwshap33g29htxbbf5hux5de47506r4wrprenjv436v2h04tjhx23nzjehfg0gzfvcbrpdus2kd6esbwik6cjdsdlxwa3sms4u9tag2w82d5uwvwgzqqy1mu3',
    "Access-Control-Allow-Methods": "GET,HEAD,PATCH,POST,PUT",
    'lang': localStorage.getItem('locale') || 'ar'
  }
});

export default $fetcher;
