(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5c9L":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i={main:"#111",accent:"#FF005C",secondary:"#FAFAFA"},r={main:"#EAE8E5",accent:"#5189B8",secondary:"#FFC164"}},FP2H:function(e,t,n){"use strict";n.r(t);n("91GP");var i=n("q1tI"),r=n.n(i),a=n("vOnD"),o=n("w8Zf"),c=n("2Mws"),s=n("8aw+"),d=(n("bHtr"),n("5c9L")),l=n("X5yN"),u=function(e){var t=e.dt,n=void 0===t?0:t,i=e.freq,r=void 0===i?1:i,a=e.amp,o=void 0===a?1:a,c=e.fromZero,s=void 0!==c&&c,d=e.phase,l=void 0===d?0:d;return o*Math.sin(n*(r/60)+l)+(s?o:0)},f=function(e){return e.whole?parseInt(u(e).toFixed(0)):parseInt(u(e).toFixed(2))},m={scheme:d.b,size:512,figures:[{vertices:6,dots:{show:!0,radius:2},lines:{show:!1}}]},h=function(e){var t=void 0===e?m:e,n=t.scheme,i=t.size;t.figures;return function(e){var t={main:e.color(n.main),accent:e.color(n.accent),secondary:e.color(n.secondary)},r=0;e.setup=function(){e.createCanvas(i,i),e.color(t.accent),e.noStroke()},e.draw=function(){e.background(t.main),r=f({amp:2500,freq:.1,dt:e.millis(),fromZero:!0}),Object(l.a)({v:r/1e3+1,c:{x:e.width/2,y:e.height/2},r:10+f({amp:50,freq:.1,dt:e.millis(),fromZero:!0}),a:e.PI+e.radians(e.millis()/10)}).map((function(n,i){e.fill(t.accent),e.circle(n.x,n.y,10+f({amp:10,freq:.1,dt:e.millis(),fromZero:!0}))})),Object(l.a)({v:2*r/1e3+1,c:{x:e.width/2,y:e.height/2},r:10+f({amp:50,freq:.1,dt:e.millis(),fromZero:!0,phase:1.5}),a:e.PI/2+e.radians(e.millis()/10)}).map((function(n,i){e.fill(t.secondary),e.circle(n.x,n.y,10+f({amp:5,freq:.1,dt:e.millis(),phase:e.PI/2}))}))}}},p=(t.default=r.a.memo((function(){var e=Object(i.useState)(m),t=e[0],n=e[1];return Object(i.useEffect)((function(){try{n(Object.assign({},t,{size:window.innerWidth<512?window.innerWidth:512}))}catch(e){console.error(e)}}),[]),r.a.createElement(c.a,{title:"Vertices",layoutTheme:o.b.light},r.a.createElement(p,null,r.a.createElement(s.a,{sketch:h(m)})))})),a.d.div.withConfig({componentId:"ahcxc2-0"})(["position:relative;line-height:0;border-radius:6px;overflow:hidden;"]))},X5yN:function(e,t,n){"use strict";t.a=function(e){for(var t=e.v,n=e.c,i=e.r,r=e.a,a=[],o=0;o<t;o++){var c=r+2*Math.PI/t*o,s=n.x+Math.sin(c)*i,d=n.y+Math.cos(c)*i;a.push({x:s,y:d})}return a}}}]);
//# sourceMappingURL=component---src-pages-vertices-oscillate-tsx-99d31c20e5fd857b9393.js.map