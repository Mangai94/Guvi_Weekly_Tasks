var request = new XMLHttpRequest();
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true);

request.onreadystatechange = function()
{
    if(this.readyState === 4 && this.status === 200)
    {
        console.log(this.response);
        document.getElementById('apidata').innerHTML = this.response;
    }
}

request.send();