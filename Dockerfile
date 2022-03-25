FROM node:17-alpine

# install nodemon package to watch
# for changes in the files in the directory
# and restarts the server when it detects
# the changes in the code
# ====== Update the package.json file to include nodemon:
#        "scripts": {
         #    "start": "react-scripts start",
         #    "build": "react-scripts build",
         #    "test": "react-scripts test",
         #    "eject": "react-scripts eject",
         #    "dev": "nodemon --exec npm start"
RUN npm install -g nodemon

WORKDIR /react_ts_project_mgmt_app

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

# Copies the source path to target path
# not ideal
# actual format is: COPY ./src /app
COPY . .

EXPOSE 3000

# Uncomment the command below to just run the app
# CMD ["npm", "start"]

# The command below runs the app with nodemon
# This is used to create a volume that watches
# changes in the source code inside the container.
CMD ["npm", "run", "dev"]