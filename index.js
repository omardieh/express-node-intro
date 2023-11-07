const express = require("express");

const app = express();
console.log("anything");
app.use(express.static(__dirname + "/public"));
console.log(__dirname, "dirname");

app.get("/cat", (request, response, next) => {
  response.sendFile(__dirname + "/views/cat-page.html");
});

app.listen(3003, () => {
  console.log("app is listening on port 3003");
});
