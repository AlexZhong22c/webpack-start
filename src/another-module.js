import _ from 'lodash'
function anotherC () {
  var element = document.createElement('pre')
  var _loadedStr = _.join(['Another', 'module', 'loaded!'], ' ')
  element.innerHTML = _loadedStr
  return element
}

document.body.appendChild(anotherC())
