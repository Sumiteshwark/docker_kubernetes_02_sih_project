************* Containers and Networks ********************** -> From Lecture 57 to 77 (till line no. 70)

-> In this we are going to create three containers, one for react, one for node and one for mongodb.

-> Run react container
	* Build react image( docker build -t sih-react .)
	* To run react project we must have to add -it(ie docker run --name sih-frontend --rm -p 3000:3000 -it sih-react)

-> Then connect node to mongodb
	* create a network (docker network create sih-net)
	* create a mongodb container
	-> docker run --name mongodb --rm -d --network sih-net mongo (This will run container named mongodb, first try to get image from local and this will not find there,so this will pull mongo image from dockerHub.)
	 * create a node container
	 -> First in node application write database container name in place of localhost (ie "mongodb://mongodb:27017/sih") bcz we are going to run both database and node container in same network.
	 -> docker build -t sih-node . (This will create image of node name sih-node)
	 -> docker run --name sih-backend --rm -d -p 8000:8000 --network sih-net sih-node
	 (This will run node container and we can now communicate mongodb container from node container bcz both are in same network)
-> Now we can communicate from react container to node container to mongodb container.


**** But here is one problem that if we stop mongodb container then data inside it will be deleted.
-> so for this we have to add volume to it and volume id prebuilt in mongo image (ie in /data/db), we can go through this in dockerHub mongo image.
-> docker run --name mongodb -v data:/data/db --rm -d -network sih-net mongo
-> Now if we stop and then start the container the data will still exists there.


######### Additionally you can add authentication in database ##########
-> There is documentation in mongo image in dockerHub in Environment Variables section
-> This can be done by adding MONGO_INITDB_ROOT_USERNAME and MONGO_INITDB_ROOT_PASSWORD in Environment Variables
	(ie docker run --name mongodb -v data:/data/db --rm -d --network sih-net -e MONGO_INITDB_ROOT_USERNAME=rebooters -e MONGO_INITDB_ROOT_PASSWORD=sk1234 mongo)
-> We also have to change the mongoURL in node application (ie 'mongodb://rebooters:sk1234@mongodb:27017/sih?authSource=admin) and again rebuild the image and start the node container.
-> Its not best practice to directly add username and password in url, instead we can put this in .env file in node application and pass this while running node image.
   (ie docker run --name sih-backend -e MONGODB_USERNAME=rebooters -e MONGODB_PASSWORD=sk1234 --rm -d -p 8000:8000 --network sih-net sih-node) , before this add these two Variables in Dockerfile


## Other problem is if we change anything in application code then we again have to build the image and run the container to get the latest update.
-> For this we can add volume to this 

1> For backend
   *(ie docker run --name sih-backend -e MONGODB_USERNAME=rebooters -e MONGODB_PASSWORD=sk1234 -v <absolute_path_of_main_file:/app -v /app/node_modules --rm -d -p 8000:8000 --network sih-net sih-node>)
   *(ie docker run --name sih-backend -e MONGODB_USERNAME=rebooters -e MONGODB_PASSWORD=sk1234 -v /home/rebooters/Desktop/sih_docker/SIH_backend-main:/app -v /app/node_modules --rm -d -p 8000:8000 --network sih-net sih-node)
   *This will update if changes done but we also have to add nodemon to restart the server.So add nodemon in devdependincies and "dev": "nodemon server.js" in scripts in package.json and RUN ["npm", "run", "dev"] in Dockerfile.

2> For frontend
	*(docker run -v <absolute_path_of_main_file>:/app/src --name sih-frontend --rm -p 3000:3000 -it sih-react)
	*(docker run -v /home/rebooters/Desktop/sih_docker/SIH_frontend-main/src:/app/src  --name sih-frontend --rm -p 3000:3000 -it sih-react) (Here wo donot need to add anonymous volume for node_modules but react is configured automatically.)
	* Now changes directly applied if application code is updated.


************ Final Command to run ************
1> For database(ie mongodb)
	-> docker run --name mongodb -v data:/data/db --rm -d --network sih-net -e MONGO_INITDB_ROOT_USERNAME=rebooters -e MONGO_INITDB_ROOT_PASSWORD=sk1234 mongo
2> For frontend(ie for react)
	-> docker build -t sih-react . (run inside SIH_frontend_main folder)
    -> docker run -v /home/rebooters/Desktop/sih_docker/SIH_frontend-main/src:/app/src  --name sih-frontend --rm -p 3000:3000 -it sih-react
3> For backend(ie node/express)
	-> docker buile -t sih-node . (run inside SIH_backend_main folder)
	-> docker run --name sih-backend -e MONGODB_USERNAME=rebooters -e MONGODB_PASSWORD=sk1234 -v /home/rebooters/Desktop/sih_docker/SIH_backend-main:/app -v /app/node_modules --rm -d -p 8000:8000 --network sih-net sih-node
*** To see details (docker logs <CONTAINER_NAME>)


************** Features **************
-> connection between react to node to mongodb
-> If mongodb container is deleted data will still exists bcz of named volume (-v data:/data/db)
-> React app also added with bind volume and from this code will be updated automatically if changes occurs.(prevents in building image and running container again and again while changes done)
-> For node bind volume is also implemented for automatically code update and also for authentication by adding username and password.






*************** DOCKER COMPOSE ************** (From Lecture 78 to )
# To run compose file
	1> docker-compose up (In root folder to run in attach mode)
	2> docker-compose up -d (To run in detached mode)
# To delete all services
	-> docker-compose down (But this will not delete volumes)
	-> docker-compose down -v (This will also remove volumes)
# Only to build missing images in compose file and not run that
	-> docker-compose build
-> what happens now is, to run these three containers we have to run all long three commands seperately, for docker compose helps to run all these commands at once by running a compose file.
-> One configuration File + Orchestration Commands (build, start, stop, ...)
-> First create docker-compose.jaml file in root folder (ie here SIH_DOCKER)
-> By default compose uses --rm (ie Delete container automatically when it stops.)
-> By default all containers created by same compose file are in same network. So, here we have no neet to assign network in compose file.
-> All named volumes must be written by name at the end of compose file in volumes.(i.e data in mongodb configuration)
-> For bind volume, we can use relative path to compose file.
-> For frontend we must have to add -it if we run through command but for compose file we have to add (stdin_open: true and tty: true) for -it.
-> By default container name is <rootFolderName_serviceName_number>, But we can also assign name by container_name tag.