document.querySelector(".background").addEventListener("click",(e)=>
{
    if(e.target.classList.contains('icons'))
    {
        const link=e.target.dataset.url;
        window.open(link,"_blank");
    }
});