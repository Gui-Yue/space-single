import{f as i,h as d,i as l,K as n,Q as u,D as p}from"./vue.9201f2e4.js";import{_ as h}from"./del-album.a1cae891.js";import{_ as f}from"./index.0601cc40.js";var c="./assets/eye.33f5846b.svg";const m={name:"IscasInput",emits:["change","update:modelValue"],props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""}},data(){return{clearShow:!1,inputType:this.type,showBorder:!1}},methods:{showPassword(){this.inputType==="text"?this.inputType="password":this.inputType="text"},showClear(){this.clearShow=!0},hideClear(){this.clearShow=!1},change(){this.$emit("change")},inputChange(o){this.$emit("update:modelValue",o.target.value)},clear(){this.$emit("update:modelValue","")}}},g={class:"flex"},w=["value","placeholder","type"];function v(o,e,a,y,s,r){return i(),d("div",g,[l("div",{class:p(["iscasInput y-center",{border:s.showBorder}]),onMouseover:e[5]||(e[5]=(...t)=>r.showClear&&r.showClear(...t)),onMouseout:e[6]||(e[6]=(...t)=>r.hideClear&&r.hideClear(...t))},[l("input",{value:a.modelValue,placeholder:a.placeholder,type:s.inputType,onChange:e[0]||(e[0]=(...t)=>r.change&&r.change(...t)),onInput:e[1]||(e[1]=(...t)=>r.inputChange&&r.inputChange(...t)),onFocus:e[2]||(e[2]=t=>s.showBorder=!0),onBlur:e[3]||(e[3]=t=>s.showBorder=!1),autocomplete:"off"},null,40,w),n(l("img",{src:h,class:"ml-5 pointer",onClick:e[4]||(e[4]=(...t)=>r.clear&&r.clear(...t))},null,512),[[u,s.clearShow&&a.modelValue.length>0]])],34),n(l("img",{src:c,class:"ml-5 pointer",onClick:e[7]||(e[7]=(...t)=>r.showPassword&&r.showPassword(...t))},null,512),[[u,a.type==="password"]])])}var _=f(m,[["render",v],["__scopeId","data-v-957440e6"]]);export{_ as I};
