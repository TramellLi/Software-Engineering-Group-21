#!/bin/bash
mongo <<EOF
use admin;
db.createUser({ user: $MONGO_INITDB_ROOT_USERNAME, pwd: $MONGO_INITDB_ROOT_PASSWORD, roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });

use meandb;
db.createCollection("BodyParts");
db.createCollection("Comments");
EOF

mongoimport --db meandb --collection BodyParts --jsonArray --drop --file /home/init/BodyParts.json
mongoimport --db meandb --collection Comments --jsonArray --drop --file /home/init/Comments.json
