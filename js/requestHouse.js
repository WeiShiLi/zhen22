/**
 * Created by Administrator on 2017/5/27.
 */

window.onload=()=>{

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
           showHouse(houses);
        }
    }
    xmlhttp.open("GET","./../../data/houses.json",true);
    xmlhttp.send();
}
