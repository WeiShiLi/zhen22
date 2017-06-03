/**
 * Created by Administrator on 2017/5/25.
 */
/*my collection click*/
window.onload=()=>{

    let showFav=(fav)=>{
        let content=document.querySelector("#coll_content");
        content.innerHTML="";
        for(let i=0;i<fav.length;i++){
            content.innerHTML+=` <div class="myColl_content">
           <div style="width: 17%">
               <img src="../../../images/house/${fav[i].img}" style="width: 100%"/>
           </div>
           <div class="coll_name">
             ${fav[i].domain}  ${fav[i].name} <br>
               <span style="font-size: 13px;margin-top: 30px">${fav[i].houseType[0]} ${fav[i].houseType[1]} ${fav[i].houseType[2]} ${fav[i].houseType[3]}</span>
           </div>
          <div class="coll_fav_font">
              ${fav[i].totalPrice}万
          </div>
          <div class="fav_coll">
              <p class="start_coll" id="cancelFav${fav[i].id}">
                  <img id="favorite_img${i}"  src="./../../../images/favActIcon.png" height="16" width="18"/>
                  <span>取消收藏</span>
              </p>
          </div>
       </div>`;
        }
        let cancel=document.querySelectorAll("[id^='cancelFav']");
        for(let i=0;i<cancel.length;i++){
            cancel[i].onclick=()=>{
              let number=  sessionStorage.getItem("number");
               sessionStorage.removeItem("houseid" + fav[i].id);
               number=number-1;
               sessionStorage.setItem("number",number);
               for(let j=0;j<fav.length;j++){
                   if(fav[j].id===fav[i].id){}
                   fav.splice(j,1);
                   showFav(fav);
               }
            }
        }




    }


    let titlechange=(fav)=>{
        let coll=document.querySelectorAll("[id^='coll0']");
        for(let i=0;i<coll.length;i++){
            coll[i].onclick=()=>{
                coll[i].setAttribute("class",coll[i].getAttribute("class").concat(" coll_active"));
                for(let j=0;j<coll.length;j++){
                    if(j!=i){
                        coll[j].setAttribute("class",coll[j].getAttribute("class").replace(" coll_active"," "));
                    }
                }
                if(i===1){
                    let house=[]
                    showFav(house);
                }else {
                    showFav(fav);
                }


            }
        }

    }


    let fav=(house)=>{
        console.log(house.length);
        let favs=[];
        for(let i=0;i<sessionStorage.getItem("number");i++){
            let key=sessionStorage.key(i);
            let id= sessionStorage.getItem(key);
              id=parseInt(id);
            for(let j=0;j<house.length;j++){
                if(id===house[j].id){
                    favs.push(house[j]);
                }else {

                }
            }
        }
        showFav(favs);
        titlechange(favs);
    }

    let xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=()=>
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            let result=xmlhttp.responseText;
            let houses=JSON.parse(result)
            titlechange(houses);
            fav(houses);

        }
    }
    xmlhttp.open("GET","./../../../data/houses.json",true);
    xmlhttp.send();


















}
