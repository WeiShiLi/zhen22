/**
 * Created by Administrator on 2017/6/3.
 */
window.onload=()=>{
    let wants=document.querySelectorAll("[id^='mywant0']");

    for(let i=0;i<wants.length;i++){
        wants[i].onclick=()=>{
            let flag=wants[i].getAttribute("class").indexOf("W-form-btn1");
            if(flag===-1){
                wants[i].setAttribute("class",wants[i].getAttribute("class").replace("W-form-btn2","W-form-btn1"))
                for(let j=0;j<wants.length;j++){
                    if(j!=i){
                        wants[j].setAttribute("class",wants[j].getAttribute("class").replace("W-form-btn1","W-form-btn2"))

                    }
                }
            }
        }
    }
}