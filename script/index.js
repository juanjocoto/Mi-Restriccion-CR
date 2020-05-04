var negative1 = document.createElement("IMG");
var negative2 = document.createElement("IMG");

var check1 = document.createElement("IMG");
var check2 = document.createElement("IMG");
var check3 = document.createElement("IMG");
var check4 = document.createElement("IMG");
var check5 = document.createElement("IMG");

function getRestriction(){
    setImageValues();
    var placa = document.getElementById('selectCarPlate').value;
    document.getElementById('result').style="display:inline-block";
    switch (placa) {
        case '0':
            document.getElementById("viernes").appendChild(negative1);
            document.getElementById("sabado").appendChild(negative2);
            
            document.getElementById("lunes").appendChild(check1);
            document.getElementById("martes").appendChild(check2);
            document.getElementById("miercoles").appendChild(check3);
            document.getElementById("jueves").appendChild(check4);
            document.getElementById("domingo").appendChild(check5);
            break;
        
        case '1':
            document.getElementById("lunes").appendChild(negative1);
            document.getElementById("domingo").appendChild(negative2);
            
            document.getElementById("martes").appendChild(check1);
            document.getElementById("miercoles").appendChild(check2);
            document.getElementById("jueves").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("sabado").appendChild(check5);
            break;

        case '2':
            document.getElementById("lunes").appendChild(negative1);
            document.getElementById("sabado").appendChild(negative2);
            
            document.getElementById("martes").appendChild(check1);
            document.getElementById("miercoles").appendChild(check2);
            document.getElementById("jueves").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("domingo").appendChild(check5);
            break;
            
        case '3':
            document.getElementById("martes").appendChild(negative1);
            document.getElementById("domingo").appendChild(negative2);

            document.getElementById("lunes").appendChild(check1);
            document.getElementById("miercoles").appendChild(check2);
            document.getElementById("jueves").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("sabado").appendChild(check5);
            break;
            
        case '4':
            document.getElementById("martes").appendChild(negative1);
            document.getElementById("sabado").appendChild(negative2);
            
            document.getElementById("lunes").appendChild(check1);
            document.getElementById("miercoles").appendChild(check2);
            document.getElementById("jueves").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("domingo").appendChild(check5);
            break;
        
        case '5':
            document.getElementById("miercoles").appendChild(negative1);
            document.getElementById("domingo").appendChild(negative2);

            document.getElementById("lunes").appendChild(check1);
            document.getElementById("martes").appendChild(check2);
            document.getElementById("jueves").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("sabado").appendChild(check5);
            break;
        
        case '6':
            document.getElementById("miercoles").appendChild(negative1);
            document.getElementById("sabado").appendChild(negative2);

            document.getElementById("lunes").appendChild(check1);
            document.getElementById("martes").appendChild(check2);
            document.getElementById("jueves").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("domingo").appendChild(check5);
            break;

        case '7':
            document.getElementById("jueves").appendChild(negative1);
            document.getElementById("domingo").appendChild(negative2);
  
            document.getElementById("lunes").appendChild(check1);
            document.getElementById("martes").appendChild(check2);
            document.getElementById("miercoles").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("sabado").appendChild(check5);
            break;

        case '8':
            document.getElementById("jueves").appendChild(negative1);
            document.getElementById("sabado").appendChild(negative2);

            document.getElementById("lunes").appendChild(check1);
            document.getElementById("martes").appendChild(check2);
            document.getElementById("miercoles").appendChild(check3);
            document.getElementById("viernes").appendChild(check4);
            document.getElementById("domingo").appendChild(check5);
            break;

        case '9':
            document.getElementById("viernes").appendChild(negative1);
            document.getElementById("domingo").appendChild(negative2);

            document.getElementById("lunes").appendChild(check1);
            document.getElementById("martes").appendChild(check2);
            document.getElementById("miercoles").appendChild(check3);
            document.getElementById("jueves").appendChild(check4);
            document.getElementById("sabado").appendChild(check5);
            break;

        default:
            break;
    }
}

function setImageValues(){
    negative1.setAttribute("src", "content/icons/icons8-delete.png");
    negative2.setAttribute("src", "content/icons/icons8-delete.png");

    check1.setAttribute("src", "content/icons/icons8-checkmark.png");
    check2.setAttribute("src", "content/icons/icons8-checkmark.png");
    check3.setAttribute("src", "content/icons/icons8-checkmark.png");
    check4.setAttribute("src", "content/icons/icons8-checkmark.png");
    check5.setAttribute("src", "content/icons/icons8-checkmark.png");
}