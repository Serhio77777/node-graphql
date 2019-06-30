const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');

const service = require('./service');

const schema = buildSchema(`
    type Mutation {
        create(input: CourseInput): Course
        update(id: Int!, input: CourseInput): Course
    },
    input CourseInput {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    },
    type Query {
        getAll: [Course]
        get(id: Int!): Course
        remove(id: Int!): String
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

module.exports = expressGraphql({
    schema: schema,
    rootValue: service,
    graphiql: true
})
