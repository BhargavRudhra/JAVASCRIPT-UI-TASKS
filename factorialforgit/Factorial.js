function factorial() {
  var initialnum, inputnum, factorialnum;
  factorialnum  = 1;
  inputnum = document.getElementById("num").value;
  for (initialnum = 1; initialnum <= inputnum; initialnum++) {
    factorialnum = factorialnum * initialnum;
  }
  initialnum = initialnum - 1;
  document.getElementById("result").innerHTML =
    "The factorial of the number " + initialnum + " is: " + factorialnum;
}
