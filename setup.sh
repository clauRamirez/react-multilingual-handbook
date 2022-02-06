#!bin/bash

cd client
npm install
(npm run start &)

cd ../server
npm install
npm run seeds
npm run server:dev

exit 0