import TalkService from '../../common/talkService';

export default class SpeakerList {
    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {
        this.talkService.findAllSpeakers().then(speakers => {
            document.getElementById(idView).innerHTML = "<ul>" + speakers.map(speaker => (`<li>${speaker.firstname}</li>`)).join('') + "</ul>";
        });

    }
}