// alert('Conférence App démarré !');

import TalkService from './common/talkService';
import Layout from './layout/index';
import SpeakerList from './speakers/list/index';

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);

layout.render();
speakerList.render("main-view");