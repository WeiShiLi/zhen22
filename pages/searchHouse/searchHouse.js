/**
 * Created by Administrator on 2017/5/27.
 */

window.onload=()=>{

    const count=5;
    let condition={
        domain:"不限",
        totalprice:"不限",
        area:"不限",
        housetype:"不限",
        decoration:"不限",
        feature:"不限"
    }
    /* first end page*/
    let firstEndPage=(house)=>{
        let first=document.querySelector("#firstPage");
        let end=document.querySelector("#endPage");
        first.onclick=()=>{
            showIndex(0,house);
            let getpages= document.querySelectorAll("[id^='page0']");
            let index=getpages[0].getAttribute("class").indexOf("page_active");
            if(index===-1){
                getpages[0].setAttribute("class","page_active");
                for(let i=1;i<getpages.length;i++){
                    getpages[i].setAttribute("class"," ");
                }
            }
        }
        end.onclick=()=>{
            let endIndex=Math.ceil(house.length/count)-1
            showIndex(endIndex,house);
            let getpages= document.querySelectorAll("[id^='page0']");
            let index=getpages[endIndex].getAttribute("class").indexOf("page_active");
            if(index===-1){
                getpages[endIndex].setAttribute("class","page_active");
                for(let i=0;i<getpages.length-1;i++){
                    getpages[i].setAttribute("class"," ");
                }
            }
        }
    }
    // /!*show house function*!/
    let strContent=document.querySelector("#house");
    let showHouse=(h,allh)=>{
        let totalHouse=document.querySelector(".total_houses")
        totalHouse.innerHTML=allh.length;

        if(allh.length===0){
            let hiddePage=document.querySelector("#page");
            hiddePage.style.opacity="0";
        }else {
            let hiddePage=document.querySelector("#page");
            hiddePage.style.opacity="1";
        }

        strContent.innerHTML=""
        for(let i=0;i<h.length;i++){
            strContent.innerHTML+=`<div class="search_content">
        <div class="search_img">
            <img src="../../images/home/house/${h[i].img}" class="search_icon" id="houseimg-${h[i].id}"/>
        </div>
        <div class="search_detail">
            <div class="search_name" id="housename-${h[i].id}">${h[i].domain}  ${h[i].name}</div>
            <div class="search-house">
                <div class="search_row1">
                    <div>
                        <p> ${h[i].houseType[0]} ${h[i].houseType[1]} ${h[i].houseType[2]} ${h[i].houseType[3]}</p>
                        <p>${h[i].floor}</p>
                    </div>
                    <div>
                        <p>${h[i].direction}</p>
                        <p>${h[i].decoration}</p>
                    </div>
                    <div>
                        <p>${h[i].area}㎡</p>
                        <p>${h[i].year}</p>
                    </div>
                </div>
                <div class="search_price">
                    <div>
                        <span class="search_price_font">${h[i].totalPrice}万</span>
                        <span>${h[i].unitPrice}</span>
                    </div>
                    <div class="search_favorite" id="favorite_btn${i}">
                        <p class="start_">
                            <img id="favorite_img${i}" class="icon_start" src="../../images/fav_start.png" height="16" width="18"/>
                            <span class="start_font">收藏房源</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="search-feature">
                <span>${h[i].feature[0]}</span>
                <span>${h[i].feature[1]}</span>
            </div>
        </div>
    </div>`;

        }
        let favorites=document.querySelectorAll("[id^='favorite_btn']");

        let number=sessionStorage.getItem("number")===null?0:sessionStorage.getItem("number");
        // console.log(number)
        /*favorite click*/
        for(let i=0;i<favorites.length;i++){
            let flag=true;
            favorites[i].onclick=()=>{
                if(flag){
                    document.querySelector("#favorite_img"+i).setAttribute("src","../../images/icon-faveun-Gstar.png");
                    sessionStorage.setItem("houseid"+(i+1),i+1);
                    number=number+1;
                    sessionStorage.setItem("number",number);
                    flag=false;
                }else {
                    document.querySelector("#favorite_img"+i).setAttribute("src","../../images/fav_start.png");
                    sessionStorage.removeItem("houseid"+(i+1));
                    number=number-1;
                    sessionStorage.setItem("number",number)
                    flag=true;
                }
            }
        }
        /*detail page click*/
        let names=document.querySelectorAll("[id^='housename']");
        let imgs=document.querySelectorAll("[id^='houseimg']");
        for(let m=0;m<names.length;m++){
            names[m].onclick=()=>{
                let id=names[m].getAttribute("id").split('-')[1];
                window.location.href="./../house-detail/house-detail.html?type="+id;
            }
        }
        for(let m=0;m<imgs.length;m++){
            imgs[m].onclick=()=>{
                let id=imgs[m].getAttribute("id").split('-')[1];
                window.location.href="./../house-detail/house-detail.html?type="+id;
            }
        }

    }

    /*page index */
    let showIndex=(index,houses)=>{
        let  lastArray=[];
        lastArray=houses.slice(index*count,(index+1)*count);
        showHouse(lastArray,houses);
    }

    /*page content display*/
    let pageContent=document.querySelector("#page_content");
    let showPage=(h)=>{
        var pages=Math.ceil(h.length/count);
        pageContent.innerHTML="";
        for(let i=0;i<pages;i++){
            if(i===0){
                pageContent.innerHTML+=`<span class=" page_active" id="page0${i+1}" >${i+1}</span>`
            }else {
                pageContent.innerHTML+=`<span class=" " id="page0${i+1}" >${i+1}</span>`
            }

        };
        /*page click*/
        let getpages= document.querySelectorAll("[id^='page0']")
        for(let j=0;j<getpages.length;j++){
            getpages[j].onclick=()=>{
                let getclass=getpages[j].getAttribute("class").indexOf("page_active");
                if(getclass===-1){
                    getpages[j].setAttribute("class","page_active");
                    for(var n=0;n<getpages.length;n++){
                        if(n!=j){
                            getpages[n].setAttribute("class"," ");
                        }
                    }

                    showIndex(j,h);
                }

            }

        }

    }

    /*price click*/
    let PriceSort=(house)=>{
        let prices=document.querySelectorAll("[id^='price0']")
        prices[0].onclick=()=>{
            let compare=(obj1,obj2)=>{
                let x=obj1.totalPrice;
                let y=obj2.totalPrice;
                if (x < y) {
                    return -1;
                } else if (x > y) {
                    return 1;
                } else {
                    return 0;
                }
            }
            let newhouse= house.sort(compare);
            showIndex(0,newhouse);
            showPage(newhouse);
            firstEndPage(newhouse);
        }
        prices[1].onclick=()=>{
            let compare=(obj1,obj2)=>{
                let x=obj1.totalPrice;
                let y=obj2.totalPrice;
                if (x < y) {
                    return 1;
                } else if (x > y) {
                    return -1;
                } else {
                    return 0;
                }
            }
            let newhouse= house.sort(compare);
            showIndex(0,newhouse);
            showPage(newhouse);
            firstEndPage(newhouse);
        }

    }
    /*title change */
    let titleChange=(h)=>{
        let house=document.querySelectorAll("[id^='house0']");

        for(let i=0;i<house.length;i++){/*title btn change*/
            house[i].onclick=()=>{
                if( house[i].getAttribute("class").indexOf("title_active")===-1){
                    house[i].setAttribute("class",house[i].getAttribute("class").concat("title_active"))
                    for(let j=0;j<house.length;j++){
                        if(j!=i){
                            house[j].setAttribute("class",house[j].getAttribute("class").replace("title_active"," "))
                        }
                    }
                }
                if(i==0){
                showIndex(0,h);
                showPage(h);
                firstEndPage(h);
                PriceSort(h)
                }else if(i==1){

                   let newhouse=[];

                     for(let m=0;m<h.length;m++){
                         if(h[m].feature[0]==="精品房源"){
                            newhouse.push(h[m]);
                          }
                     }
                    showIndex(0,newhouse);
                    showPage(newhouse);
                    firstEndPage(newhouse);
                    PriceSort(newhouse);
                }
            }
        }
    }
    let filterHouse2=(conditions,house)=>{

        let term1=[];
        if(conditions.domain.indexOf("不限")===-1){
            for(let i=0;i<house.length;i++){
                if(conditions.domain===house[i].domain){
                    term1.push(house[i]);
                }
            }
        }else {
            term1=house;
        }

        let term2=[];
        if(conditions.decoration.indexOf("不限")===-1){
            for(let i=0;i<term1.length;i++){
                if(conditions.decoration===term1[i].decoration){
                    term2.push(term1[i]);
                }
            }
        }else {
            term2=[...term1];
        }
        let term3=[];
        if(conditions.housetype.indexOf("不限")===-1){
            for(let i=0;i<term2.length;i++){
                if(conditions.housetype===term2[i].houseType[0]){
                    term3.push(term2[i]);
                }
            }
        }else {
            term3=[...term2];
        }
        let term4=[];

        if(conditions.feature.indexOf("不限")===-1){
            for(let i=0;i<term3.length;i++){
                for(let j=0;j<term3[i].feature.length;j++){
                    if(conditions.feature===term3[i].feature[j]){
                        // console.log(term3[i].feature[j]);
                        term4.push(term3[i]);
                    }
                }
            }
        }else {
            term4=[...term3];
        }
        let term5=[];
        if (conditions.totalprice.indexOf("不限")===-1){
            switch (conditions.totalprice){
                case "40万以下":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice<40){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "40-60万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=40 && term4[x].totalPrice<60 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "60-80万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=60 && term4[x].totalPrice<80 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "80-100万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=80 && term4[x].totalPrice<100 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "100-140万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=100 && term4[x].totalPrice<140 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "140-180万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=140 && term4[x].totalPrice<180 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "180万以上":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=180){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                default:
                    console.log("end");
            }
        }else {
            term5=[...term4];
        }

        let term6=[];
        if(conditions.area.indexOf("不限")===-1){
            switch (conditions.area){
                case "50㎡以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area<50){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "50-70㎡以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=50 && term5[i].area<70){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "70-90㎡以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=70 && term5[i].area<90){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "90-110以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=90 && term5[i].area<110){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "110-130以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=1100 && term5[i].area<130){
                            term6.push(term5[i])
                        }
                    }
                    break;
                case "130-150以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=130 && term5[i].area<150){
                            term6.push(term5[i])
                        }
                    }
                    break;
                case "150㎡以上":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=150){
                            term6.push(term5[i]);
                        }
                    }
                    break;
            }

        }else {
            term6=[...term5];
        }



        showIndex(0,term6);
        showPage(term6);
        firstEndPage(term6);
        PriceSort(term6);
        titleChange(term6);

    }
    /*search input submit*/
    let find=(house)=>{
        let text=document.querySelector("#input_search_text").value.trim();

        let newHouse=[];
        if(text) {
            for (let i = 0; i < house.length; i++) {
                if (house[i].name.indexOf(text) != -1 || house[i].domain.indexOf(text) != -1) {
                    newHouse.push(house[i]);
                }
            }
            return newHouse;
        } else {
             return house;
            }
    }
    let findText=(house)=>{
        let find_btn=document.querySelector("#find_btn");

        find_btn.onclick=()=>{
            let newHouse= find(house);
            if(document.querySelector("#house01").getAttribute("class").indexOf("title_active")===-1){
                document.querySelector("#house01").setAttribute("class","title_active");
                document.querySelector("#house02").setAttribute("class","");
            }
            filterHouse2(condition,newHouse);

           /* showIndex(0,newHouse);
            showPage(newHouse);
            firstEndPage(newHouse);
            PriceSort(newHouse);

            titleChange(newHouse);*/
                /*;
            }else {
                showIndex(0,house);
                showPage(house);
                firstEndPage(house);
                PriceSort(house);
                titleChange(house);
            }*/
        }
    }

    /*terms search*/

  /*  let filterHouse2=(conditions,house)=>{

        let term1=[];
        if(conditions.domain.indexOf("不限")===-1){
            for(let i=0;i<house.length;i++){
                if(conditions.domain===house[i].domain){
                    term1.push(house[i]);
                }
            }
        }else {
            term1=house;
        }

        let term2=[];
        if(conditions.decoration.indexOf("不限")===-1){
            for(let i=0;i<term1.length;i++){
                if(conditions.decoration===term1[i].decoration){
                    term2.push(term1[i]);
                }
            }
        }else {
            term2=[...term1];
        }
        let term3=[];
        if(conditions.housetype.indexOf("不限")===-1){
            for(let i=0;i<term2.length;i++){
                if(conditions.housetype===term2[i].houseType[0]){
                    term3.push(term2[i]);
                }
            }
        }else {
            term3=[...term2];
        }
        let term4=[];

        if(conditions.feature.indexOf("不限")===-1){
            for(let i=0;i<term3.length;i++){
                for(let j=0;j<term3[i].feature.length;j++){
                     if(conditions.feature===term3[i].feature[j]){
                        // console.log(term3[i].feature[j]);
                        term4.push(term3[i]);
                    }
                }
            }
        }else {
            term4=[...term3];
        }
        let term5=[];
        if (conditions.totalprice.indexOf("不限")===-1){
            switch (conditions.totalprice){
                case "40万以下":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice<40){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "40-60万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=40 && term4[x].totalPrice<60 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "60-80万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=60 && term4[x].totalPrice<80 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "80-100万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=80 && term4[x].totalPrice<100 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "100-140万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=100 && term4[x].totalPrice<140 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "140-180万":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=140 && term4[x].totalPrice<180 ){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                case "180万以上":
                    for(let x=0;x<term4.length;x++){
                        if(term4[x].totalPrice>=180){
                            term5.push(term4[x]);
                        }
                    }
                    break;
                default:
                    console.log("end");
            }
        }else {
            term5=[...term4];
        }

        let term6=[];
        if(conditions.area.indexOf("不限")===-1){
            switch (conditions.area){
                case "50㎡以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area<50){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "50-70㎡以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=50 && term5[i].area<70){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "70-90㎡以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=70 && term5[i].area<90){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "90-110以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=90 && term5[i].area<110){
                            term6.push(term5[i]);
                        }
                    }
                    break;
                case "110-130以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=1100 && term5[i].area<130){
                            term6.push(term5[i])
                        }
                    }
                    break;
                case "130-150以下":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=130 && term5[i].area<150){
                            term6.push(term5[i])
                        }
                    }
                    break;
                case "150㎡以上":
                    for(let i=0;i<term5.length;i++){
                        if(term5[i].area>=150){
                            term6.push(term5[i]);
                        }
                    }
                    break;
            }

        }else {
            term6=[...term5];
        }



        showIndex(0,term6);
        showPage(term6);
        firstEndPage(term6);
        PriceSort(term6);
        titleChange(term6);

    }*/
    let filterHouse=(conditions,house)=>{
            let flag=false;
            let searchhouse= find(house);
            for(key in conditions){
                if ( conditions[key].indexOf("不限")===-1){
                    flag=true;
                }
            }
            if(flag){
                filterHouse2(conditions,searchhouse);
            }else{
                showIndex(0,searchhouse);
                showPage(searchhouse);
                firstEndPage(searchhouse);
                PriceSort(searchhouse);
                titleChange(searchhouse);
            }


    }
    let termsCss=(i,terms)=>{
        terms[i].setAttribute("class","search_area_active");
        for(let j=0;j<terms.length;j++){
            if(j!=i){
                terms[j].setAttribute("class"," ");
            }
        }
    }
    let termsBtn=(house)=>{
        let domains=document.querySelectorAll("[id^='domain0']");
        let totalprices=document.querySelectorAll("[id^='totalprice0']");
        let areas=document.querySelectorAll("[id^='area0']");
        let housetypes=document.querySelectorAll("[id^='housetype0']");
        let decorations=document.querySelectorAll("[id^='decoration0']");
        let features=document.querySelectorAll("[id^='feature0']");

        for (let i=0;i<domains.length;i++){
            domains[i].onclick=()=>{
                let res=domains[i].getAttribute("class").indexOf("search_area_active");
                if(res===-1){
                    termsCss(i,domains);
                    condition.domain=  domains[i].innerText.trim();
                    filterHouse(condition,house);
                }
            }
        }
        for (let i=0;i<totalprices.length;i++){
            totalprices[i].onclick=()=>{
                let res=totalprices[i].getAttribute("class").indexOf("search_area_active");
                if(res===-1){
                    termsCss(i,totalprices)
                    condition.totalprice=totalprices[i].innerText.trim();
                    filterHouse(condition,house);
                }
            }
        }
        for (let i=0;i<areas.length;i++){
            areas[i].onclick=()=>{
                let res=areas[i].getAttribute("class").indexOf("search_area_active");
                if(res===-1){
                    termsCss(i,areas)
                    condition.area=  areas[i].innerText.trim();
                    filterHouse(condition,house);
                }
            }
        }
        for (let i=0;i<housetypes.length;i++){
            housetypes[i].onclick=()=>{
                let res=housetypes[i].getAttribute("class").indexOf("search_area_active");
                if(res===-1){
                    termsCss(i,housetypes)
                    condition.housetype=  housetypes[i].innerText.trim();
                    filterHouse(condition,house);
                }
            }
        }
        for (let i=0;i<decorations.length;i++){
            decorations[i].onclick=()=>{
                let res=decorations[i].getAttribute("class").indexOf("search_area_active");
                if(res===-1){
                    termsCss(i,decorations)
                    condition.decoration=  decorations[i].innerText.trim();
                    filterHouse(condition,house);
                }
            }
        }
        for (let i=0;i<features.length;i++){
            features[i].onclick=()=>{
                let res=features[i].getAttribute("class").indexOf("search_area_active");
                if(res===-1){
                    termsCss(i,features)
                    condition.feature=  features[i].innerText.trim();
                    filterHouse(condition,house);
                }
            }
        }
    }


    // /!*ajax request*!/
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
            let houses=JSON.parse(result);
            showIndex(0,houses);
            showPage(houses);

            firstEndPage(houses);

            titleChange(houses);
            PriceSort(houses);

            findText(houses);

            termsBtn(houses);

        }
    }
    xmlhttp.open("GET","./../../data/houses.json",true);
    xmlhttp.send();




}











