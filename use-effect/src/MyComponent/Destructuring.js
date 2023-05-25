export function Destructuring()
{
    //const arr=[11,22,33,44,55,66,77];
    //const [a,b,,c, ...rest]=arr;
    //onsole.log(rest);
    //let {aa,...rest}={aa:1,bb:2,cc:3}
    //let {x,y}=obj1;
 //   console.log(rest);
// spreading................
    let arr=[21,22,23]
    let obj1={...arr}
    console.log(obj1)

    function add(k,l,m)
    {
        return k+l+m;
    }    

    console.log(add(...arr));
    let obj2=
    {
        name:"Kul",
        title:"enginner",
        desc:"software enginner"
    }
    

    console.log({...obj2 ,name:"cool"});
}