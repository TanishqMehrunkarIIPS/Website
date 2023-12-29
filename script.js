let turn=true;
const check=(x)=>
{
    $.ajax(
    {
        method: "get",
        url: `./outputs/${x}.png`,
        error: function()
        {
            document.querySelector(".right").disabled = true;
        },
        success: function()
        {
            document.querySelector(".right").disabled = false;
        }
    });
}
check(1.1);
document.querySelector(".clicked").addEventListener('click',(e)=>
{
    if(e.target.classList.contains("clicks"))
    {
        const val=e.target.textContent;
        document.querySelector(".code").setAttribute("src",`./codes/${val}.png`);
        check(val);
        turn=true;
    }
});

document.querySelector(".left").addEventListener("click",()=>
{
    if(!turn)
    {
        const val=document.querySelector(".code").getAttribute("src");
        const slice1=val.slice(0,val.length-4);
        const slice2=slice1.substr(10);
        let x = Number(slice2);
        document.querySelector(".code").setAttribute("src",`./codes/${x}.png`);
        check(x);
    }
    turn=true;
});

document.querySelector(".right").addEventListener("click",()=>
{
    if(turn)
    {
        const val=document.querySelector(".code").getAttribute("src");
        const slice1=val.slice(0,val.length-4);
        const slice2=slice1.substr(8);
        let x = Number(slice2);
        document.querySelector(".code").setAttribute("src",`./outputs/${x}.png`);
        check(x);
    }
    turn=false;
});