import React from 'react'
import './Link.css'


export function Link(props) {
  return (<a className="link" href={props.url}>
    {props.children}
  </a>);
}

export default Link
// usando default não é necessario utilizar { }
//utilizar sem a {} pq esta usando o default no arquivo index.js