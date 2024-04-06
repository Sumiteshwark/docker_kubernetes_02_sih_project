************* Containers and Networks ********************** -> From Lecture 57 to 74

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