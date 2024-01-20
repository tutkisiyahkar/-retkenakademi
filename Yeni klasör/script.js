function kontrolEt () {
    var a=Number (prompt ("ilk sayı:"))
    var b=Number (prompt("ikinci sayı:"))
    if(a>b) {
        alert ("a b den büyüktür")
    } else if (a<b) {
        alert ("a b den küçüktür")
    } else {
        alert ("a ve b birbirine eşittir")
    }
}
kontrolEt ()