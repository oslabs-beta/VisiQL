# VisiQL

GraphQL is a query language for APIs that allows for engineers to customize their requests to ensure the data delivered is exactly what they need for their projects and nothing more. VisiQL was created by a small team of engineers who are passionate about encouraging other developers to get started with using GraphQL’s powerful abilities in their own projects. VisiQL accomplishes this by abstracting away the heavy lifting of creating the necessary schemas and resolvers for querying PostgreSQL databases with GraphQL, and providing sophisticated visualization tools to allow developers to easily customize and add to VisiQL’s generated code to save time standing up the rest of their queries.

Getting started with VisiQL is easy. Simply fork our repo, clone to your local machine, and install all dependencies.
From there run:

npm run build

npm run dev

And your local instance of VisiQL will be running on port 8080.

Generating your GraphQL Code

Upon logging in or continuing as a guest, enter your desired PostgresQL database link in the textbox and click submit. Note that at this time, VisiQL was created to only support generating code for PostgresQL databases, but we welcome the Open Source community to add support for additional database types. Upon submission, you will see your database visualization and GraphQL schema generated and displayed instantly.

![EnterDB Link Step1](https://user-images.githubusercontent.com/13178363/205097233-7d40234b-a249-4fdd-85aa-7283d377cd49.gif)

Toggle on the left hand side between the Schema and Resolvers tabs to review the code, or click the open button on the code editor to see both the generated Schema and Resolver in one view. You can also edit this generated code, right from within the editors and easily copy your changes.

![SchemaEditor Step2](https://user-images.githubusercontent.com/13178363/205098399-44baabca-8828-4c57-8ca5-b388cee5879a.gif)


Visualize your Database

On the left hand side, you will see a tree graph generated from your PostgresQL database. Click on the nodes to collapse and expand the table data and focus on only one part of your database. Or, use your trackpad or mouse to zoom in on your tree graph, clicking and dragging to view different parts of your database in finer detail. Hover over foreign keys to highlight relationships with primary keys and associated table data. If you need a bigger space to work with your database visualization, click the open button on the bottom right side of the visualizer panel. The same zoom, pan, and highlighting functionality is available in this larger view.

![Visualizer Step 3](https://user-images.githubusercontent.com/13178363/205099466-7b426d96-dca6-4107-987e-60add8674f26.gif)

Projects Page

On the Projects page, you will find a table with information about your saved projects. There are columns for the project name, the date it was most recently updated, and buttons for viewing or deleting the projects. Projects can be ordered alphabetically by Project Name, or by the date they were Last Updated.

![ProjectsPageVisiql](https://user-images.githubusercontent.com/104098416/205107467-b4a2bb12-0e6a-4448-818d-ed3f73f51070.gif)

Saving your Project

For users that are signed in, you will have the ability to save your projects to your projects folder.

![Save Project Step 4](https://user-images.githubusercontent.com/13178363/205096108-d40ba8fa-7768-43be-ab2d-d1b3bc0a3d1b.gif)

Updating your Project

While a saved project is loaded to the Home page, clicking the ‘Update Project’ icon from the toolbar will open a popover with a field for optionally changing the name of your project. Click ‘UPDATE’ to save your changes to the database. A popover will alert you of a successful update. 

![UpdateProjectVisiql](https://user-images.githubusercontent.com/104098416/205108184-0a76f0bf-1972-48f6-ac0d-af2dfb8539f0.gif)
Opening Projects from Toolbar

Deleting a Project

On the projects page, clicking the ‘Delete Project’ button will prompt you to confirm the deletion of the associated project. A popover will notify you of a successful deletion. 

![DeleteProjectVisiql](https://user-images.githubusercontent.com/104098416/205109109-287e5624-d721-44dc-a303-cd68e4cc3b35.gif)

If logged in, clicking the ‘View Projects’ folder icon from the toolbar will navigate to the Projects page. 

![ToolbarProjectsVisiql](https://user-images.githubusercontent.com/104098416/205107994-318ec565-fd76-46dc-8af0-669a322facee.gif)

GraphiQL Playground

Our team has built a direct integration with GraphiQL into our application. When you first access our application, an Apollo Server will automatically load demo data from the Star Wars API into the GraphiQL Playground. In order to have a server spun up using your own database data, edit the data in the following files in your forked repository of VisiQL (hint: you can generate the code you need using VisiQL!) - resolvers.js, schema.js, and starwarsModel.js. Upon relaunch of the app, your GraphiQL Playground will be ready for querying with your inputted data. 

![GraphiQL Playground](https://user-images.githubusercontent.com/13178363/205096199-77fb5e27-c422-4e9f-95df-a8607d99a9e3.gif)
