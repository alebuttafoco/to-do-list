(function(t){function s(s){for(var a,n,i=s[0],c=s[1],l=s[2],d=0,k=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&k.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(k.length)k.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(a=!1)}a&&(o.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},r={app:0},o=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"34f3":function(t,s,e){"use strict";e("dea5")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("e792"),e("0cdd");var a=e("2b0e"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("header",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[e("div",{staticClass:"container-lg"},[t._m(0),e("div",{staticClass:"navbar-nav"},[e("router-link",{staticClass:"nav-link",class:"/"==t.$route.path?"border-bottom border-2 text-white":"",attrs:{to:"/"}},[t._v("Attive")]),e("router-link",{staticClass:"nav-link",class:"/completed"==t.$route.path?"border-bottom border-2 text-white":"",attrs:{to:"/completed"}},[t._v("Completate")]),e("router-link",{staticClass:"nav-link",class:"/trash"==t.$route.path?"border-bottom border-2 text-white":"",attrs:{to:"/trash"}},[t._v("Cestino")])],1)])])]),e("main",{staticClass:"container-lg p-0"},[e("router-view")],1)])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("i",{staticClass:"fas fa-clipboard-list"})])}],n={},i=n,c=(e("5c0b"),e("2877")),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,d=e("8c4f"),k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks_box p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 bg-white shadow rounded"},[e("div",{staticClass:"add_task d-flex mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"flex-grow-1 text-center border-bottom border-3",class:t.checkTask()?"border-success":"border-danger",attrs:{type:"text",placeholder:"Aggiungi una nuova task 👇"},domProps:{value:t.task},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.createTask()},input:function(s){s.target.composing||(t.task=s.target.value)}}}),e("i",{staticClass:"fas fa-save my_btn text-white",class:t.checkTask()?"bg-success":"bg-danger",on:{click:function(s){return t.createTask()}}})]),""==t.tasks?e("p",{staticClass:"alert alert-info text-center mt-5"},[t._v("Non ci sono tasks da visualizzare, inizia scrivendo qualcosa "),e("i",{staticClass:"fas fa-keyboard"})]):t._l(t.tasks,(function(s,a){return e("div",{key:s.id,staticClass:"tasks bg-light my-2 d-flex align-items-center"},[e("div",{staticClass:"left d-flex align-items-center flex-grow-1"},[e("div",{staticClass:"actions"},[e("i",{staticClass:"fas fa-check btn-success my_btn",on:{click:function(e){return t.completeTask(s,a)}}})]),e("div",{staticClass:"text d-flex align-items-center flex-grow-1"},[e("div",{staticClass:"px-2"},[t._v(t._s(s)+" ")])])]),e("div",{staticClass:"right d-flex"},[e("i",{staticClass:"fas fa-trash btn-danger my_btn",on:{click:function(e){return t.removeTask(s,a)}}})])])}))],2)},f=[],h=(e("a434"),{data:function(){return{task:"",tasks:[],completed_tasks:[],trash_tasks:[],selectedTask:null}},methods:{checkTask:function(){return this.task.length>0&&this.task.length<30},createTask:function(){this.task.length>0&&this.task.length<30&&(this.tasks.unshift(this.task),this.task="",this.saveTasks())},saveTasks:function(){var t=JSON.stringify(this.tasks);localStorage.setItem("activeTasks",t)},removeTask:function(t,s){this.trash_tasks.unshift(t);var e=JSON.stringify(this.trash_tasks);localStorage.setItem("trashTasks",e),this.tasks.splice(s,1),this.saveTasks()},completeTask:function(t,s){this.completed_tasks.unshift(t);var e=JSON.stringify(this.completed_tasks);localStorage.setItem("completedTasks",e),this.tasks.splice(s,1),this.saveTasks()},loadTasks:function(){if(localStorage.getItem("activeTasks"))try{this.tasks=JSON.parse(localStorage.getItem("activeTasks"))}catch(t){localStorage.removeItem("activeTasks")}if(localStorage.getItem("completedTasks"))try{this.completed_tasks=JSON.parse(localStorage.getItem("completedTasks"))}catch(t){localStorage.removeItem("completedTasks")}if(localStorage.getItem("trashTasks"))try{this.trash_tasks=JSON.parse(localStorage.getItem("trashTasks"))}catch(t){localStorage.removeItem("trashTasks")}}},mounted:function(){this.loadTasks()}}),m=h,p=(e("d259"),Object(c["a"])(m,k,f,!1,null,null,null)),v=p.exports,g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks_box p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 bg-white shadow rounded"},[e("h4",{staticClass:"border-start border-4 border-success ps-2 my-1"},[t._v("TASKS COMPLETATE")]),e("div",{staticClass:"my_btn btn-light w-100 border mb-2",on:{click:function(s){return t.clearCompletedTasks()}}},[t._v(" Svuota Lista ")]),""==t.completed_tasks?e("div",{staticClass:"alert alert-info text-center "},[t._v("Non ci sono tasks completate 💤")]):t._e(),t._l(t.completed_tasks,(function(s){return e("div",{key:s.id,staticClass:"task my-1 ps-2 d-flex justify-content-between align-items-center"},[e("span",[t._v(t._s(s))]),e("i",{staticClass:"fas fa-undo-alt my_btn bg-info text-white",on:{click:function(e){return t.restoreTask(s,t.index)}}})])}))],2)},b=[],T={data:function(){return{completed_tasks:[],tasks:[]}},methods:{restoreTask:function(t,s){this.tasks.unshift(t),this.saveTasks(),this.completed_tasks.splice(s,1),this.saveCompletedTasks()},clearCompletedTasks:function(){this.completed_tasks=[],this.saveCompletedTasks()},saveCompletedTasks:function(){var t=JSON.stringify(this.completed_tasks);localStorage.setItem("completedTasks",t)},saveTasks:function(){var t=JSON.stringify(this.tasks);localStorage.setItem("activeTasks",t)},loadTasks:function(){if(localStorage.getItem("activeTasks"))try{this.tasks=JSON.parse(localStorage.getItem("activeTasks"))}catch(t){localStorage.removeItem("activeTasks")}if(localStorage.getItem("completedTasks"))try{this.completed_tasks=JSON.parse(localStorage.getItem("completedTasks"))}catch(t){localStorage.removeItem("completedTasks")}if(localStorage.getItem("trashTasks"))try{this.trash_tasks=JSON.parse(localStorage.getItem("trashTasks"))}catch(t){localStorage.removeItem("trashTasks")}}},mounted:function(){this.loadTasks()}},_=T,S=(e("f184"),Object(c["a"])(_,g,b,!1,null,"0d379f14",null)),y=S.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks_box p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 bg-white shadow rounded"},[e("h4",{staticClass:"border-start border-4 border-danger ps-2 my-1"},[t._v("TASKS ELIMINATE")]),e("div",{staticClass:"my_btn btn-light w-100 border mb-2",on:{click:function(s){return t.clearTrash()}}},[t._v(" Svuota Lista ")]),""==t.trash_tasks?e("div",{staticClass:"alert alert-info text-center "},[t._v("Il cestino è vuoto 🛒")]):t._l(t.trash_tasks,(function(s,a){return e("div",{key:s.id,staticClass:"task my-1 ps-2 d-flex justify-content-between align-items-center"},[e("span",[t._v(t._s(s)+" ")]),e("i",{staticClass:"fas fa-undo-alt my_btn bg-info text-white",on:{click:function(e){return t.restoreTask(s,a)}}})])}))],2)},x=[],I={data:function(){return{trash_tasks:[],tasks:[]}},methods:{restoreTask:function(t,s){this.tasks.unshift(t),this.saveTasks(),this.trash_tasks.splice(s,1),this.saveTrash()},clearTrash:function(){this.trash_tasks=[],this.saveTrash()},saveTrash:function(){var t=JSON.stringify(this.trash_tasks);localStorage.setItem("trashTasks",t)},saveTasks:function(){var t=JSON.stringify(this.tasks);localStorage.setItem("activeTasks",t)},loadTasks:function(){if(localStorage.getItem("activeTasks"))try{this.tasks=JSON.parse(localStorage.getItem("activeTasks"))}catch(t){localStorage.removeItem("activeTasks")}if(localStorage.getItem("completedTasks"))try{this.completed_tasks=JSON.parse(localStorage.getItem("completedTasks"))}catch(t){localStorage.removeItem("completedTasks")}if(localStorage.getItem("trashTasks"))try{this.trash_tasks=JSON.parse(localStorage.getItem("trashTasks"))}catch(t){localStorage.removeItem("trashTasks")}}},mounted:function(){this.loadTasks()}},w=I,O=(e("34f3"),Object(c["a"])(w,C,x,!1,null,"78a2a6e4",null)),N=O.exports;a["a"].use(d["a"]);var J=[{path:"/",name:"Active",component:v},{path:"/completed",name:"Completed",component:y},{path:"/trash",name:"Trash",component:N}],j=new d["a"]({mode:"history",base:"/",routes:J}),E=j;a["a"].config.productionTip=!1,new a["a"]({router:E,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";e("9c0c")},"9c0c":function(t,s,e){},a056:function(t,s,e){},d259:function(t,s,e){"use strict";e("fac2")},dea5:function(t,s,e){},f184:function(t,s,e){"use strict";e("a056")},fac2:function(t,s,e){}});
//# sourceMappingURL=app.2eedd61b.js.map