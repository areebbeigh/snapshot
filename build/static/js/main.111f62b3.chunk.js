(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t){e.exports={animateCSS:function(e,t,a){var n=document.querySelector(e);n.classList.add("animated",t),n.addEventListener("animationend",function e(){n.classList.remove("animated",t),n.removeEventListener("animationend",e),"function"===typeof a&&a()})}}},21:function(e,t){e.exports={isValidUrl:function(e){for(var t=!1,a=0,n=[/^(http:\/\/|https:\/\/)*(www\.)*(facebook)\.com(\/.+\/posts\/\d+)\/?/i,/(^(http:\/\/|https:\/\/)*(www\.)*(instagram)\.com(\/p\/\w+)\/?)/i,/^((http:\/\/|https:\/\/)*(www\.)*(twitter)\.com(\/.+\/status\/\d+)\/?)/i];a<n.length;a++){var r=new RegExp(n[a]),s=e.match(r);if(s&&s.length>1){t=!0;break}}return console.log(e,t),t}}},22:function(e,t,a){e.exports=a(52)},27:function(e,t,a){},30:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a.n(s),o=(a(27),a(3)),c=a(4),l=a(6),u=a(5),m=a(7),d=a(2),h=a.n(d),p=a(9),f=a(19),g=(a(30),function(e){var t=e.img,a=e.loading,n=e.error;return r.a.createElement("div",{className:"result"},n?r.a.createElement("p",{className:"error"},n):a&&!t?r.a.createElement("span",{id:"loading",className:"animated flash infinite"},"..."):r.a.createElement("img",{id:"resImg",src:t,alt:""}))}),b=a(20),v=a.n(b),w=function(e){return v.a.create({baseURL:"/api",withCredentials:!0}).get("capture",{params:{url:e}})},E=a(10),k=a(21),S=(a(50),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=Object(f.debounce)(function(e){this.setState({postUrl:e.target.value})},700),a.state={img:null,postUrl:null,loading:!1,error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(){var e=Object(p.a)(h.a.mark(function e(t,a){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.postUrl===a.postUrl||!a.postUrl){e.next=22;break}if(e.prev=1,this.setState({error:null}),this.setState({img:null}),!Object(k.isValidUrl)(a.postUrl)){e.next=14;break}return this.setState({loading:!0}),e.next=8,this.capturePost(a.postUrl);case 8:n=e.sent,this.setState({img:n}),Object(E.animateCSS)("#resImg","zoomIn"),this.setState({loading:!1}),e.next=16;break;case 14:this.setState({error:"Unsupported URL"}),Object(E.animateCSS)("#url","shake");case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),this.setState({error:e.t0.response.data.error});case 22:case"end":return e.stop()}},e,this,[[1,18]])}));return function(t,a){return e.apply(this,arguments)}}()},{key:"capturePost",value:function(){var e=Object(p.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return a=e.sent,console.log("res",a),e.abrupt("return",a.data.img);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(t){t.persist(),e.handleChange(t)},id:"url",placeholder:"Post URL goes here..."})),r.a.createElement(g,{error:this.state.error,img:this.state.img,loading:this.state.loading}))}}]),t}(r.a.Component)),j=(a(51),"areebbeigh/snapshot"),O="https://github.com/",x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App has-text-centered"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title is-size-1"},"Snapshot"),r.a.createElement("div",{className:"platforms"},r.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"}),r.a.createElement("i",{class:"fa fa-twitter-square","aria-hidden":"true"}),r.a.createElement("i",{class:"fa fa-facebook-square","aria-hidden":"true"}))),r.a.createElement(S,null),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"github-button",href:O+j,"data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star ".concat(j," on GitHub")},"Star")," ",r.a.createElement("span",{style:{padding:"5px"}}),r.a.createElement("a",{className:"github-button",href:O+j,"data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Star ".concat(j," on GitHub")},"Fork")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.111f62b3.chunk.js.map