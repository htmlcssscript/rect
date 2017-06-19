import _ from 'lodash';
import $ from 'jquery'
import {change} from './foo'
function component () {
  var element = $('<div></div>');

  /* lodash is required for the next line to work */
  element.html( _.join(['hi','webpack'], ' ') );

  console.log(change())

  return element;
}

$('body').append( component() )
