function e(e){return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g,"-"))}function r(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}module.exports=function(n,t){var l;t=Object.assign({},{placeholder:"(\\$\\{toc\\}|\\[\\[?_?toc_?\\]?\\])",slugify:e,containerClass:"table-of-contents",containerId:void 0,listClass:void 0,itemClass:void 0,linkClass:void 0,level:1,listType:"ol",format:void 0},t);var i=new RegExp("^"+t.placeholder+"$","i");n.renderer.rules.tocOpen=function(){return"<nav"+(t.containerId?' id="'+r(t.containerId)+'"':"")+' class="'+r(t.containerClass)+'">'},n.renderer.rules.tocClose=function(){return"</nav>"},n.renderer.rules.tocBody=function(){return function e(n){var l=t.listClass?' class="'+r(t.listClass)+'"':"",i=t.itemClass?' class="'+r(t.itemClass)+'"':"",o=t.linkClass?' class="'+r(t.linkClass)+'"':"",a=Object.keys(n.c);if(0===a.length)return"";var s="<"+(r(t.listType)+l)+">";return a.forEach(function(l){var a=n.c[l];s+="<li"+i+"><a"+o+' href="#'+a.id+'">'+("function"==typeof t.format?t.format(a.n,r):r(a.n))+"</a>"+e(a)+"</li>"}),s+="</"+r(t.listType)+">"}(l)},n.core.ruler.push("generateTocAst",function(e){l=function(e){var r={};function n(e){for(var n=e,t=2;Object.prototype.hasOwnProperty.call(r,n);)n=e+"-"+t++;return r[n]=!0,n}for(var l,i={l:0,n:"",c:{}},o=[i],a=Array.isArray(t.level)?(l=t.level,function(e){return l.includes(e)}):function(e){return function(r){return r>=e}}(t.level),s=0,c=e.length;s<c;s++){var u=e[s];if("heading_open"===u.type){var f=e[s+1].children.filter(function(e){return"text"===e.type||"code_inline"===e.type}).reduce(function(e,r){return e+r.content},""),p={l:parseInt(u.tag.substr(1),10),n:f,c:{}};if(a(p.l))if(p.id=n(t.slugify(f)),p.l>o[0].l)o[0].c[p.id]=p,o.unshift(p);else if(p.l===o[0].l)o[1].c[p.id]=p,o[0]=p;else{for(;p.l<=o[0].l;)o.shift();o[0].c[p.id]=p,o.unshift(p)}}}return i}(e.tokens)}),n.block.ruler.before("heading","toc",function(e,r,n,t){var l,o=e.src.slice(e.bMarks[r]+e.tShift[r],e.eMarks[r]).split(" ")[0];return!(!i.test(o)||!t&&(e.line=r+1,(l=e.push("tocOpen","nav",1)).markup="",l.map=[r,e.line],(l=e.push("tocBody","",0)).markup="",l.map=[r,e.line],l.children=[],(l=e.push("tocClose","nav",-1)).markup="",0))},{alt:["paragraph","reference","blockquote"]})};
//# sourceMappingURL=markdownItTocDoneRight.js.map
