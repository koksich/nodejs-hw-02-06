const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Nata:FMIWu85y9FZoVFVq@cluster0.iffdq5t.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("DataBase connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
    // proces.exit(1) - команда, що закриває запущені процеси 
  });
