(function(){"use strict";class L{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.3.3/dist";class ie{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function N(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(k+"/configuration.html"+e)}async function ae(t,e){const n=await WA.room.getTiledMap(),r=new Map;return q(n.layers,r,t,e),r}function q(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(s.name))continue;e.set(s.name,new ie(s))}}else o.type==="group"&&q(o.layers,e,n,r)}let V;async function B(){return V===void 0&&(V=ue()),V}async function ue(){return ce(await WA.room.getTiledMap())}function ce(t){const e=new Map;return K(t.layers,"",e),e}function K(t,e,n){for(const r of t)r.type==="group"?K(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function le(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let u=0;u<t.width;u++)s[u+i*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function $(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const i=le(s);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var fe=Object.prototype.toString,S=Array.isArray||function(e){return fe.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function pe(t){return S(t)?"array":typeof t}function I(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function F(t,e){return t!=null&&typeof t=="object"&&e in t}function he(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var de=RegExp.prototype.test;function ge(t,e){return de.call(t,e)}var ye=/\S/;function me(t){return!ge(ye,t)}var ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function be(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return ve[n]})}var we=/\s*/,Ae=/\s+/,Y=/\s*=/,We=/\s*\}/,Se=/#|\^|\/|>|\{|&|=|!/;function Ce(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],i=!1,u=!1,a="",l=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var y,v,p;function A(w){if(typeof w=="string"&&(w=w.split(Ae,2)),!S(w)||w.length!==2)throw new Error("Invalid tags: "+w);y=new RegExp(I(w[0])+"\\s*"),v=new RegExp("\\s*"+I(w[1])),p=new RegExp("\\s*"+I("}"+w[1]))}A(e||m.tags);for(var c=new E(t),f,d,b,P,x,W;!c.eos();){if(f=c.pos,b=c.scanUntil(y),b)for(var U=0,ut=b.length;U<ut;++U)P=b.charAt(U),me(P)?(s.push(o.length),a+=P):(u=!0,n=!0,a+=" "),o.push(["text",P,f,f+1]),f+=1,P===`
`&&(h(),a="",l=0,n=!1);if(!c.scan(y))break;if(i=!0,d=c.scan(Se)||"name",c.scan(we),d==="="?(b=c.scanUntil(Y),c.scan(Y),c.scanUntil(v)):d==="{"?(b=c.scanUntil(p),c.scan(We),c.scanUntil(v),d="&"):b=c.scanUntil(v),!c.scan(v))throw new Error("Unclosed tag at "+c.pos);if(d==">"?x=[d,b,f,c.pos,a,l,n]:x=[d,b,f,c.pos],l++,o.push(x),d==="#"||d==="^")r.push(x);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+b+'" at '+f);if(W[1]!==b)throw new Error('Unclosed section "'+W[1]+'" at '+f)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(b)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+c.pos);return Be(Le(o))}function Le(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Be(t){for(var e=[],n=e,r=[],o,s,i=0,u=t.length;i<u;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function E(t){this.string=t,this.tail=t,this.pos=0}E.prototype.eos=function(){return this.tail===""},E.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},E.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=F(s,i[u])||he(s,i[u])),s=s[i[u++]];else s=o.view[e],a=F(o.view,e);if(a){r=s;break}o=o.parent}n[e]=r}return G(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||m.tags).join(":"),s=typeof r<"u",i=s?r.get(o):void 0;return i==null&&(i=Ce(e,n),s&&r.set(o,i)),i},g.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=n instanceof C?n:new C(n,void 0);return this.renderTokens(i,u,r,e,o)},g.prototype.renderTokens=function(e,n,r,o,s){for(var i="",u,a,l,h=0,y=e.length;h<y;++h)l=void 0,u=e[h],a=u[0],a==="#"?l=this.renderSection(u,n,r,o,s):a==="^"?l=this.renderInverted(u,n,r,o,s):a===">"?l=this.renderPartial(u,n,r,s):a==="&"?l=this.unescapedValue(u,n):a==="name"?l=this.escapedValue(u,n,s):a==="text"&&(l=this.rawValue(u)),l!==void 0&&(i+=l);return i},g.prototype.renderSection=function(e,n,r,o,s){var i=this,u="",a=n.lookup(e[1]);function l(v){return i.render(v,n,r,s)}if(!!a){if(S(a))for(var h=0,y=a.length;h<y;++h)u+=this.renderTokens(e[4],n.push(a[h]),r,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],n.push(a),r,o,s);else if(G(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(n.view,o.slice(e[3],e[5]),l),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],n,r,o,s);return u}},g.prototype.renderInverted=function(e,n,r,o,s){var i=n.lookup(e[1]);if(!i||S(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,s)},g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)},g.prototype.renderPartial=function(e,n,r,o){if(!!r){var s=this.getConfigTags(o),i=G(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],a=e[5],l=e[4],h=i;a==0&&l&&(h=this.indentPartial(i,l,u));var y=this.parse(h,s);return this.renderTokens(y,n,r,h,o)}}},g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r},g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||m.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===m.escape?String(s):o(s)},g.prototype.rawValue=function(e){return e[1]},g.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0},g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new g;m.clearCache=function(){return M.clearCache()},m.parse=function(e,n){return M.parse(e,n)},m.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+pe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)},m.escape=be,m.Scanner=E,m.Context=C,m.Writer=g;class Ee{constructor(e,n){this.template=e,this.state=n,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=m.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function Me(){var t;const e=await B();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Ee(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();Z(n,s.name,u),i.onChange(a=>{Z(n,s.name,a)})}}}function Z(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let _,O=0,D=0;function H(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Te(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=X(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Pe(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=X(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function J(t){return t.map(e=>_.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function X(t){const e=J(t),n=$(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(O-r,2)+Math.pow(D-o,2))}function ke(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Te(t):Pe(t),H(t)}),H(t)}function Re(t,e,n,r){const o=t.name;let s,i,u=!1;const a=n.getString("tag");let l=!0;a&&!WA.player.tags.includes(a)&&(l=!1);const h=!!a;function y(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function p(c){const f=$(J(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:f.right*32,y:f.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!l||!h)&&(n.getString("code")||n.getString("codeVariable"))){p(o);return}!l||(WA.state[e.name]?y():v())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),i&&WA.state[e.name]===!0&&A(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function xe(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-O,2)+Math.pow(t.y-D,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ve(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&xe(t)})}function Ge(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ie(t){t=t!=null?t:k;const e=await ae();_=await B();for(const n of e.values())n.properties.get("door")&&ke(n),n.properties.get("bell")&&Ve(n);for(const n of _.values()){const r=new L(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Re(n,i,r,t)}const s=r.getString("bellVariable");s&&Ge(s,r,n.name)}WA.player.onPlayerMove(n=>{O=n.x,D=n.y})}function _e(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),i=t.getString("tag");Oe(n,e,r,o,s,i)}}function Oe(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function De(){const t=await B();for(const e of t.values()){const n=new L(e.properties);_e(n,e.name)}}let Q;async function je(t){const e=await WA.room.getTiledMap();t=t!=null?t:k,Q=await B();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new L(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of Q.values()){const i=new L(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&Ue(u.split(","),s.name,i)}}}function Ue(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=n.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>N(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=n.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():N(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Ne=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],qe=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ke(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){$e(n);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),l=()=>{const A=i.x+a.x+a.width>u.x+u.width,c=i.x+a.x<u.x,f=i.y+a.y+a.height>u.y+u.height,d=i.y+a.y<u.y;A?a.x=-a.width-1.5*16:c&&(a.x=1.5*16),f?a.y=-a.height:d&&(a.y=16)},h=p=>{a.width=p.width,a.height=p.height,a.scale=p.scale},y=p=>{const c=(n?Ne:qe).filter(f=>{if(f.lowerBound&&f.uppperBound)return f.lowerBound<p&&p<=f.uppperBound;if(f.lowerBound&&!f.uppperBound)return f.lowerBound<p;if(!f.lowerBound&&f.uppperBound)return p<=f.uppperBound;throw new Error(`Zoom level of: ${p} could not fit in any of the desktopConfig's ranges.`)});h(c[0].config)},v=()=>{if(u===void 0)return;const p=u.zoom;y(p),l()};WA.player.onPlayerMove(p=>{i=p,v()}),WA.camera.onCameraUpdate().subscribe(p=>{u=p,v()}),WA.player.state.tutorialDone=!0}}function $e(t){let e={allow:"",name:"tutorial",url:k+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e={...e,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(e)}function Fe(){return WA.onInit().then(()=>{Ie().catch(t=>console.error(t)),De().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Me().catch(t=>console.error(t)),Ke().catch(t=>console.error(t))}).catch(t=>console.error(t))}const T={topleft:1,top:2,topright:3,left:4,center:5,right:6,bottomleft:7,bottom:8,bottomright:9},j="4tiles-";let z;function ee(t){return T.get(t)}function Ye(){const t=[];for(const e in Array.from(T.values())){const n=WA.state.loadVariable(e);n!=null&&n>0&&t.push(e)}return console.debug("Retrieved tileIds "+t),t}function Ze(){Ye(),WA.chat.open(),WA.chat.sendChatMessage({message:"The screen ist black.",author:"Screen"})}function He(){z=WA.ui.displayActionMessage({message:"Click Space to check the screen",type:"message",callback:()=>{Ze()}})}function te(t,e){let n=0;WA.state.hasVariable(j+t)&&(n=WA.state.loadVariable(j+t));let r;e?r=n+1:r=n-1,WA.state.saveVariable(j+t,n+1),console.debug("4tiles: "+t+" -> "+r)}function Je(){for(const t in Object.keys(T))WA.room.onEnterLayer("4tiles1monitor/"+t).subscribe(()=>{te(ee(T[t]),!0)}),WA.room.onLeaveLayer("4tiles1monitor/"+t).subscribe(()=>{te(ee(T[t]),!1)});WA.room.onEnterLayer("4tiles1monitor/code").subscribe(()=>{He()}),WA.room.onLeaveLayer("4tiles1monitor/code").subscribe(()=>{z.remove()})}function Xe(){WA.controls.disableWebcam(),WA.controls.disableMicrophone(),WA.controls.disablePlayerProximityMeeting()}function Qe(){Xe()}const ne="noMate",re="noCoffee";let R;function ze(){R=WA.ui.displayActionMessage({message:"Kein Mate verf\xFCgbar",callback:()=>{}}),console.debug("Show Mate")}function et(){R=WA.ui.displayActionMessage({message:"Kein Kaffee verf\xFCgbar, nur noch koffeinfrei....",callback:()=>{}})}function tt(){WA.room.onEnterLayer(ne).subscribe(()=>{ze()}),WA.room.onLeaveLayer(ne).subscribe(()=>{R.remove()}),WA.room.onEnterLayer(re).subscribe(()=>{et()}),WA.room.onLeaveLayer(re).subscribe(()=>{R.remove()})}function nt(t,e){const n=t.slice().sort(),r=e.slice().sort();return n.length===r.length&&n.every((o,s)=>o===r[s])}const rt=1e3,ot="https://poeschl.github.io/quest-for-coffee/solutions/result.json";let oe=[];function st(t){WA.room.hideLayer("Doors/"+t),WA.room.hideLayer("RiddleLayerHidesTransparency/"+t)}async function it(t){const e=await B(),r=Array.from(e.keys()).filter(o=>o.startsWith("Doors/"+t+"-"))[0].split("/")[1];return console.debug("Get layer group "+r+" for id "+t),r}function se(){fetch(ot).then(t=>t.json()).then(async t=>{const e=Object.values(t);if(!nt(e,oe)){oe=e,console.debug("Recieved new door flags "+JSON.stringify(t));for(const[n,r]of Object.entries(t))r&&st(await it(n))}})}function at(){se(),setInterval(se,rt)}WA.onInit().then(()=>{console.log("WorkAdventure API Extra ready"),Fe().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t)),Qe(),at(),tt(),Je()})})();
//# sourceMappingURL=quest-for-coffee.iife.js.map
