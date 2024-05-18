
export{}
type user={
    name:string,
    id:number,
};
type user1={
    age:number,
    e_mail:string,
};

let Person=(client:user & user1)=>{
    return `my id is ${client.id}`
};
let client={
    name:"Saad",
    id:1234,
    age:28,
    e_mail:"saadmunawar315@gmail.com",
};
console.log(Person(client));

