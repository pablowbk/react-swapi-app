(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),s=(n(15),n(2)),l=n(3),o=n(5),u=n(4),m=n(6),h=(n(1),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={species:["Fetching species..."],films:["Loading films..."]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.species[0]).then(function(e){return e.json()}).then(function(t){return e.setState({species:t.name})});var t=[];this.props.films.map(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return t.push("Episode ".concat(e.episode_id,": ").concat(e.title))})}),this.setState({films:t}),console.log("array",t),console.log("state",this.state.films)}},{key:"render",value:function(){var e=this.props.name;return r.a.createElement("div",{className:"Card"},r.a.createElement("h3",null,e),r.a.createElement("h4",null,this.state.species),r.a.createElement("div",null,"Featured in:",r.a.createElement("ul",null,this.state.films.map(function(e,t){return r.a.createElement("li",{key:t},e)}))))}}]),t}(a.Component)),p=function(e){var t=e.data.map(function(e,t){return r.a.createElement(h,{key:e.url,name:e.name,species:e.species,films:e.films})});return r.a.createElement("section",{className:"CardContainer"},t)},f={listStyleType:"none"},d=function(){return r.a.createElement("nav",{className:"Nav"},r.a.createElement("ul",{style:f},r.a.createElement("li",null,"Home"),r.a.createElement("li",null,"Search"),r.a.createElement("li",null,"About")))},E=function(){return r.a.createElement("h1",{className:"Header"},"Star Wars")},v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],films:[],species:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/people/").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.results})})}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(E,null),0===e.length?r.a.createElement("h3",null,"Loading Cards..."):r.a.createElement("h3",null,"Cards Count: ",e.length),r.a.createElement(p,{data:e}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.ae2335bf.chunk.js.map