import './css/style.styl'

//import image from './images/image.jpg'

//const $img = new Image()
//$img.src = image
//document.body.appendChild($img)

import Exemple from './js/Exemple.js'

console.log('Hello Webpack')

const exemple = new Exemple()

if(module.hot)
{
    module.hot.accept()

    module.hot.dispose(() =>
    {
        console.log('dispose')
    })
}