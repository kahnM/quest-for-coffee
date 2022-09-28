(function(){"use strict";class B{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const P="https://unpkg.com/@workadventure/scripting-api-extra@1.3.3/dist";class ee{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new B(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function _(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(P+"/configuration.html"+e)}async function te(t,e){const n=await WA.room.getTiledMap(),r=new Map;return j(n.layers,r,t,e),r}function j(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(s.name))continue;e.set(s.name,new ee(s))}}else o.type==="group"&&j(o.layers,e,n,r)}let x;async function L(){return x===void 0&&(x=ne()),x}async function ne(){return re(await WA.room.getTiledMap())}function re(t){const e=new Map;return N(t.layers,"",e),e}function N(t,e,n){for(const r of t)r.type==="group"?N(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function oe(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let u=0;u<t.width;u++)s[u+i*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function q(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const i=oe(s);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var se=Object.prototype.toString,S=Array.isArray||function(e){return se.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function ie(t){return S(t)?"array":typeof t}function I(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function K(t,e){return t!=null&&typeof t=="object"&&e in t}function ae(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ue=RegExp.prototype.test;function le(t,e){return ue.call(t,e)}var ce=/\S/;function fe(t){return!le(ce,t)}var pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function he(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return pe[n]})}var de=/\s*/,ge=/\s+/,F=/\s*=/,ye=/\s*\}/,me=/#|\^|\/|>|\{|&|=|!/;function we(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],i=!1,u=!1,a="",c=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var y,w,p;function A(b){if(typeof b=="string"&&(b=b.split(ge,2)),!S(b)||b.length!==2)throw new Error("Invalid tags: "+b);y=new RegExp(I(b[0])+"\\s*"),w=new RegExp("\\s*"+I(b[1])),p=new RegExp("\\s*"+I("}"+b[1]))}A(e||m.tags);for(var l=new M(t),f,d,v,T,R,W;!l.eos();){if(f=l.pos,v=l.scanUntil(y),v)for(var U=0,Xe=v.length;U<Xe;++U)T=v.charAt(U),fe(T)?(s.push(o.length),a+=T):(u=!0,n=!0,a+=" "),o.push(["text",T,f,f+1]),f+=1,T===`
`&&(h(),a="",c=0,n=!1);if(!l.scan(y))break;if(i=!0,d=l.scan(me)||"name",l.scan(de),d==="="?(v=l.scanUntil(F),l.scan(F),l.scanUntil(w)):d==="{"?(v=l.scanUntil(p),l.scan(ye),l.scanUntil(w),d="&"):v=l.scanUntil(w),!l.scan(w))throw new Error("Unclosed tag at "+l.pos);if(d==">"?R=[d,v,f,l.pos,a,c,n]:R=[d,v,f,l.pos],c++,o.push(R),d==="#"||d==="^")r.push(R);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+v+'" at '+f);if(W[1]!==v)throw new Error('Unclosed section "'+W[1]+'" at '+f)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(v)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return be(ve(o))}function ve(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function be(t){for(var e=[],n=e,r=[],o,s,i=0,u=t.length;i<u;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""},M.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},M.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=K(s,i[u])||ae(s,i[u])),s=s[i[u++]];else s=o.view[e],a=K(o.view,e);if(a){r=s;break}o=o.parent}n[e]=r}return G(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||m.tags).join(":"),s=typeof r<"u",i=s?r.get(o):void 0;return i==null&&(i=we(e,n),s&&r.set(o,i)),i},g.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=n instanceof C?n:new C(n,void 0);return this.renderTokens(i,u,r,e,o)},g.prototype.renderTokens=function(e,n,r,o,s){for(var i="",u,a,c,h=0,y=e.length;h<y;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,n,r,o,s):a==="^"?c=this.renderInverted(u,n,r,o,s):a===">"?c=this.renderPartial(u,n,r,s):a==="&"?c=this.unescapedValue(u,n):a==="name"?c=this.escapedValue(u,n,s):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(i+=c);return i},g.prototype.renderSection=function(e,n,r,o,s){var i=this,u="",a=n.lookup(e[1]);function c(w){return i.render(w,n,r,s)}if(!!a){if(S(a))for(var h=0,y=a.length;h<y;++h)u+=this.renderTokens(e[4],n.push(a[h]),r,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],n.push(a),r,o,s);else if(G(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(n.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],n,r,o,s);return u}},g.prototype.renderInverted=function(e,n,r,o,s){var i=n.lookup(e[1]);if(!i||S(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,s)},g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)},g.prototype.renderPartial=function(e,n,r,o){if(!!r){var s=this.getConfigTags(o),i=G(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],a=e[5],c=e[4],h=i;a==0&&c&&(h=this.indentPartial(i,c,u));var y=this.parse(h,s);return this.renderTokens(y,n,r,h,o)}}},g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r},g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||m.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===m.escape?String(s):o(s)},g.prototype.rawValue=function(e){return e[1]},g.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0},g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new g;m.clearCache=function(){return E.clearCache()},m.parse=function(e,n){return E.parse(e,n)},m.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ie(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,n,r,o)},m.escape=he,m.Scanner=M,m.Context=C,m.Writer=g;class Ae{constructor(e,n){this.template=e,this.state=n,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=m.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function We(){var t;const e=await L();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Ae(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();$(n,s.name,u),i.onChange(a=>{$(n,s.name,a)})}}}function $(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let V,D=0,O=0;function Y(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Se(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=H(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Ce(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=H(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Z(t){return t.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function H(t){const e=Z(t),n=q(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(D-r,2)+Math.pow(O-o,2))}function Be(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Se(t):Ce(t),Y(t)}),Y(t)}function Le(t,e,n,r){const o=t.name;let s,i,u=!1;const a=n.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function y(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,w()}})}function w(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function p(l){const f=q(Z(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:f.right*32,y:f.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(n.getString("code")||n.getString("codeVariable"))){p(o);return}!c||(WA.state[e.name]?y():w())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),i&&WA.state[e.name]===!0&&A(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&w())})}function Me(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-D,2)+Math.pow(t.y-O,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ee(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Me(t)})}function Te(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Pe(t){t=t!=null?t:P;const e=await te();V=await L();for(const n of e.values())n.properties.get("door")&&Be(n),n.properties.get("bell")&&Ee(n);for(const n of V.values()){const r=new B(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Le(n,i,r,t)}const s=r.getString("bellVariable");s&&Te(s,r,n.name)}WA.player.onPlayerMove(n=>{D=n.x,O=n.y})}function ke(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),i=t.getString("tag");Re(n,e,r,o,s,i)}}function Re(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function xe(){const t=await L();for(const e of t.values()){const n=new B(e.properties);ke(n,e.name)}}let J;async function Ge(t){const e=await WA.room.getTiledMap();t=t!=null?t:P,J=await L();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new B(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of J.values()){const i=new B(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&Ie(u.split(","),s.name,i)}}}function Ie(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=n.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>_(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=n.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():_(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Ve=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],De=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Oe(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){Ue(n);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const A=i.x+a.x+a.width>u.x+u.width,l=i.x+a.x<u.x,f=i.y+a.y+a.height>u.y+u.height,d=i.y+a.y<u.y;A?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),f?a.y=-a.height:d&&(a.y=16)},h=p=>{a.width=p.width,a.height=p.height,a.scale=p.scale},y=p=>{const l=(n?Ve:De).filter(f=>{if(f.lowerBound&&f.uppperBound)return f.lowerBound<p&&p<=f.uppperBound;if(f.lowerBound&&!f.uppperBound)return f.lowerBound<p;if(!f.lowerBound&&f.uppperBound)return p<=f.uppperBound;throw new Error(`Zoom level of: ${p} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},w=()=>{if(u===void 0)return;const p=u.zoom;y(p),c()};WA.player.onPlayerMove(p=>{i=p,w()}),WA.camera.onCameraUpdate().subscribe(p=>{u=p,w()}),WA.player.state.tutorialDone=!0}}function Ue(t){let e={allow:"",name:"tutorial",url:P+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e={...e,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(e)}function _e(){return WA.onInit().then(()=>{Pe().catch(t=>console.error(t)),xe().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),We().catch(t=>console.error(t)),Oe().catch(t=>console.error(t))}).catch(t=>console.error(t))}function je(){WA.controls.disableWebcam(),WA.controls.disableMicrophone(),WA.controls.disablePlayerProximityMeeting()}function Ne(){je()}const X="noMate",Q="noCoffee";let k;function qe(){k=WA.ui.displayActionMessage({message:"Kein Mate verf\xFCgbar"}),console.debug("Show Mate")}function Ke(){k=WA.ui.displayActionMessage({message:"Kein Kaffee verf\xFCgbar, nur noch koffeinfrei...."})}function Fe(){WA.room.onEnterLayer(X).subscribe(()=>{qe()}),WA.room.onLeaveLayer(X).subscribe(()=>{k.remove()}),WA.room.onEnterLayer(Q).subscribe(()=>{Ke()}),WA.room.onLeaveLayer(Q).subscribe(()=>{k.remove()})}const $e=1e3,Ye="https://poeschl.github.io/quest-for-coffee/solutions/result.json";function Ze(t){WA.room.hideLayer("Doors/"+t),WA.room.hideLayer("RiddleLayerHidesTransparency/"+t)}async function He(t){const e=await L(),r=(await Array.from(e.keys()).filter(o=>o.startsWith("Doors/"+t))[0]).split("/")[1];return console.debug("Get layer group "+r+" for id "+t),r}function z(){fetch(Ye).then(t=>t.json()).then(t=>{console.debug("Recieved door flags "+JSON.stringify(t));for(const[e,n]of Object.entries(t))n&&Ze(He(e))})}function Je(){z(),setInterval(z,$e)}WA.onInit().then(()=>{console.log("WorkAdventure API Extra ready"),_e().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t)),Ne(),Je(),Fe()})})();
//# sourceMappingURL=quest-for-coffee.iife.js.map
