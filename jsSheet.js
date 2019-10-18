function overText(x) {
    x.style.color = "#EFC050";
}

function outText(x) {
    x.style.color = "#FFFFFF";
}

function clickText(x){
let myid;
switch(x){
    case myFullName: 
        myid = "myFullName";
        break;
    case myName:
        myid = "myName";
        break;
    case myEdu_1:
        myid = "mymyEdu_1";
        break;
    case myEduPro_1:
        myid = "mmyEduPro_1";
        break;
    case myEduDate_1:
        myid = "myEduDate_1";
        break;
    case myEdu_2:
        myid = "mmyEdu_2";
        break;
    case myEduPro_2:
        myid = "myEduPro_2";
        break;
    case myEduDate_2:
        myid = "myEduDate_2";
        break;
    default:
        alert("not found")
        break;
}
alert(myid)

} 