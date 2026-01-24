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
                    <div class="empty-message"></div>
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
    let activeTouch = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    function handleTouchStart(e) {
        if (e.touches.length !== 1) return;

        const touch = e.touches[0];
        const element = e.target.closest('.draggable-image');
        if(!element) return;

        e.preventDefault();

        activeTouch = {
            id: touch.identifier,
            startX: touch.clientX,
            startY: touch.clientY,
            element: element
        }

        draggedElement = element;
        draggedElementSource = element.parentElement.id;

        const rect = element.getBoundingClientRect();
        dragOffsetX = touch.clientX - rect.left;
        dragOffsetY = touch.clientY - rect.top;

        element.classList.add('touch-active')
    }

    function handleTouchMove(e) {
        if (!activeTouch || !draggedElement) return;

        const touch = Array.from(e.touches).find(t => t.identifier === activeTouch.id);
        if (!touch) return;

        e.preventDefault();

        const x = touch.clientX;
        const y = touch.clientY;

        if (!draggedElement.classList.contains('dragging')) {
            const dx = Math.abs(x-activeTouch.startX);
            const dy = Math.abs(y-activeTouch.startY);

            if (dx > 10 || dy > 10) {
                draggedElement.classList.add('dragging');
                draggedElement.style.position = 'fixed';
                draggedElement.style.zIndex = '99999';
                draggedElement.style.pointerEvents = 'none';
                draggedElement.style.transition = 'none'

                draggedElement.style.left = `${x-dragOffsetX}px`;
                draggedElement.style.top = `${y-dragOffsetY}px`;
            }
            return;
        }

        draggedElement.style.left = `${x-dragOffsetX}px`;
        draggedElement.style.top = `${y-dragOffsetY}px`;

        const scrollZoneHeight = 80;
        const scrollSpeed = 8;

        if (y < 2*scrollZoneHeight) {
            window.scrollBy({ top: -scrollSpeed, behavior: 'instant' });
            draggedElement.style.top = `${parseFloat(draggedElement.style.top)-scrollSpeed}px`;
        } else if (y > window.innerHeight - scrollZoneHeight) {
            window.scrollBy({ top: scrollSpeed, behavior: 'instant'});
            draggedElement.style.top = `${parseFloat(draggedElement.style.top)+scrollSpeed}px`;
        }

        updateScrollIndicators(y);

        clearAllDropZones();
        const elements = document.elementsFromPoint(x,y);

        for (const el of elements) {
            if (el === draggedElement || el.contains(draggedElement)) continue;
            if (el.classList.contains('tier-content') || el.id === 'imagePool') {
                el.classList.add('drop-zone');
                break;
            }
        }

    }

    function handleTouchEnd(e) {
        if (!activeTouch || !draggedElement) return;

        const touch = Array.from(e.changedTouches).find(t => t.identifier === activeTouch.id);
        if (!touch) return;

        const wasDragging = draggedElement.classList.contains('dragging');
        if (wasDragging) {
            const x = touch.clientX;
            const y = touch.clientY;

            const elements = document.elementsFromPoint(x,y);
            let dropZone = null;

            for (const el of elements) {
                if (el === draggedElement || el.contains(draggedElement)) continue;

                if (el.classList.contains('tier-content') || el.id === 'imagePool') {
                    dropZone = el;
                    break;
                }
            }

            draggedElement.classList.remove('dragging');
            draggedElement.style.position = '';
            draggedElement.style.left = '';
            draggedElement.style.top = '';
            draggedElement.style.zIndex = '';
            draggedElement.style.pointerEvents = '';
            draggedElement.style.transition = '';
            draggedElement.style.width = '';
            draggedElement.style.height = '';

            if (dropZone) {
                processDrop(dropZone, draggedElement, x);
            }
        }

        draggedElement.classList.remove('touch-active');
        activeTouch = null;
        draggedElement = null;
        draggedElementSource = null;

        clearAllDropZones();

    }

    function handleTouchCancel(e) {
        if (draggedElement) {
            draggedElement.classList.remove('dragging', 'touch-active');
            draggedElement.style.position = '';
            draggedElement.style.left = '';
            draggedElement.style.top = '';
            draggedElement.style.zIndex = '';
            draggedElement.style.pointerEvents = '';
            draggedElement.style.transition = '';
        }
        
        activeTouch = null;
        draggedElement = null;
        draggedElementSource = null;
        
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

    // Aggiunta e gestione indicatori scroll
    if ('ontouchstart' in window) {
        const scrollZoneTop = document.createElement('div');
        scrollZoneTop.className = 'scroll-zone-indicator scroll-zone-top';
        const scrollZoneBottom = document.createElement('div');
        scrollZoneBottom.className = 'scroll-zone-indicator scroll-zone-bottom';
        
        document.body.appendChild(scrollZoneTop);
        document.body.appendChild(scrollZoneBottom);
    }

    function updateScrollIndicators(y) {
        if (!('ontouchstart' in window)) return;
        
        const scrollZoneHeight = 80;
        const topIndicator = document.querySelector('.scroll-zone-top');
        const bottomIndicator = document.querySelector('.scroll-zone-bottom');
        
        if (topIndicator && bottomIndicator) {
            if (y < 2*scrollZoneHeight) {
                topIndicator.classList.add('scroll-zone-active');
                bottomIndicator.classList.remove('scroll-zone-active');
            } else if (y > window.innerHeight - scrollZoneHeight) {
                topIndicator.classList.remove('scroll-zone-active');
                bottomIndicator.classList.add('scroll-zone-active');
            } else {
                topIndicator.classList.remove('scroll-zone-active');
                bottomIndicator.classList.remove('scroll-zone-active');
            }
        }
    }

    // Logica condivisa tra mobile e desktop
    function processDrop(dropZone, draggable, clientX) {

        draggable.style.position = '';
        draggable.style.top = '';
        draggable.style.left = '';
        draggable.style.zIndex = '';
        draggable.style.pointerEvents = '';
        draggable.style.transform = '';

        // Capisco se torno al pool o in un tier
        const isImagePool = dropZone.id === 'imagePool';

        // Rimuovo messaggio di errore
        const emptyMessage = dropZone.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }

        const originalParent = draggable.parentElement;
        const originalParentId = originalParent.id;

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

            if (originalParentId === 'imagePool') {
                updateImageCount();
            }

            if (originalParent && originalParentId !== 'imagePool') {
                setTimeout(() => {
                    let b1 = originalParent.children.length === 0;
                    let b2 = originalParent.children.length === 1;
                    let b3 = originalParent.children[0].classList.contains('empty-message');
                    if (b1 || (b2 && b3)) {
                        originalParent.innerHTML = `<div class="empty-message"></div>`;
                    }
                }, 10);
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
    const desktopExportStyle = document.createElement('style');
    desktopExportStyle.textContent = `
        .desktop-export-mode .tier-row {
            flex-direction: row !important;
            min-height: 110px !important;
        }
        .desktop-export-mode .tier-label {
            width: 80px !important;
            padding: 0 !important;
            font-size: 1.8rem !important;
            min-width: auto !important;
        }
        .desktop-export-mode .tier-content {
            min-height: 110px !important;
        }
        .desktop-export-mode .draggable-image {
            min-height: 90px !important;
            min-width: 90px !important;
        }
        .desktop-export-mode .tierlist-container {
            max-width: 900px !important;
            margin: 0 auto !important;
        }
        .desktop-export-mode {
            overflow: visible !important;
        }
    `;
    document.head.appendChild(desktopExportStyle);

    async function exportAsImage() {
        const exportBtn = document.getElementById('exportBtn');
        const originalText = exportBtn.innerHTML;
        const tierlistContainer = document.querySelector('.tierlist-container')
        const tierlist = document.querySelector('.tiers-section');

        exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Attendi...';
        exportBtn.disabled = true;

        try {
            const isMobileView = window.innerWidth <= 768;
            let wasDesktopMode = false;

            if (isMobileView) {
                wasDesktopMode = true;
                tierlistContainer.classList.add('desktop-export-mode')
                tierlistContainer.offsetHeight;
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            const canvas = await html2canvas(tierlist, {
                backgroundColor: '#1a1a2e',
                scale: 2,
                useCORS: true,
                logging: false,
                width: 900,
                windowWidth: 900,
                onclone: function(clonedDoc) {
                    const clonedContainer = clonedDoc.querySelector('.tierlist-container');
                    if (clonedContainer && isMobileView) {
                        clonedContainer.classList.add('desktop-export-mode');
                    }
                }
            });

            if (wasDesktopMode) {
                tierlistContainer.classList.remove('desktop-export-mode');
            }

            const link = document.createElement('a');
            const fileName = 'tierlist-santi';
            link.download = `${fileName.replace(/\s+/g, '-')}-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            alert('Tierlist esportata e scaricata con successo!')
        } catch (error) {
            console.error('Errore in esportazione: ', error);
            alert('Esportazione non riuscita. Per favore riprova.');

            const tierlistContainer = document.querySelector('.tierlist-container');
            if (tierlistContainer) {
                tierlistContainer.classList.remove('desktop-export-mode');
            }
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


    // Eventi mobile
    function initializeMobileEvents() {
        if (!('ontouchstart' in window)) return;
        
        const draggableImages = document.querySelectorAll('.draggable-image');
        
        draggableImages.forEach(img => {
            img.addEventListener('touchstart', handleTouchStart, { passive: false });
        });
        
        // Global touch events
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('touchcancel', handleTouchCancel);
        
        // Also add touch events to drop zones
        const dropZones = document.querySelectorAll('.tier-content, .image-pool');
        dropZones.forEach(zone => {
            zone.addEventListener('touchmove', handleTouchMove, { passive: false });
            zone.addEventListener('touchend', handleTouchEnd);
        });
    }

    initializeTierlist();
    initializeMobileEvents();

});




