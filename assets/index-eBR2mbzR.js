var h=Object.defineProperty;var o=(i,a,t)=>a in i?h(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var s=(i,a,t)=>o(i,typeof a!="symbol"?a+"":a,t);import{r as g,j as l}from"./index-CKNvk7wi.js";class d{constructor(a){s(this,"id");s(this,"current");s(this,"total");s(this,"pageSize");s(this,"onchange");s(this,"pageNumber");s(this,"totalPage");s(this,"container");this.id=a.id||"",this.current=a.props.current||1,this.total=a.props.total||100,this.pageSize=a.props.pageSize||2,this.onchange=a.props.onchange||null,this.pageNumber=5,this.totalPage=Math.ceil(this.total/this.pageSize),this.init()}init(){this.handle(),this.total!==0&&this.loadPage()}handle(){this.container=document.querySelector("#"+this.id),this.container.onclick=a=>{var t=a||window.event,n=t.target||t.srcElement;n.getAttribute("data-page")&&n.getAttribute("class").indexOf("disabled")==-1&&(this.current=parseInt(n.getAttribute("data-page")),this.loadPage(),this.onchange({current:this.current,pageSize:this.pageSize}))}}callback_handle(){this.container.querySelector(".skip-input").addEventListener("keyup",a=>{var t=a||window.event,n=t.target||t.srcElement;if(a.keyCode===13){let r=parseInt(n.value);this.current=r>this.totalPage?this.totalPage:r,this.loadPage(),this.onchange({current:this.current,pageSize:this.pageSize})}})}loadPage(){this.container.innerHTML="";let a="",t=this.current>this.totalPage?this.totalPage:this.current;const n=t===1?"disabled":"",r=t===1?1:t-1;if(a+=`<span class="count">共 ${this.total} 条</span>`,a+=`<a href="javascript:;" class='${n}' data-page="1">首页</a>
        <a href="javascript:;" class='${n}' data-page=${r}>上一页</a>`,this.totalPage<=this.pageNumber)for(let e=1;e<=this.totalPage;e++)a+=`<a class='${e==t?"acive":""}' data-page=${e} >${e}</a>`;else if(t<this.pageNumber){for(let e=1;e<=this.pageNumber;e++)a+=`<a class='${e==t?"acive":""}' data-page=${e} > ${e} </a>`;a+='<a class="disabled">...</a>'}else if(a+='<a class="disabled">...</a>',t<this.totalPage-4){for(let e=t-2;e<=t+2;e++)a+=`<a class='${e==t?"acive":""}' data-page=${e} >${e}</a>`;a+='<a class="disabled">...</a>'}else if(this.totalPage-t<this.pageNumber)for(let e=t-(this.pageNumber-(this.totalPage-t)-1);e<=t+(this.totalPage-t);e++)a+=`<a class='${e==t?"acive":""}' data-page=${e} >${e}</a>`;a+=`<a href="javascript:;" class='${t===this.totalPage?"disabled":""}' data-page=${t==this.totalPage?this.totalPage:t+1} >下一页</a>
        <a href="javascript:;" class='${t===this.totalPage?"disabled":""}' data-page=${this.totalPage} >尾页</a>`,a+=`<span class="skip"> 到第<input type="text" min="1" value="${t}" class="skip-input">页</span>`,this.container.innerHTML=`<div class="js_Page">${a}</div>`,this.callback_handle()}}const c="pagination";function p(i){return g.useEffect(()=>{new d({id:c,props:i})},[c,i]),l.jsx(l.Fragment,{children:l.jsx("div",{id:c})})}function $(){return l.jsxs(l.Fragment,{children:[l.jsx("h1",{children:"Pagination 分页 "}),l.jsx("h3",{children:"演示"}),l.jsx(p,{})]})}export{$ as default};
