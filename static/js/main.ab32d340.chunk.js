(this.webpackJsonpinterface=this.webpackJsonpinterface||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(47)},25:function(e,t,n){},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(14),r=n.n(i),l=(n(25),n(15),n(26),n(3)),c=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(43);var s=n(16),u=n(17),m=n(2),h=n(19),f=n(18),d=(n(44),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).state={videoURL:"https://www.youtube.com/watch?v=QN-jeJLGCio",videoFILE:null},a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.onUpload=a.onUpload.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"onSubmit",value:function(e){e.preventDefault(),this.state.videoURL=this.url,console.log(this.state.videoURL);var t=String(this.state.videoURL);c.a.post("https://videoquizconverter.herokuapp.com/quizzes",{link:t}).then((function(e){alert(e.data.Quiz)})).catch((function(e){console.log(e),alert("Error with API")}))}},{key:"onUpload",value:function(e){e.preventDefault(),this.state.videoFILE=this.file,console.log(this.state.videoFILE),c.a.post("https://videoquizconverter.herokuapp.com/quizzes",this.state.videoFILE).then((function(e){console.log(e),alert("Success")})).catch((function(e){alert("Error with API")}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"#"}," ","About Us"," ")),o.a.createElement("h1",null," WELCOME TO QUIZLET FINDER "),o.a.createElement("h3",null," Submit Video URL Here: "),o.a.createElement("form",{className:"form-horizontal"}," ",o.a.createElement("input",{type:"url",ref:function(t){return e.url=t},name:"url"})),o.a.createElement("button",{type:"button",onClick:this.onSubmit,className:"btn-2"},"Submit"),o.a.createElement("h3",null," Submit Video mp4 File Here: "),o.a.createElement("form",{className:"form-horizontal"}," ",o.a.createElement("input",{type:"file",ref:function(t){return e.file=t},name:"file"})),o.a.createElement("button",{type:"btn-horizontal",onClick:this.onUpload,className:"btn-2"},"Upload"))}}]),n}(a.Component));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ab32d340.chunk.js.map