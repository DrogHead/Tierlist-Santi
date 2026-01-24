document.addEventListener('DOMContentLoaded', function() {

    // Lista di tier
    const tiers = [
    { id: 's-tier', label: 'S', colorClass: 'tier-s', name: 'S' },
    { id: 'a-tier', label: 'A', colorClass: 'tier-a', name: 'A' },
    { id: 'b-tier', label: 'B', colorClass: 'tier-b', name: 'B' },
    { id: 'c-tier', label: 'C', colorClass: 'tier-c', name: 'C' },
    { id: 'd-tier', label: 'D', colorClass: 'tier-d', name: 'D' }
    ];

    // Immagini
    const imgPath = "images/";
    const images = [
        { id: 1, label: 'San Bartolo Longo', src: 'Bartolo-Longo.webp'},
        { id: 2, label: 'Santa Teresa di Lisieux', src: 'Teresa-Lisieux.jpg'},
        { id: 3, label: 'San Sebastiano', src: 'San-Sebastiano.jpg'},
        { id: 4, label: 'San Paolo', src: 'San-Paolo.jpg'},
        { id: 5, label: 'San Giuseppe da Copertino', src: 'Giuseppe-Copertino.jpeg'},
        { id: 6, label: 'Santi Cosma e Damiano', src: 'Cosma-Damiano.jpg'}
    ];

    // Trascinamento
    let draggedElement = null;
    let draggedElementSource = null;
    
    // Gestione dispositivi mobili
    let isTouchDevice = false

    // Inizializzazione
    function initializeTierlist() {
        const tiersContainer = document.getElementById('tiersContainer');
        const imagePool = document.getElementById('imagePool');

        isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Reset
        tiersContainer.innerHTML = '';
        imagePool.innerHTML = '';

        // Righe
        tiers.forEach(tier => {
            const tierRow = document.createElement('div');
            tierRow.className = 'tier-row';
            tierRow.id = tier.id;

            tierRow.innerHTML = `
                <div class="tier-label ${tier.colorClass}">
                    ${tier.label}
                </div>
                <div class="tier-content" data-tier="${tier.id}">
                    <div class="empty-message">Rilascia qui</div>
                </div>
            `;

            tiersContainer.appendChild(tierRow);

            // Eventi per gestire il trascinamento
            const tierContent = tierRow.querySelector('.tier-content');
            tierContent.addEventListener('dragover', handleDragOver);
            tierContent.addEventListener('drop', handleDrop);
            tierContent.addEventListener('dragleave', handleDragLeave);

            // Eventi per gestire il trascinamento mobile
            if (isTouchDevice) {
                tierContent.addEventListener('touchmove', handleTouchMove, { passive: false });
                tierContent.addEventListener('touchend', handleTouchEnd);
                tierContent.addEventListener('touchleave', handleTouchLeave);
            }

        });

        // Crea immagini trascinabili
        images.forEach(image => {
            const imgElement = createDraggableImage(image);
            imagePool.appendChild(imgElement);
        })

        // Update
        document.getElementById('imageCount').textContent = images.length;
    }


    // Costruttore immagini trascinabili
    function createDraggableImage(image) {
        const container = document.createElement('div');
        container.className = 'draggable-image';
        container.draggable = true;
        container.id = `image-${image.id}`;
        container.dataset.imageId = image.id;

        container.innerHTML = `
            <img src="${imgPath+image.src}" alt="${image.label}">
            <div class="image-label">${image.label}</div>
        `;

        // Eventi per gestire il trascinamento
        container.addEventListener('dragstart', handleDragStart);
        container.addEventListener('dragend', handleDragEnd)

        // Eventi per gestire il trascinamento mobile
        if (isTouchDevice) {
            container.addEventListener('touchstart', handleTouchStart, { passive: false });
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            container.addEventListener('touchend', handleTouchEnd);
        }

        return container;
    }


    // Gestione degli eventi di trascinamento
    function handleDragStart(e) {
        draggedElement = this;
        draggedElementSource = this.parentElement.id;

        this.classList.add('dragging');

        setTimeout(() => {
            this.style.display = 'none';
        }, 0);

        e.dataTransfer.setData('text/plain', this.id);
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragEnd(e) {
        this.classList.remove('dragging');
        this.style.display = 'block';
        draggedElement = null;
        draggedElementSource = null;
        clearAllDropZones();
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        this.classList.add('drop-zone');
    }

    function handleDragLeave(e) {
        if (!this.contains(e.relatedTarget) || e.relatedTarget === null) {
            this.classList.remove('drop-zone');
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        this.classList.remove('drop-zone');

        if (!draggedElement) return;

        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        if (!draggable) return;

        processDrop(this, draggable, e.clientX);
    }

    // Gestione eventi di trascinamento mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchCurrentElement = null;
    let touchScrollBackup = null;

    function handleTouchStart(e) {
        e.preventDefault();

        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchCurrentElement = this;
        touchScrollBackup = document.documentElement.style.overflow;

        document.documentElement.style.overflow = 'hidden';

        this.classList.add('dragging');
        this.style.position = 'relative';
        this.style.zIndex = '1000';
        this.style.transition = 'none';

        draggedElement = this;
        draggedElementSource = this.parentElement.id;
    }

    function handleTouchMove(e) {
        if(!touchCurrentElement) return;

        e.preventDefault();

        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        touchCurrentElement.style.transform = `translate(${x-touchStartX}px, ${y-touchStartY}px)`;

        const elementsUnderTouch = document.elementsFromPoint(x,y);
        const dropZone = elementsUnderTouch.find(el =>
            el.classList.contains('tier-content') || el.id === 'imagePool'
        );

        clearAllDropZones();
        if (dropZone) {
            dropZone.classList.add('drop-zone');
        }
    }

    function handleTouchEnd(e) {
        if (!touchCurrentElement) return;

        const touch = e.changedTouches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        const elementsUnderTouch = document.elementsFromPoint(x,y);
        const dropZone = elementsUnderTouch.find(el =>
            el.classList.contains('tier-content') || el.id === 'imagePool'
        );

        if (dropZone) {
            processDrop(dropZone, touchCurrentElement, x);
        }

        // Cleanup
        touchCurrentElement.classList.remove('dragging');
        touchCurrentElement.style.transform = '';
        touchCurrentElement.style.position = '';
        touchCurrentElement.style.zIndex = '';
        touchCurrentElement.style.transition = '';

        touchCurrentElement = null;
        draggedElement = null;
        draggedElementSource = null;

        document.documentElement.style.overflow = touchScrollBackup;
        touchScrollBackup = null;

        clearAllDropZones();
    }

    function handleTouchLeave(e) {
        if (this.classList.contains('drop-zone')) {
            const touch = e.changedTouches[0];
            if (touch) {
                const elementsUnderTouch = document.elementsFromPoint(touch.clientX, touch.clientY);
                if (!elementsUnderTouch.includes(this)) {
                    this.classList.remove('drop-zone');
                }
            }
        }
    }

    // Logica condivisa tra mobile e desktop
    function processDrop(dropZone, draggable, clientX) {

        // Capisco se torno al pool o in un tier
        const isImagePool = dropZone.id === 'imagePool';

        // Rimuovo messaggio di errore
        const emptyMessage = dropZone.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }

        // Se sono nel pool lascio lì
        if (isImagePool) {
            dropZone.appendChild(draggable)
        } else {
            const afterElement = getDragAfterElement(dropZone, clientX);

            if (afterElement == null) {
                dropZone.appendChild(draggable);
            } else {
                dropZone.insertBefore(draggable, afterElement);
            }

            if (draggedElementSource === 'imagePool') {
                updateImageCount();
            }

            const sourceElement = document.getElementById(draggedElementSource);
            if (sourceElement && sourceElement.id !== 'imagePool' && sourceElement.children.length === 0) {
                sourceElement.innerHTML = `<div class="empty-message">Rilascia qui</div>`
            }

            draggable.style.transform = '';

        }

    }


    // Funzione per pulire le drop zone
    function clearAllDropZones() {
        const dropZones = document.querySelectorAll('.drop-zone');
        dropZones.forEach(zone => {
            zone.classList.remove('drop-zone');
        });
    }


    // Funzione per il drop nel tier
    function getDragAfterElement(container, x) {
        const draggableElements = [...container.querySelectorAll('.draggable-image:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width/2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, {offset: Number.NEGATIVE_INFINITY }).element;
    }

    // Funzione per l'update del numero
    function updateImageCount() {
        const imagePool = document.getElementById('imagePool');
        const imagesInPool = imagePool.querySelectorAll('.draggable-image').length;
        document.getElementById('imageCount').textContent = imagesInPool;
    }

    // Esportazione
    async function exportAsImage() {
        const exportBtn = document.getElementById('exportBtn');
        const originalText = exportBtn.innerHTML;

        exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Attendi...';
        exportBtn.disabled = true;

        try {
            const tierlistContainer = document.querySelector('.tierlist-container');

            const canvas = await html2canvas(tierlistContainer, {
                backgroundColor: '#1a1a2e',
                scale: 2,
                useCORS: true,
                logging: false
            });

            const link = document.createElement('a');
            link.download = `tierlist-santi-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            alert('Immagine esportata con successo!');
        } catch (error) {
            console.error('Errore in esportazione:', error)
            alert('Esportazione non riuscita. Per favore riprova');
        } finally {
            exportBtn.innerHTML = originalText;
            exportBtn.disabled = false;
        }
    }

    // Reset
    function resetTierlist() {
        if (confirm('Sicuro di voler resettare?')) {
            initializeTierlist();
        }
    }

    // Eventi per i bottoni
    document.getElementById('exportBtn').addEventListener('click', exportAsImage);
    document.getElementById('resetBtn').addEventListener('click', resetTierlist);

    // Eventi alle immagini
    const imagePool = document.getElementById('imagePool');
    imagePool.addEventListener('dragover', handleDragOver);
    imagePool.addEventListener('drop', handleDrop);
    imagePool.addEventListener('dragleave', handleDragLeave);

    if (isTouchDevice) {
        imagePool.addEventListener('touchmove', handleTouchMove, { passive: false });
        imagePool.addEventListener('touchend', handleTouchEnd);
        imagePool.addEventListener('touchleave', handleTouchLeave);
    }

    initializeTierlist();

});




