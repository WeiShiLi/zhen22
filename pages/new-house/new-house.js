/**
 * Created by baby on 2017/5/24.
 */
/*banner*/
window.onload=function () {
    document.querySelector("#cirl01").onclick= () => { //cirl click
        console.log(1111111)
        getImg(1);
    }
    document.querySelector("#cirl02").onclick= () =>{
        getImg(2);
    }

    let  getImg=(i)=>{       //get img url
        let bannerImg=document.querySelector("#banner");
        if(bannerImg.getAttribute("class")==''){
            bannerImg.setAttribute("class",bannerImg.getAttribute("class").concat(" fadein"))
        }

        bannerImg.src="../../images/new-house/slide/banner"+i+".jpg";


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
                if(index>=2){
            index=1
        }else{
            index++;
        }
        getImg(index);
    },3000);
    }
    loop(1);
}


