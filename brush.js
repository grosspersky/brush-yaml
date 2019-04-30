var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  var constants = '~ true false on off';

  this.regexList = [
    {regex: regexLib.singleLinePerlComments, css: 'comments'},		// comment
    {regex: regexLib.doubleQuotedString, css: 'string'},		// double quoted string
    {regex: regexLib.singleQuotedString, css: 'string'},		// single quoted string
    {regex: /^\s*([a-z0-9\._-])+\s*:/gmi, css: 'variable'},		// key
    {regex: /\s?(\.)([a-z0-9\._-])+\s?:/gmi, css: 'comments'},		// section
    {regex: /\s(@|:)([a-z0-9\._-])+\s*$/gmi, css: 'variable bold'},	// variable, reference
    {regex: /\s+\d+\s?$/gm, css: 'color2 bold'},	// integers
    {regex: /(\{|\}|\[|\]|,|~|:)/gm, css: 'constants'},		// inline hash and array, comma, null
    {regex: /^\s+(-)+/gm, css: 'string bold'},	// array list entry
    {regex: /^---/gm, css: 'string bold'},	// category
    {regex: new RegExp(this.getKeywords(constants), 'gmi'), css: 'constants'}		// constants
  ];

  this.regexList = [
    {
      regex: regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.singleLinePerlComments,
      css: 'comments'
    },
    {
      regex: regexLib.url,
      css: 'color1'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    },
    {regex: new RegExp(this.getKeywords(bashcmds), 'gmi'), css: 'functions'}
  ];

  this.forHtmlScript(regexLib.scriptScriptTags);
}

Brush.prototype = new BrushBase();
Brush.aliases = ['dockerfile', 'docker'];
module.exports = Brush;
