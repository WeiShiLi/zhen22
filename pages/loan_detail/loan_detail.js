/**
 * Created by Administrator on 2017/5/24.
 */

window.onload=function () {

  let loans=  document.querySelectorAll("[id^='loan0']");//nav_btn loan type change
    let name=document.querySelector(".loan_type_form");

    let poundage=document.querySelector("#poundage");
    let count= document.querySelector("#count");
    let allow=document.querySelector("#allow");
    let year=document.querySelector("#year");
    let hight=document.querySelector("#hight");
    let fast=document.querySelector("#fast");

    let pledge=document.querySelector("#pledge");
    let loanscontent=document.querySelector("#loans");

    let active=(id)=>{
        loans[id].setAttribute("class", loans[id].getAttribute("class").replace("loan-li","loan_li_active"));
        for(let j=0;j<loans.length;j++){
            if(id!=j){
                loans[j].setAttribute("class","loan-li");
            }
        }
        switch(id)
        {
            case 0:
                name.innerHTML="提前放款";
                poundage.innerHTML="手续费";count.innerHTML="提放款*1%+600";allow.innerHTML="期限";year.innerHTML="4个月"
                hight.innerHTML="最高300万";fast.innerHTML="最快10天";
                pledge.innerHTML="抵押所购房产";
                loanscontent.innerHTML="放款快，保险公司担保，业主提前收款、买家提前入住"
                break;
            case 1:
                name.innerHTML="安家贷";
                poundage.innerHTML="利率";count.innerHTML="年化8% 月息6.66厘";allow.innerHTML="期限";year.innerHTML="36个月"
                hight.innerHTML="最高总房款的40%";fast.innerHTML="一周之内";
                pledge.innerHTML="无抵押";
                loanscontent.innerHTML="无抵押，放款快，解决购房后装修压力"
                break;
            case 2:
                name.innerHTML="按揭贷";
                poundage.innerHTML="利率";count.innerHTML="0.41%";allow.innerHTML="期限";year.innerHTML="1-30年"
                hight.innerHTML="不限";fast.innerHTML="最快10天";
                pledge.innerHTML="抵押所购房产";
                loanscontent.innerHTML="针对二手房贷款购房者，真二网与多家银行合作推出低利率、低手续费的按揭贷款服务。"
                break;
            case 3:
                name.innerHTML="消费贷";
                poundage.innerHTML="利率";count.innerHTML="0.48%";allow.innerHTML="期限";year.innerHTML="1-10年"
                hight.innerHTML="200万以内";fast.innerHTML="最快10天";
                pledge.innerHTML="需抵押房产";
                loanscontent.innerHTML="针对个体工商户和上班族推出的还款灵活、成本低、放款快的小额消费贷款服务。"
                break;
            case 4:
                name.innerHTML="经营贷";
                poundage.innerHTML="利率";count.innerHTML="0.5%";allow.innerHTML="期限";year.innerHTML="1年"
                hight.innerHTML="300万以内";fast.innerHTML="最快10天";
                pledge.innerHTML="需抵押房产";
                loanscontent.innerHTML="针对小微企业，推出审批条件宽松、成本低、还款方式灵活的产权抵押贷款服务。"
                break;
            case 5:
                name.innerHTML="企业贷";
                poundage.innerHTML="利率";count.innerHTML="0.7%";allow.innerHTML="期限";year.innerHTML="1年"
                hight.innerHTML="3000万以内";fast.innerHTML="最快40天";
                pledge.innerHTML="房产及土地还有办公厂房";
                loanscontent.innerHTML="针对大型企业推出的成本低、额度高、放款快的产权抵押贷款服务。"
                break;
            case 6:
                name.innerHTML="信用贷";
                poundage.innerHTML="利率";count.innerHTML="0.6%-0.86%";allow.innerHTML="期限";year.innerHTML="36个月"
                hight.innerHTML="3-50万";fast.innerHTML="最快1天";
                pledge.innerHTML="无需抵押，拼的就是信用";
                loanscontent.innerHTML="有车贷、房贷、保单的用户，推出的额度高、利息低、放款快、无抵押信用贷款服务。"
                break;
            case 7:
                name.innerHTML="赎楼贷";
                poundage.innerHTML="利率";count.innerHTML="月5厘";allow.innerHTML="期限";year.innerHTML="3个月"
                hight.innerHTML="不限";fast.innerHTML="最快1天";
                pledge.innerHTML="无需抵押";
                loanscontent.innerHTML="周期短、解决二手房交易原业主贷款解押问题"
                break;

        }
    }

    for(let i=0;i<loans.length;i++){
            loans[i].onclick=()=>{
             active(i)
        }
    }

    /*page jump parameters*/
    // console.log(location.href)
    let param=location.search;
    if(param){
      let type= param.split("=")[1];
      if(type>=0 && type<8){
          active(type);
      }

    }

}