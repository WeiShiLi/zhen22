/**
 * Created by Administrator on 2017/5/25.
 */
window.onload=()=>{
   let defaultImg=parent.document.querySelector(".default_face");


   let btn_up=document.querySelector(".btn_up");
   let upload=document.querySelector("#upload");
   btn_up.onclick=()=>{ //upload img click
      upload.addEventListener("change",function () {

         let  file=upload.files[0];
          let imgtype=/^image\//;
          if(!imgtype.test(file.type)){
             alert("请选择图片类型上传")
              return;
          }
         if(file){
            var render=new FileReader();
            render.readAsDataURL(file);
             render.onload=(e)=>{
                 defaultImg.src=e.target.result;
             }
         }

      })
      upload.click();
    }

   /* 12 defaultImg click*/
    let face=document.querySelectorAll("[id^='face0']");
    for(let i=0;i<face.length;i++){
       face[i].onclick=()=>{
            face[i].setAttribute("class",face[i].getAttribute("class").concat(" img_click"));
            for(let j=0;j<face.length;j++){
               if(j!=i){
                  let flag=face[j].getAttribute("class").indexOf("img_click");
                  if(flag){
                      face[j].setAttribute("class",face[j].getAttribute("class").replace("img_click"," "))
                  }

               }
            }
            let imgsrc=face[i].src;
            let imgs=document.querySelectorAll("[id^='see_before']");
            for(let m=0;m<imgs.length;m++){
               imgs[m].src=imgsrc;
            }

        }

    }
    /*submit img*/
    let face_submit=document.querySelector("#face_submit");
    face_submit.onclick=()=>{
       let getimg=document.querySelector("#see_before1").getAttribute("src")
       if(getimg){
           defaultImg.setAttribute("src",getimg);
       }
    }


}