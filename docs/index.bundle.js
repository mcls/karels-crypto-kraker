!function(e){function n(n){for(var r,o,l=n[0],s=n[1],u=n[2],h=0,p=[];h<l.length;h++)o=l[h],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(n);p.length;)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var s=t[l];0!==a[s]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={1:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var c=s;i.push([5,2,0]),t()}({11:function(e,n,t){var r=t(12);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(14)(r,a);r.locals&&(e.exports=r.locals)},12:function(e,n,t){(e.exports=t(13)(!1)).push([e.i,"html, body {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  background-color: #fcfcfc;\n}\n\nh1 {\n  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0px;\n}\n\nh1, h2, h3, p {\n  color: #333;\n}\n\nem {\n  color: #999;\n}\n\ninput, p {\n  font-size: 18px;\n}\n\ninput {\n  padding: 10px;\n  min-width: 600px;\n  margin-bottom: 10px;\n  border: 3px solid #eee;\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n\np {\n  line-height: 1.2;\n  margin: 2px;\n  padding: 0;\n\n}\n",""])},5:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(2),o=t.n(i),l=t(3);t(11);o.a.render(a.a.createElement(class extends r.Component{constructor(e){super(e),this.state={value:"",candidates:[]},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){e.preventDefault()}handleChange(e){const n=e.target.value;let t=[];n.length>=1&&(t=this.findMatchingWords(n)),this.setState({value:n,candidates:t})}findMatchingWords(e){return l.default.filter(n=>{if(n.length!=e.length)return!1;for(var t=0,r="";r=e.charAt(t);t++)if("."!=r&&n.charAt(t)!=r)return!1;return!0})}render(){let e=this.state.candidates.slice(0,30).map(e=>a.a.createElement("p",null,e));return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"Karels Crypto Kraker"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{autofocus:"true",name:"pattern",value:this.state.value,onChange:this.handleChange})),a.a.createElement("p",null,a.a.createElement("em",null,this.state.value.length," char(s). ",this.state.candidates.length," result(s). Showing the first ",e.length,".")),e)}},null),document.getElementById("root")),console.log("DONE: src/index.js")}});