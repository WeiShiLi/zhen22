/**
 * Created by Administrator on 2017/5/22.
 */
/*页脚*/
'use strict'
window.onload=function () {
    let footer1=document.getElementById("footer1");
    let footer11=document.querySelector(".footer_content1")
    let footer2=document.getElementById("footer2");
    let footer21=document.querySelector(".footer_content2");

    let className1=footer1.getAttribute("class");
    let className11=footer11.getAttribute("class");

    let className2=footer2.getAttribute("class");
    let className21=footer21.getAttribute("class");
    footer1.onclick= ()=> {
        show_hidde(footer1,footer2,className1,className2,footer11,footer21,className11,className21)
    }

   let  show_hidde=(ele1,ele2,class1,class2,f11,f21,c11,c21 ) =>{
       class1=class1.concat(" footer_current");
        ele1.setAttribute("class",class1);
         class2=class2.replace(" footer_current"," ");
        ele2.setAttribute("class",class2);


        c11=c11.replace("  _hidde","  _show ");
        f11.setAttribute("class",c11);
        c21=c21.replace("  _show ","  _hidde ");
         f21.setAttribute("class",c21);

    }

    footer2.onclick=()=> {
        show_hidde(footer2,footer1,className2,className1,footer21,footer11,className21,className11)
    }

    /*search*/
    let two_hand=document.querySelector("#two_hand");
    let getclass1=two_hand.getAttribute("class")
    let new_house=document.querySelector("#new_house");
    let getclass2=new_house.getAttribute("class")

    let type1=document.querySelector(".s_type1");
    let type2=document.querySelector(".s_type2");
    let type3=document.querySelector(".s_type3");

    two_hand.onclick=()=>{
        search(two_hand,new_house,getclass1,getclass2);
        document.querySelector(".sear_btn").innerHTML="开始搜房";
        type1.innerHTML="业主委托";
        type2.innerHTML="精品房源";
        type3.innerHTML="无营业税";
    }
    new_house.onclick=()=>{

        search(new_house,two_hand,getclass2,getclass1)
        document.querySelector(".sear_btn").innerHTML="开始找房";
        type1.innerHTML="小户型";
        type2.innerHTML="精装修";
        type3.innerHTML="刚需盘";
    }
    let search=(ele1,ele2,class1,class2)=>{
        ele1.setAttribute("class",  class1.replace("btn_s_h","btn_s_a"));
        ele2.setAttribute("class",  class2.replace("btn_s_a","btn_s_h"));


    }




    /*banner*/
    document.querySelector("#cirl01").onclick= () => {//cirl click
        getImg(1);
    }
    document.querySelector("#cirl02").onclick= () =>{
        getImg(2);
    }
    document.querySelector("#cirl03").onclick= () =>{
        getImg(3);
    }
    document.querySelector("#cirl04").onclick= () =>{
        getImg(4);
    }

    let  getImg=(i)=>{//get img url
        let bannerImg=document.querySelector("#banner");


        if(bannerImg.getAttribute("class")==''){

            bannerImg.setAttribute("class",bannerImg.getAttribute("class").concat(" fadein"))

        }

        bannerImg.src="images/home/banner/banner"+i+".jpeg";


        let cirlAll=document.querySelectorAll('[id^="cirl0"]')
        for(let m=0;m<cirlAll.length;m++){
            let getclass= cirlAll[m].getAttribute("class");
            if(m!=(i-1)){
               if(getclass.indexOf(" banner_active")){
                  let newClass= getclass.replace(" banner_active"," ");
                   cirlAll[m].setAttribute("class",newClass);
               }
            }else{
                let newClass=getclass.concat(" banner_active");
                cirlAll[m].setAttribute("class",newClass);
            }
        }
        // if(x==1){}
        clearInterval(timer);

        loop(i);

    }
    let index;
    let timer=null;//定时器
    let loop=(index)=>{
        timer=setInterval(()=>{
                if(index>=4){
                    index=1
                }else{
                    index++;
                }
                getImg(index);
            },3000);
    }
    loop(1);

//    arrow click
    document.querySelector(".btn_arrow1").onclick=()=>{

        let cirlAll=document.querySelectorAll('[id^="cirl0"]')
        for(let m=0;m<cirlAll.length;m++){

            let getclass= cirlAll[m].getAttribute("class");
            console.log("m:"+m)
            if(getclass.indexOf(" banner_active")){
                console.log(m)
                if(m===0){
                    console.log("prev");
                    break;
                }else {
                    getImg(m+1);

                }
            }
        }

    }
    document.querySelector(".btn_arrow2").onclick=()=>{
        console.log("next")
    }


}