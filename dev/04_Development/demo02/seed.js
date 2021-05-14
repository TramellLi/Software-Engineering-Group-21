import seeder from "mongoose-seed";

const db = "mongodb://localhost:27017";

seeder.connect(db,function(){
      seeder.loadModels([
         "./BodyParts",
         "./Comments"
      ]);
      seeder.populateModels(data, function(err,done){
         if(err){
            return console.log("seed err",err);
         }
         if(done){
            return console.log("seed done",done);
         }
         seeder.disconnect();
      })
});
