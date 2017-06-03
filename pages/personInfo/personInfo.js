/**
 *
 * Created by Administrator on 2017/5/25.
 */


window.onload=()=>{
    let perNav=document.querySelectorAll("[id^='nav0']");/*person nav btn*/

    /*left nav click*/
    for(let i=0;i<perNav.length;i++){
       perNav[i].onclick=function () {
           perNav[i].setAttribute("class",perNav[i].getAttribute("class").concat("  per_active"))
           for(let j=0;j<perNav.length;j++){
               if(j!=i){
                  if( (perNav[j].getAttribute("class").indexOf("per_active"))!=-1){
                      perNav[j].setAttribute("class",perNav[j].getAttribute("class").replace("per_active"," "));
                  }
               }
           }
            let iframe=document.querySelector("#iframe");
           /*change right content*/
           switch (i){
               case 0:
                   iframe.setAttribute("src","./perInfo.html");
                   break;
               case 1:
                   iframe.setAttribute("src","./editFace/editFace.html")
                   break;
               case 2:
                   iframe.setAttribute("src","./myCollect/myCollect.html")
                   break;
               case 3:
                   iframe.setAttribute("src","./myChat/myChat.html")
                   break;
               case 4:
                   iframe.setAttribute("src","./myPublish/myPublish.html")
                   break;
               case 5:
                   iframe.setAttribute("src","./myHouse2/myHouse2.html")
                   break;
           }


       }
    }


}