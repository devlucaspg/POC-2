import express from 'express';

const server = express();


const port = process.env.PORT || 4000;
server.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);