'use strict';

const workersSection = document.getElementsByClassName('workersSection')[0];
const workersList = document.getElementsByClassName('workersList')[0];
const copyWorkersListBtn = document.getElementsByClassName('copyWorkersListBtn')[0];
const rerandomWorkersListBtn = document.getElementsByClassName('rerandomWorkersListBtn')[0];
const workersSound = document.getElementsByClassName('workersSound')[0];
const workersListCopyInput = document.getElementsByClassName('workersListCopyInput')[0];
const genWorkersCount = 20;

let workersListData = null;

const printProfile = (profile) => {
	workersList.textContent += profile + '\n';
};
const printProfiles = (profiles) => {
	workersList.textContent = '';
	profiles.forEach((profile) => { printProfile(profile); });
};
const genWorkersList = () => {
	workersListData = genProfiles(genWorkersCount);
}
const openWorkersSection = () => {
	genWorkersList();
	printProfiles(workersListData);
	showElem(workersSection);
};
const copyWorkersListToClipboard = () => {
	const workersListDataTmp = workersListData.map((profile) => `'${profile}'`);
	workersListCopyInput.value = `[${workersListDataTmp}]`;
	navigator.clipboard.writeText(workersListCopyInput.value);
};
const onCopyWorkersListBtnClick = () => {
	copyWorkersListToClipboard();
	workersSound.play();
};
const onRerandomWorkersListBtnClick = () => {
	genWorkersList();
	printProfiles(workersListData);
};
const initWorkersSectionModule = () => {
	copyWorkersListBtn.onclick = onCopyWorkersListBtnClick;
	rerandomWorkersListBtn.onclick = onRerandomWorkersListBtnClick;
	
	pubSub.subscribe('workersBtnClick', openWorkersSection);
};