// alert('Conférence App démarré !');

import TalkService from './common/talkService';
import Layout from './layout/index';
import SpeakerList from './speakers/list/index';
import SessionList from './sessions/list/index';

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService);


layout.render();

var router = () => {
    if (location.hash == '#speakers-list') {
        speakerList.render("main-view");
    } else if (location.hash == '#sessions-list') {
        sessionList.render("main-view");
    } else {
        //TODO plus tard
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});