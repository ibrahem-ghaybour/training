"use strict";(self["webpackChunkproject_new"]=self["webpackChunkproject_new"]||[]).push([[676],{8898:function(e,s){s.Z={KEY_API:"39494442-15ddf43d3d3b42079237eb6d3",URL_API:"https://pixabay.com/api/",async getListImages({trend:e,page:s=1}){const a=`${this.URL_API}?key=${this.KEY_API}&q=${e}&page=${s}`,t=await fetch(a),o=await t.json();return o},async getDetailsimageObject(e){const s=`${this.URL_API}?key=${this.KEY_API}&id=${e}`,a=await fetch(s),t=await a.json();return t}}},9715:function(e,s,a){a.d(s,{Z:function(){return h}});var t=a(3396),o=a(7139),r=a(9242);const i={class:"btn-group p-1 align-items-center",role:"group","aria-label":"Basic radio toggle button group",style:{"background-color":"fixed"}},l=["value","id"],n=["for"],c=["value","id"],d=["for"];function p(e,s,a,p,m,u){return(0,t.wg)(),(0,t.iD)("div",i,[a.classIconCheckedLabel?((0,t.wg)(),(0,t.iD)("span",{key:0,class:(0,o.C_)({active:!u.mode,offActive:u.mode})},null,2)):(0,t.kq)("",!0),(0,t.wy)((0,t._)("input",{type:"radio",class:"btn-check","onUpdate:modelValue":s[0]||(s[0]=e=>m.type=e),value:a.checkedLabel,name:"btnradio",id:a.checkedLabel.trim()},null,8,l),[[r.G2,m.type]]),(0,t._)("label",{onClick:s[1]||(s[1]=e=>m.clickActive=!0),class:(0,o.C_)(["",{"btn btn-outline-primary ":!a.classIconCheckedLabel,labelChecked:a.classIconCheckedLabel}]),style:{"font-size":"13px"},for:a.checkedLabel.trim()},[(0,t.Uk)((0,o.zw)(a.checkedLabel),1),a.classIconCheckedLabel?((0,t.wg)(),(0,t.iD)("i",{key:0,class:(0,o.C_)(a.classIconCheckedLabel)},null,2)):(0,t.kq)("",!0)],10,n),(0,t.wy)((0,t._)("input",{type:"radio",class:"btn-check","onUpdate:modelValue":s[2]||(s[2]=e=>m.type=e),value:a.labelTwo.trim(),name:"btnradio",id:a.labelTwo},null,8,c),[[r.G2,m.type]]),(0,t._)("label",{onClick:s[3]||(s[3]=e=>m.clickActive=!1),class:(0,o.C_)(["",{"btn btn-outline-primary border":!a.classIconCheckedLabel,labelTwo:a.classIconCheckedLabel}]),style:{"font-size":"13px"},for:a.labelTwo.trim()},[(0,t.Uk)((0,o.zw)(a.labelTwo)+" ",1),a.classIconlabelTwo?((0,t.wg)(),(0,t.iD)("i",{key:0,class:(0,o.C_)(a.classIconlabelTwo)},null,2)):(0,t.kq)("",!0)],10,d)])}var m={name:"btnGroup",props:{checkedLabel:String,classIconCheckedLabel:String,labelTwo:String,classIconlabelTwo:String},data(){return{type:"",clickActive:!0}},watch:{type:{handler(){this.$emit("sendType",this.type.trim())}}},computed:{mode(){return"Dark mode"==this.$store.state.modeSite}}},u=a(89);const f=(0,u.Z)(m,[["render",p],["__scopeId","data-v-3b99ab54"]]);var h=f},7676:function(e,s,a){a.r(s),a.d(s,{default:function(){return K}});var t=a(3396),o=a(7139),r=a(9242);const i=e=>((0,t.dD)("data-v-52210e00"),e=e(),(0,t.Cn)(),e),l={key:0,style:{"font-size":"40px",position:"absolute",top:"0%",width:"100%","text-align":"center",transform:"translateX(-23px)"}},n=i((()=>(0,t._)("i",{class:"fa-solid fa-crow fa-flip"},null,-1))),c=[n],d=i((()=>(0,t._)("span",{class:"w-100 text-center mb-2",style:{"font-size":"50px"}},[(0,t._)("i",{class:"fa-solid fa-user-astronaut fa-shake",style:{color:"#517bc2"}})],-1))),p={class:"form-floating mb-3"},m=i((()=>(0,t._)("label",{for:"floatingInput"},"Email address",-1))),u={class:"form-floating"},f=i((()=>(0,t._)("label",{for:"floatingPassword"},"Password",-1))),h=i((()=>(0,t._)("button",{class:"btn text-white px-3 mt-3",style:{background:"rgba(185, 13, 253, 0.67)"}}," Next ",-1))),b={class:"mb-3"},w=i((()=>(0,t._)("label",{for:"formGroupExampleInput",class:"form-label"},"First name",-1))),g={class:"mb-3"},y=i((()=>(0,t._)("label",{for:"formGroupExampleInput2",class:"form-label"},"Last name",-1))),k=i((()=>(0,t._)("button",{class:"btn text-white px-3 mt-3",style:{background:"rgba(185, 13, 253, 0.67)"}}," Next ",-1))),v={key:1,class:"p-3 rounded",style:{position:"absolute",top:"20%",color:"rgba(254, 60, 60, 0.855)","background-color":"rgb(255, 162, 162)"}},_=i((()=>(0,t._)("i",{class:"fa-solid fa-triangle-exclamation ms-2",style:{color:"#ff5252"}},null,-1))),x=i((()=>(0,t._)("span",{style:{"font-size":"100px"}},[(0,t._)("i",{class:"fa-regular fa-circle-check",style:{color:"#045367"}})],-1))),C=[x],I={style:{position:"absolute",top:"85%",color:"wheat"}},U=i((()=>(0,t._)("i",{class:"fa-solid fa-1"},null,-1))),L=[U],T=i((()=>(0,t._)("i",{class:"fa-solid fa-2"},null,-1))),D=[T],$={key:2,class:"p-3 rounded mx-2",style:{"background-color":"rgb(38, 62, 147)"}},P=i((()=>(0,t._)("i",{class:"fa-solid fa-3"},null,-1))),q=[P],A={key:2,class:"spider position-absolute d-flex justify-content-center",style:{"background-color":"rgb(221, 221, 221)",height:"207px",top:"60px",width:"2px"}},z=i((()=>(0,t._)("i",{class:"fa-solid fa-spider",style:{color:"#470000","font-size":"35px"}},null,-1))),E=[z],N={key:3},j=(0,t.uE)('<span class="bird1 brids position-absolute" style="font-size:30px;" data-v-52210e00><i class="fa-solid fa-dove fa-shake" data-v-52210e00></i></span><span class="bird2 brids position-absolute" style="font-size:30px;" data-v-52210e00><i class="fa-solid fa-dove fa-shake" data-v-52210e00></i></span><span class="bird3 brids position-absolute" style="font-size:30px;" data-v-52210e00><i class="fa-solid fa-dove fa-shake" data-v-52210e00></i></span><span class="bird4 brids position-absolute" style="font-size:30px;" data-v-52210e00><i class="fa-solid fa-dove fa-shake" data-v-52210e00></i></span>',4),G=[j];function S(e,s,a,i,n,x){const U=(0,t.up)("BtnGroup");return(0,t.wg)(),(0,t.iD)("form",{class:(0,o.C_)(["container-fluid pt-5 w-100 vh-100 d-flex aling-items-center justify-content-center align-items-center",{formDark:x.mode,formLight:!x.mode}]),style:{overflow:"hidden",position:"relative"},onSubmit:s[7]||(s[7]=(0,r.iM)(((...e)=>x.saveEmailAndPasswordUser&&x.saveEmailAndPasswordUser(...e)),["prevent"]))},[1==n.form?((0,t.wg)(),(0,t.j4)(U,{key:0,class:"position-absolute",style:{top:"20px"},checkedLabel:"login",labelTwo:"newUser",onSendType:x.receiveType},null,8,["onSendType"])):(0,t.kq)("",!0),(0,t._)("div",{class:(0,o.C_)([{form1:1!=n.form},"form m-auto p-4 rounded d-flex flex-column justify-content-center"]),style:{}},[x.mode?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",l,c)),d,(0,t._)("div",p,[(0,t.wy)((0,t._)("input",{type:"email",class:(0,o.C_)(["form-control",{error:!x.errorPassword&&n.massage}]),id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=e=>n.email=e),required:""},null,2),[[r.nr,n.email]]),m]),(0,t._)("div",u,[(0,t.wy)((0,t._)("input",{type:"password",class:(0,o.C_)(["form-control",{error:x.errorPassword}]),id:"floatingPassword","onUpdate:modelValue":s[1]||(s[1]=e=>n.password=e),placeholder:"password",required:""},null,2),[[r.nr,n.password]]),f]),h],2),(0,t._)("div",{class:(0,o.C_)([{form1:2!=n.form},"form m-auto p-4 rounded d-flex flex-column justify-content-center"])},[(0,t._)("div",b,[w,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formGroupExampleInput",placeholder:"First name","onUpdate:modelValue":s[2]||(s[2]=e=>n.fName=e)},null,512),[[r.nr,n.fName]])]),(0,t._)("div",g,[y,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formGroupExampleInput2",placeholder:"Last name","onUpdate:modelValue":s[3]||(s[3]=e=>n.lName=e)},null,512),[[r.nr,n.lName]])]),(0,t._)("input",{type:"file",class:"form-control",id:"validationCustom05",accept:"image/jpeg",onChange:s[4]||(s[4]=(...e)=>x.previewFiles&&x.previewFiles(...e)),placeholder:"your picture"},null,32),k],2),n.massage?((0,t.wg)(),(0,t.iD)("p",v,[(0,t.Uk)((0,o.zw)(n.massage),1),_])):(0,t.kq)("",!0),(0,t._)("div",{class:(0,o.C_)({form1:3!=n.form})},C,2),(0,t._)("div",I,[1==n.form||2==n.form||3==n.form?((0,t.wg)(),(0,t.iD)("span",{key:0,onClick:s[5]||(s[5]=e=>n.form=1),class:"p-3 rounded mx-2",style:{"background-color":"rgba(38, 62, 147, 0.44)",cursor:"pointer"}},L)):(0,t.kq)("",!0),(0,t.Uk)("--- "),2==n.form||3==n.form?((0,t.wg)(),(0,t.iD)("span",{key:1,onClick:s[6]||(s[6]=e=>n.form=2),class:"p-3 rounded mx-2",style:{"background-color":"rgba(38, 62, 147, 0.723)",cursor:"pointer"}},D)):(0,t.kq)("",!0),(0,t.Uk)("--- "),3==n.form?((0,t.wg)(),(0,t.iD)("span",$,q)):(0,t.kq)("",!0)]),x.mode&&1==n.form?((0,t.wg)(),(0,t.iD)("span",A,E)):(0,t.kq)("",!0),x.mode?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",N,G))],34)}a(7658);var F=a(9715),V=a(8898),Z={name:"loginMain",data(){return{email:"",password:"",fName:"",lName:"",form:1,type:"",massage:""}},methods:{receiveType(e){this.type=e},saveEmailAndPasswordUser(){"newUser"==this.type?this.newUser():this.checkUser()},newUser(){this.massage="";let e=this.users.findIndex((e=>e.email==this.email));-1==e?1==this.form&&this.email&&this.password?this.form+=1:2==this.form&&this.fName&&this.lName&&(this.user.email=this.email,this.user.password=this.password,this.user.name=`${this.fName.trim()}-${this.lName.trim()}`,this.users.push(this.user),this.form+=1):this.massage="The email already exists. It is not possible to register another account"},checkUser(){for(let e=0;e<this.users.length;e++){if(this.users[e].email==this.email.trim()&&this.users[e].password==this.password)return this.massage="",this.$store.state.indexLoginUser=e,void(this.form=3);if(this.users[e].email==this.email.trim()&&this.users[e].password!=this.password)return void(this.massage="The password is incorrect");if(this.users[e].email!=this.email.trim()&&this.users[e].password==this.password)return console.log(`${this.password} // ${this.users[e].password}`),void(this.massage="Email not found");this.users[e].email!=this.email.trim()&&this.users[e].password!=this.password&&(this.massage="not found")}},previewFiles(e){const s=e.target.files[0],a=new FileReader;s&&(a.readAsDataURL(s),a.onload=e=>{this.user.imgUser=e.target.result})},async apidata(){await V.Z.getListImages({trend:"iphone",page:1})}},computed:{user(){return this.$store.state.user},users(){return this.$store.state.users},errorPassword(){return"The password is incorrect"==this.massage},mode(){return"Dark mode"==this.$store.state.modeSite}},watch:{form:{handler(){3==this.form&&setTimeout((()=>this.$router.push("/")),1e3)}}},components:{BtnGroup:F.Z},mounted(){this.apidata()}},R=a(89);const B=(0,R.Z)(Z,[["render",S],["__scopeId","data-v-52210e00"]]);var K=B}}]);
//# sourceMappingURL=676.78fc2eaa.js.map