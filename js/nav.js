document.addEventListener('DOMContentLoaded', () => {

    // NAVIGATION BUTTONS
    const buttonUser = document.querySelector('.D-user');
    const buttonEvent = document.querySelector('.D-event');
    const buttonSuspension = document.querySelector('.D-suspension');
    const buttonUpload = document.querySelector('.D-upload');

    // CONTENT PANELS
    const contentUser = document.querySelector('.content-user');
    const contentEvent = document.querySelector('.content-event');
    const contentSuspension = document.querySelector('.content-suspension');
    const contentUpload = document.querySelector('.content-upload');

    // ALL CONTENT PANELS
    const allContents = [
        contentUser,
        contentEvent,
        contentSuspension,
        contentUpload
    ];
    const navigation = [
        [buttonUser, contentUser],
        [buttonEvent, contentEvent],
        [buttonSuspension, contentSuspension],
        [buttonUpload, contentUpload]
    ];

    // FUNCTION TO SWITCH CONTENT
    function showContent(selectedContent) {
        allContents.forEach(content => {
            content.classList.add('hidden');
        });

        selectedContent.classList.remove('hidden');

        navigation.forEach(([button, content]) => {
            const isSelected = content === selectedContent;
            button.classList.toggle('is-active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });
    }

    // BUTTON EVENTS
    buttonUser.addEventListener('click', () => {
        showContent(contentUser);
    });

    buttonEvent.addEventListener('click', () => {
        showContent(contentEvent);
    });

    buttonSuspension.addEventListener('click', () => {
        showContent(contentSuspension);
    });

    buttonUpload.addEventListener('click', () => {
        showContent(contentUpload);
    });

    // DEFAULT PAGE
    showContent(contentUser);

    });