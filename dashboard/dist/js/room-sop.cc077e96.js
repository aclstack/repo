(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["room-sop"],{"0275":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-sop-index"},[a("div",{staticClass:"mb20"},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/roomSop/create")}}},[t._v("创建规则")])],1),a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{columns:t.table.col,"data-source":t.table.data},scopedSlots:t._u([{key:"switch",fn:function(e){return a("div",{},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",defaultChecked:1===e.state},on:{change:function(a){return t.switchStateClick(e.id,e.state)}}})],1)}},{key:"operating",fn:function(e){return a("div",{staticClass:"btn-group"},[a("a",{on:{click:function(a){return t.showSelectMember(e)}}},[t._v(" 添加群聊 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return t.$router.push({path:"/roomSop/detail",query:{id:e.id}})}}},[t._v(" 详情 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popover",{attrs:{trigger:"click",placement:"bottomRight"}},[a("template",{slot:"content"},[a("div",{staticClass:"divider-btn",on:{click:function(a){return t.$router.push({path:"/roomSop/edit",query:{id:e.id}})}}},[t._v(" 修改 ")]),a("div",{staticClass:"divider-btn",on:{click:function(a){return t.delClick(e.id)}}},[t._v(" 删除 ")])]),a("a",[t._v("编辑")]),a("a-icon",{style:{color:"#1890ff"},attrs:{type:"caret-down"}})],2)],1)}}])})],1),a("selectGroup",{ref:"selectGroup",on:{change:t.selectMemberChange}})],1)},n=[],i=(a("d81d"),a("bde0")),r=a("0e64"),o={data:function(){return{table:{col:[{dataIndex:"name",title:"规则名称"},{dataIndex:"creatorName",title:"创建人"},{dataIndex:"createTime",title:"创建时间"},{scopedSlots:{customRender:"switch"},title:"开关"},{title:"操作",scopedSlots:{customRender:"operating"}}],data:[]}}},mounted:function(){this.getData()},methods:{selectMemberChange:function(t,e){var a=this,s=JSON.stringify(t.map((function(t){return t.id}))),n={id:e.id,rooms:s};Object(i["f"])(n).then((function(t){a.$message.success("操作成功"),a.getData()}))},showSelectMember:function(t){var e=JSON.parse(JSON.stringify(t.rooms));this.$refs.selectGroup.setSelect(e,{id:t.id})},delClick:function(t){var e=this;this.$confirm({title:"提示",content:"是否删除",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){Object(i["b"])({id:t}).then((function(t){e.$message.success("操作成功"),e.getData()}))}})},switchStateClick:function(t,e){var a=this;Object(i["g"])({id:t,state:0===e?1:0}).then((function(t){a.$message.success("操作成功"),a.getData()}))},getData:function(){var t=this;Object(i["e"])().then((function(e){t.table.data=e.data}))}},components:{selectGroup:r["a"]}},c=o,l=(a("567d"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"2d0b55ad",null);e["default"]=u.exports},"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("fb6a"),a("d3b7"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f");var s=a("6b75");function n(t,e){if(t){if("string"===typeof t)return Object(s["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(s["a"])(t,e):void 0}}},"0b5a":function(t,e,a){"use strict";a("d9a2")},"0e64":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select-group"},[s("a-modal",{attrs:{"on-ok":"handleOk",width:526,footer:!1},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[s("template",{slot:"title"},[t._v(" 选择群聊 ")]),s("div",{staticClass:"content"},[s("div",{staticClass:"tips"},[t._v(" 全部群聊（"+t._s(t.groups.length)+"）： ")]),s("div",{staticClass:"groups"},t._l(t.groups,(function(e,n){return t.resetFlag?s("div",{key:n,staticClass:"item"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:a("8522")}})]),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"count"},[t._v(" "+t._s(e.contact_num)+" / "+t._s(e.roomMax)+" ")])]),s("div",[s("div",{staticClass:"select"},[t.resetFlag?s("a-checkbox",{attrs:{checked:e.select},on:{change:function(a){return t.selectChange(a,e)}}}):t._e()],1)])]):t._e()})),0),s("div",{staticClass:"confirm"},[s("a-button",{on:{click:function(e){t.modalShow=!1}}},[t._v("取消")]),s("a-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)])],2)],1)},n=[],i=a("b85c"),r=(a("d3b7"),a("159b"),a("4de4"),a("59e4")),o={data:function(){return{modalShow:!1,loading:!1,groups:[],currentData:{},resetFlag:!0}},methods:{setSelect:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.currentData=a,this.getData((function(a){e.reset(),e.groups.forEach((function(e){t.forEach((function(t){t.wxChatId===e.wxChatId&&(e.select=!0)}))}))})),this.modalShow=!0},selectChange:function(t,e){this.resetFlag=!1,e.select=t.target.checked,this.resetFlag=!0},confirm:function(){this.hide();var t=this.groups.filter((function(t){return!0===t.select}));this.$emit("change",t,this.currentData)},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(r["o"])({roomGroupId:0,page:1,perPage:1e3}).then((function(a){t.groups=a.data,e&&e()}))},show:function(){this.getData(),this.reset(),this.modalShow=!0},hide:function(){this.modalShow=!1},reset:function(){var t,e=Object(i["a"])(this.groups);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.select=!1}}catch(s){e.e(s)}finally{e.f()}}}},c=o,l=(a("2897"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"b583576e",null);e["a"]=u.exports},2843:function(t,e,a){"use strict";a("80c3")},2897:function(t,e,a){"use strict";a("9d3f")},"3a86":function(t,e,a){},4186:function(t,e,a){},"4f73":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-sop-create"},[a("a-card",[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("规则基本信息")]),a("div",{staticClass:"item"},[a("span",{staticClass:"label required"},[t._v("规则名称：")]),a("div",{staticClass:"input"},[a("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("设置推送周期及内容")]),a("div",{staticClass:"desc-text mb16"},[t._v(" 设置规则后将会通过「MoChat提醒」提醒群主发送推送内容 ")]),a("div",{staticClass:"mb16"},[a("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(e){return t.$refs.addRule.show()}}},[t._v("添加规则")])],1),a("div",{staticClass:"rules"},t._l(t.list,(function(e,s){return a("div",{key:s,staticClass:"rule"},[a("div",{staticClass:"header flex"},[a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"bell"}})],1),a("div",{staticClass:"name"},[t._v(" 客户添加企业微信客服后， "),"0"===e.time.type?a("span",[t._v(" "+t._s(e.time.data.first)+"小时"+t._s(e.time.data.last)+"分 ")]):t._e(),"1"===e.time.type?a("span",[t._v(" "+t._s(e.time.data.first)+"天后，当日"+t._s(e.time.data.last)+" ")]):t._e(),t._v(" 提醒发送 ")])]),a("div",{staticClass:"content flex"},[a("div",{staticClass:"warp"},[t._l(e.content,(function(e,s){return a("div",{key:s,staticClass:"text-content"},["text"===e.type?a("div",[t._v(" "+t._s(e.value)+" ")]):t._e(),"image"===e.type?a("div",[a("img",{staticStyle:{"max-width":"80px"},attrs:{src:e.value}})]):t._e()])})),a("div",{staticClass:"count"},[t._v(" 共"+t._s(e.content.length)+"条 ")])],2),a("div",{staticClass:"btn-box mr10 ml16",on:{click:function(e){return t.delContent(s)}}},[a("a-icon",{attrs:{type:"delete"}})],1),a("div",{staticClass:"btn-box",on:{click:function(a){return t.$refs.addRule.editShow(e,s)}}},[a("a-icon",{attrs:{type:"edit"}})],1)])])})),0)]),a("a-button",{attrs:{type:"primary",size:"large"},on:{click:t.addClick}},[t._v(" 创建规则 ")])],1),a("addRule",{ref:"addRule",on:{change:function(e){return t.list.push(e)},edit:t.editContentChange}})],1)},n=[],i=(a("b0c0"),a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("a-modal",{attrs:{"on-ok":"handleOk",width:767,footer:!1,centered:""},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("template",{slot:"title"},[t._v(" 设置推送内容 ")]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[a("span",{staticClass:"bar"}),t._v(" 设置内容名称 ")]),a("div",{staticClass:"block-content"},[a("a-input",{attrs:{placeholder:"设置内容名称，仅内部可见"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[a("span",{staticClass:"bar"}),t._v(" 设置发送时间 ")]),a("div",{staticClass:"block-content"},[a("a-alert",{attrs:{type:"info",message:"当客户添加客服成员时，系统将在侧边栏快捷回复中智能提醒该规则内容",banner:""}}),a("div",{staticClass:"radio flex mb16 mt16"},[a("a-radio",{attrs:{value:"0",checked:"0"===t.sendTimeCurrent},on:{change:t.sendTimeChange}}),t._v(" 加入规则后 "),a("div",{staticClass:"input-number"},[a("a-input-number",{attrs:{size:"small",min:0,max:100},model:{value:t.form.hour.first,callback:function(e){t.$set(t.form.hour,"first",e)},expression:"form.hour.first"}})],1),t._v(" 小时 "),a("div",{staticClass:"input-number"},[a("a-input-number",{attrs:{size:"small",min:1,max:100},model:{value:t.form.hour.last,callback:function(e){t.$set(t.form.hour,"last",e)},expression:"form.hour.last"}})],1),t._v(" 分钟后提醒发送 ")],1),a("div",{staticClass:"radio flex"},[a("a-radio",{attrs:{value:"1",checked:"1"===t.sendTimeCurrent},on:{change:t.sendTimeChange}}),t._v(" 加入规则后 "),a("div",{staticClass:"input"},[a("a-input-number",{attrs:{size:"small",min:1,max:100},model:{value:t.form.day.first,callback:function(e){t.$set(t.form.day,"first",e)},expression:"form.day.first"}})],1),t._v(" 天后，当日 "),a("div",{staticClass:"input"},[a("a-time-picker",{staticStyle:{width:"110px"},attrs:{format:"HH:mm"},model:{value:t.form.day.last,callback:function(e){t.$set(t.form.day,"last",e)},expression:"form.day.last"}})],1),t._v(" 提醒发送 ")],1)],1)]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[a("span",{staticClass:"bar"}),t._v(" 设置发送内容 ")]),a("div",{staticClass:"block-content"},t._l(t.list,(function(e,s){return a("div",{key:s,staticClass:"content-item"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"select"},[t._v(" 消息"+t._s(s+1)+"： "),a("a-radio-group",{attrs:{options:t.contentRadio.list},on:{change:function(t){e.value=""}},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"v.type"}})],1),a("div",{staticClass:"del"},[a("a",{on:{click:function(e){return t.delContent(s)}}},[t._v("删除")])])]),a("div",{staticClass:"input ml50"},["text"===e.type?a("div",{staticClass:"content mt16"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:"请输入文字"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})]):t._e(),"image"===e.type?a("div",{staticClass:"content-img mt16"},[a("m-upload",{attrs:{def:!1,text:"请上传图片"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"v.value"}})],1):t._e()])])})),0),a("a-button",{staticClass:"ml65 mt16",attrs:{type:"primary",ghost:""},on:{click:t.addContent}},[t._v(" 添加发送内容 ")])],1),a("div",{staticClass:"footer"},[a("a-button",{staticClass:"mr16",on:{click:function(e){return t.hide()}}},[t._v(" 取消 ")]),a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.confirm}},[t._v(" 确定 ")])],1)],2)],1)}),r=[],o=a("5530"),c=a("b85c"),l=a("c1df"),u=a.n(l),d={data:function(){return{modalShow:!1,loading:!1,sendTimeCurrent:"0",contentRadio:{value:"text",list:[{label:"文字",value:"text"},{label:"图片",value:"image"}]},list:[{type:"text",value:""}],form:{name:"",hour:{first:"",last:""},day:{first:"",last:""}},type:"add",editIndex:""}},methods:{confirm:function(){var t=JSON.parse(JSON.stringify(this.form));if(!t.name)return this.$message.error("名称未填写"),!1;if("0"===this.sendTimeCurrent&&0==t.hour.first&&0==t.hour.last)return this.$message.error("提醒时间不能同时为0"),!1;if("1"===this.sendTimeCurrent&&(!t.day.first<0||!t.day.last))return this.$message.error("提醒发送时间未填写"),!1;var e,a=Object(c["a"])(this.list);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(!s.value)return this.$message.error("发送内容为空"),!1}}catch(i){a.e(i)}finally{a.f()}var n={name:t.name,time:{type:this.sendTimeCurrent,data:{}},content:this.list};"0"===this.sendTimeCurrent?n.time.data=t.hour:(n.time.data=t.day,n.time.data.last=u()(n.time.data.last).format("HH:mm")),"add"===this.type?this.$emit("change",n):this.$emit("edit",Object(o["a"])(Object(o["a"])({},n),{},{index:this.editIndex})),this.hide()},delContent:function(t){if(1===this.list.length)return this.$message.error("不能删除最后一个"),!1;this.list.splice(t,1)},addContent:function(){this.list.push({type:"text",value:""})},sendTimeChange:function(t){this.sendTimeCurrent=t.target.value},editShow:function(t,e){this.type="edit",this.editIndex=e,this.modalShow=!0,this.sendTimeCurrent=t.time.type,"0"===t.time.type?this.form.hour=t.time.data:this.form.day=t.time.data,this.form.name=t.name,this.list=t.content},show:function(){this.type="add",this.modalShow=!0},hide:function(){this.modalShow=!1,this.form={name:"",hour:{first:"",last:""},day:{first:"",last:""}},this.list=[{type:"text",value:""}],this.sendTimeCurrent="0"}}},m=d,f=(a("e438"),a("2877")),v=Object(f["a"])(m,i,r,!1,null,"d913d49c",null),h=v.exports,p=a("bde0"),b={data:function(){return{name:"",list:[]}},methods:{addClick:function(){var t=this;return this.name?this.list.length?void Object(p["a"])({name:this.name,setting:JSON.stringify(this.list)}).then((function(e){t.$message.success("创建成功"),t.$router.push("/roomSop/index")})):(this.$message.error("未添加规则"),!1):(this.$message.error("名称未填写"),!1)},editContentChange:function(t){this.list[t.index]=t},delContent:function(t){this.list.splice(t,1)}},components:{addRule:h}},C=b,g=(a("7c76"),Object(f["a"])(C,s,n,!1,null,"f1513ae0",null));e["default"]=g.exports},"567d":function(t,e,a){"use strict";a("4186")},"59e4":function(t,e,a){"use strict";a.d(e,"C",(function(){return n})),a.d(e,"k",(function(){return i})),a.d(e,"i",(function(){return r})),a.d(e,"x",(function(){return o})),a.d(e,"D",(function(){return c})),a.d(e,"u",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"y",(function(){return d})),a.d(e,"A",(function(){return m})),a.d(e,"l",(function(){return f})),a.d(e,"t",(function(){return v})),a.d(e,"s",(function(){return h})),a.d(e,"B",(function(){return p})),a.d(e,"e",(function(){return b})),a.d(e,"c",(function(){return C})),a.d(e,"d",(function(){return g})),a.d(e,"z",(function(){return _})),a.d(e,"b",(function(){return y})),a.d(e,"w",(function(){return k})),a.d(e,"q",(function(){return x})),a.d(e,"o",(function(){return w})),a.d(e,"v",(function(){return O})),a.d(e,"a",(function(){return S})),a.d(e,"n",(function(){return j})),a.d(e,"j",(function(){return T})),a.d(e,"p",(function(){return $})),a.d(e,"g",(function(){return R})),a.d(e,"h",(function(){return E})),a.d(e,"m",(function(){return P})),a.d(e,"r",(function(){return I}));var s=a("b775");function n(t){return Object(s["b"])({url:"/workRoomGroup/index",method:"get",params:t})}function i(t){return Object(s["b"])({url:"/workRoomGroup/destroy",method:"delete",data:t})}function r(t){return Object(s["b"])({url:"/workRoomGroup/store",method:"post",data:t})}function o(t){return Object(s["b"])({url:"/workRoomGroup/update",method:"put",data:t})}function c(t){return Object(s["b"])({url:"/workRoom/index",method:"get",params:t})}function l(t){return Object(s["b"])({url:"/workRoom/syn",method:"put",data:t})}function u(t){return Object(s["b"])({url:"/workRoom/batchUpdate",method:"put",data:t})}function d(t){return Object(s["b"])({url:"/workContactRoom/index",method:"get",params:t})}function m(t){return Object(s["b"])({url:"/workEmployeeDepartment/memberIndex",method:"get",params:t})}function f(t){return Object(s["b"])({url:"/workDepartment/index",method:"get",params:t})}function v(t){return Object(s["b"])({url:"/workRoom/statisticsIndex",method:"get",params:t})}function h(t){return Object(s["b"])({url:"/workRoom/statistics",method:"get",params:t})}function p(t){return Object(s["b"])({url:"/workRoomAutoPull/index",method:"get",params:t})}function b(t){return Object(s["b"])({url:"/workRoomAutoPull/update",method:"put",data:t})}function C(t){return Object(s["b"])({url:"/workRoomAutoPull/store",method:"post",data:t})}function g(t){return Object(s["b"])({url:"/workRoomAutoPull/show",method:"get",params:t})}function _(t){return Object(s["b"])({url:"/workContactTagGroup/index",method:"get",params:t})}function y(t){return Object(s["b"])({url:"/workContactTag/store",method:"post",data:t})}function k(t){return Object(s["b"])({url:"/workContactTag/allTag",method:"get",params:t})}function x(t){return Object(s["b"])({url:"/workRoom/roomIndex",method:"get",params:t})}function w(t){return Object(s["b"])({url:"/roomTagPull/roomList",method:"get",params:t})}function O(t){return Object(s["b"])({url:"/roomTagPull/index",method:"get",params:t})}function S(t){return Object(s["b"])({url:"/roomTagPull/store",method:"POST",data:t})}function j(t){return Object(s["b"])({url:"/roomTagPull/show",method:"GET",params:t})}function T(t){return Object(s["b"])({url:"/roomTagPull/destroy",method:"DELETE",data:t})}function $(t){return Object(s["b"])({url:"/roomTagPull/remindSend",method:"GET",params:t})}function R(t){return Object(s["b"])({url:"/roomTagPull/chooseContact",method:"GET",params:t})}function E(t){return Object(s["b"])({url:"/roomTagPull/filterContact",method:"POST",data:t})}function P(t){return Object(s["b"])({url:"/roomTagPull/showContact",method:"GET",params:t})}function I(t){return Object(s["b"])({url:"/contactMessageBatchSend/showRoom",method:"GET",params:t})}},"6b75":function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}a.d(e,"a",(function(){return s}))},"76b8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-sop-create"},[a("a-card",[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("规则基本信息")]),a("div",{staticClass:"item"},[a("span",{staticClass:"label required"},[t._v("规则名称：")]),a("div",{staticClass:"input"},[a("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("设置推送周期及内容")]),a("div",{staticClass:"desc-text mb16"},[t._v(" 设置规则后将会通过「MoChat提醒」提醒员工发送推送内容 ")]),a("div",{staticClass:"mb16"},[a("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(e){return t.$refs.addRule.show()}}},[t._v("添加规则")])],1),a("div",{staticClass:"rules"},t._l(t.list,(function(e,s){return a("div",{key:s,staticClass:"rule"},[a("div",{staticClass:"header flex"},[a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"bell"}})],1),a("div",{staticClass:"name"},[t._v(" 客户添加企业微信客服后， "),"0"===e.time.type?a("span",[t._v(" "+t._s(e.time.data.first)+"小时"+t._s(e.time.data.last)+"分 ")]):t._e(),"1"===e.time.type?a("span",[t._v(" "+t._s(e.time.data.first)+"天后，当日"+t._s(e.time.data.last)+" ")]):t._e(),t._v(" 提醒发送 ")])]),a("div",{staticClass:"content flex"},[a("div",{staticClass:"warp"},[t._l(e.content,(function(e,s){return a("div",{key:s,staticClass:"text-content"},["text"===e.type?a("div",[t._v(" "+t._s(e.value)+" ")]):t._e(),"image"===e.type?a("div",[a("img",{staticStyle:{"max-width":"80px"},attrs:{src:e.value}})]):t._e()])})),a("div",{staticClass:"count"},[t._v(" 共"+t._s(e.content.length)+"条 ")])],2),a("div",{staticClass:"btn-box mr10 ml16",on:{click:function(e){return t.delContent(s)}}},[a("a-icon",{attrs:{type:"delete"}})],1),a("div",{staticClass:"btn-box",on:{click:function(a){return t.$refs.addRule.editShow(e,s)}}},[a("a-icon",{attrs:{type:"edit"}})],1)])])})),0)]),a("a-button",{attrs:{type:"primary",size:"large"},on:{click:t.confirm}},[t._v(" 保存规则 ")])],1),a("addRule",{ref:"addRule",on:{change:function(e){return t.list.push(e)},edit:t.editContentChange}})],1)},n=[],i=(a("b0c0"),a("a434"),a("bd5c")),r=a("bde0"),o={data:function(){return{name:"",list:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;Object(r["d"])({id:this.$route.query.id}).then((function(e){t.name=e.data.name,t.members=e.data.employees,t.list=e.data.setting}))},confirm:function(){var t=this;return this.name?this.list.length?void Object(r["c"])({id:this.$route.query.id,name:this.name,setting:JSON.stringify(this.list)}).then((function(e){t.$message.success("保存成功"),t.$router.push("/roomSop/index")})):(this.$message.error("未添加规则"),!1):(this.$message.error("名称未填写"),!1)},editContentChange:function(t){this.list[t.index]=t},delContent:function(t){this.list.splice(t,1)}},components:{addRule:i["a"]}},c=o,l=(a("0b5a"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"1b807a0d",null);e["default"]=u.exports},"7c76":function(t,e,a){"use strict";a("b9b6")},"80c3":function(t,e,a){},8522:function(t,e,a){t.exports=a.p+"assets/avatar-room-default.67bead38.svg"},"9d3f":function(t,e,a){},b85c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");var s=a("06c5");function n(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Object(s["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(c)throw r}}}}},b9b6:function(t,e,a){},bd5c:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("a-modal",{attrs:{"on-ok":"handleOk",width:767,footer:!1,centered:""},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("template",{slot:"title"},[t._v(" 设置推送内容 ")]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[a("span",{staticClass:"bar"}),t._v(" 设置内容名称 ")]),a("div",{staticClass:"block-content"},[a("a-input",{attrs:{placeholder:"设置内容名称，仅内部可见"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[a("span",{staticClass:"bar"}),t._v(" 设置发送时间 ")]),a("div",{staticClass:"block-content"},[a("a-alert",{attrs:{type:"info",message:"当客户添加客服成员时，系统将在侧边栏快捷回复中智能提醒该规则内容",banner:""}}),a("div",{staticClass:"radio flex mb16 mt16"},[a("a-radio",{attrs:{value:"0",checked:"0"===t.sendTimeCurrent},on:{change:t.sendTimeChange}}),t._v(" 客户添加企业客服后 "),a("div",{staticClass:"input-number"},[a("a-input-number",{attrs:{size:"small",min:0,max:100},model:{value:t.form.hour.first,callback:function(e){t.$set(t.form.hour,"first",e)},expression:"form.hour.first"}})],1),t._v(" 小时 "),a("div",{staticClass:"input-number"},[a("a-input-number",{attrs:{size:"small",min:0,max:100},model:{value:t.form.hour.last,callback:function(e){t.$set(t.form.hour,"last",e)},expression:"form.hour.last"}})],1),t._v(" 分钟后提醒发送 ")],1),a("div",{staticClass:"radio flex"},[a("a-radio",{attrs:{value:"1",checked:"1"===t.sendTimeCurrent},on:{change:t.sendTimeChange}}),t._v(" 客户添加企业客服后 "),a("div",{staticClass:"input"},[a("a-input-number",{attrs:{size:"small",min:0,max:100},model:{value:t.form.day.first,callback:function(e){t.$set(t.form.day,"first",e)},expression:"form.day.first"}})],1),t._v(" 天后，当日 "),a("div",{staticClass:"input"},[a("a-time-picker",{staticStyle:{width:"115px"},attrs:{format:"HH:mm",valueFormat:"HH:mm"},model:{value:t.form.day.last,callback:function(e){t.$set(t.form.day,"last",e)},expression:"form.day.last"}})],1),t._v(" 提醒发送 ")],1)],1)]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[a("span",{staticClass:"bar"}),t._v(" 设置发送内容 ")]),a("div",{staticClass:"block-content"},t._l(t.list,(function(e,s){return a("div",{key:s,staticClass:"content-item"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"select"},[t._v(" 消息"+t._s(s+1)+"： "),a("a-radio-group",{attrs:{options:t.contentRadio.list},on:{change:function(t){e.value=""}},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"v.type"}})],1),a("div",{staticClass:"del"},[a("a",{on:{click:function(e){return t.delContent(s)}}},[t._v("删除")])])]),a("div",{staticClass:"input ml50"},["text"===e.type?a("div",{staticClass:"content mt16"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:"请输入文字"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})]):t._e(),"image"===e.type?a("div",{staticClass:"content-img mt16"},[a("m-upload",{ref:"uploadImg"+s,refInFor:!0,attrs:{def:!1,text:"请上传图片"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"v.value"}})],1):t._e()])])})),0),a("a-button",{staticClass:"ml65 mt16",attrs:{type:"primary",ghost:""},on:{click:t.addContent}},[t._v(" 添加发送内容 ")])],1),a("div",{staticClass:"footer"},[a("a-button",{staticClass:"mr16",on:{click:function(e){return t.hide()}}},[t._v(" 取消 ")]),a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.confirm}},[t._v(" 确定 ")])],1)],2)],1)},n=[],i=a("5530"),r=a("b85c"),o=(a("b0c0"),a("a434"),a("d3b7"),a("159b"),a("c1df"),{data:function(){return{modalShow:!1,loading:!1,sendTimeCurrent:"0",contentRadio:{value:"text",list:[{label:"文字",value:"text"},{label:"图片",value:"image"}]},list:[{type:"text",value:""}],form:{name:"",hour:{first:0,last:0},day:{first:0,last:""}},type:"add",editIndex:""}},methods:{confirm:function(){var t=JSON.parse(JSON.stringify(this.form));if(!t.name)return this.$message.error("名称未填写"),!1;if("0"===this.sendTimeCurrent&&0==t.hour.first&&0==t.hour.last)return this.$message.error("提醒时间不能同时为0"),!1;if("1"===this.sendTimeCurrent&&(t.day.first<0||!t.day.last))return this.$message.error("提醒发送时间未填写"),!1;var e,a=Object(r["a"])(this.list);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(!s.value)return this.$message.error("发送内容为空"),!1}}catch(o){a.e(o)}finally{a.f()}var n={name:t.name,time:{type:this.sendTimeCurrent,data:{}},content:this.list};"0"===this.sendTimeCurrent?n.time.data=t.hour:n.time.data=t.day,"add"===this.type?this.$emit("change",n):this.$emit("edit",Object(i["a"])(Object(i["a"])({},n),{},{index:this.editIndex})),this.hide()},delContent:function(t){var e=this;this.$confirm({title:"提示",content:"是否删除",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){if(1===e.list.length)return e.$message.error("不能删除最后一个"),!1;e.list.splice(t,1)}})},addContent:function(){this.list.push({type:"text",value:""})},sendTimeChange:function(t){this.sendTimeCurrent=t.target.value},editShow:function(t,e){var a=this;this.type="edit",this.editIndex=e,this.modalShow=!0,this.sendTimeCurrent=t.time.type,"0"===t.time.type?this.form.hour=t.time.data:this.form.day=t.time.data,this.form.name=t.name,this.list=t.content,setTimeout((function(){a.list.forEach((function(t,e){"image"==t.type&&a.$refs["uploadImg".concat(e)][0].setUrl(t.value)}))}),200)},show:function(){this.type="add",this.modalShow=!0},hide:function(){this.modalShow=!1,this.form={name:"",hour:{first:"",last:""},day:{first:"",last:""}},this.list=[{type:"text",value:""}],this.sendTimeCurrent="0"}}}),c=o,l=(a("dd7a"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"72037ff2",null);e["a"]=u.exports},bde0:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"a",(function(){return i})),a.d(e,"f",(function(){return r})),a.d(e,"g",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return u}));var s=a("b775");function n(t){return Object(s["b"])({url:"/roomSop/index",method:"GET",params:t})}function i(t){return Object(s["b"])({url:"/roomSop/store",method:"POST",data:t})}function r(t){return Object(s["b"])({url:"/roomSop/setRoom",method:"PUT",data:t})}function o(t){return Object(s["b"])({url:"/roomSop/state",method:"PUT",data:t})}function c(t){return Object(s["b"])({url:"/roomSop/info",method:"GET",params:t})}function l(t){return Object(s["b"])({url:"/roomSop/destroy",method:"DELETE",data:t})}function u(t){return Object(s["b"])({url:"/roomSop/update",method:"PUT",data:t})}},c0fa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room-sop-detail"},[a("div",{staticClass:"card-row flex mb16"},[a("div",{staticClass:"box mr16"},[a("a-card",[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("规则信息")]),a("div",{staticClass:"item"},[a("span",{staticClass:"label required"},[t._v("规则名称：")]),a("div",{staticClass:"input"},[t._v(" "+t._s(t.data.name)+" ")])]),a("div",{staticClass:"item"},[a("span",{staticClass:"label required"},[t._v("创建人：")]),a("div",{staticClass:"input"},[t._v(" "+t._s(t.data.creatorName)+" ")])]),a("div",{staticClass:"item"},[a("span",{staticClass:"label required"},[t._v("创建时间：")]),a("div",{staticClass:"input"},[t._v(" "+t._s(t.data.createTime)+" ")])]),a("div",{staticClass:"item"},[a("span",{staticClass:"label required"},[t._v("执行群聊：")]),a("div",{staticClass:"input"},t._l(t.data.rooms,(function(e,s){return a("a-tag",{key:s},[t._v(" "+t._s(e.name)+" ")])})),1)])])])],1),a("div",{staticClass:"box"},[a("a-card",[a("div",{staticClass:"title"},[t._v("规则信息")]),a("div",{staticClass:"data-panel"},[a("div",{staticClass:"data"},[a("div",{staticClass:"item"},[a("div",{staticClass:"count"},[t._v(" "+t._s(t.data.chatHandleNum)+" ")]),a("div",{staticClass:"desc"},[t._v(" 执行群聊数 ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"count"},[t._v(" "+t._s(t.data.todayTipNum)+" ")]),a("div",{staticClass:"desc"},[t._v(" 今日提醒群聊 ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"count"},[t._v(" "+t._s(t.data.ownerTipNum)+" ")]),a("div",{staticClass:"desc"},[t._v(" 今日提醒群主数 ")])])])])])],1)]),a("a-card",[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("推送内容")]),a("div",{staticClass:"tips flex"},[a("span",[t._v("共 "+t._s(t.data.setting.length)+" 条推送规则")])]),a("div",{staticClass:"rules"},t._l(t.data.setting,(function(e,s){return a("div",{key:s,staticClass:"rule"},[a("div",{staticClass:"header flex"},[a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"bell"}})],1),a("div",{staticClass:"name"},[t._v(" 加入规则 "),"0"===e.time.type?a("span",[t._v(" "+t._s(e.time.data.first)+"小时"+t._s(e.time.data.last)+"分 ")]):t._e(),"1"===e.time.type?a("span",[t._v(" "+t._s(e.time.data.first)+"天后，当日"+t._s(e.time.data.last)+" ")]):t._e(),t._v(" 提醒发送 ")])]),a("div",{staticClass:"content flex"},[a("div",{staticClass:"warp"},[t._l(e.content,(function(e,s){return a("div",{key:s,staticClass:"text-content"},["text"===e.type?a("div",[t._v(" "+t._s(e.value)+" ")]):t._e(),"image"===e.type?a("div",[a("img",{staticStyle:{"max-width":"80px"},attrs:{src:e.value}})]):t._e()])})),a("div",{staticClass:"count"},[t._v(" 共"+t._s(e.content.length)+"条 ")])],2)])])})),0)])]),a("addRule",{ref:"addRule"})],1)},n=[],i=a("bd5c"),r=a("bde0"),o={data:function(){return{data:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;Object(r["d"])({id:this.$route.query.id}).then((function(e){t.data=e.data}))}},components:{addRule:i["a"]}},c=o,l=(a("2843"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"5324ce75",null);e["default"]=u.exports},cc8d:function(t,e,a){},d9a2:function(t,e,a){},dd7a:function(t,e,a){"use strict";a("cc8d")},e438:function(t,e,a){"use strict";a("3a86")}}]);