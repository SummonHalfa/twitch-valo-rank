export const nightbotLink = () => {
    document.forms['prova'].addEventListener('submit', (event) => {
        event.preventDefault();
        const form = document.forms['prova'];
        const username=form.elements.nickname.value;
        const nightbot = document.getElementById("nightbot");
        const streamelements = document.getElementById("streamelements");
        const streamlabs = document.getElementById("streamlabs");

        if(username && username.includes("#")){
        const nickname = username.slice(0,username.indexOf('#'));
        const tag = username.slice(username.indexOf('#')+1);
        console.log(nickname);
        console.log(tag);

        nightbot.innerHTML = `Nightbot > !command add !rank $(urlfetch https://api.kyroskoh.xyz/valorant/v1/mmr/eu/${nickname}/${tag})`;
        streamelements.innerHTML = `StreamElements > !command add !rank $(urlfetch https://api.kyroskoh.xyz/valorant/v1/mmr/eu/${nickname}/${tag})`;
        streamlabs.innerHTML = `Streamlabs > !addcommand !rank {readapi.https://api.kyroskoh.xyz/valorant/v1/mmr/eu/${nickname}/${tag}}`;
        }
        else{
            nightbot.innerHTML = "Error during username insert (example : MLC summoNN#0000)";
        }

        
    });




}