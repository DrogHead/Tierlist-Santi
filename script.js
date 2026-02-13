document.addEventListener('DOMContentLoaded', function() {

    // Descrizioni dei santi
    const descs = [
        // San Bartolo Longo
        `Un fervente e irruento apostolo del santo Rosario. Durante gli
        anni dell'università, vivendo in un ambiente anticlericale,
        diventò sacerdote spiritista. Dopo un periodo di depressione e
        crisi esistenziale, segnato anche dal suicidio di un amico,
        si affidò al professore Vincenzo Pepe. Quest'ultimo lo indirizzò da
        padre Alberto Radente, e sotto la sua guida Bartolo entrò a far parte
        del Terzo Ordine di San Domenico, nel quale maturò una devozione per
        il santo Rosario. Abbandonata la professione di avvocato per cui aveva
        studiato, si dedicò alle opere di carità e assistenza, e conobbe Ludovico
        da Casoria, Caterina Volpicelli (futuri santi) e la contessa Marianna
        Farnararo de Fusco (futura moglie).
        <br><br>
        Fu lei a mandare Bartolo a Pompei, che allora contava mille abitanti
        e versava in uno stato di arretratezza e abbandono. Bartolo sentiva
        un tumulto interiore e di dubbio riguardo alla sua missione, nonostante
        le numerose opere di carità. Mentre camminava per Via Arpaia in preda
        a questi pensieri, sentì una voce dall'alto che diceva <i>
        "Se propaghi il Rosario, sarai salvo"</i>, seguita dalle campane dell'Angelus
        di mezzogiorno. Si inginocchiò in preghiera e finalmente provò
        una sensazione di pace interiore, avendo più chiara la sua vocazione.
        <br><br>
        Dopo essersi sposato con la contessa De Fusco (la loro amicizia dava
        adito a fastidiose maldicenze), Bartolo iniziò la costruzione della nuova
        città di Pompei fondata sulla devozione al santo Rosario: andò a prelevare
        il quadro della Madonna del Rosario a Napoli, iniziò la stesura della
        preghiera della Supplica e, anche grazie alle donazioni dei fedeli,
        iniziò la costruzione della facciata dal Santuario. Intorno al cantiere del
        Santuario sorsero edifici di assistenza sociale come le case operaie, farmacie,
        un ospedale. Inoltre, Bartolo decise di scommettere e investire sui figli e
        le figlie dei carcerati, allora considerati criminali alla stregua dei genitori,
        e istituì delle strutture per educarli e insegnare loro un mestiere per
        riabilitarli agli occhi della società.
        `,
        // Santa Teresa di Lisieux
        `L'infanzia di Thérèse fu segnata da numerose fragilità fisiche e psicologiche:
        già all'età di un anno fu affidata alle cure di una nutrice per problemi intestinali,
        e all'età di quattro anni si trovò orfana di madre a causa di un cancro al seno. Ciò
        la rese una bambina molto sensibile ed emotivamente instabile, e quando la sorella
        maggiore, da lei identificata come seconda madre, partì per il convento, Thérèse
        trascorse un periodo di forte depressione, segnato da crisi di pianto, allucinazioni,
        convulsioni, e disturbi del sonno. È lei stessa ad affermare di essere guarita da
        questo stato grazie all'intercessione della Vergine Maria e alla continua
        corrispondenza con la sorella, anche se la sua salute rimase fragile. Era
        particolarmente legata al sacramento della Comunione, e dopo la sua Cresima scrisse
        che quel "sacramento d'amore" le aveva dato "la forza di soffrire". A 15 anni e
        dopo aver superato i giudizi negativi del padre, dello zio, del superiore del
        Carmelo di Lisieux e persino del Vescovo, Thérèse riuscì a entrare nelle suore
        carmelitane.
        <br><br>
        All'interno del monastero Thérèse conduceva una vita ordinaria, sempre caratterizzata
        da ipersensibilità, sofferenze fisiche e spirituali, e numerosi dubbi sulla fede. In
        particolare, quando la situazione neurologica di suo padre peggiorò gravemente e
        dovette essere internato tre anni in un ospedale psichiatrico, Thérèse si rifugiò
        nel silenzio e nella preghiera, in preda a uno stato di forte tensione e dubbi. Anche
        quando diventò ufficialmente suora a 17 anni, il padre non poté partecipare, e lei
        racconta di un giorno di gioia ma "interamente velato di lacrime".
        <br><br>
        I forti dubbi di Thérèse la portavano continuamente al confronto con altri grandi
        santi come Teresa d'Avila, Paolo di Tarso e Giovanna d'Arco (a cui era talmente
        devota che fece un cosplay,
        <a href="https://archives.carmeldelisieux.fr/en/photos-de-therese/">foto da 11 a 15</a>),
        e i suoi limiti la facevano sentire piccola e insignificante. Comprese però che
        proprio questa piccolezza l'avrebbe portata alla santità. La teologia della "Piccola Via"
        consiste in un cammino di santità accessibile a tutti, che non si basa su grandi
        atti eroici, ma sull'abbandono fiducioso all'amore di Dio, e sul fare le piccole
        azioni quotidiane con grande amore. Thérèse morì a 24 anni di tubercolosi.
        <br><br>
        Ora è patrona dei missionari, patrona secondaria di Francia, e considerata
        popolarmente protettrice di coloro che soffrono di malattie mentali, proprio
        per i suoi trascorsi con esse e per la sua costante lotta contro l'ipersensibilità
        e gli stati d'ansia. Dal 1997 è Dottore della Chiesa, la terza donna a ricevere
        questo titolo.
        `,
        // San Sebastiano
        `Sebastiano visse sotto l'impero di Diocleziano, segnato in particolare da
        una politica religiosa
        <a href="https://it.wikipedia.org/wiki/Persecuzione_dei_cristiani_sotto_Diocleziano">anticristiana</a>.
        Fu istruito nei principi della fede cristiana a Milano, e poi si trasferì a Roma,
        dove fece carriera nell'esercito e divenne tribuno della prima corte pretoria,
        il reparto militare che svolgeva compiti di guardia del corpo dell'imperatore.
        Si racconta che Sebastiano visitò in carcere due giovani cristiani, Marco e
        Marcellino, aiutandoli a rimanere saldi nella fede anche davanti all'opzione
        di salvarsi offrendo sacrifici agli dei romani. Questo dialogo ebbe l'effetto di
        convertire al cristianesimo anche altri presenti e di guarire una donna muta, Zoe.
        <br><br>
        Diocleziano, venuto a sapere che uno dei suoi pretoriani era cristiano, ordinò la
        condanna a morte di Sebastiano. Questi fu legato a un palo, denudato, e trafitto
        da numerose frecce. I soldati, vedendolo morente, lo abbandonarono sul luogo affinché
        il suo corpo fosse divorato dagli animali, ma Sebastiano fu trovato da Santa Irene di Roma,
        che lo trasportò nella sua dimora e si prese cura delle sue ferite. Una volta guarito,
        Sebastiano, nonostante i consigli di abbandonare la città, tornò da Diocleziano per
        proclamare nuovamente la sua fede e rimproverare le sue persecuzioni contro i cristiani,
        senza successo: Diocleziano ordinò che fosse flagellato a morte e il castigo fu eseguito.
        <br><br>
        Ora è patrono della polizia locale italiana e dei militari, come esempio di membro
        dell'esercito che ha messo davanti ai suoi doveri la fede, ed è anche patrono degli
        arcieri dato il suo metodo di martirio. Viene invocato, insieme a San Rocco, come
        protettore dei malati di peste, e quindi per associazione anche come protettore dei
        malati di AIDS.
        `,
        // San Paolo
        `L'apostolo dei Gentili, primo missionario cristiano. Nato Saulo, la sua storia viene
        raccontata nel Nuovo Testamento tra gli Atti degli Apostoli e le lettere alle diverse
        comunità cristiane fondate durante i suoi viaggi. La sua prima comparsa in questi testi
        lo vede come presente e accondiscendente all'uccisione di Santo Stefano, primo martire,
        collocandolo quindi nel ruolo di persecutore dei cristiani, principalmente a livello
        giuridico. Gli Atti degli Apostoli raccontano la sua conversione, a cui Paolo si riferisce
        nelle sue lettere anche con il nome di chiamata, scelta, o conquista:
        <br><br>
        <i>
        "E avvenne che, mentre era in viaggio e stava per avvicinarsi a Damasco, all'improvviso
        lo avvolse una luce dal cielo e cadendo a terra udì una voce che gli diceva: &laquo;Saulo,
        Saulo, perché mi perseguiti?&raquo;. Rispose: &laquo;Chi sei, o Signore?. E la voce &laquo;Io
        sono Gesù, che tu perseguiti! Orsù, alzati ed entra nella città e ti sarà detto ciò che devi
        fare&raquo;.
        </i>
        <br><br>
        A Damasco, Saulo ricevette il battesimo da un discepolo di nome Anania e cambiò nome in Paolo,
        e iniziò a predicare in quella città finché, per sfuggire a chi voleva ucciderlo, fu fatto
        uscire da alcuni discepoli che lo calarono di notte dalle mura. Da quel momento, godendo del
        suo status di cittadino romano, Paolo si dedica alla diffusione del messaggio evangelico in
        diverse città dell'impero, fondando numerose comunità cristiane a cui si rivolgeva nelle
        sue lettere, osservando e rispondendo ai loro bisogni.
        <br><br>
        Secondo la tradizione, fu decapitato durante la persecuzione di Nerone, tra il 64 e il 67 d.C. 
        `,
        // San Giuseppe da Copertino
        `Da bambino, Giuseppe era solito giocare al sacerdote, ed era arrivato a creare un piccolo
        altare in un angolo della casa. A sette anni iniziò la scuola, ma fu costretto a lasciarla
        a causa di una grave malattia durata quattro anni. A 15 anni avvenne la guarigione, che
        lui attribuì alla Madonna delle Grazie. Negli anni di malattia aveva pensato di farsi
        sacerdote francescano, ma questi lo rifiutarono perché non aveva la dovuta istruzione (non
        sapeva nemmeno leggere o scrivere). Per tre anni stette presso i frati cappuccini, curando
        il refettorio, e nel frattempo si mise d'impegno sui libri e riuscì a superare gli esami
        per diventare diacono. La prova per diventare sacerdote era presieduta dal Vescovo di Castro,
        che aveva la fama di essere molto esigente e severo negli esami. Il Vescovo interrogò per
        primi alcuni diaconi preparatissimi e ne rimase così colpito che approvò tutti gli altri
        diaconi senza verifiche, tra cui c'era Giuseppe.
        <br><br>
        A Giuseppe da Copertino sono attribuiti miracoli, estasi mistiche, e in particolare
        levitazioni, per le quali fu processato dal Sant'Uffizio per abuso di credulità popolare,
        da cui poi fu assolto. Infatti, quando le levitazioni o le estasi avvenivano durante
        la Messa, i fedeli spesso si distraevano e arrivavano a fare esperimenti sulla sua
        sensibilità (per esempio, pungerlo con gli spilli per vedere se fingeva). Per questo
        motivo fu inviato in vari conventi di frati cappuccini, a vivere in isolamento.
        <br><br>
        Ora è patrono degli studenti per il modo in cui ha superato gli esami per accedere
        al sacerdozio, nonostante lo studio da autodidatta e la scarsa preparazione culturale.
        `,
        // Santi Cosma e Damiano
        `La tradizione fa riferimento a Cosma e Damiano come due fratelli, gemelli e medici.
        Originari dell'Arabia e di ricca famiglia, dopo aver appreso l'arte medica nella
        provincia romana della Siria, iniziarono a praticare la professione gratuitamente.
        Una sola volta, secondo la tradizione, sono stati ricompensati: Damiano accettò
        tre uova da parte di una contadina, Palladia, che aveva guarito miracolosamente, e
        Cosma rimase così deluso che chiese di essere sepolto lontano dal fratello.
        <br><br>
        I due furono catturati durante le
        <a href="https://it.wikipedia.org/wiki/Persecuzione_dei_cristiani_sotto_Diocleziano">persecuzioni di Diocleziano</a>,
        e sono diverse le fonti che attestano il metodo con cui furono uccisi. In particolare,
        si dice che:
        <ul style="margin-left: 20px">
            <li>Furono lapidati, ma le pietre rimbalzarono contro i soldati;</li>
            <li>Furono fustigati, crocefissi e bersagliati da dardi, ma le lance non fecero loro del male;</li>
            <li>Furono gettati in mare da un dirupo con il macigno appeso al collo, ma i legacci si sciolsero;</li>
            <li>Furono incatenati e messi in una fornace, ma il fuoco non arrecava loro dolore;</li>
            <li>Furono decapitati, e morirono.</li>
        </ul>
        Prese voce la leggenda che Damiano avesse accettato la ricompensa della donna mosso da
        spirito di carità, per evitare che si sentisse umiliata dal rifiuto, e quindi i due furono
        sepolti vicini.
        <br><br>
        Ora sono patroni delle professioni mediche, e del quartiere di Secondigliano (lol).
        `,
        `
        Bernadette visse la sua infanzia in estrema povertà a causa di una crisi che colpì
        particolarmente gli agricoltori francesi: la sua casa consisteva in una sola piccola
        stanza in cui viveva con tutta la famiglia, e contrasse l'asma a causa delle continue
        inalazioni di aria malsana. Per contribuire a sostenere la famiglia lavorava pascolando
        le greggi e facendo la cameriera presso una taverna.
        <br><br>
        Secondo quanto riferito da lei stessa, l'11 febbraio 1858, all'età di 14 anni, mentre
        assieme alla sorella e a un'amica stava raccogliendo legna da ardere poco fuori Lourdes,
        Bernadette ebbe la prima visione di "una piccola signora giovane", che descrive indossare
        un velo bianco, una cinta blu, e teneva tra le mani un Rosario. Non avendo fatto il
        catechismo, Bernadette non sapeva chi fosse questa signora, e gli abitanti della cittadina
        erano divisi sulla convinzione che lei dicesse o no la verità. I contenuti delle altre visioni
        testimoniate da Bernadette erano molto semplici, focalizzate sulla necessità di preghiera e
        penitenza, ma dopo la tredicesima visione iniziarono a verificarsi anche fatto miracolosi come
        la nascita di una sorgente d'acqua pulita, la guarigione di numerosi malati, e un'estasi mistica
        di Bernadette stessa, che sarebbe rimasta a contatto diretto con la fiamma di un cero senza
        riportare segni di ustioni o bruciature.
        <br><br>
        Berdadette ebbe un totale di diciotto visioni, che dopo attente analisi degli eventi miracolosi
        e delle testimonianze dirette sono state riconosciute dalla Chiesa Cattolica come manifestazioni
        della Beata Vergine Maria. Bernadette non aveva studiato, lei stessa si dichiarava "la più ignorante",
        e mal sopportava tutto l'interesse che la vicenda stava richiamando su di sé. Per questo motivo
        si trasferì presso una scuola-convitto tenuta dalle Suore della Carità di Nevers e, una volta
        imparato a leggere e scrivere, si ritirò presso il loro convento. Morì all'età di 35 anni,
        ma la sua tubercolosi le impedì di essere presente alla consacrazione della basilica di Lourdes.
        <br><br>
        Fu proclamata santa nel 1933 da Papa Pio XI non per essere stata oggetto delle apparizioni mariane,
        ma per la semplicità con cui aveva vissuto la sua vita e la sua fede. Oggi è santa protettrice
        degli ammalati, delle lavoratrici nei campi, e patrona di Lourdes.
        `,
        `
        Giovanna nacque in una famiglila di contadini nella Lorena, in Francia. Le testimonianze del
        tempo la descrivono come una ragazzina caritatevole, che spesso visitava i malati e offriva il
        proprio letto ai senzatetto. All'età di 13 anni decise di consacrare la sua vita a Dio dopo aver
        avuto visioni dell'arcangelo Michele, di Santa Caterina e di Santa Margherita, e decise di fare
        voto di castità. La sua storia è legata a quella della guerra dei cent'anni: nell'estate del 1428
        la sua famiglia fu costretta alla fuga dalle truppe di Borgogna, che stavano per occupare la città
        di Orléans per il suo ruolo economico e strategico.
        <br><br>
        Come lei stessa dichiara, durante l'interrogatorio per il processo che la vedrà accusata di eresia,
        Giovanna si sentì chiamata a prestare il suo aiuto a Carlo, Delfino di Francia, nella guida
        dell'esercito, e decise di lasciare casa. I genitori, intuite le intenzioni della figlia, tentarono
        di combinarle un matrimonio che lei rifiutò. Il suo fidanzato la citò in giudizio al tribunale
        episcopale, che tuttavia diede ragione a Giovanna, dato che il fidanzamento era avvenuto senza il suo
        consenso. La ragazza poté dunque dedicarsi alla sua missione: la sua prima tappa fu a Vaucouleurs dove
        si incontrò con il capitano della piazzaforte. Al primo tentativo questi la schernì e le diede della
        pazza, ma visto il consenso che Giovanna sapeva raccogliere tra il popolo e tra i soldati, si convinse
        alla fine della sua buona fede e acconsentì che una scorta l'accompagnasse dal sovrano.
        <br><br>
        Durante l'incontro con Carlo, Giovanna fu messa alla prova in materia di fede da alcuni ecclesiastici e
        successivamente da un gruppo di teologi, dopodiché le fu concesso di guidare l'esercito di Francia.
        Giovanna iniziò una riforma dell'esercito, che seguendo il suo esempio smise di perpetrare violenze e
        saccheggi ai danni dei villaggi conquistati e si riuniva due volte al giorno in preghiera. L'immediato
        effetto fu quello di instaurare un rapporto di fiducia tra i soldati e la popolazione civile. Al comando
        dell'esercito francese, Giovanna ignorava sia i suoi detrattori sia le lotte intestine alla nobiltà francese,
        rimanendo vicina ai bisogni dei soldati semplici, stremati dalla fame che l'assedio stava causando a
        Orléans. I suoi tentativi di dissuadere gli inglesi dal continuare l'assedio fallirono, ma l'8 maggio
        1429 la città fu liberata dopo uno scontro diretto durato due ore, al termine delle quali l'esercito
        inglese si ritirò e quello francese, guidato da Giovanna e Carlo, decise di non inseguirli. La campagna
        proseguì con successo nel resto della regione, e permise all'esercito francese di avanzare fino a Reims,
        dove Carlo fu finalmente consacrato re di Francia, consolidando il suo ruolo.
        <br><br>
        Subito dopo ebbe inizio il declino, perché il re non voleva proseguire la guerra e l'assedio di Parigi,
        guidato da Giovanna, non ebbe i risultati sperati e si concluse in un fallimento. Non aiutò la successiva
        cattura di Giovanna sotto le mura della città di Compiègne, da parte di Giovanni di Lussemburgo, che
        la vendette agli inglesi per 10.000 scudi d'oro. Nessuno tentò di liberarla né di pagare il riscatto, e 
        gli inglesi trovarono l'occasione per umiliarla e svalutarla agli occhi del popolo francese, e la 
        consegnarono al Tribunale dell'Inquisizione, ostile a Giovanna, che la interrogò per l'accusa di eresia. 
        Al termine del processo fu dichiarata colpevole di idolatria, scisma e apostasia, e per questo fu condannata
        al rogo, dove morì nel 1431 dopo essersi confessata e comunicata. Nel 1455 il suo processo fu rivalutato e
        Giovanna fu completamente assolta dalle accuse. Nel 1920 è stata proclamata santa da papa Pio X, e dal 1944
        è patrona di Francia.
        `
    ];

    // Dataset immagini
    const imgPath = "images/";
    const images = [
        { id: 1, label: 'San Bartolo Longo', src: 'Bartolo-Longo.webp'},
        { id: 2, label: 'Santa Teresa di Lisieux', src: 'Teresa-Lisieux.jpg'},
        { id: 3, label: 'San Sebastiano', src: 'San-Sebastiano.jpg'},
        { id: 4, label: 'San Paolo', src: 'San-Paolo.jpg'},
        { id: 5, label: 'San Giuseppe da Copertino', src: 'Giuseppe-Copertino.jpeg'},
        { id: 6, label: 'Santi Cosma e Damiano', src: 'Cosma-Damiano.jpg'},
        { id: 7, label: 'Santa Bernadette', src: 'Santa-Bernadette.jpg'},
        { id: 8, label: 'Santa Giovanna d\'Arco', src: 'Giovanna-Darco.jpg'}
    ];

    // Informazioni dei tier
    const tiers = [
    { id: 's-tier', label: 'S', colorClass: 'tier-s', name: 'S' },
    { id: 'a-tier', label: 'A', colorClass: 'tier-a', name: 'A' },
    { id: 'b-tier', label: 'B', colorClass: 'tier-b', name: 'B' },
    { id: 'c-tier', label: 'C', colorClass: 'tier-c', name: 'C' },
    { id: 'd-tier', label: 'D', colorClass: 'tier-d', name: 'D' }
    ];

    // Inizializzazione
    function initializeTierlist() {

        // Prendo elementi del DOM
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

        });

        // Crea immagini trascinabili
        images.forEach(image => {
            const imgElement = createDraggableImage(image);
            imagePool.appendChild(imgElement);
        })

        // Aggiunge Luce in basso
        imagePool.innerHTML += `
            <div class="logo-corner">
                <img src="logo/luce.png" alt="Luce" title="Luce">
            </div>
        `;

        // Update
        document.getElementById('imageCount').textContent = images.length;
    }

    // Costruttore immagini trascinabili
    function createDraggableImage(image) {

        // Crea un elemento div e assegna le classi per farlo funzionare
        const container = document.createElement('div');
        container.className = 'draggable-image';
        container.draggable = true;
        container.id = `image-${image.id}`;
        container.dataset.imageId = image.id;
        container.dataset.imageLabel = image.label;
        container.dataset.imageDesc = descs[image.id-1];

        // Aggiunge il testo e l'immagine
        container.innerHTML = `
            <div class="image-info-btn" title="Info">i</div>
            <img src="${imgPath+image.src}" alt="${image.label}">
            <div class="image-label">${image.label}</div>
        `;

        // Eventi trascinamento
        container.addEventListener('dragstart', handleDragStart);
        container.addEventListener('dragend', handleDragEnd);       

        return container;
    }



    // =============== STILI DI SUPPORTO ===============
    const desktopDragStyles = document.createElement('style');
    desktopDragStyles.textContent = `
        .draggable-image {
            user-select: none;
            -webkit-user-drag: element;
        }
        .dragging {
            opacity: 0.7 !important;
            transform: scale(1.05) !important;
            transition: opacity 0.2s, transform 0.1s !important;
        }
        .dragging::after {
            content: '';
            position: fixed;
            top: -1000px;
            right: -1000px;
            width: 100px;
            height: 100px;
            background-color: rgba(233,69,96,0.1);
            border: 2px dashed #e94560;
            border-radius: 8px;
            z-index: 100000;
            pointer-events: none;
        }
        .drop-zone {
            outline: 3px dashed #e94560 !important;
            outline-offset: -3px;
            background-color: rgba(233,69,96,0.1) !important;
        }
        .tier-content, .image-pool {
            user-select: none;
        }
        .drag-ghost {
            width: 100px !important;
            height: 100px !important;
            border-radius: 8px !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.6) !important;
            background-color: rgba(26,26,46,0.9) !important;
            border: 2px solid #e94560 !important;
        }
        .drag-ghost img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            border-radius: 6px !important;
        }
        .drag-ghost .image-label {
            display: none !important;
        }
        .drag-ghost .image-info-btn {
            display: none !important;
        }
    `;
    document.head.appendChild(desktopDragStyles);

    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .image-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.95);
            z-index: 100000;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal-content {
            background-color: #1a1a2e;
            padding: 25px;
            border-radius: 12px;
            max-width: 800px;
            width: 90%;
            max-height: 85vh;
            position: relative;
            box-shadow: 0 15px 40px rgba(0,0,0,0.7);
            border: 2px solid #e94560;
            animation: slideUp 0.3 ease;
            overflow: scroll;
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-content img {
            width: 100%;
            max-height: 50vh;
            object-fit: contain;
            border-radius: 8px;
            margin-bottom: 20px;
            display: none;
        }

        .modal-text {
            color: white;
            padding: 15px;
            background-color: rgba(233,69,96,0.1);
            border-radius: 8px;
            border-left: 4px solid #e94560;
        }

        .modal-text h3 {
            color: #e94560;
            margin-bottom: 10px;
            font-size: 1.5rem;
        }

        .modal-text p {
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .modal-text small {
            color: #aaa;
            font-size: 0.8rem;
        }

        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            color: white;
            font-size: 32px;
            font-weight: bold;
            cursor: pointer;
            z-index: 100001;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s;
        }
        .modal-close:hover {
            background-color: rgba(233,69,96,0.3);
            color: #e94560;
        }

        @media (max-width: 768px) {
            .modal-content {
                width: 95%;
                padding: 20px;
                max-height: 90vh;
            }
            .modal-close {
                top: 10px;
                right: 15px;
                font-size: 28px;
            }
        }
    `;
    document.head.appendChild(modalStyles);



    // =============== GESTIONE TRASCINAMENTO DESKTOP ===============
    let draggedElement = null;
    let draggedElementSource = null;

    // Evento: inizia il trascinamento
    function handleDragStart(e) {
        draggedElement = this;
        draggedElementSource = this.parentElement.id;

        // Add visuals
        this.classList.add('dragging');

        // Si crea un'immagine da trascinare
        const dragImage = this.cloneNode(true);
        dragImage.style.position = 'fixed';
        dragImage.style.top = '-1000px';
        dragImage.style.left = '-1000px';
        dragImage.style.opacity = '0.7';
        dragImage.style.transform = 'scale(1.1)';
        dragImage.style.zIndex = '100000';
        dragImage.style.pointerEvents = 'none'
        dragImage.classList.add('drag-ghost');

        // Aggiunta al body
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, this.offsetWidth/2, this.offsetHeight/2)

        // Cleanup
        setTimeout(() => {
            if (document.body.contains(dragImage)) {
                document.body.removeChild(dragImage);
            }
        }, 0);

        // Setup datatransfer
        e.dataTransfer.setData('text/plain', this.id);
        e.dataTransfer.effectAllowed = 'move';

        // Nascondo l'immagine originale
        setTimeout(() => {
            if (draggedElement === this) {
                this.style.opacity = '0.4';
            }
        }, 0);

    }

    // Evento: finisce il trascinamento
    function handleDragEnd(e) {
        if (draggedElement) {
            draggedElement.classList.remove('dragging');
            draggedElement.style.opacity = '1';
            draggedElement.style.display = 'block';
        }

        // Cleanup
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('.drop-zone');
        });
        draggedElement = null;
        draggedElementSource = null;
    }

    // Evento: trascino un elemento sopra un altro
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        // Controllo se la dropzone è valida
        if (this.classList.contains('tier-content') || this.id === 'imagePool') {
            this.classList.add('drop-zone');
        }
    }

    // Evento: il trascinamento sopra un altro sta finendo
    function handleDragLeave(e) {
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('drop-zone');
        }
    }

    // Evento: rilascio l'oggetto
    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        // Rimozione highlight
        this.classList.remove('drop-zone');

        // Ottenimento elemento trascinato
        if (!draggedElement) {
            try {
                const id = e.dataTransfer.getData('text/plain');
                if (id) {
                    draggedElement = document.getElementById(id);
                }
            } catch (err) {
                console.warn('Elemento trascinato non trovato');
                return;
            }
        }
        if (!draggedElement) {
            console.warn('Elemento trascinato non trovato');
            return;
        }

        // Rendo elementi visibili
        draggedElement.style.opacity = '1';
        draggedElement.classList.remove('dragging');

        // Logica del rialscio
        processDrop(this, draggedElement, e.clientX);

        // Cleanup
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });

    }
    


    // =============== GESTIONE TRASCINAMENTO MOBILE ===============
    let activeTouch = null;

    // Evento: inizio touch
    function handleTouchStart(e) {
        if (e.touches.length !== 1) return;

        // Controllo cosa ho toccato
        const touch = e.touches[0];
        const element = e.target.closest('.draggable-image');
        if(!element) return;

        e.preventDefault();

        // Se ho toccato il tasto info non inizio
        if (e.target.closest('.image-info-btn')) return;

        activeTouch = {
            id: touch.identifier,
            startX: touch.clientX,
            startY: touch.clientY,
            element: element
        }

        draggedElement = element;
        draggedElementSource = element.parentElement.id;

        // Calcolo offset
        const rect = element.getBoundingClientRect();
        dragOffsetX = touch.clientX - rect.left;
        dragOffsetY = touch.clientY - rect.top;

        element.classList.add('touch-active')
    }

    // Evento: movimento touch
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

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });
        const elements = document.elementsFromPoint(x,y);

        for (const el of elements) {
            if (el === draggedElement || el.contains(draggedElement)) continue;
            if (el.classList.contains('tier-content') || el.id === 'imagePool') {
                el.classList.add('drop-zone');
                break;
            }
        }

    }

    // Evento: fine touch
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

            // Cleanup
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

        // Reset state
        activeTouch = null;
        draggedElement = null;
        draggedElementSource = null;

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });

    }

    // Evento: touch cancellato
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
        
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });
    }



    // =============== GESTIONE INDICATORI SCROLL MOBILE ===============
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



    // =============== LOGICA CONDIVISA DESKTOP-MOBILE ===============
    
    // Gestione dell'elemento in cui ho lasciato l'immagine
    function processDrop(dropZone, draggable, clientX) {

        // Rimuovo testo vuoto
        const emptyMessage = dropZone.querySelector('.empty-message');
        if (emptyMessage) emptyMessage.remove();


        // Controllo se la dropzone è imagePool
        const isImagePool = dropZone.id === 'imagePool';

        // Ottengo elemento parent
        const originalParent = draggable.parentElement;
        const originalParentId = originalParent.id;

        // Rilascio in imagePool
        if (isImagePool) {
            dropZone.appendChild(draggable);
            updateImageCount();
        }
        // Rilascio in tiercontent
        else {

            const afterElement = getDragAfterElement(dropZone, clientX);

            if (afterElement == null) {
                dropZone.appendChild(draggable);
            } else {
                dropZone.insertBefore(draggable, afterElement);
            }

            if (originalParentId === 'imagePool') {
                updateImageCount();
            }

        }

        // Eventuale messaggio vuoto
        setTimeout(() => {
            if (originalParent && originalParent.id !== 'imagePool') {
                const children = originalParent.children;
                const isEmpty = children.length === 0;
                const hasOnlyEmptyMessage = children.length === 1 && children[0].classList.contains('empty-message');

                if (isEmpty || hasOnlyEmptyMessage) {
                    originalParent.innerHTML = `
                        <div class="empty-message"></div>
                    `;
                }
            }
        }, 50);


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


    
    // =============== TASTI PER LE INFORMAZIONI ===============
    function showImageModal(imageElement) {

        // Elementi del DOM
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');

        if (!modal || !modalImage) {
            console.error('Elemento non trovato (modal)');
            return;
        }

        // Ottenimento dati
        const img = imageElement.querySelector('img');
        const label = imageElement.dataset.imageLabel || 'Immagine non disponibile';
        const desc = imageElement.dataset.imageDesc || 'Descrizione non disponibile';

        // Setup
        modalImage.src = img.src;
        modalImage.alt = label;
        modalTitle.textContent = label;
        modalDesc.innerHTML = desc;
        
        // Comparsa
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

    }

    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    

    // =============== ESPORTAZIONE ===============
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



    // =============== RESET ===============
    function resetTierlist() {
        if (confirm('Sicuro di voler resettare?')) {
            initializeTierlist();
        }
    }



    // =============== SETUP EVENTI GLOBALI ===============

    // Desktop Drag
    function setupDesktopEvents() {
        const allDraggables = document.querySelectorAll('.draggable-image');
        const allDropZones = document.querySelectorAll('.tier-content, #imagePool');
        const allInfoBtns = document.querySelectorAll('.image-info-btn');

        allDraggables.forEach(img => {
            img.setAttribute('draggable', 'true');
            img.addEventListener('dragstart', handleDragStart);
            img.addEventListener('dragend', handleDragEnd);
        });

        allDropZones.forEach(zone => {
            zone.addEventListener('dragover', handleDragOver);
            zone.addEventListener('dragleave', handleDragLeave);
            zone.addEventListener('drop', handleDrop);
        })

        allInfoBtns.forEach(infoBtn => {
            infoBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showImageModal(infoBtn.parentElement);
            });
            infoBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    // Touch
    function setupMobileEvents() {
        if (!('ontouchstart' in window)) return;
        
        const draggableImages = document.querySelectorAll('.draggable-image');
        
        draggableImages.forEach(img => {
            img.addEventListener('touchstart', handleTouchStart, { passive: false });
        });

        draggableImages.forEach(img => {
            infoBtn = img.querySelector('.image-info-btn');
            infoBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                if (activeTouch) activeTouch = null;
                showImageModal(img);
            }, { passive: false });

            infoBtn.addEventListener('dragstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
        })
        
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

    // Bottoni export/reset
    document.getElementById('exportBtn').addEventListener('click', exportAsImage);
    document.getElementById('resetBtn').addEventListener('click', resetTierlist);

    // Box informazioni
    document.querySelector('.modal-close').addEventListener('click', closeImageModal);
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.key === 'X' || e.key === 'x') {
            closeImageModal();
        }
    });


    // Primer
    initializeTierlist();
    setupDesktopEvents();
    setupMobileEvents();

});




