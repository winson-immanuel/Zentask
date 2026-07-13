const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://winnsss:winson1605@cluster0.c2hksjv.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("Connected Successfully");
  process.exit(0);
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});