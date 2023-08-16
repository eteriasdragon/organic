import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Accounting API',
            version: '1.0.0',
            description: 'API documentation for accounting application',
        },
        servers: [
            {
                url: 'http://localhost:3001', // Replace with your server URL
            },
        ],
    },
    apis: ['./routes/*.js'], // Replace with the path to your API route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;