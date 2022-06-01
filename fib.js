function printFib(){

    var n1 = 0;
    var n2 = 1;
    var i=0;
    var next=0;
    console.log(n1);

    for (i = 1; i < 10; i++) {
       console.log(n2);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}

printFib();
