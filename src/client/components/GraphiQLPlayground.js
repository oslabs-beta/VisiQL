import React from 'react';
import { GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

import 'graphiql/graphiql.css';

const GraphiQLPlayground = ({
  dbSchemaData,
  resolverData,
  loggedIn,
  setCurrentUserId,
  notSignedInPop,
  setNotSignedInPop,
}) => {
  const fetcher = createGraphiQLFetcher({
    url: '/request',
  }); 

  //----> post request for sending schema and resolver data to backend for dynamic graphiql playground functionality

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
    <div>
      <div className='graphiql-container'>
        <GraphiQL fetcher={fetcher} />
      </div>
    </div>
  );
};

export default GraphiQLPlayground;
