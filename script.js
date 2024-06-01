document.addEventListener('DOMContentLoaded', function() {
    const particleContainer = document.getElementById('particle-container');

    for (let i = 0; i < 500; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 50 + 30}s`; // Slower animation
        particle.style.animationDelay = `${Math.random() * 20}s`; // Increased delay variation
        particleContainer.appendChild(particle);
    }
});

// CSS for particles
const particleStyle = document.createElement('style');
particleStyle.innerHTML = `
.particle {
    position: absolute;
    width: 3px; /* Smaller size */
    height: 3px; /* Smaller size */
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: moveParticles linear infinite;
}

@keyframes moveParticles {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100vh);
    }
}
`;
document.head.appendChild(particleStyle);
