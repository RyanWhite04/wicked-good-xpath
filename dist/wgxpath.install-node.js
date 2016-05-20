(function(){'use strict';var k=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function l(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function m(a){var b=n;function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.F=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function q(a,b){return-1!=a.indexOf(b)}function ga(a,b){return a<b?-1:a>b?1:0};var ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},r=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=l(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var p=g[h];b.call(c,p,h,a)&&(e[f++]=p)}return e},t=Array.prototype.reduce?function(a,b,c,d){d&&(b=da(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;r(a,function(c,g){e=b.call(d,e,c,g,a)});return e},ja=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};function ka(a,b){var c;a:{c=a.length;for(var d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:l(a)?a.charAt(c):a[c]}function la(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function ma(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var u;a:{var na=k.navigator;if(na){var oa=na.userAgent;if(oa){u=oa;break a}}u=""};var pa=q(u,"Opera")||q(u,"OPR"),v=q(u,"Trident")||q(u,"MSIE"),qa=q(u,"Edge"),ra=q(u,"Gecko")&&!(q(u.toLowerCase(),"webkit")&&!q(u,"Edge"))&&!(q(u,"Trident")||q(u,"MSIE"))&&!q(u,"Edge"),sa=q(u.toLowerCase(),"webkit")&&!q(u,"Edge");function ta(){var a=u;if(ra)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(v)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sa)return/WebKit\/(\S+)/.exec(a)}function ua(){var a=k.document;return a?a.documentMode:void 0}
var va=function(){if(pa&&k.opera){var a;var b=k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=ta())&&(a=b?b[1]:"");return v&&(b=ua(),null!=b&&b>parseFloat(a))?String(b):a}(),wa={};
function xa(a){if(!wa[a]){for(var b=0,c=fa(String(va)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",p=/(\d*)(\D*)/g,y=/(\d*)(\D*)/g;do{var D=p.exec(g)||["","",""],X=y.exec(h)||["","",""];if(0==D[0].length&&0==X[0].length)break;b=ga(0==D[1].length?0:parseInt(D[1],10),0==X[1].length?0:parseInt(X[1],10))||ga(0==D[2].length,0==X[2].length)||ga(D[2],X[2])}while(0==b)}wa[a]=0<=b}}
var ya=k.document,za=ya&&v?ua()||("CSS1Compat"==ya.compatMode?parseInt(va,10):5):void 0;var w=v&&!(9<=Number(za)),Aa=v&&!(8<=Number(za));function x(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Ba(a,b){var c=Aa&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new x(b,a,b.nodeName,c)};function z(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(w&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),w&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function A(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}Aa&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function B(a,b,c,d,e){return(w?Ca:Da).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new C)}
function Ca(a,b,c,d,e){if(a instanceof E||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Ea(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],h=0;b=f[h++];)A(b,c,d)&&g.push(b);f=g}for(h=0;b=f[h++];)"*"==a&&"!"==b.tagName||F(e,b);return e}Fa(a,b,c,d,e);return e}
function Da(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!v?(b=b.getElementsByName(d),r(b,function(b){a.a(b)&&F(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),r(b,function(b){b.className==d&&a.a(b)&&F(e,b)})):a instanceof G?Fa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),r(b,function(a){A(a,c,d)&&F(e,a)}));return e}
function Ga(a,b,c,d,e){var f;if((a instanceof E||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Ea(a);if("*"!=g&&(f=ia(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ia(f,function(a){return A(a,c,d)}));r(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||F(e,a)});return e}return Ha(a,b,c,d,e)}function Ha(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)A(b,c,d)&&a.a(b)&&F(e,b);return e}
function Fa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)A(b,c,d)&&a.a(b)&&F(e,b),Fa(a,b,c,d,e)}function Ea(a){if(a instanceof G){if(8==a.b)return"!";if(null===a.b)return"*"}return a.f()};!ra&&!v||v&&9<=Number(za)||ra&&xa("1.9.1");v&&xa("9");function Ia(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ja(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(v&&!(9<=Number(za))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ka(a,b):!c&&Ia(e,b)?-1*La(a,b):!d&&Ia(f,a)?La(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?
a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(k.Range.START_TO_END,d)}function La(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ka(d,a)}function Ka(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function C(){this.b=this.a=null;this.l=0}function Ma(a){this.node=a;this.a=this.b=null}function Na(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;){var f=c.node,h=d.node;f==h||f instanceof x&&h instanceof x&&f.a==h.a?(f=c,c=c.a,d=d.a):0<Ja(c.node,d.node)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.l=g;return a}C.prototype.unshift=function(a){a=new Ma(a);a.a=this.a;this.b?this.a.b=a:this.a=this.b=a;this.a=a;this.l++};
function F(a,b){var c=new Ma(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.l++}function Oa(a){return(a=a.a)?a.node:null}function Pa(a){return(a=Oa(a))?z(a):""}function H(a,b){return new Qa(a,!!b)}function Qa(a,b){this.f=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function I(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.node};function n(a){this.i=a;this.b=this.g=!1;this.f=null}function J(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Ra(a,b){a.g=b}function Sa(a,b){a.b=b}function K(a,b){var c=a.a(b);return c instanceof C?+Pa(c):+c}function L(a,b){var c=a.a(b);return c instanceof C?Pa(c):""+c}function M(a,b){var c=a.a(b);return c instanceof C?!!c.l:!!c};function N(a,b,c){n.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==Ta&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,s:b}):this.f={name:b.f.name,s:c})}m(N);
function O(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof C&&c instanceof C){b=H(b);for(d=I(b);d;d=I(b))for(e=H(c),f=I(e);f;f=I(e))if(a(z(d),z(f)))return!0;return!1}if(b instanceof C||c instanceof C){b instanceof C?(e=b,d=c):(e=c,d=b);f=H(e);for(var g=typeof d,h=I(f);h;h=I(f)){switch(g){case "number":h=+z(h);break;case "boolean":h=!!z(h);break;case "string":h=z(h);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(h,d)||e==c&&a(d,h))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}N.prototype.a=function(a){return this.c.m(this.h,this.o,a)};N.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+J(this.h);return a+=J(this.o)};function Ua(a,b,c,d){this.a=a;this.w=b;this.i=c;this.m=d}Ua.prototype.toString=function(){return this.a};var Va={};
function P(a,b,c,d){if(Va.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Ua(a,b,c,d);return Va[a.toString()]=a}P("div",6,1,function(a,b,c){return K(a,c)/K(b,c)});P("mod",6,1,function(a,b,c){return K(a,c)%K(b,c)});P("*",6,1,function(a,b,c){return K(a,c)*K(b,c)});P("+",5,1,function(a,b,c){return K(a,c)+K(b,c)});P("-",5,1,function(a,b,c){return K(a,c)-K(b,c)});P("<",4,2,function(a,b,c){return O(function(a,b){return a<b},a,b,c)});
P(">",4,2,function(a,b,c){return O(function(a,b){return a>b},a,b,c)});P("<=",4,2,function(a,b,c){return O(function(a,b){return a<=b},a,b,c)});P(">=",4,2,function(a,b,c){return O(function(a,b){return a>=b},a,b,c)});var Ta=P("=",3,2,function(a,b,c){return O(function(a,b){return a==b},a,b,c,!0)});P("!=",3,2,function(a,b,c){return O(function(a,b){return a!=b},a,b,c,!0)});P("and",2,2,function(a,b,c){return M(a,c)&&M(b,c)});P("or",1,2,function(a,b,c){return M(a,c)||M(b,c)});function Q(a,b,c){this.a=a;this.b=b||1;this.f=c||1};function Wa(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");n.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}m(Wa);Wa.prototype.a=function(a){a=this.c.a(a);return Xa(this.h,a)};Wa.prototype.toString=function(){var a;a="Filter:"+J(this.c);return a+=J(this.h)};function Ya(a,b){if(b.length<a.A)throw Error("Function "+a.j+" expects at least"+a.A+" arguments, "+b.length+" given");if(null!==a.v&&b.length>a.v)throw Error("Function "+a.j+" expects at most "+a.v+" arguments, "+b.length+" given");a.B&&r(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});n.call(this,a.i);this.h=a;this.c=b;Ra(this,a.g||ja(b,function(a){return a.g}));Sa(this,a.D&&!b.length||a.C&&!!b.length||ja(b,function(a){return a.b}))}m(Ya);
Ya.prototype.a=function(a){return this.h.m.apply(null,la(a,this.c))};Ya.prototype.toString=function(){var a="Function: "+this.h;if(this.c.length)var b=t(this.c,function(a,b){return a+J(b)},"Arguments:"),a=a+J(b);return a};function Za(a,b,c,d,e,f,g,h,p){this.j=a;this.i=b;this.g=c;this.D=d;this.C=e;this.m=f;this.A=g;this.v=void 0!==h?h:g;this.B=!!p}Za.prototype.toString=function(){return this.j};var $a={};
function R(a,b,c,d,e,f,g,h){if($a.hasOwnProperty(a))throw Error("Function already created: "+a+".");$a[a]=new Za(a,b,c,d,!1,e,f,g,h)}R("boolean",2,!1,!1,function(a,b){return M(b,a)},1);R("ceiling",1,!1,!1,function(a,b){return Math.ceil(K(b,a))},1);R("concat",3,!1,!1,function(a,b){return t(ma(arguments,1),function(b,d){return b+L(d,a)},"")},2,null);R("contains",2,!1,!1,function(a,b,c){return q(L(b,a),L(c,a))},2);R("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
R("false",2,!1,!1,function(){return!1},0);R("floor",1,!1,!1,function(a,b){return Math.floor(K(b,a))},1);R("id",4,!1,!1,function(a,b){function c(a){if(w){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ka(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=L(b,a).split(/\s+/),f=[];r(d,function(a){a=c(a);!a||0<=ha(f,a)||f.push(a)});f.sort(Ja);var g=new C;r(f,function(a){F(g,a)});return g},1);
R("lang",2,!1,!1,function(){return!1},1);R("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);R("local-name",3,!1,!0,function(a,b){var c=b?Oa(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);R("name",3,!1,!0,function(a,b){var c=b?Oa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);R("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
R("normalize-space",3,!1,!0,function(a,b){return(b?L(b,a):z(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);R("not",2,!1,!1,function(a,b){return!M(b,a)},1);R("number",1,!1,!0,function(a,b){return b?K(b,a):+z(a.a)},0,1);R("position",1,!0,!1,function(a){return a.b},0);R("round",1,!1,!1,function(a,b){return Math.round(K(b,a))},1);R("starts-with",2,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);return 0==b.lastIndexOf(a,0)},2);R("string",3,!1,!0,function(a,b){return b?L(b,a):z(a.a)},0,1);
R("string-length",1,!1,!0,function(a,b){return(b?L(b,a):z(a.a)).length},0,1);R("substring",3,!1,!1,function(a,b,c,d){c=K(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?K(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=L(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);R("substring-after",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
R("substring-before",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);R("sum",1,!1,!1,function(a,b){for(var c=H(b.a(a)),d=0,e=I(c);e;e=I(c))d+=+z(e);return d},1,1,!0);R("translate",3,!1,!1,function(a,b,c,d){b=L(b,a);c=L(c,a);var e=L(d,a);a={};for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);R("true",2,!1,!1,function(){return!0},0);function G(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function ab(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}G.prototype.a=function(a){return null===this.b||this.b==a.nodeType};G.prototype.f=function(){return this.h};
G.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=J(this.c));return a};function bb(a){this.b=a;this.a=0}function cb(a){a=a.match(db);for(var b=0;b<a.length;b++)eb.test(a[b])&&a.splice(b,1);return new bb(a)}var db=/\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,eb=/^\s/;function S(a,b){return a.b[a.a+(b||0)]}function T(a){return a.b[a.a++]}function fb(a){return a.b.length<=a.a};function gb(a){n.call(this,3);this.c=a.substring(1,a.length-1)}m(gb);gb.prototype.a=function(){return this.c};gb.prototype.toString=function(){return"Literal: "+this.c};function E(a,b){this.j=a.toLowerCase();var c;c="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.c=b?b.toLowerCase():c}E.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.j&&this.j!=a.localName.toLowerCase()?!1:"*"==this.c?!0:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};E.prototype.f=function(){return this.j};E.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j};function hb(a,b){n.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.u||c.c!=ib||(c=c.o,"*"!=c.f()&&(this.f={name:c.f(),s:null}))}}m(hb);function jb(){n.call(this,4)}m(jb);jb.prototype.a=function(a){var b=new C;a=a.a;9==a.nodeType?F(b,a):F(b,a.ownerDocument);return b};jb.prototype.toString=function(){return"Root Helper Expression"};function kb(){n.call(this,4)}m(kb);kb.prototype.a=function(a){var b=new C;F(b,a.a);return b};kb.prototype.toString=function(){return"Context Helper Expression"};
function lb(a){return"/"==a||"//"==a}hb.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof C))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=H(b,e.c.a),g;if(e.g||e.c!=mb)if(e.g||e.c!=nb)for(g=I(f),b=e.a(new Q(g));null!=(g=I(f));)g=e.a(new Q(g)),b=Na(b,g);else g=I(f),b=e.a(new Q(g));else{for(g=I(f);(b=I(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new Q(g))}}return b};
hb.prototype.toString=function(){var a;a="Path Expression:"+J(this.h);if(this.c.length){var b=t(this.c,function(a,b){return a+J(b)},"Steps:");a+=J(b)}return a};function ob(a){n.call(this,4);this.c=a;Ra(this,ja(this.c,function(a){return a.g}));Sa(this,ja(this.c,function(a){return a.b}))}m(ob);ob.prototype.a=function(a){var b=new C;r(this.c,function(c){c=c.a(a);if(!(c instanceof C))throw Error("Path expression must evaluate to NodeSet.");b=Na(b,c)});return b};ob.prototype.toString=function(){return t(this.c,function(a,b){return a+J(b)},"Union Expression:")};function pb(a,b){this.a=a;this.b=!!b}
function Xa(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=H(b),f=b.l,g,h=0;g=I(e);h++){var p=a.b?f-h:h+1;g=d.a(new Q(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof C)p=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.f;var y=p.a;if(!y)throw Error("Next must be called at least once before remove.");var D=y.b,y=y.a;D?D.a=y:g.a=y;y?y.b=D:g.b=D;g.l--;p.a=null}}return b}
pb.prototype.toString=function(){return t(this.a,function(a,b){return a+J(b)},"Predicates:")};function U(a,b,c,d){n.call(this,4);this.c=a;this.o=b;this.h=c||new pb([]);this.u=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.b&&b&&(a=b.name,a=w?a.toLowerCase():a,this.f={name:a,s:b.s});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}m(U);
U.prototype.a=function(a){var b=a.a,c=null,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.s?L(c.s,a):null,f=1);if(this.u)if(this.g||this.c!=qb)if(a=H((new U(rb,new G("node"))).a(a)),b=I(a))for(c=this.m(b,d,e,f);null!=(b=I(a));)c=Na(c,this.m(b,d,e,f));else c=new C;else c=B(this.o,b,d,e),c=Xa(this.h,c,f);else c=this.m(a.a,d,e,f);return c};U.prototype.m=function(a,b,c,d){a=this.c.f(this.o,a,b,c);return a=Xa(this.h,a,d)};
U.prototype.toString=function(){var a;a="Step:"+J("Operator: "+(this.u?"//":"/"));this.c.j&&(a+=J("Axis: "+this.c));a+=J(this.o);if(this.h.a.length){var b=t(this.h.a,function(a,b){return a+J(b)},"Predicates:");a+=J(b)}return a};function sb(a,b,c,d){this.j=a;this.f=b;this.a=c;this.b=d}sb.prototype.toString=function(){return this.j};var tb={};function V(a,b,c,d){if(tb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new sb(a,b,c,!!d);return tb[a]=b}
V("ancestor",function(a,b){for(var c=new C,d=b;d=d.parentNode;)a.a(d)&&c.unshift(d);return c},!0);V("ancestor-or-self",function(a,b){var c=new C,d=b;do a.a(d)&&c.unshift(d);while(d=d.parentNode);return c},!0);
var ib=V("attribute",function(a,b){var c=new C,d=a.f();if("style"==d&&b.style&&w)return F(c,new x(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof G&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)w?f.nodeValue&&F(c,Ba(b,f)):F(c,f);else(f=e.getNamedItem(d))&&(w?f.nodeValue&&F(c,Ba(b,f)):F(c,f));return c},!1),qb=V("child",function(a,b,c,d,e){return(w?Ga:Ha).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new C)},!1,!0);V("descendant",B,!1,!0);
var rb=V("descendant-or-self",function(a,b,c,d){var e=new C;A(b,c,d)&&a.a(b)&&F(e,b);return B(a,b,c,d,e)},!1,!0),mb=V("following",function(a,b,c,d){var e=new C;do for(var f=b;f=f.nextSibling;)A(f,c,d)&&a.a(f)&&F(e,f),e=B(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);V("following-sibling",function(a,b){for(var c=new C,d=b;d=d.nextSibling;)a.a(d)&&F(c,d);return c},!1);V("namespace",function(){return new C},!1);
var ub=V("parent",function(a,b){var c=new C;if(9==b.nodeType)return c;if(2==b.nodeType)return F(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&F(c,d);return c},!1),nb=V("preceding",function(a,b,c,d){var e=new C,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,h=f.length;g<h;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var y=0,D=p.length;y<D;y++)b=p[y],A(b,c,d)&&a.a(b)&&F(e,b),e=B(a,b,c,d,e)}return e},!0,!0);
V("preceding-sibling",function(a,b){for(var c=new C,d=b;d=d.previousSibling;)a.a(d)&&c.unshift(d);return c},!0);var vb=V("self",function(a,b){var c=new C;a.a(b)&&F(c,b);return c},!1);function wb(a){n.call(this,1);this.c=a;this.g=a.g;this.b=a.b}m(wb);wb.prototype.a=function(a){return-K(this.c,a)};wb.prototype.toString=function(){return"Unary Expression: -"+J(this.c)};function xb(a){n.call(this,1);this.c=a}m(xb);xb.prototype.a=function(){return this.c};xb.prototype.toString=function(){return"Number: "+this.c};function yb(a,b){this.a=a;this.b=b}function zb(a){for(var b,c=[];;){W(a,"Missing right hand side of binary expression.");b=Ab(a);var d=T(a.a);if(!d)break;var e=(d=Va[d]||null)&&d.w;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].w;)b=new N(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new N(c.pop(),c.pop(),b);return b}function W(a,b){if(fb(a.a))throw Error(b);}function Bb(a,b){var c=T(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Cb(a){a=T(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Db(a){a=T(a.a);if(2>a.length)throw Error("Unclosed literal string");return new gb(a)}
function Eb(a){var b,c=[],d;if(lb(S(a.a))){b=T(a.a);d=S(a.a);if("/"==b&&(fb(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new jb;d=new jb;W(a,"Missing next location step.");b=Fb(a,b);c.push(b)}else{a:{b=S(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":T(a.a);b=zb(a);W(a,'unclosed "("');Bb(a,")");break;case '"':case "'":b=Db(a);break;default:if(isNaN(+b))if(!ab(b)&&/(?![0-9])[\w]/.test(d)&&"("==S(a.a,1)){b=T(a.a);
b=$a[b]||null;T(a.a);for(d=[];")"!=S(a.a);){W(a,"Missing function argument list.");d.push(zb(a));if(","!=S(a.a))break;T(a.a)}W(a,"Unclosed function argument list.");Cb(a);b=new Ya(b,d)}else{b=null;break a}else b=new xb(+T(a.a))}"["==S(a.a)&&(d=new pb(Gb(a)),b=new Wa(b,d))}if(b)if(lb(S(a.a)))d=b;else return b;else b=Fb(a,"/"),d=new kb,c.push(b)}for(;lb(S(a.a));)b=T(a.a),W(a,"Missing next location step."),b=Fb(a,b),c.push(b);return new hb(d,c)}
function Fb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==S(a.a))return d=new U(vb,new G("node")),T(a.a),d;if(".."==S(a.a))return d=new U(ub,new G("node")),T(a.a),d;var f;if("@"==S(a.a))f=ib,T(a.a),W(a,"Missing attribute name");else if("::"==S(a.a,1)){if(!/(?![0-9])[\w]/.test(S(a.a).charAt(0)))throw Error("Bad token: "+T(a.a));c=T(a.a);f=tb[c]||null;if(!f)throw Error("No axis with name: "+c);T(a.a);W(a,"Missing node name")}else f=qb;c=S(a.a);if(/(?![0-9])[\w\*]/.test(c.charAt(0)))if("("==
S(a.a,1)){if(!ab(c))throw Error("Invalid node type: "+c);c=T(a.a);if(!ab(c))throw Error("Invalid type name: "+c);Bb(a,"(");W(a,"Bad nodetype");e=S(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Db(a);W(a,"Bad nodetype");Cb(a);c=new G(c,g)}else if(c=T(a.a),e=c.indexOf(":"),-1==e)c=new E(c);else{var g=c.substring(0,e),h;if("*"==g)h="*";else if(h=a.b(g),!h)throw Error("Namespace prefix not declared: "+g);c=c.substr(e+1);c=new E(c,h)}else throw Error("Bad token: "+T(a.a));e=new pb(Gb(a),f.a);return d||
new U(f,c,e,"//"==b)}function Gb(a){for(var b=[];"["==S(a.a);){T(a.a);W(a,"Missing predicate expression.");var c=zb(a);b.push(c);W(a,"Unclosed predicate expression.");Bb(a,"]")}return b}function Ab(a){if("-"==S(a.a))return T(a.a),new wb(Ab(a));var b=Eb(a);if("|"!=S(a.a))a=b;else{for(b=[b];"|"==T(a.a);)W(a,"Missing next union location path."),b.push(Eb(a));a.a.a--;a=new ob(b)}return a};function Hb(a){switch(a.nodeType){case 1:return ea(Ib,a);case 9:return Hb(a.documentElement);case 11:case 10:case 6:case 12:return Jb;default:return a.parentNode?Hb(a.parentNode):Jb}}function Jb(){return null}function Ib(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Ib(a.parentNode,b):null};function Kb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=cb(a);if(fb(c))throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=function(){return null};var d=zb(new yb(c,b));if(!fb(c))throw Error("Bad token: "+T(c));this.evaluate=function(a,b){var c=d.a(new Q(a));return new Y(c,b)}}
function Y(a,b){if(0==b)if(a instanceof C)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof C))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof C?Pa(a):""+a;break;case 1:this.numberValue=a instanceof C?+Pa(a):+a;break;case 3:this.booleanValue=a instanceof C?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var d=
H(a);c=[];for(var e=I(d);e;e=I(d))c.push(e instanceof x?e.a:e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:d=Oa(a);this.singleNodeValue=d instanceof x?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Y.ANY_TYPE=0;Y.NUMBER_TYPE=1;Y.STRING_TYPE=2;Y.BOOLEAN_TYPE=3;Y.UNORDERED_NODE_ITERATOR_TYPE=4;Y.ORDERED_NODE_ITERATOR_TYPE=5;Y.UNORDERED_NODE_SNAPSHOT_TYPE=6;Y.ORDERED_NODE_SNAPSHOT_TYPE=7;Y.ANY_UNORDERED_NODE_TYPE=8;Y.FIRST_ORDERED_NODE_TYPE=9;function Lb(a){this.lookupNamespaceURI=Hb(a)}
function Mb(a,b){var c=a||k,d=c.document;if(!d.evaluate||b)c.XPathResult=Y,d.evaluate=function(a,b,c,d){return(new Kb(a,c)).evaluate(b,d)},d.createExpression=function(a,b){return new Kb(a,b)},d.createNSResolver=function(a){return new Lb(a)}}var Nb=["wgxpath","install"],Z=k;Nb[0]in Z||!Z.execScript||Z.execScript("var "+Nb[0]);for(var Ob;Nb.length&&(Ob=Nb.shift());)Nb.length||void 0===Mb?Z[Ob]?Z=Z[Ob]:Z=Z[Ob]={}:Z[Ob]=Mb;module.exports.install=Mb;module.exports.XPathResultType={ANY_TYPE:0,NUMBER_TYPE:1,STRING_TYPE:2,BOOLEAN_TYPE:3,UNORDERED_NODE_ITERATOR_TYPE:4,ORDERED_NODE_ITERATOR_TYPE:5,UNORDERED_NODE_SNAPSHOT_TYPE:6,ORDERED_NODE_SNAPSHOT_TYPE:7,ANY_UNORDERED_NODE_TYPE:8,FIRST_ORDERED_NODE_TYPE:9};}).call(global)