export const skipBtnAnimationIn = () => {
	const selectionTopHeader = document.getElementById('selectionTopHeader') as HTMLElement;
	const backBtn = document.getElementById('backBtn') as HTMLElement;
	const skipBtn = document.getElementById('skipBtn') as HTMLElement;

	selectionTopHeader.style.flexDirection = 'row';
	backBtn.style.display = 'block';
	skipBtn.style.display = 'none';
};
export const backBtnAnimationIn = () => {
	const selectionTopHeader = document.getElementById('selectionTopHeader') as HTMLElement;
	const backBtn = document.getElementById('backBtn') as HTMLElement;
	const skipBtn = document.getElementById('skipBtn') as HTMLElement;
	selectionTopHeader.style.flexDirection = 'row-reverse';
	backBtn.style.display = 'none';
	skipBtn.style.display = 'block';
};

export const letsGoAnimationIn = () => {
	// rotate selectionProcess
	const selectionProcess = document.getElementById('selectionProcess') as HTMLElement;
	const selectionTopHeader = document.getElementById('selectionTopHeader') as HTMLElement;

	selectionProcess.style.transform = 'perspective(800px) rotateY(90deg) rotateX(-90deg) scale(0.6)';

	selectionTopHeader.style.transform = 'translateY(200px)';

	selectionTopHeader.style.borderRadius = '10px';
};

export const letsGoAnimationOut = () => {
	// rotate selectionProcess
	const selectionProcess = document.getElementById('selectionProcess') as HTMLElement;
	const selectionTopHeader = document.getElementById('selectionTopHeader') as HTMLElement;

	selectionProcess.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';

	selectionTopHeader.style.transform = 'translateY(2rem)';

	selectionTopHeader.style.borderRadius = '0px';

	selectionTopHeader.style.borderTopLeftRadius = '10px';
	selectionTopHeader.style.borderTopRightRadius = '10px';
};
