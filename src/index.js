// alert('Conférence App démarré !');

import TalkService from './common/talkService';
let TalkService = new TalkService();

TalkService.findAllSpeakers()
    .then(speakers => {
        speakers.map(speaker => speaker.firstname).forEach(speaker => {
            console.log(speak);
        });
    })
    .catch(error => console.log(error));
