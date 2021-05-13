async function anchal()
{                                                                                                                                              
    console.log('insde anchal function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('after response');
    return users;
    //return 'anchal agarwal';
}
console.log('before');
let a = anchal();
console.log('after');
console.log(a);
console.log('last line of this js file')
a.then((data)=>{
    console.log (`Data ${JSON.stringify( data)}`)
})