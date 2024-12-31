import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let days = "a weekday";
  let msj = "it's time to work hard";

  if (day === 0 || day === 6) {
    days = "the weekend";
    msj = "it's time to have some fun";
  } 

  res.render("index.ejs", {
    dayType: days,
    advice: msj}
  );
    
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
