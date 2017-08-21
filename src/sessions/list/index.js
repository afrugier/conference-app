import TalkService from '../../common/talkService';

export default class SessionList {
    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {
        this.talkService.findAllSessions().then(sessions => {
            document.getElementById(idView).innerHTML = "<ul>" + sessions.map(session => (`<li>${session.title}</li>`)).join('') + "</ul>";
        });

    }
}