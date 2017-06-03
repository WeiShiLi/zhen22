/**
 * Created by Administrator on 2017/5/24.
 */

window.onload=()=> {
   let types=document.querySelectorAll("[id^='type0']");
   for(let  i=0;i<types.length;i++){
       types[i].onclick=()=>{
           console.log(i)
           window.location.href="./../loan_detail/loan_detail.html?type="+i;
       }
   }

}