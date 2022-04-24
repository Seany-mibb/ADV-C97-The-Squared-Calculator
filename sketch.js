function btn1()
{
    document.getElementById("textbox").innerHTML += "1"
}

function btn2()
{
    document.getElementById("textbox").innerHTML += "2"
}

function btn3()
{
    document.getElementById("textbox").innerHTML += "3"
}

function btn4()
{
    document.getElementById("textbox").innerHTML += "4"
}

function btn5()
{
    document.getElementById("textbox").innerHTML += "5"
}

function btn6()
{
    document.getElementById("textbox").innerHTML += "6"
}

function btn7()
{
    document.getElementById("textbox").innerHTML += "7"
}

function btn8()
{
    document.getElementById("textbox").innerHTML += "8"
}

function btn9()
{
    document.getElementById("textbox").innerHTML += "9"
}

function btn0()
{
    document.getElementById("textbox").innerHTML += "0"
}

function btnT()
{
    document.getElementById("textbox").innerHTML += "*"
}

function btnD()
{
    document.getElementById("textbox").innerHTML += "/"   
}

function enter()
{
    d = document.getElementById("textbox").value * document.getElementById("textbox").value
    document.getElementById("textbox").innerHTML = "Ans: " + d;
    document.getElementById("enter").play()

}

function cl()
{
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("clear").play()
}