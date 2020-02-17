import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import boom from '@hapi/boom';
import dotenv from 'dotenv';
import axios from 'axios';


dotenv.config();

passport.use(
  new BasicStrategy(async function(email, password, cb) {

      await axios({
        url: `${process.env.API_URL}/api/auth/sign-in`,
        method: "post",
        auth: {
          password,
          username: email
        },
        data: {
          apiKeyToken: `${process.env.API_KEY_TOKEN}`
        }
      })
      .then(function (response) {

       const  dataRes = response.data
       const  statusRes = response.status

        if (!dataRes || statusRes !== 200) {
          return cb("basic1",false);
        }

        return cb(null, dataRes);
  
      })
      .catch(function (error) {

        if (error.response) {
         
         
          return cb(error.response.data.message,false);
        }

      })
})
)   

