import MicroModal from 'micromodal';

if (document.getElementById('light-box-demo') !== null) {
    MicroModal.init({
        onShow: (modal) => {
            console.info(`${modal.id} is shown`);
        },
        onClose: (modal) => {
            console.info(`${modal.id} is hidden`);
        },
        disableScroll: true,
        disableFocus: false,
        awaitCloseAnimation: false,
        debugMode: false
    });
}
