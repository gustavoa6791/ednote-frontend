import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import helmet from 'helmet'
import passport from 'passport';
import cookieParser from 'cookie-parser';
import main from './routes/main'
import boom from '@hapi/boom';
import axios from 'axios'

dotenv.config()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`))

require('./utils/auth/strategies/basic')


if (ENV === 'development') {
  console.log("modo desarrollo");

  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: { colors: true },
    historyApiFallback: true,
  }
  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))

} else {
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies())
  app.disable('x-powered-by')

}


//----------------------------------------
app.post('/auth/sign-in', async function (req, res, next) {
  passport.authenticate('basic', function (error, data) {
    try {
      if (error || !data) {
        res.status(401).json(error)
        return next(error);
      }
      req.login(data, { session: false }, async function (error) {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
        });

        res.status(200).json(user.user);
      });
    } catch (error) {
      next(error)
    }
  })(req, res, next);
});

//----------------------------------------
app.post('/auth/remember', async function (req, res, next) {
  try {
    await axios({
      url: `${process.env.API_URL}/api/auth/remember`,
      method: "post",
      data: {
        emailToRemember: req.body

      }
    }).then(
      res.send("ok")
    )
  } catch (error) {
    next(error)
  }
});

//----------------------------------------
app.post('/auth/change', async function (req, res, next) {
  try {
    await axios({
      url: `${process.env.API_URL}/api/auth/change`,
      method: "post",
      data: {
        data: req.body
      }
    }).then(


      res.send(200)
    )
  } catch (error) {


    next(error)
  }
});

//----------------------------------------
app.post('/auth/changeProfile', async function (req, res, next) {
  try {
    await axios({
      url: `${process.env.API_URL}/api/auth/changeProfile`,
      method: "post",
      data: {
        data: req.body
      }
    }).then(
      res.send("ok")
    )
  } catch (error) {
    next(error)
  }
});

//----------------------------------------
app.post('/auth/unlock', async function (req, res, next) {
  try {
    await axios({
      url: `${process.env.API_URL}/api/auth/unlock`,
      method: "post",
      data: {
        data: req.body
      }
    }).then(
      res.send(200)
    )
  } catch (error) {



    next(error)
  }
});



//----------------------------------------
app.post('/auth/search', async function (req, res, next) {
  try {
    await axios({
      url: `${process.env.API_URL}/api/auth/search`,
      method: "post",
      data: {
        data: req.body
      }
    }).then((dataU) => {
      const { data } = dataU
      res.status(200).json(data)
    }
    )
  } catch (error) {
    next(error)
  }
});

//----------------------------------------
app.post('/getSubjects', async function (req, res, next) {
  
  try {
    
    await axios({
      
      url: `${process.env.API_URL}/api/user-materias/all`,
      method: "post",
      data: {
        data: req.body.data
      }
    }).then((dataU) => {
      const { data } = dataU
      res.status(200).json(data)
    }
    )
  } catch (error) {
    console.log(req.body.data);
    next(error)
  }
});


//----------------------------------------

//----------------------------------------
app.post('/getStudentSubjects', async function (req, res, next) {
  
  try {
    
    await axios({
      
      url: `${process.env.API_URL}/api/user-materias/student`,
      method: "post",
      data: {
        data: req.body.data
      }
    }).then((dataU) => {
      const { data } = dataU
      res.status(200).json(data)
    }
    )
  } catch (error) {
    console.log(req.body.data);
    next(error)
  }
});


//----------------------------------------

app.get('*', main)

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server Running on http://localhost:${PORT}  api ${process.env.API_URL}`)
})