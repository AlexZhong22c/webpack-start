import _ from 'lodash'
import Print from './print'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component () {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.onClick = Print.bind(null, 'Hello webpack!')
  return element
}

document.body.appendChild(component())

