// Use one function value in other function.

function gp()
{
    var a = "Hello I am 13.";
    return a;
}

function abc()
{
    var cc = gp();
    alert(cc);
}
abc();