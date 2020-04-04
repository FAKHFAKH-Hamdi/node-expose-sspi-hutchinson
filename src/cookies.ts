import http from 'http';
import { CookieList } from './interfaces';
import { RequestInit, Response, HeadersInit } from 'node-fetch';
import dbg from 'debug';

const debug = dbg('node-expose-sspi:cookies');

// https://stackoverflow.com/questions/3393854/get-and-set-a-single-cookie-with-node-js-http-server
export function parseCookies(request: http.IncomingMessage): CookieList {
  const list: CookieList = {};
  const rc = request.headers.cookie;

  rc &&
    rc.split(';').forEach((cookie) => {
      var parts = cookie.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

  return list;
}

