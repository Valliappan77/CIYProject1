var fred = ["fred", "flinstone", "fred@gmail.com", "50"];

console.log('length = ', fred.length);

//for (var i=0; i<fred.length;i++)

for (var i in fred) {
    if(i==0)
    console.log("First Name",fred[i])
    else if(i==1)
    console.log("Last Name",fred[i])
    else if(i==2)
    console.log("Email",fred[i])
    else(i==3)
    console.log("Age",fred[i])

    console.log(i);
    console.log(fred[i])
}

