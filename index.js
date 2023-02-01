import  Express  from "express";
import  bodyParser from "body-parser";
import  UserRoute from "./Route/UserRoute.js";
import  CorsOptions  from "cors";
import  expressLayouts from "express-ejs-layouts";

const port = 3000;
const app = Express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(CorsOptions());
app.use(UserRoute);

app.listen(port,()=>{
    console.log(`Server Running ${port}`);
});

