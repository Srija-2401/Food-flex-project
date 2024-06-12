import {useRouteError} from "react-router-dom";
import React from 'react'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>{err.status}</h1>
    </div>
  )
}

export default Error
