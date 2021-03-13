# About the project

It's website inspired by the Gaumont website. It's not a copy ! With it I learn about Angular technologies and also my API project: https://github.com/skrollu/express-mongo-api

# How to run this project ?

## With Docker

Thanks to the Dockerfile at the root of the project, you can simply run it with command line:

    docker build . -t angular-gaumont:1.0.0

Then: 

    docker run -p 4201:4201 angular-gaumont:1.0.0

## With npm

Run: 
    npm install

Then: 
    npm start