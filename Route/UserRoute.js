import  express  from "express";
import {
    getDashboard,
    postData,
    getDelete,
    getUp,
} from "../Controllers/UserController.js"

const route = express.Router();

route.get('/', getDashboard)
route.post('/post',postData)
route.get('/delete/:id', getDelete)
route.post('/post/:id', getUp)

export default route;