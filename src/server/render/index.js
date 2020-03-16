

import getManifest from '../getManifest'
//const file = getManifest()


let files = false;
if (process.env.NODE_ENV !== 'development') files = getManifest();

const render = (html, preloadedState)=>{
    return(
        `

    <!DOCTYPE html>
    <html lang="es">
    
    <head>

    
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.js"></script>  
    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="${files ? files['main.css'] : 'assets/app.css'}" type="text/css">
        <title>E-note ✅</title>


    
    
    </head>
    
    <body>
        <div id="app">${html}</div>
      
        <script>
        
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
   

        <script src="${files ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
        <script src="${files ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
    </body>
    
    </html>
    
    `
    )
}

export default render