import React from 'react';
import '../scss/about.scss';

const Documentation = () => {
  return (
    <div className='doc-container'>
      <div>
        <h1 className='docs-title'>About VisiQL</h1>
      </div>
      <div>
        <h2 className='intro-paragraph'>
          <div className='visiql-statement'>
            VisiQL was created by a small team of engineers who are passionate
            about encouraging other developers to get started with using
            GraphQL’s powerful abilities in their own projects.
          </div>
          <br /> <br /> GraphQL is a query language for APIs that allows for
          engineers to customize their requests to ensure the data delivered is
          exactly what they need for their projects and nothing more. VisiQL
          accomplishes this by abstracting away the heavy lifting of creating
          the necessary schemas and resolvers for querying PostgreSQL databases
          with GraphQL and providing sophisticated visualization tools to allow
          developers to easily customize and add to VisiQL’s generated code to
          save time setting up the rest of their queries. <br /> <br /> Getting
          started with VisiQL is easy. Simply start by signing into your
          account. If you don’t have an account yet, you can either create one,
          or continue using VisiQL as a guest. Note that if you do choose to
          create an account, you will also have the ability to save and edit
          your projects so that you can revisit your projects for any new
          requirements that may come up throughout your development process.
          <br />
          <br />
        </h2>
        <div className='generating-docs'>
          <div className='generating-docs-title'>
            Generating your GraphQL Code
          </div>
          <h2 className='generating-docs'>
            Upon logging in or continuing as a guest, enter your desired
            PostgreSQL database link in the textbox and click submit. Note that
            at this time, VisiQL was created to only support generating code for
            PostgreSQL databases, but we welcome the Open Source community to
            add support for additional database types.
            <br />
            <br />
            Upon submission, you will see your database visualization and
            GraphQL schema generated and displayed instantly. Toggle on the left
            hand side between the schema and resolvers tabs to review the code,
            or click the open button on the code editor to see both the
            generated schema and resolver in one view.
            <br />
            <br />
          </h2>
        </div>
        <div className='generating-docs'>
          <div className='generating-docs-title'>Visualize your Database</div>
          <h2 className='generating-docs'>
            On the right hand side, you will see a tree graph generated from your
            PostgreSQL database. Click on the nodes to collapse and expand the
            table data and focus on only one part of your database.
            <br />
            <br />
            Or, use your trackpad or mouse to zoom in on your tree graph,
            clicking and dragging to view different parts of your database in
            finer detail.
            <br />
            <br />
            Hover over foreign keys to highlight relationships with primary keys
            and associated table data.
            <br />
            <br />
            If you need a bigger space to work with your database visualization,
            click the open button on the bottom right side of the visualizer
            panel. The same zoom, pan, and highlighting functionality is
            available in this larger view.
            <br />
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
