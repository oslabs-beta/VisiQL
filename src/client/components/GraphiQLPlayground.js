import React from 'react';
import { GraphiQLInterface, GraphiQL } from 'graphiql';
import { GraphiQLProvider } from '@graphiql/react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

const GraphiQLPlayground = () => {
  const fetcher = createGraphiQLFetcher({
    url: '/graphql',
  });
  return (
    <div className='graphiql-container'>
      <GraphiQLProvider fetcher={fetcher}>
        <div className='graphiql-container'>Hello GraphQL</div>
      </GraphiQLProvider>
    </div>
  );
};

export default GraphiQLPlayground;
