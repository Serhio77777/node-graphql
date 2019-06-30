const express = require('express');
const courses = require('/app/courses/routes');

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/courses', courses);
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));