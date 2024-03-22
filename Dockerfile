
# firstly we specify the node version 
FROM node:18.17.1

# WE CREATING THE WORKING DIRECTORY 
WORKDIR /dockerApps

# we copy the list of dependensiess to the working directory
# we used dot here because we are already inside our working directory by runtime 
COPY package.json .

# we install the dependensies
RUN yarn install

# copy local files to the working directory dot and dot
COPY . .

# we expose the port 3000 or run on port 3000
EXPOSE 3000

CMD ["yarn", "run", "dev"]