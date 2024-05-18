type motor={
    name:string,
    model:string,
};
type motor1={
    body:string,
    break:string,
};
//type union main jab hm kisi bhi  1 type ki kisi bhi property ki value daeney main interested
// na ho to 
//union type usey allow krdaeti hae laikn dosri type ki tamam properties ki value daena lazmi hoga warna
//console main error ajayega jaisa k ap daikh saktey hain
let Vehicle:motor|motor1={
    model:"suzuki 110",
    body:"Plastic",
    break:"Hydrolic",
};
console.log(Vehicle);
