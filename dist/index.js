var xe=Object.create;var j=Object.defineProperty,Ue=Object.defineProperties,Ce=Object.getOwnPropertyDescriptor,ke=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertyNames,z=Object.getOwnPropertySymbols,Ne=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var K=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&K(e,r,t[r]);if(z)for(var r of z(t))Ie.call(t,r)&&K(e,r,t[r]);return e},Y=(e,t)=>Ue(e,ke(t));var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Me=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of De(t))!Q.call(e,s)&&s!==r&&j(e,s,{get:()=>t[s],enumerable:!(n=Ce(t,s))||n.enumerable});return e};var Be=(e,t,r)=>(r=e!=null?xe(Ne(e)):{},Me(t||!e||!e.__esModule?j(r,"default",{value:e,enumerable:!0}):r,e));var k=y(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.toCommandProperties=b.toCommandValue=void 0;function je(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}b.toCommandValue=je;function Le(e){return Object.keys(e).length?{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}}b.toCommandProperties=Le});var te=y(m=>{"use strict";var $e=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Ge=m&&m.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Fe=m&&m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&$e(t,e,r);return Ge(t,e),t};Object.defineProperty(m,"__esModule",{value:!0});m.issue=m.issueCommand=void 0;var Je=Fe(require("os")),H=k();function Z(e,t,r){let n=new ee(e,t,r);process.stdout.write(n.toString()+Je.EOL)}m.issueCommand=Z;function Ve(e,t=""){Z(e,{},t)}m.issue=Ve;var X="::",ee=class{constructor(t,r,n){t||(t="missing.command"),this.command=t,this.properties=r,this.message=n}toString(){let t=X+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let r=!0;for(let n in this.properties)if(this.properties.hasOwnProperty(n)){let s=this.properties[n];s&&(r?r=!1:t+=",",t+=`${n}=${Ke(s)}`)}}return t+=`${X}${ze(this.message)}`,t}};function ze(e){return H.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function Ke(e){return H.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var se=y(w=>{"use strict";var Qe=w&&w.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),We=w&&w.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ne=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&Qe(t,e,r);return We(t,e),t};Object.defineProperty(w,"__esModule",{value:!0});w.issueCommand=void 0;var re=ne(require("fs")),Ye=ne(require("os")),Xe=k();function He(e,t){let r=process.env[`GITHUB_${e}`];if(!r)throw new Error(`Unable to find environment variable for file command ${e}`);if(!re.existsSync(r))throw new Error(`Missing file at path: ${r}`);re.appendFileSync(r,`${Xe.toCommandValue(t)}${Ye.EOL}`,{encoding:"utf8"})}w.issueCommand=He});var ie=y(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});function Ze(e){let t=e.protocol==="https:",r;if(oe(e))return r;let n;return t?n=process.env.https_proxy||process.env.HTTPS_PROXY:n=process.env.http_proxy||process.env.HTTP_PROXY,n&&(r=new URL(n)),r}D.getProxyUrl=Ze;function oe(e){if(!e.hostname)return!1;let t=process.env.no_proxy||process.env.NO_PROXY||"";if(!t)return!1;let r;e.port?r=Number(e.port):e.protocol==="http:"?r=80:e.protocol==="https:"&&(r=443);let n=[e.hostname.toUpperCase()];typeof r=="number"&&n.push(`${n[0]}:${r}`);for(let s of t.split(",").map(o=>o.trim().toUpperCase()).filter(o=>o))if(n.some(o=>o===s))return!0;return!1}D.checkBypass=oe});var ce=y(A=>{"use strict";var Ft=require("net"),et=require("tls"),L=require("http"),ae=require("https"),tt=require("events"),Jt=require("assert"),rt=require("util");A.httpOverHttp=nt;A.httpsOverHttp=st;A.httpOverHttps=ot;A.httpsOverHttps=it;function nt(e){var t=new O(e);return t.request=L.request,t}function st(e){var t=new O(e);return t.request=L.request,t.createSocket=ue,t.defaultPort=443,t}function ot(e){var t=new O(e);return t.request=ae.request,t}function it(e){var t=new O(e);return t.request=ae.request,t.createSocket=ue,t.defaultPort=443,t}function O(e){var t=this;t.options=e||{},t.proxyOptions=t.options.proxy||{},t.maxSockets=t.options.maxSockets||L.Agent.defaultMaxSockets,t.requests=[],t.sockets=[],t.on("free",function(n,s,o,i){for(var u=le(s,o,i),c=0,l=t.requests.length;c<l;++c){var f=t.requests[c];if(f.host===u.host&&f.port===u.port){t.requests.splice(c,1),f.request.onSocket(n);return}}n.destroy(),t.removeSocket(n)})}rt.inherits(O,tt.EventEmitter);O.prototype.addRequest=function(t,r,n,s){var o=this,i=$({request:t},o.options,le(r,n,s));if(o.sockets.length>=this.maxSockets){o.requests.push(i);return}o.createSocket(i,function(u){u.on("free",c),u.on("close",l),u.on("agentRemove",l),t.onSocket(u);function c(){o.emit("free",u,i)}function l(f){o.removeSocket(u),u.removeListener("free",c),u.removeListener("close",l),u.removeListener("agentRemove",l)}})};O.prototype.createSocket=function(t,r){var n=this,s={};n.sockets.push(s);var o=$({},n.proxyOptions,{method:"CONNECT",path:t.host+":"+t.port,agent:!1,headers:{host:t.host+":"+t.port}});t.localAddress&&(o.localAddress=t.localAddress),o.proxyAuth&&(o.headers=o.headers||{},o.headers["Proxy-Authorization"]="Basic "+new Buffer(o.proxyAuth).toString("base64")),R("making CONNECT request");var i=n.request(o);i.useChunkedEncodingByDefault=!1,i.once("response",u),i.once("upgrade",c),i.once("connect",l),i.once("error",f),i.end();function u(p){p.upgrade=!0}function c(p,h,T){process.nextTick(function(){l(p,h,T)})}function l(p,h,T){if(i.removeAllListeners(),h.removeAllListeners(),p.statusCode!==200){R("tunneling socket could not be established, statusCode=%d",p.statusCode),h.destroy();var x=new Error("tunneling socket could not be established, statusCode="+p.statusCode);x.code="ECONNRESET",t.request.emit("error",x),n.removeSocket(s);return}if(T.length>0){R("got illegal response body from proxy"),h.destroy();var x=new Error("got illegal response body from proxy");x.code="ECONNRESET",t.request.emit("error",x),n.removeSocket(s);return}return R("tunneling connection has established"),n.sockets[n.sockets.indexOf(s)]=h,r(h)}function f(p){i.removeAllListeners(),R(`tunneling socket could not be established, cause=%s
`,p.message,p.stack);var h=new Error("tunneling socket could not be established, cause="+p.message);h.code="ECONNRESET",t.request.emit("error",h),n.removeSocket(s)}};O.prototype.removeSocket=function(t){var r=this.sockets.indexOf(t);if(r!==-1){this.sockets.splice(r,1);var n=this.requests.shift();n&&this.createSocket(n,function(s){n.request.onSocket(s)})}};function ue(e,t){var r=this;O.prototype.createSocket.call(r,e,function(n){var s=e.request.getHeader("host"),o=$({},r.options,{socket:n,servername:s?s.replace(/:.*$/,""):e.host}),i=et.connect(0,o);r.sockets[r.sockets.indexOf(n)]=i,t(i)})}function le(e,t,r){return typeof e=="string"?{host:e,port:t,localAddress:r}:e}function $(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if(typeof n=="object")for(var s=Object.keys(n),o=0,i=s.length;o<i;++o){var u=s[o];n[u]!==void 0&&(e[u]=n[u])}}return e}var R;process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?R=function(){var e=Array.prototype.slice.call(arguments);typeof e[0]=="string"?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e)}:R=function(){};A.debug=R});var pe=y((zt,fe)=>{fe.exports=ce()});var de=y(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});var N=require("http"),G=require("https"),he=ie(),q,_;(function(e){e[e.OK=200]="OK",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.ResourceMoved=302]="ResourceMoved",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.SwitchProxy=306]="SwitchProxy",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.TooManyRequests=429]="TooManyRequests",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout"})(_=g.HttpCodes||(g.HttpCodes={}));var d;(function(e){e.Accept="accept",e.ContentType="content-type"})(d=g.Headers||(g.Headers={}));var S;(function(e){e.ApplicationJson="application/json"})(S=g.MediaTypes||(g.MediaTypes={}));function at(e){let t=he.getProxyUrl(new URL(e));return t?t.href:""}g.getProxyUrl=at;var ut=[_.MovedPermanently,_.ResourceMoved,_.SeeOther,_.TemporaryRedirect,_.PermanentRedirect],lt=[_.BadGateway,_.ServiceUnavailable,_.GatewayTimeout],ct=["OPTIONS","GET","DELETE","HEAD"],ft=10,pt=5,U=class extends Error{constructor(t,r){super(t);this.name="HttpClientError",this.statusCode=r,Object.setPrototypeOf(this,U.prototype)}};g.HttpClientError=U;var F=class{constructor(t){this.message=t}readBody(){return new Promise(async(t,r)=>{let n=Buffer.alloc(0);this.message.on("data",s=>{n=Buffer.concat([n,s])}),this.message.on("end",()=>{t(n.toString())})})}};g.HttpClientResponse=F;function ht(e){return new URL(e).protocol==="https:"}g.isHttps=ht;var I=class{constructor(t,r,n){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=t,this.handlers=r||[],this.requestOptions=n,n&&(n.ignoreSslError!=null&&(this._ignoreSslError=n.ignoreSslError),this._socketTimeout=n.socketTimeout,n.allowRedirects!=null&&(this._allowRedirects=n.allowRedirects),n.allowRedirectDowngrade!=null&&(this._allowRedirectDowngrade=n.allowRedirectDowngrade),n.maxRedirects!=null&&(this._maxRedirects=Math.max(n.maxRedirects,0)),n.keepAlive!=null&&(this._keepAlive=n.keepAlive),n.allowRetries!=null&&(this._allowRetries=n.allowRetries),n.maxRetries!=null&&(this._maxRetries=n.maxRetries))}options(t,r){return this.request("OPTIONS",t,null,r||{})}get(t,r){return this.request("GET",t,null,r||{})}del(t,r){return this.request("DELETE",t,null,r||{})}post(t,r,n){return this.request("POST",t,r,n||{})}patch(t,r,n){return this.request("PATCH",t,r,n||{})}put(t,r,n){return this.request("PUT",t,r,n||{})}head(t,r){return this.request("HEAD",t,null,r||{})}sendStream(t,r,n,s){return this.request(t,r,n,s)}async getJson(t,r={}){r[d.Accept]=this._getExistingOrDefaultHeader(r,d.Accept,S.ApplicationJson);let n=await this.get(t,r);return this._processResponse(n,this.requestOptions)}async postJson(t,r,n={}){let s=JSON.stringify(r,null,2);n[d.Accept]=this._getExistingOrDefaultHeader(n,d.Accept,S.ApplicationJson),n[d.ContentType]=this._getExistingOrDefaultHeader(n,d.ContentType,S.ApplicationJson);let o=await this.post(t,s,n);return this._processResponse(o,this.requestOptions)}async putJson(t,r,n={}){let s=JSON.stringify(r,null,2);n[d.Accept]=this._getExistingOrDefaultHeader(n,d.Accept,S.ApplicationJson),n[d.ContentType]=this._getExistingOrDefaultHeader(n,d.ContentType,S.ApplicationJson);let o=await this.put(t,s,n);return this._processResponse(o,this.requestOptions)}async patchJson(t,r,n={}){let s=JSON.stringify(r,null,2);n[d.Accept]=this._getExistingOrDefaultHeader(n,d.Accept,S.ApplicationJson),n[d.ContentType]=this._getExistingOrDefaultHeader(n,d.ContentType,S.ApplicationJson);let o=await this.patch(t,s,n);return this._processResponse(o,this.requestOptions)}async request(t,r,n,s){if(this._disposed)throw new Error("Client has already been disposed.");let o=new URL(r),i=this._prepareRequest(t,o,s),u=this._allowRetries&&ct.indexOf(t)!=-1?this._maxRetries+1:1,c=0,l;for(;c<u;){if(l=await this.requestRaw(i,n),l&&l.message&&l.message.statusCode===_.Unauthorized){let p;for(let h=0;h<this.handlers.length;h++)if(this.handlers[h].canHandleAuthentication(l)){p=this.handlers[h];break}return p?p.handleAuthentication(this,i,n):l}let f=this._maxRedirects;for(;ut.indexOf(l.message.statusCode)!=-1&&this._allowRedirects&&f>0;){let p=l.message.headers.location;if(!p)break;let h=new URL(p);if(o.protocol=="https:"&&o.protocol!=h.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(await l.readBody(),h.hostname!==o.hostname)for(let T in s)T.toLowerCase()==="authorization"&&delete s[T];i=this._prepareRequest(t,h,s),l=await this.requestRaw(i,n),f--}if(lt.indexOf(l.message.statusCode)==-1)return l;c+=1,c<u&&(await l.readBody(),await this._performExponentialBackoff(c))}return l}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(t,r){return new Promise((n,s)=>{let o=function(i,u){i&&s(i),n(u)};this.requestRawWithCallback(t,r,o)})}requestRawWithCallback(t,r,n){let s;typeof r=="string"&&(t.options.headers["Content-Length"]=Buffer.byteLength(r,"utf8"));let o=!1,i=(c,l)=>{o||(o=!0,n(c,l))},u=t.httpModule.request(t.options,c=>{let l=new F(c);i(null,l)});u.on("socket",c=>{s=c}),u.setTimeout(this._socketTimeout||3*6e4,()=>{s&&s.end(),i(new Error("Request timeout: "+t.options.path),null)}),u.on("error",function(c){i(c,null)}),r&&typeof r=="string"&&u.write(r,"utf8"),r&&typeof r!="string"?(r.on("close",function(){u.end()}),r.pipe(u)):u.end()}getAgent(t){let r=new URL(t);return this._getAgent(r)}_prepareRequest(t,r,n){let s={};s.parsedUrl=r;let o=s.parsedUrl.protocol==="https:";s.httpModule=o?G:N;let i=o?443:80;return s.options={},s.options.host=s.parsedUrl.hostname,s.options.port=s.parsedUrl.port?parseInt(s.parsedUrl.port):i,s.options.path=(s.parsedUrl.pathname||"")+(s.parsedUrl.search||""),s.options.method=t,s.options.headers=this._mergeHeaders(n),this.userAgent!=null&&(s.options.headers["user-agent"]=this.userAgent),s.options.agent=this._getAgent(s.parsedUrl),this.handlers&&this.handlers.forEach(u=>{u.prepareRequest(s.options)}),s}_mergeHeaders(t){let r=n=>Object.keys(n).reduce((s,o)=>(s[o.toLowerCase()]=n[o],s),{});return this.requestOptions&&this.requestOptions.headers?Object.assign({},r(this.requestOptions.headers),r(t)):r(t||{})}_getExistingOrDefaultHeader(t,r,n){let s=i=>Object.keys(i).reduce((u,c)=>(u[c.toLowerCase()]=i[c],u),{}),o;return this.requestOptions&&this.requestOptions.headers&&(o=s(this.requestOptions.headers)[r]),t[r]||o||n}_getAgent(t){let r,n=he.getProxyUrl(t),s=n&&n.hostname;if(this._keepAlive&&s&&(r=this._proxyAgent),this._keepAlive&&!s&&(r=this._agent),r)return r;let o=t.protocol==="https:",i=100;if(this.requestOptions&&(i=this.requestOptions.maxSockets||N.globalAgent.maxSockets),s){q||(q=pe());let u={maxSockets:i,keepAlive:this._keepAlive,proxy:Y(W({},(n.username||n.password)&&{proxyAuth:`${n.username}:${n.password}`}),{host:n.hostname,port:n.port})},c,l=n.protocol==="https:";o?c=l?q.httpsOverHttps:q.httpsOverHttp:c=l?q.httpOverHttps:q.httpOverHttp,r=c(u),this._proxyAgent=r}if(this._keepAlive&&!r){let u={keepAlive:this._keepAlive,maxSockets:i};r=o?new G.Agent(u):new N.Agent(u),this._agent=r}return r||(r=o?G.globalAgent:N.globalAgent),o&&this._ignoreSslError&&(r.options=Object.assign(r.options||{},{rejectUnauthorized:!1})),r}_performExponentialBackoff(t){t=Math.min(ft,t);let r=pt*Math.pow(2,t);return new Promise(n=>setTimeout(()=>n(),r))}static dateTimeDeserializer(t,r){if(typeof r=="string"){let n=new Date(r);if(!isNaN(n.valueOf()))return n}return r}async _processResponse(t,r){return new Promise(async(n,s)=>{let o=t.message.statusCode,i={statusCode:o,result:null,headers:{}};o==_.NotFound&&n(i);let u,c;try{c=await t.readBody(),c&&c.length>0&&(r&&r.deserializeDates?u=JSON.parse(c,I.dateTimeDeserializer):u=JSON.parse(c),i.result=u),i.headers=t.message.headers}catch{}if(o>299){let l;u&&u.message?l=u.message:c&&c.length>0?l=c:l="Failed request: ("+o+")";let f=new U(l,o);f.result=i.result,s(f)}else n(i)})}};g.HttpClient=I});var _e=y(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var ge=class{constructor(t,r){this.username=t,this.password=r}prepareRequest(t){t.headers.Authorization="Basic "+Buffer.from(this.username+":"+this.password).toString("base64")}canHandleAuthentication(t){return!1}handleAuthentication(t,r,n){return null}};C.BasicCredentialHandler=ge;var me=class{constructor(t){this.token=t}prepareRequest(t){t.headers.Authorization="Bearer "+this.token}canHandleAuthentication(t){return!1}handleAuthentication(t,r,n){return null}};C.BearerCredentialHandler=me;var ve=class{constructor(t){this.token=t}prepareRequest(t){t.headers.Authorization="Basic "+Buffer.from("PAT:"+this.token).toString("base64")}canHandleAuthentication(t){return!1}handleAuthentication(t,r,n){return null}};C.PersonalAccessTokenCredentialHandler=ve});var Oe=y(P=>{"use strict";var ye=P&&P.__awaiter||function(e,t,r,n){function s(o){return o instanceof r?o:new r(function(i){i(o)})}return new(r||(r=Promise))(function(o,i){function u(f){try{l(n.next(f))}catch(p){i(p)}}function c(f){try{l(n.throw(f))}catch(p){i(p)}}function l(f){f.done?o(f.value):s(f.value).then(u,c)}l((n=n.apply(e,t||[])).next())})};Object.defineProperty(P,"__esModule",{value:!0});P.OidcClient=void 0;var dt=de(),gt=_e(),we=J(),E=class{static createHttpClient(t=!0,r=10){let n={allowRetries:t,maxRetries:r};return new dt.HttpClient("actions/oidc-client",[new gt.BearerCredentialHandler(E.getRequestToken())],n)}static getRequestToken(){let t=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!t)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return t}static getIDTokenUrl(){let t=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!t)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return t}static getCall(t){var r;return ye(this,void 0,void 0,function*(){let o=(r=(yield E.createHttpClient().getJson(t).catch(i=>{throw new Error(`Failed to get ID Token. 
 
        Error Code : ${i.statusCode}
 
        Error Message: ${i.result.message}`)})).result)===null||r===void 0?void 0:r.value;if(!o)throw new Error("Response json body do not have ID Token field");return o})}static getIDToken(t){return ye(this,void 0,void 0,function*(){try{let r=E.getIDTokenUrl();if(t){let s=encodeURIComponent(t);r=`${r}&audience=${s}`}we.debug(`ID token url is ${r}`);let n=yield E.getCall(r);return we.setSecret(n),n}catch(r){throw new Error(`Error message: ${r.message}`)}})}};P.OidcClient=E});var J=y(a=>{"use strict";var mt=a&&a.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),vt=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Re=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&mt(t,e,r);return vt(t,e),t},Se=a&&a.__awaiter||function(e,t,r,n){function s(o){return o instanceof r?o:new r(function(i){i(o)})}return new(r||(r=Promise))(function(o,i){function u(f){try{l(n.next(f))}catch(p){i(p)}}function c(f){try{l(n.throw(f))}catch(p){i(p)}}function l(f){f.done?o(f.value):s(f.value).then(u,c)}l((n=n.apply(e,t||[])).next())})};Object.defineProperty(a,"__esModule",{value:!0});a.getIDToken=a.getState=a.saveState=a.group=a.endGroup=a.startGroup=a.info=a.notice=a.warning=a.error=a.debug=a.isDebug=a.setFailed=a.setCommandEcho=a.setOutput=a.getBooleanInput=a.getMultilineInput=a.getInput=a.addPath=a.setSecret=a.exportVariable=a.ExitCode=void 0;var v=te(),Ee=se(),B=k(),M=Re(require("os")),_t=Re(require("path")),yt=Oe(),Te;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(Te=a.ExitCode||(a.ExitCode={}));function wt(e,t){let r=B.toCommandValue(t);if(process.env[e]=r,process.env.GITHUB_ENV||""){let s="_GitHubActionsFileCommandDelimeter_",o=`${e}<<${s}${M.EOL}${r}${M.EOL}${s}`;Ee.issueCommand("ENV",o)}else v.issueCommand("set-env",{name:e},r)}a.exportVariable=wt;function Ot(e){v.issueCommand("add-mask",{},e)}a.setSecret=Ot;function Rt(e){process.env.GITHUB_PATH||""?Ee.issueCommand("PATH",e):v.issueCommand("add-path",{},e),process.env.PATH=`${e}${_t.delimiter}${process.env.PATH}`}a.addPath=Rt;function V(e,t){let r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r)throw new Error(`Input required and not supplied: ${e}`);return t&&t.trimWhitespace===!1?r:r.trim()}a.getInput=V;function St(e,t){return V(e,t).split(`
