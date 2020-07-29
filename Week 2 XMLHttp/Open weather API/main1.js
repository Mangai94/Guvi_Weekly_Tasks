var httprequest = new XMLHttpRequest();

httprequest.send();

httprequest.onreadystatechange = function()
{
    if(this.readyState ===4 || this.readyState == 200)
    {
        document.getElementById('openweatherapi').innerText = this.response;
    }
}