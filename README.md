# VisiQL

GraphQL is a query language for APIs that allows for engineers to customize their requests to ensure the data delivered is exactly what they need for their projects and nothing more. VisiQL was created by a small team of engineers who are passionate about encouraging other developers to get started with using GraphQL’s powerful abilities in their own projects. VisiQL accomplishes this by abstracting away the heavy lifting of creating the necessary schemas and resolvers for querying PostgresQL databases with GraphQL, and providing sophisticated visualization tools to allow developers to easily customize and add to VisiQL’s generated code to save time standing up the rest of their queries.

Getting started with VisiQL is easy. Simply start by signing into your account. If you don’t have an account yet, you can either create one, or continue using VisiQL as a guest. Note that if you do choose to create an account, you will also have the ability to save and edit your projects so that you can revisit your projects for any new requirements that may come up throughout your development process.

Generating your GraphQL Code

Upon logging in or continuing as a guest, enter your desired PostgresQL database link in the textbox and click submit. Note that at this time, VisiQL was created to only support generating code for PostgresQL databases, but we welcome the Open Source community to add support for additional database types. Upon submission, you will see your database visualization and GraphQL schema generated and displayed instantly.

![EnterDB Link Step1](https://user-images.githubusercontent.com/13178363/205097233-7d40234b-a249-4fdd-85aa-7283d377cd49.gif)

Toggle on the left hand side between the Schema and Resolvers tabs to review the code, or click the open button on the code editor to see both the generated Schema and Resolver in one view. You can also edit this generated code, right from within the editors and easily copy your changes.

![SchemaEditors Step 2](https://user-images.githubusercontent.com/13178363/205095993-02de2679-af3b-4985-aaf8-396a6d8d343b.gif)

Visualize your Database

On the left hand side, you will see a tree graph generated from your PostgresQL database. Click on the nodes to collapse and expand the table data and focus on only one part of your database. Or, use your trackpad or mouse to zoom in on your tree graph, clicking and dragging to view different parts of your database in finer detail. Hover over foreign keys to highlight relationships with primary keys and associated table data. If you need a bigger space to work with your database visualization, click the open button on the bottom right side of the visualizer panel. The same zoom, pan, and highlighting functionality is available in this larger view.

![Visualizer Step 3](https://user-images.githubusercontent.com/13178363/205096055-4a42eea5-7fa1-485e-9338-ac0d4e4d6eed.gif)


Saving your Project

For users that are signed in, you will have the ability to save your projects to your projects folder.

![Save Project Step 4](https://user-images.githubusercontent.com/13178363/205096108-d40ba8fa-7768-43be-ab2d-d1b3bc0a3d1b.gif)

GraphiQL Playground

Our team has built a direct integration with GraphiQL into our application. When you first access our application, an Apollo Server will automatically load demo data from the Star Wars API into the GraphiQL Playground. In order to have a server spun up using your own database data, edit the data in the following files in your forked repository of VisiQL (hint: you can generate the code you need using VisiQL!) - resolvers.js, schema.js, and starwarsModel.js. Upon relaunch of the app, your GraphiQL Playground will be ready for querying with your inputted data. 

![GraphiQL Playground](https://user-images.githubusercontent.com/13178363/205096199-77fb5e27-c422-4e9f-95df-a8607d99a9e3.gif)
