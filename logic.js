document.addEventListener('DOMContentLoaded', function() {
    const hoverText = document.getElementById('hoverText');

    hoverText.addEventListener('mouseenter', function() {
        hoverText.textContent = 'Explore the Games!!';
    });

    hoverText.addEventListener('mouseleave', function() {
        hoverText.textContent = 'ゲームを探索する';
    });
});