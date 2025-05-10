document.addEventListener('DOMContentLoaded', () => {
    const participants = document.querySelectorAll('.participant');
    const videoModal = document.getElementById('videoModal');
    const videoScreen = document.getElementById('videoScreen');
    const closeBtn = document.querySelector('.close-btn');

    participants.forEach(participant => {
        participant.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Participant clicked:', participant);
            const participantId = participant.getAttribute('data-participant');
            videoScreen.src = `your_video_call_link/${participantId}`;
            videoModal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        console.log('Close button clicked');
        videoModal.style.display = 'none';
        videoScreen.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            console.log('Video modal clicked outside');
            videoModal.style.display = 'none';
            videoScreen.src = '';
        }
    });

    videoModal.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
