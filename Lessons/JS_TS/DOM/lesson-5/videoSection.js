'use strict';

const videoSection = document.getElementsByClassName('videoSection')[0];
const videoSection_video = document.getElementsByClassName('videoSection_video')[0];
const showWorkersBtn = document.getElementsByClassName('showWorkersBtn')[0];

const hideVideoSection = () => {
	hideElem(videoSection);
};
const openVideoSection = () => {
	showElem(videoSection);
	playVideo();
};
const playVideo = () => {
	videoSection_video.play();
};
const showWorkersListBtn = () => {
	showElem(showWorkersBtn);
};
const signalWorkersBtnClick = () => {
	pubSub.publish('workersBtnClick');
};
const onWorkersBtnClick = () => {
	hideVideoSection();
	signalWorkersBtnClick();
};
// const signalVideoEnded = () => {
	// pubSub.publish('videoSectionVideoEnded');
// };
const onVideoEnded = () => {
	showWorkersListBtn();
};

const initVideoSectionModule = () => {
	videoSection_video.onended = onVideoEnded;
	showWorkersBtn.onclick = onWorkersBtnClick;

	// pubSub.subscribe('startVideoInVideoSection', playVideo);
	pubSub.subscribe('entryBtnClick', openVideoSection);
};