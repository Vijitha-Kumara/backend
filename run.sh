#!/bin/bash

/root/.nvm/versions/node/v16.3.0/bin/tsc --p /home/ec2-user/MyCarChart-Backend/tsconfig.json && /root/.nvm/versions/node/v16.3.0/bin/node /home/ec2-user/MyCarChart-Backend/dist/server.js
