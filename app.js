import express from 'express';
import cors from 'cors';



const app = express();
const Port = process.env.PORT || 2000;




const corsOptions = {
  origin: '*'
}

// allow origin request from the url
app.use(cors(corsOptions));



app.get('/', (req, res) => {
  res.json({ slackUsername: 'hope peter', backend: true, age: 24, bio: 'A netizen' })
});

app.listen(Port, console.log('server started at port 2000')
);

