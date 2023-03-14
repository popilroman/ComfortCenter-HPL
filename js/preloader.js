document.body.onload = function()
{
    const preloader = document.querySelector(".preloader");
    const bodyTag = document.body;

    bodyTag.style.overflowY = "hidden";
    setTimeout(function()
    {
        if (preloader.classList.contains("preloader__done") === false)
        {
            preloader.classList.add("preloader__done");
            bodyTag.style.overflowY = "auto";
        }
    }, 1500);
}

document.body.onscroll = function()
{
    if (preloader.classList.contains("preloader__done"))
    {
        preloader.style.display = "none";
    }
}