const req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/speakers', true);

export default class TalkService {

    constructor() {
    }

    findAllSpeakers() {
        return new Promise((resolve, reject) => {
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                    if (req.status == 200)
                        resolve(JSON.parse(req.responseText));
                    else
                        reject("Erreur pendant le chargement de la page");
                }
            }
            req.send(null);
        });
    }
}