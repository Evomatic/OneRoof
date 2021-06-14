(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f39005e2"],{4228:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto mt-5 orange lighten-5",attrs:{elevation:"0","max-width":"95%"}},[i("v-card",{staticClass:"d-flex justify-center orange lighten-5",attrs:{elevation:"0"}},[i("v-card-title",{staticClass:"font-weight-bold"},[t._v(" Modules Settings ")])],1),t._l(t.modules,(function(e,n){return i("v-list",{key:e.id,attrs:{elevation:"0"}},["Chores"===e.title?i("v-list-item",{on:{click:function(e){return t.updateModule(n)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":e.purchased,color:"light-green darken-4"}})],1),"Chores"===e.title?i("v-list-item-title",[t._v(" "+t._s(e.title)+" "),i("span",{staticClass:"limited-time"},[t._v("Free for a limited time!")])]):t._e()],1):i("v-list-item",{attrs:{disabled:""},on:{click:function(e){return t.updateModule(n)}}},[i("v-list-item-title",[t._v(" "+t._s(e.title)+" "),i("span",{staticClass:"coming-soon"},[t._v("Coming Soon!")])])],1)],1)})),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mt-5",attrs:{color:"orange lighten-1",dark:""},on:{click:t.submitUpdate}},[t._v(" SUBMIT ")])],1)],2)},a=[],s=i("1da1"),r=(i("96cf"),{name:"Modules",data:function(){return{moduleState:this.$store.state.currentHouseModules}},methods:{updateModule:function(t){this.moduleState[t].purchased=!this.moduleState[t].purchased},submitUpdate:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={house_key:t.$store.state.user.house_keys[0],modules:t.moduleState},e.next=3,t.$store.dispatch("updateModules",i);case 3:t.$router.push("/yourhome");case 4:case"end":return e.stop()}}),e)})))()}},computed:{modules:function(){var t={},e=this.$store.state.currentHouseModules;for(var i in e)e[i].purchasable&&(t[i]=e[i]);return t}}}),o=r,u=(i("c7af"),i("2877")),l=i("6544"),c=i.n(l),h=i("8336"),d=i("b0af"),p=i("99d9"),m=i("ac7c"),f=i("8860"),v=i("da13"),b=i("1800"),g=i("5d23"),C=Object(u["a"])(o,n,a,!1,null,"11fcf063",null);e["default"]=C.exports;c()(C,{VBtn:h["a"],VCard:d["a"],VCardTitle:p["d"],VCheckbox:m["a"],VList:f["a"],VListItem:v["a"],VListItemAction:b["a"],VListItemTitle:g["c"]})},5477:function(t,e,i){},"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var n=i("2b0e"),a=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["h"]}}})},ac7c:function(t,e,i){"use strict";var n=i("15fd"),a=i("5530"),s=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),r=i("c37a"),o=(i("4de4"),i("5607")),u=i("2b0e"),l=u["a"].extend({name:"rippleable",directives:{ripple:o["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),c=i("8547"),h=i("58df");function d(t){t.preventDefault()}var p=Object(h["a"])(r["a"],l,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=r["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});e["a"]=p.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},c7af:function(t,e,i){"use strict";i("5477")},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-f39005e2.0b3af75d.js.map