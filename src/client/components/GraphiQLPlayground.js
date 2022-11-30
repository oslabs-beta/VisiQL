import React from 'react';
import { GraphiQLInterface, GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

import 'graphiql/graphiql.css';
import Navbar from './Navbar';

const GraphiQLPlayground = ({ dbSchemaData, resolverData }) => {
  const fetcher = createGraphiQLFetcher({
    url: '/request',
  });

  // const generatedGQL = () => {
  //   // const body = { dbSchemaData, resolverData };
  //   fetch('/graphql', {
  //     headers: {
  //       'Content-Type': 'Application/JSON',
  //       // Connection: 'Upgrade',
  //     },
  //     // body: JSON.stringify(body),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log('dbLink fetch /graphql: ERROR:', err));
  // };
  // generatedGQL();
  return (
    <div className='graphiql-container'>
      <GraphiQL fetcher={fetcher} />
    </div>
  );
};

export default GraphiQLPlayground;
