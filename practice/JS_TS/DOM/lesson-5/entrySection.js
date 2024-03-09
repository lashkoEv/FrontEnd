'use strict';

const entrySection = document.getElementsByClassName('entrySection')[0];
const entryBtn = document.getElementsByClassName('entryBtn')[0];

const closeEntrySection = () => {
	hideElem(entrySection);
};
const signalEntryBtnClicked = () => {
	pubSub.publish('entryBtnClick');
};
const onEntryBtnClick = () => {
	closeEntrySection();
	signalEntryBtnClicked();
};

const initEntrySectionModule = () => {
	entryBtn.onclick = onEntryBtnClick;
};