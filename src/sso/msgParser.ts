import { ntlmParse } from 'ntlm-parser';
import { Props } from './interfaces';

export function negotiateParse(base64: string): Props {
  const object = ntlmParse(base64);
  return object as Props;
}
