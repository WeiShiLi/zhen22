/**
 * Created by baby on 2017/5/25.
 */


window.onload=()=>{

    let detailHouse=(house)=>
    {
        let param = location.search;
        let detailhouse;
        if (param) {
            let id = param.split("=")[1];
            console.log(id);

            for (let i = 0; i < house.length; i++) {
                if (parseInt(id) === house[i].id) {
                    detailhouse = house[i];

                    break;
                }
            }
        }

        let details = document.querySelectorAll("[id^='detail0']");
        details[0].innerHTML = detailhouse.domain;
        details[1].innerHTML = detailhouse.name;
        details[2].innerHTML = detailhouse.id;
        details[3].innerHTML = detailhouse.domain;
        details[4].innerHTML = detailhouse.name;
        details[5].innerHTML = detailhouse.feature[0];
        details[6].innerHTML = detailhouse.feature[1];
        details[7].innerHTML = detailhouse.totalPrice;
        details[8].innerHTML = detailhouse.unitPrice;
        details[9].innerHTML = detailhouse.payment;
        details[10].innerHTML = detailhouse.monthPay;
        details[11].innerHTML = detailhouse.area;
        details[12].innerHTML = detailhouse.houseType[0] + " " +detailhouse.houseType[1] +" " + detailhouse.houseType[2] + " " +detailhouse.houseType[3];
        details[13].innerHTML = detailhouse.floor;
        details[14].innerHTML = detailhouse.year;
        details[15].innerHTML = detailhouse.direction;
        details[16].innerHTML = detailhouse.decoration;
        details[17].innerHTML = detailhouse.elevator;
        details[18].innerHTML = detailhouse.floorType;
        details[19].innerHTML = detailhouse.host;

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
            let houses=JSON.parse(result);
            detailHouse(houses);




        }
    }
    xmlhttp.open("GET","./../../data/houses.json",true);
    xmlhttp.send();



}

