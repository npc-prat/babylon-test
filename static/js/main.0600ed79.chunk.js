(this["webpackJsonpbabylon-test"]=this["webpackJsonpbabylon-test"]||[]).push([[0],{112:function(e,a,n){"use strict";n.r(a);var t=n(14),c=n.n(t),i=n(52),s=n.n(i),r=(n(60),n(61),n(37)),o=(n(62),n(26)),d=n.n(o),l=n(53),u=n.n(l),j=(n(110),n(11));d.a.accessToken="pk.eyJ1IjoicHJhdHZhciIsImEiOiJja2kxbmQ1b2oyanY2MnlwNWhzNGNjYjhvIn0.kYH7yt71R1HHESepho0Rhg";var b,p=function(e){var a=e.map,n=e.setMap,t=c.a.useRef(null);return c.a.useEffect((function(){n(new d.a.Map({container:t.current,style:"mapbox://styles/mapbox/dark-v10",center:[0,30],zoom:.5,preserveDrawingBuffer:!0}))}),[]),c.a.useEffect((function(){a&&a.addControl(new u.a({accessToken:d.a.accessToken,flyTo:{speed:10},marker:!1,mapboxgl:d.a}))}),[a]),Object(j.jsx)("div",{ref:t,style:{position:"absolute",height:"100%",width:"100%"}})},f=n(16),h=n(54),m=n(55),v=function(e){var a=Object(t.useRef)(null),n=e.antialias,c=e.engineOptions,i=e.adaptToDeviceRatio,s=e.sceneOptions,r=e.onRender,o=(e.onSceneReady,Object(m.a)(e,["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"]));return Object(t.useEffect)((function(){if(a.current){var t=new f.c(a.current,n,c,i),o=new f.f(t,s);o.isReady()?e.onSceneReady(o):o.onReadyObservable.addOnce((function(a){return e.onSceneReady(a)})),t.runRenderLoop((function(){"function"===typeof r&&r(o),o.render()}));var d=function(){o.getEngine().resize()};return window&&window.addEventListener("resize",d),function(){o.getEngine().dispose(),window&&window.removeEventListener("resize",d)}}}),[a]),Object(j.jsx)("canvas",Object(h.a)({style:{height:"100%",width:"100%"},ref:a},o))},O=function(e){var a=new f.a("Camera",Math.PI/4,Math.PI/4,4,f.i.Zero(),e);a.setTarget(f.i.Zero());var n=e.getEngine().getRenderingCanvas();a.attachControl(n,!0);var t=new f.d("light",new f.i(0,1,0),e);t.groundColor=new f.b(1,1,1),t.specular=f.b.Black(),b=f.e.CreateBox("box",{width:2,height:1.5,depth:1.5})},w=function(){var e=Object(t.useState)("map"),a=Object(r.a)(e,2),n=a[0],c=a[1],i=Object(t.useState)(!1),s=Object(r.a)(i,2),o=s[0],d=s[1],l=Object(t.useState)(null),u=Object(r.a)(l,2),h=u[0],m=u[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"map"===n?"Select region":"Here's your cuboid!"}),Object(j.jsx)("button",{onClick:function(){if("map"===n){d(!0);var e=h.getCanvas().toDataURL(),a=new f.g("myMaterial");a.diffuseTexture=new f.h(e),b.material=a,setTimeout((function(){d(!1)}),400),setTimeout((function(){c("viewer")}),400)}else c("map")},disabled:o,children:"map"===n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("i",{className:"fa fa-camera"}),"Capture"]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("i",{className:"fa fa-plus"}),"New"]})})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"wrapper mapWrapper ".concat("map"===n?"active":""),children:[Object(j.jsx)(p,{map:h,setMap:m}),Object(j.jsx)("div",{className:"loading-overlay ".concat(o&&"active"),children:o?Object(j.jsx)("i",{className:"fas fa-cog fa-spin"}):Object(j.jsx)("i",{className:"fa fa-check"})})]}),Object(j.jsx)("div",{className:"wrapper viewerWrapper ".concat("viewer"===n?"active":""),children:Object(j.jsx)(v,{antialias:!0,onSceneReady:O,id:"my-canvas"})})]})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},60:function(e,a,n){},61:function(e,a,n){},62:function(e,a,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.0600ed79.chunk.js.map