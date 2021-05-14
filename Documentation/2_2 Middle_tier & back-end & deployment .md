# Middle-tier:

In our project, middle tier is more concerned about data transfer and the application of API and it helps define routing. 

Node.js & RESTful API  
For the middle tier, the major technique we use are node.js and RESTful API. 
Firstly, we used Node.js routing and two major routes in our project are /comments and /bodyParts. 
Additionally, we used two approaches under Node.js RESTful API which are ‘GET’ & ‘PUT’.  
Examples:  
GET /BodyParts/ID to get certain body parts’ symptoms and relief advice.  
PUT /Comments to update user generated comments. 

As for data transfer between front end and server, we had two options to choose from 1) using form 2) using AJAX.  
Considering that not only would our app need to transfer data from back-end to front-end but also did the other way transfer, AJAX allows this and makes it more efficient. The user interaction has a design involving real time update of part of the webpage. When user click on the bar chart to vote for the occupational diseases they have, the corresponding bar chart number would grow by one. Therefore, the data transfer is not limited to from back-end to front-end but also involves from front-end to back-end and we need AJAX here to help us deal with it. With AJAX, we do not need to load the entire page again to see some updates to certain part.  
So we planned to use AJAX and its request & response framework: 

        $.ajax({
        Type:”PUT”.
        url:”../comments”.
        Data.sendData.
        Success:function(data){…}
        });

However, we ran across some issues when we tried to write multiple 'GET' requests in the front end (index.html) as javascript does not actually have multithreading.We might need to rely on Axios (axios.all() ,axios.spread() methods), but the time is running out and we have no chance to apply that in our code to get body parts data from backend. Therefore, we sacrificed a little bit and read the body parts info from json directly. 
Axios framework we planned to use:

        methods:{
           getTset1 (data){
           console.log('first')
           return this.$axios({
                 url:'...',
                 method:'GET',
                 params data
               })
        },
           getTest2(data){
               ...
        },
           getALL(){
              var _this = this; 
              this.$axios.all([_this.getAllTask(),_this.getAllCity()])
              .then(_this.$axios.spread(function(allTask, allCity){
                  console.log('all done')
                  console.log('first',allTask)
                  console.log('second',allCity)
                  }))......

As for server interaction with back-end, we have chosen to use ODM “Mongoose” to interact with the database as it is designed to work with asynchronous environment. It corresponds with our app’s demand for some asynchronous data transfer. 

        var mongoose = require (./db.js);
        var Schema = mongoose.Schema;
    
Therefore, for middle tier, we need to import Mongoose and the three APIs: db.js, BodyParts.js and Comments.js. 



# Back-end:

In our project, back-end is more concerned about data structure and data storage. The main data that needs to be read from database to front end is body parts’ symptoms and advice as well as data for the diseases situation bar chart. 

(1)	MongoDB & database:  
Body & Comment data structure Schema defined:  
        
        var BodySchema = new Schema({
           _id: Number,
           partName: String,
           solution: String,
           voteNumber: Number
        })

        var CommentSchema = new Schema({
           content: String,
           bodyPart: Number
        })

(2)	Data persistent storage:  
Due to the docker image characteristic, there would be no database in the main image of the project as the database would be in a separate image when docker compose up. Therefore, we were forced to come up with other ways to deal with data storage issue. We have some static data which would not be changed by users, so we need to make it persistent. We tried to include the binary files inside the database folder to build the image. However, different machines would read them differently. As we need to deploy the database server inside a container through an image rather than a stable physical server, the local static data may be exported to a json file either included in the database image or the project image. In order to keep the database image specific, we chose to use the official Mongodb image and create an empty database folder in the volume mounted on run time machine when data server is setting up. Under this method, all the raw data is stored in two json files BodyPartsSeed.json & CommentsSeed.json. Then a seeding script would be used to automatically read data from json to a new database. Later on, data would be read from database to front end.  

(3)	Data seeding from data.json to MongoDB:  
Since that we need to seed data from json to database, we need to write up seed script. 
Firstly, we tried to use seed.js and add seeding script to package.json to run npm run seed in order to seed data into MongoDB. 
 
![json](https://i.imgur.com/mMiSV3u.pngstyle=centerme)

Package.json
 
![json](https://i.imgur.com/TQvErLt.pngstyle=centerme)

However, later we chose to switch our plan to use the data-import module and add the following commands in seeding script seeding.sh:  

        mongoimport --db meandb --collection BodyParts --jsonArray --drop --file /home/init/BodyPartsSeed.json
        mongoimport --db meandb --collection Comments --jsonArray --drop --file /home/init/CommentsSeed.json
      
# Deployment details (Docker, continuous integration):
Our group uses Docker image to help us with deployment and continuous integration. As for deployment, our group uses Docker to unify the web development environment. We all practiced the use of Docker and one of us uploaded his image. Then all other group mates pulled this image and started to use this image.

We also authorize the github project on dockHub to achieve continuous integration. By doint so, when there are updates on github project, the Dockerfile would automatically be executed and be composed up. The new compose up result would be saved in the dockerHub container. 
