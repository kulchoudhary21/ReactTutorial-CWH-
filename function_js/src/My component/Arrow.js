function Arrow()
{
    console.log("Hello");
    function add(a,b)
    {
        console.log(a+b);
    }
    const sub=function(x,y)
    {
        console.log(x-y);
    }
    const arow=(a,b)=>console.log(a*b)
    
    return (
        <div>{add(22,44)}{sub(1,4)}{arow(4,4)}</div>
       
    );
}
export default Arrow;