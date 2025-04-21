document.addEventListener('DOMContentLoaded', () => {
    const participants = document.querySelectorAll('.participant');
    const videoModal = document.getElementById('videoModal');
    const videoScreen = document.getElementById('videoScreen');
    const closeBtn = document.querySelector('.close-btn');

     
    participants.forEach(participant => {
        participant.addEventListener('click', (event) => {
            event.preventDefault(); 
            const participantId = participant.getAttribute('data-participant');
           
            videoScreen.src = `your_video_call_link/${participantId}`; 
            videoModal.style.display = 'flex'; 
        });
    });

   
    closeBtn.addEventListener('click', () => {
        videoModal.style.display = 'none';
        videoScreen.src = '';  
    });

     
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            videoScreen.src = ''; 
        }
    });

    
    videoModal.addEventListener('click', (event) => {
        event.stopPropagation();  
    });
});
    
    closeBtn.addEventListener('click', () => {
        videoModal.style.display = 'none'; 
        videoScreen.src = '';  
    });

      
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = 'none'; 
            videoScreen.src = ''; 
        }
    });
    
