import express from "express";
import mongoose from 'mongoose';

// import {CorsOptions} from 'cors';
var router = express.Router();
import environment from "../environment";
import { TestRoutes } from "../routes/user_routes";
import { CommonRoutes } from "../routes/common_routes";
var cors = require('cors')
class App {

   public app: express.Application;
   public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

   private test_routes: TestRoutes = new TestRoutes();
   private common_routes: CommonRoutes = new CommonRoutes();

   constructor() {
      this.app = express();
      this.app.use(express.json())

      this.app.use(cors({
         origin: 'http://localhost:3011',
         methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
         allowedHeaders: ['Content-Type', 'Authorization'],
      }))
      this.app.use(express.urlencoded({ extended: true }))
      this.config();
      this.mongoSetup();

      this.app.use(cors({
         origin: '*'
      }));
      this.test_routes.route(this.app);
      this.common_routes.route(this.app);
   }

   private config(): void {
      this.app.use(express.json({ limit: '50mb' }));
      this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
      // support application/json type post data
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));

   }

   private mongoSetup(): void {
      mongoose.set('strictQuery', true);
      mongoose.connect(this.mongoUrl).then(db => {
         console.log('Mongo connected Sucessfully !!!')
      });
   }

}
export default new App().app;
