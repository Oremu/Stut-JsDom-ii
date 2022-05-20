function Musicians(number) {
    if (number == 1) {
        console.log("Solo")
    } else if(number == 2){
        console.log("Duet");
    } else if(number == 3){
        console.log("Trio");
    } else if (number == 4){
        console.log("Quartet");
    } else if (number > 4){
        console.log("this is a large group");
    } else {
        console.log("this is not a group");
    }
    return number;
};

Musicians(1);
Musicians(2);
Musicians(3);
Musicians(4);
Musicians(10);
Musicians(-2);