`).filter(n=>n!=="")}a.getMultilineInput=St;function Et(e,t){let r=["true","True","TRUE"],n=["false","False","FALSE"],s=V(e,t);if(r.includes(s))return!0;if(n.includes(s))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}a.getBooleanInput=Et;function Tt(e,t){process.stdout.write(M.EOL),v.issueCommand("set-output",{name:e},t)}a.setOutput=Tt;function bt(e){v.issue("echo",e?"on":"off")}a.setCommandEcho=bt;function At(e){process.exitCode=Te.Failure,be(e)}a.setFailed=At;function qt(){return process.env.RUNNER_DEBUG==="1"}a.isDebug=qt;function Pt(e){v.issueCommand("debug",{},e)}a.debug=Pt;function be(e,t={}){v.issueCommand("error",B.toCommandProperties(t),e instanceof Error?e.toString():e)}a.error=be;function xt(e,t={}){v.issueCommand("warning",B.toCommandProperties(t),e instanceof Error?e.toString():e)}a.warning=xt;function Ut(e,t={}){v.issueCommand("notice",B.toCommandProperties(t),e instanceof Error?e.toString():e)}a.notice=Ut;function Ct(e){process.stdout.write(e+M.EOL)}a.info=Ct;function Ae(e){v.issue("group",e)}a.startGroup=Ae;function qe(){v.issue("endgroup")}a.endGroup=qe;function kt(e,t){return Se(this,void 0,void 0,function*(){Ae(e);let r;try{r=yield t()}finally{qe()}return r})}a.group=kt;function Dt(e,t){v.issueCommand("save-state",{name:e},t)}a.saveState=Dt;function Nt(e){return process.env[`STATE_${e}`]||""}a.getState=Nt;function It(e){return Se(this,void 0,void 0,function*(){return yield yt.OidcClient.getIDToken(e)})}a.getIDToken=It});var Pe=Be(J()),Mt=async()=>{Pe.setOutput("result","Hello World")};Mt();