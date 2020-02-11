import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import helmet from 'helmet'
import passport from 'passport';
import cookieParser from 'cookie-parser';
import main from './routes/main'

dotenv.config()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3001

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

}else{
    app.use(helmet())
    app.use(helmet.permittedCrossDomainPolicies())
    app.disable('x-powered-by')

}
 

//----------------------------------------
app.post('/auth/sign-in', async function (req, res, next) {
    passport.authenticate('basic', function (error, data) {
      try {
        if (error || !data) {
          return next(error);
        }
        req.login(data, { session: false }, async function(error){
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
        next(error);
      }
    })(req, res, next);
  });

//----------------------------------------

app.get('*', main)

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server Running on http://localhost:${PORT}  api ${process.env.API_URL}`)
})