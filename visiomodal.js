document.addEventListener('DOMContentLoaded', () => {
    const participants = document.querySelectorAll('.participant');
    const videoModal = document.getElementById('videoModal');
    const videoScreen = document.getElementById('videoScreen');
    const closeBtn = document.querySelector('.close-btn');

    // Écouter les clics sur les participants  
    participants.forEach(participant => {
        participant.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du lien  
            const participantId = participant.getAttribute('data-participant');
            // Mise à jour de l'URL de l'iframe en fonction du participant  
            videoScreen.src = `your_video_call_link/${participantId}`; // Remplacez par votre lien  
            videoModal.style.display = 'flex'; // Affiche la modale  
        });
    });

    // Fermer la modale  
    closeBtn.addEventListener('click', () => {
        videoModal.style.display = 'none'; // Masquer la modale  
        videoScreen.src = ''; // Réinitialise l'URL pour arrêter la vidéo  
    });

    // Fermer la modale si l'utilisateur clique en dehors du contenu  
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = 'none'; // Masquer la modale  
            videoScreen.src = ''; // Réinitialise l'URL pour arrêter la vidéo  
        }
    });
});