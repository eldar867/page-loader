import { URL } from 'url';

export const makeFilename = (urlString) => {
  const url = new URL(urlString);
  const hostname = url.hostname.replace(/[^a-z0-9]/gi, '-');
  const pathname = url.pathname === '/' ? '' : url.pathname;
  const pathPart = pathname.replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  const name = [hostname, pathPart].filter(Boolean).join('-');
  return `${name}.html`;
};