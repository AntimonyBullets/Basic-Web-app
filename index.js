require('dotenv').config()
const express = require('express');
const app = express(); //creating 
// const port = 3000; // defining the port on which the app will listen the requests (GET, POST, PUT etc.)

app.get('/', (req,res)=>{
    res.send("Nothing to see here....");
}) // Here req --> request, and res -->response

//If GET request is sent on the route passed as first parameter here ('/login' in the following case), which means if someone tries to access this url, we are sending a response will be sent which will be displayed on the web browser. We use 'res.send()' to send response.
app.get('/login', (req, res)=>{
    const books = [
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee"
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell"
        },
        {
          id: 3,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald"
        },
        {
          id: 4,
          title: "The Catcher in the Rye",
          author: "J.D. Salinger"
        },
        {
          id: 5,
          title: "The Art of War",
          author: "Sun Tzu"
        }
      ];
    res.send(books)
});
app.listen(process.env.PORT, ()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})