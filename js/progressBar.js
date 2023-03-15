document.addEventListener("DOMContentLoaded", function() 
{
    window.addEventListener("load", function() 
    {
        const bar = this.document.getElementById("progressBar");
        function barScroll()
        {
            let windowScroll = document.body.scrollTop || this.document.documentElement.scrollTop;
            let windowHeight = this.document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
            let scrollPercent = (windowScroll / windowHeight) * 100;
            bar.style.width = scrollPercent + "%";

            if (scrollPercent === 100)
            {
                bar.style.borderTopRightRadius = 0 + "px";   
                bar.style.borderBottomRightRadius = 0 + "px"; 
            } else 
            {
                bar.style.borderTopRightRadius = 10 + "px";   
                bar.style.borderBottomRightRadius = 10 + "px";    
            }

        }
        this.window.addEventListener("scroll", barScroll);
    });
});