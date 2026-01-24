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

    // Inizializzazione
    function initializeTierlist() {
        const tiersContainer = document.getElementById('tiersContainer');
        const imagePool = document.getElementById('imagePool');

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

        return container;
    }


    // Gestione degli eventi creati
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

        // Ottengo l'id dell'elemento trascinato
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        if (!draggable) return;

        // Capisco se torno al pool o in un tier
        const isImagePool = this.id === 'imagePool';
        const targetTier = this.dataset.tier;

        // Rimozione del messaggio di errore
        const emptyMessage = this.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }

        // Se sono nel pool lo lascio lì
        if (isImagePool) {
            this.appendChild(draggable);
        }
        // Se sono nel tier
        else {
            const afterElement = getDragAfterElement(this, e.clientX);

            if (afterElement == null) {
                this.appendChild(draggable);
            } else {
                this.insertBefore(draggable, afterElement);
            }

            // Update del numero di santi
            if (draggedElementSource === 'imagePool') {
                updateImageCount();
            }

        }

        // Messaggio di errore
        const sourceElement = document.getElementById(draggedElementSource);
        if (sourceElement && sourceElement.id !== 'imagePool' && sourceElement.children.length === 0) {
            sourceElement.innerHTML = `<div class="empty-message">Rilascia qui</div>`;
        }

        clearAllDropZones();

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
        }, {offset: Number.NEGATIVE_INFINITY }).elemnt;
    }

    // Funzione per l'update del numero
    function updateImageCount() {
        const imagePool = document.getElementById('imagePool');
        const imagesInPool = imagePool.querySelectorAll('.draggble-image').length;
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
    imagePool.addEventListener('dragleave', handleDragLeave)

    initializeTierlist();

});




