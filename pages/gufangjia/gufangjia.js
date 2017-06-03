/**
 * Created by Administrator on 2017/6/2.
 */


window.onload=()=>{

    let housetypes=document.querySelectorAll("[id^='housetype0']")
    for(let i=0;i<housetypes.length;i++){
        housetypes[i].onclick=()=>{
            let getclass=housetypes[i].getAttribute("class");
            let flag=getclass.indexOf("housetype_active");
            if(flag===-1){
                housetypes[i].setAttribute("class",getclass.concat(" housetype_active"))
                for(let j=0;j<housetypes.length;j++){
                    if(j!=i){

                        let get2=housetypes[j].getAttribute("class");
                        let f=get2.indexOf("housetype_active");
                        if(f!=-1){
                            housetypes[j].setAttribute("class",get2.replace("housetype_active"," "))
                        }

                    }
                }
            }
        }
    }


    /*select show hidde*/
    let direction=document.querySelector("#direction");
    let flag=true;
    let select=document.querySelector(".select_hidde");
    direction.onclick=()=>{

        if(flag){
            select.style.display="block";
            flag=false;

        }else {
            select.style.display="none";
            flag=true
        }
    }
    /*options choose*/
    let options=document.querySelectorAll("[id^='direction0']");
    for(let i=0;i<options.length;i++){
        options[i].onclick=()=>{
            let checked=document.getElementById("checked");
            select.style.display="none";
            flag=!flag;
            checked.innerHTML=options[i].value;
        }
    }

    var arr=[9686,10303,10475]
    var myChart = echarts.init(document.getElementById('table1'));
    option1 = {
        title: {
            text: '',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['市场均价']
        },
        xAxis: {
            data: ["2016-8","2016-11","2016-12"]
        },
        yAxis: {
            type:"value",
            min:9500,
            max:10500,
            splitNumber:4,
        },
        series: [{
            name: '市场均价',
            type: 'line',
            data: arr,
            stack: '销量',

        }]
    };
    myChart.setOption(option1);
    window.addEventListener("resize",function(){
        myChart.resize();
    });



    var arr2=[5388,8511,6297]
    var myChart2 = echarts.init(document.getElementById('table2'));
    option2 = {
        title: {
            text: '',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['成交量']
        },
        xAxis: {
            data: ["2016-8","2016-11","2016-12"]
        },
        yAxis: {
            type:"value",
            min:5000,
            max:9000,
            splitNumber:4,
        },
        series: [{
            name: '成交量',
            type: 'line',
            data: arr2,
            stack: '销量',
           itemStyle : {
             normal : {
             lineStyle:{
             color:' #009B78'
             }
             }
             },

        }]
    };
    myChart2.setOption(option2);
    window.addEventListener("resize",function(){
        myChart2.resize();
    });
}

