'use strict';

var twemoji = require('twemoji');

module.exports = function emoji_html(tokens, idx /*, options, env */) {
  //return tokens[idx].content;
  return twemoji.parse(tokens[idx].content);
};