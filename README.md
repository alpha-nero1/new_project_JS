# new_project_JS

To run the project, do the following:

1. Enter the project directory and run: `npm run watch`
2. In a seperate terminal in the same directory run: `tsc -w`

This will ensure that the client and server are run simultaneously and using nodemon (look at package.json script for more details).

The tsc -w ensures that any change in the server folder (ts sourcefiles) compiles into the built folder

## Note

1. the built directory containst the actual compiled javascript code (from typescript)
2. server contains the source ts files
3. client contains the react app
