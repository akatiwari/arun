function checkOdd(a)
{
    if(a%2!==0)
    {
        return true
    }
    return false
}
function limit(b)
{
    for( var i=0;i<=b;i++)
{
    if(checkOdd(i))
    {
        console.log(i)
    }
}
}
limit(10)
