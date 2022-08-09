#DockerFile the PlannigPoker
from node:16-alpine3.15
run mkdir /home/node/app
workdir home/node/app
copy . .
run npm i
cmd ["node", "app/server.js"]
expose 3000