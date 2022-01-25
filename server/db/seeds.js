use languagesTest_hub;
db.dropDatabase();

db.languages.insertMany([
    {
        id: "es",
        name: "Spanish",
        originalName: "Español",
        text: "With 480 million native speakers, Spanish ranks as the world's No. 2 language in terms of how many people speak it as their first language!",
        image: "https://images.pexels.com/photos/8298825/pexels-photo-8298825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        topics: [
            {
                name: "Travel",
                text: "Let's get you some direcitons.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Could you tell me where is the nearest train/bus station?",
                        translation:
                            "¿Me podría decir dónde está la estación de tren/bus más cercana?",
                        audio: "",
                    },
                    {
                        phrase: "Do you know where is the nearest Currency Exchange?",
                        translation:
                            "¿Sabe dónde está la casa de cambio de moneda más cercana?",
                        audio: "",
                    },
                    {
                        phrase: "Excuse me, which platform does the train depart from?",
                        translation: "Disculpe,¿de qué andén sale el tren?",
                        audio: "",
                    },
                    {
                        phrase: "How can I get to the nearest ATM?",
                        translation:
                            "¿Cómo puedo llegar al cajero más cercano?",
                        audio: "",
                    },
                    {
                        phrase: "Can you explain me how to get to the British embassy?",
                        translation:
                            "¿Me podría explicar como llegar a la embajada británica?",
                        audio: "",
                    },
                ],
            },
            {
                name: "Health",
                text: "Better safe than sorry!",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Could you tell me where is the nearest hospital?",
                        translation:
                            "¿Me podría decir dónde está el hospital más cercano?",
                        audio: "",
                    },
                    {
                        phrase: "What is the emergency telephone number?",
                        translation:
                            "¿Cuál es el número de telefóno de emergencia?",
                        audio: "",
                    },
                    {
                        phrase: "Can you explain me how to get to a pharmacy?",
                        translation:
                            "¿Me podría explicar como llegar a una farmacia?",
                        audio: "",
                    },
                    {
                        phrase: "I have a headache/stomachache.",
                        translation: "Tengo dolor de cabeza/estómago",
                        audio: "",
                    },
                    {
                        phrase: "I feel pain on my chest.",
                        translation: "Siento dolor en el pecho",
                        audio: "",
                    },
                    {
                        phrase: "Could I have some plasters?",
                        translation: "¿Me puede dejar unas tiritas?",
                        audio: "",
                    },
                ],
            },
            {
                name: "Restaurant",
                text: "Are you ready for a dine out?",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "A table for four, please",
                        translation: "Mesa para cuatro, por favor",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have vegetarian/vegan dishes?",
                        translation: "¿Tiene platos vegetarianos/veganos?",
                        audio: "audio file",
                    },
                    {
                        phrase: "More bread, please",
                        translation: "Más pan por favor",
                        audio: "audio file",
                    },
                    {
                        phrase: "A glass/A jug of water",
                        translation: "Un vaso/una jarra de agua",
                        audio: "audio file",
                    },
                    {
                        phrase: "The bill, please",
                        translation: "La cuenta, por favor",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Shopping",
                text: "Because sometimes window shopping is not enough.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "How much does it cost?",
                        translation: "¿Cuánto cuesta?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have any wholemeal bread?",
                        translation: "¿Tiene pan integral?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have a bag, please?",
                        translation: "¿Tiene una bolsa, por favor?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you take credit cards?",
                        translation: "¿Aceptan tarjeta?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Can you give me a receipt?",
                        translation: "¿Me podrías dar el recibo?",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Accommodation",
                text: "Get yourself comfy!",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Do you have a room for two nights?",
                        translation: "¿Tiene habitación para dos noches?",
                        audio: "audio file",
                    },
                    {
                        phrase: "I've reserved a room.",
                        translation: "Tengo una habitación reservada.",
                        audio: "audio file",
                    },
                    {
                        phrase: "Is breakfast included?",
                        translation: "¿Viene el desayuno incluído?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where can I/we park?",
                        translation: "¿Dónde puedo/podemos aparcar?",
                        audio: "audio file",
                    },
                    {
                        phrase: "What time is dinner?",
                        translation: "¿A qué hora es la cena?",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Entertainment",
                text: "It's always fun o'clocl somewhere.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "What time does the museum open?",
                        translation: "¿A qué hora abre el museo?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where can I/we get tickets?",
                        translation: "¿Dónde puedo/podemos comprar entradas?",
                        audio: "audio file",
                    },
                    {
                        phrase: "I want to book two seats",
                        translation: "Me gustaría reservar dos asientos",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where are the toilets?",
                        translation: "¿Dónde están los servicios?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Are there guided tours (in English)?",
                        translation: "¿Tienen visitas guiadas (en Inglés)?",
                        audio: "audio file",
                    },
                ],
            },
        ],
        quizzes: [
            {
                id: 1,
                difficulty: "Easy",
                quiz: [
                    {
                        question:
                            "Could you tell me where is the nearest train/bus station?",
                        answers: [
                            {
                                text: "¿Tiene una bolsa, por favor?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podría decir dónde está la estación de tren/bus más cercana",
                                isCorrect: true,
                            },
                            {
                                text: "¿Cómo puedo llegar al cajero más cercano?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Dónde están los servicios?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Is breakfast included?",
                        answers: [
                            {
                                text: "¿Tiene una bolsa, por favor?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podrías dar el recibo?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Cómo puedo llegar al cajero más cercano?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Viene el desayuno incluído?",
                                isCorrect: true,
                            },
                        ],
                    },
                    {
                        question: "Do you have a room for two nights?",
                        answers: [
                            {
                                text: "I want to book two seats",
                                isCorrect: false,
                            },
                            {
                                text: "¿Tiene habitación para dos noches?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Tiene pan integral?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Dónde puedo/podemos aparcar?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question:
                            "Could you tell me where is the nearest hospital?",
                        answers: [
                            {
                                text: "Can you give me a receipt?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podría decir dónde está la estación de tren/bus más cercana?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podría decir dónde está el hospital más cercano?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Me podría explicar como llegar a una farmacia?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have any wholemeal bread?",
                        answers: [
                            {
                                text: "¿Me puede dejar unas tiritas?",
                                isCorrect: false,
                            },
                            {
                                text: "Más pan por favor",
                                isCorrect: false,
                            },
                            {
                                text: "¿Tiene pan integral?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Cómo puedo llegar al cajero más cercano?",
                                isCorrect: false,
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                difficulty: "Medium",
                quiz: [
                    {
                        question:
                            "Could you tell me where is the nearest train/bus station?",
                        answers: [
                            {
                                text: "¿Tiene una bolsa, por favor?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podría decir dónde está la estación de tren/bus más cercana",
                                isCorrect: true,
                            },
                            {
                                text: "¿Cómo puedo llegar al cajero más cercano?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Dónde están los servicios?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Is breakfast included?",
                        answers: [
                            {
                                text: "¿Tiene una bolsa, por favor?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podrías dar el recibo?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Cómo puedo llegar al cajero más cercano?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Viene el desayuno incluído?",
                                isCorrect: true,
                            },
                        ],
                    },
                    {
                        question: "Do you have a room for two nights?",
                        answers: [
                            {
                                text: "I want to book two seats",
                                isCorrect: false,
                            },
                            {
                                text: "¿Tiene habitación para dos noches?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Tiene pan integral?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Dónde puedo/podemos aparcar?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question:
                            "Could you tell me where is the nearest hospital?",
                        answers: [
                            {
                                text: "Can you give me a receipt?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podría decir dónde está la estación de tren/bus más cercana?",
                                isCorrect: false,
                            },
                            {
                                text: "¿Me podría decir dónde está el hospital más cercano?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Me podría explicar como llegar a una farmacia?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have any wholemeal bread?",
                        answers: [
                            {
                                text: "¿Me puede dejar unas tiritas?",
                                isCorrect: false,
                            },
                            {
                                text: "Más pan por favor",
                                isCorrect: false,
                            },
                            {
                                text: "¿Tiene pan integral?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Cómo puedo llegar al cajero más cercano?",
                                isCorrect: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: "sk",
        name: "Slovak",
        originalName: "Slovenčina ",
        text: "You'll need to learn some or Mikuláš will bring you coal.",
        image: "https://images.pexels.com/photos/434556/pexels-photo-434556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        topics: [
            {
                name: "Travel",
                text: "Let's get you some direcitons.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Could you tell me where is the nearest train/bus station?",
                        translation:
                            "Prosím vás, kde nájdem najbližšiu vlakovú/autobusovú stanicu",
                        audio: "",
                    },
                    {
                        phrase: "Do you know where is the nearest Currency Exchange?",
                        translation:
                            "Viete prosím vás, kde je najbližšia zmenáreň?",
                        audio: "",
                    },
                    {
                        phrase: "Excuse me, which platform does the train depart from?",
                        translation:
                            "Prosím vás, z ktorého nástupištia odchádza tento vlak?",
                        audio: "",
                    },
                    {
                        phrase: "How can I get to the nearest ATM?",
                        translation:
                            "Prosím vás, ako sa dostanem k najbližšiemu bankomatu?",
                        audio: "",
                    },
                    {
                        phrase: "Can you explain me how to get to the British embassy?",
                        translation: "Prosím vás, kde nájdem britskú ambasádu?",
                        audio: "",
                    },
                ],
            },
            {
                name: "Health",
                text: "Better safe than sorry!",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Could you tell me where is the nearest hospital?",
                        translation:
                            "Prosím vás, kde nájdem najbližšiu nemocnicu?",
                        audio: "",
                    },
                    {
                        phrase: "What is the emergency telephone number?",
                        translation: "Aké je núdzové kontaktné číslo?",
                        audio: "",
                    },
                    {
                        phrase: "Can you explain me how to get to a pharmacy?",
                        translation:
                            "Môžete mi vysvetliť, ako sa dostanem do lekárne?",
                        audio: "",
                    },
                    {
                        phrase: "I have a headache/stomachache.",
                        translation: "Mám bolesti hlavy/žalúdka.",
                        audio: "",
                    },
                    {
                        phrase: "I feel pain on my chest.",
                        translation: "Cítim bolesť na hrudi.",
                        audio: "",
                    },
                    {
                        phrase: "Could I have some plasters?",
                        translation: "Máte prosím nejaké náplasti?",
                        audio: "",
                    },
                ],
            },
            {
                name: "Restaurant",
                text: "Are you ready for a dine out?",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "A table for four, please",
                        translation: "Stôl pre štyroch, prosím.",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have vegetarian/vegan dishes?",
                        translation: "Máte vegetariánske/veganské jedlá?",
                        audio: "audio file",
                    },
                    {
                        phrase: "More bread, please",
                        translation: "Môžem poprosiť viac chleba?",
                        audio: "audio file",
                    },
                    {
                        phrase: "A glass/A jug of water",
                        translation: "Môžem poprosiť pohár/džbán vody?",
                        audio: "audio file",
                    },
                    {
                        phrase: "The bill, please",
                        translation: "Účet, prosím.",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Shopping",
                text: "Because sometimes window shopping is not enough.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "How much does it cost?",
                        translation: "Koľko to stojí?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have any wholemeal bread?",
                        translation: "Máte celozrnný chlieb?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have a bag, please?",
                        translation: "Máte tašku, prosím?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you take credit cards?",
                        translation: "Beriete kreditné karty?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Can you give me a receipt?",
                        translation: "Môžete mi dať blok prosím?",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Accommodation",
                text: "Get yourself comfy!",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Do you have a room for two nights?",
                        translation: "Máte izbu na dve noci?",
                        audio: "audio file",
                    },
                    {
                        phrase: "I've reserved a room.",
                        translation: "Mám zarezervovanú izbu.",
                        audio: "audio file",
                    },
                    {
                        phrase: "Is breakfast included?",
                        translation: "Sú zahrnuté raňajky?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where can I/we park?",
                        translation: "Kde môžem/môžeme zaparkovať?",
                        audio: "audio file",
                    },
                    {
                        phrase: "What time is dinner?",
                        translation: "O koľkej je večera?",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Entertainment",
                text: "It's always fun o'clocl somewhere.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "What time does the museum open?",
                        translation: "O koľkej sa otvára múzeum?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where can I/we get tickets?",
                        translation: "Kde môžem/môžeme zohnať lístky?",
                        audio: "audio file",
                    },
                    {
                        phrase: "I want to book two seats",
                        translation: "Chcem si rezervovať dve miesta.",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where are the toilets?",
                        translation: "Kde sú toalety?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Are there guided tours(in English)?",
                        translation:
                            "Poskytujete prehliadky so sprievodcom (v angličtine)?",
                        audio: "audio file",
                    },
                ],
            },
        ],
        quizzes: [
            {
                id: 1,
                difficulty: "Easy",
                quiz: [
                    {
                        question:
                            "Could you tell me where is the nearest train/bus station?",
                        answers: [
                            {
                                text: "Mám bolesti hlavy/žalúdka.",
                                isCorrect: false,
                            },
                            {
                                text: "Prosím vás, kde nájdem najbližšiu vlakovú/autobusovú stanicu",
                                isCorrect: true,
                            },
                            {
                                text: "Môžem poprosiť pohár/džbán vody",
                                isCorrect: false,
                            },
                            {
                                text: "Prosím vás, kde nájdem britskú ambasádu?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question:
                            "Can you explain me how to get to the British embassy?",
                        answers: [
                            {
                                text: "Aké je núdzové kontaktné číslo?",
                                isCorrect: false,
                            },
                            {
                                text: "Chcem si rezervovať dve miesta.?",
                                isCorrect: false,
                            },
                            {
                                text: "Viete prosím vás, kde je najbližšia zmenáreň?",
                                isCorrect: false,
                            },
                            {
                                text: "Prosím vás, kde nájdem britskú ambasádu?",
                                isCorrect: true,
                            },
                        ],
                    },
                    {
                        question: "Are there guided tours(in English)?",
                        answers: [
                            {
                                text: "Prosím vás, z ktorého nástupištia odchádza tento vlak",
                                isCorrect: false,
                            },
                            {
                                text: "Poskytujete prehliadky so sprievodcom (v angličtine)?",
                                isCorrect: true,
                            },
                            {
                                text: "Prosím vás, ako sa dostanem k najbližšiemu bankomatu?",
                                isCorrect: false,
                            },
                            {
                                text: "Aké je núdzové kontaktné číslo?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Could I have some plasters?",
                        answers: [
                            {
                                text: "Cítim bolesť na hrudi.",
                                isCorrect: false,
                            },
                            {
                                text: "Kde môžem/môžeme zaparkovať?",
                                isCorrect: false,
                            },
                            {
                                text: "Máte prosím nejaké náplasti?",
                                isCorrect: true,
                            },
                            {
                                text: "Prosím vás, z ktorého nástupištia odchádza tento vlak?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have any wholemeal bread?",
                        answers: [
                            {
                                text: "Cítim bolesť na hrudi",
                                isCorrect: false,
                            },
                            {
                                text: "Stôl pre štyroch, prosím",
                                isCorrect: false,
                            },
                            {
                                text: "Máte celozrnný chlieb?",
                                isCorrect: true,
                            },
                            {
                                text: "Viete prosím vás, kde je najbližšia zmenáreň?",
                                isCorrect: false,
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                difficulty: "Medium",
                quiz: [
                    {
                        question:
                            "Could you tell me where is the nearest train/bus station?",
                        answers: [
                            {
                                text: "Mám bolesti hlavy/žalúdka.",
                                isCorrect: false,
                            },
                            {
                                text: "Prosím vás, kde nájdem najbližšiu vlakovú/autobusovú stanicu",
                                isCorrect: true,
                            },
                            {
                                text: "Môžem poprosiť pohár/džbán vody",
                                isCorrect: false,
                            },
                            {
                                text: "Prosím vás, kde nájdem britskú ambasádu?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question:
                            "Can you explain me how to get to the British embassy?",
                        answers: [
                            {
                                text: "Aké je núdzové kontaktné číslo?",
                                isCorrect: false,
                            },
                            {
                                text: "Chcem si rezervovať dve miesta.?",
                                isCorrect: false,
                            },
                            {
                                text: "Viete prosím vás, kde je najbližšia zmenáreň?",
                                isCorrect: false,
                            },
                            {
                                text: "Prosím vás, kde nájdem britskú ambasádu?",
                                isCorrect: true,
                            },
                        ],
                    },
                    {
                        question: "Are there guided tours(in English)?",
                        answers: [
                            {
                                text: "Prosím vás, z ktorého nástupištia odchádza tento vlak",
                                isCorrect: false,
                            },
                            {
                                text: "Poskytujete prehliadky so sprievodcom (v angličtine)?",
                                isCorrect: true,
                            },
                            {
                                text: "Prosím vás, ako sa dostanem k najbližšiemu bankomatu?",
                                isCorrect: false,
                            },
                            {
                                text: "Aké je núdzové kontaktné číslo?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Could I have some plasters?",
                        answers: [
                            {
                                text: "Cítim bolesť na hrudi.",
                                isCorrect: false,
                            },
                            {
                                text: "Kde môžem/môžeme zaparkovať?",
                                isCorrect: false,
                            },
                            {
                                text: "Máte prosím nejaké náplasti?",
                                isCorrect: true,
                            },
                            {
                                text: "Prosím vás, z ktorého nástupištia odchádza tento vlak?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have any wholemeal bread?",
                        answers: [
                            {
                                text: "Cítim bolesť na hrudi",
                                isCorrect: false,
                            },
                            {
                                text: "Stôl pre štyroch, prosím",
                                isCorrect: false,
                            },
                            {
                                text: "Máte celozrnný chlieb?",
                                isCorrect: true,
                            },
                            {
                                text: "Viete prosím vás, kde je najbližšia zmenáreň?",
                                isCorrect: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: "de",
        name: "German",
        originalName: "Deutsch ",
        text: "Gummy Bears Are A German Invention...",
        image: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        topics: [
            {
                name: "Travel",
                text: "Let's get you some direcitons.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Could you tell me where is the nearest train/bus station?",
                        translation:
                            "Können Sie mir sagen, wo der nächste Bahnhof/Busbahnhof ist?",
                        audio: "",
                    },
                    {
                        phrase: "Do you know where is the nearest Currency Exchange?",
                        translation:
                            "Wissen Sie, wo die nächste Wechselstube ist?",
                        audio: "",
                    },
                    {
                        phrase: "Excuse me, which platform does the train depart from?",
                        translation:
                            "Entschuldigung, von welchem ​​Bahnsteig fährt der Zug ab?",
                        audio: "",
                    },
                    {
                        phrase: "How can I get to the nearest ATM?",
                        translation:
                            "Wie komme ich zum nächsten Geldautomaten?",
                        audio: "",
                    },
                    {
                        phrase: "Can you explain me how to get to the British embassy?",
                        translation:
                            "Können Sie mir erklären, wie ich zur britischen Botschaft komme?",
                        audio: "",
                    },
                ],
            },
            {
                name: "Health",
                text: "Better safe than sorry!",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Could you tell me where is the nearest hospital?",
                        translation:
                            "Können Sie mir sagen, wo das nächste Krankenhaus ist?",
                        audio: "",
                    },
                    {
                        phrase: "What is the emergency telephone number?",
                        translation: "Was ist die Notrufnummer?",
                        audio: "",
                    },
                    {
                        phrase: "Can you explain me how to get to a pharmacy?",
                        translation:
                            "Können Sie mir erklären, wie ich zu einer Apotheke komme?",
                        audio: "",
                    },
                    {
                        phrase: "I have a headache/stomachache.",
                        translation: "Ich habe Kopfschmerzen/Bauchschmerzen.",
                        audio: "",
                    },
                    {
                        phrase: "I feel pain on my chest.",
                        translation: "Ich spüre Schmerzen in meiner Brust.",
                        audio: "",
                    },
                    {
                        phrase: "Could I have some plasters?",
                        translation: "Könnte ich Pflaster haben?",
                        audio: "",
                    },
                ],
            },
            {
                name: "Restaurant",
                text: "Are you ready for a dine out?",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "A table for four, please",
                        translation: "Ein Tisch für vier bitte",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have vegetarian/vegan dishes?",
                        translation: "Haben Sie vegetarische/vegane Optionen?",
                        audio: "audio file",
                    },
                    {
                        phrase: "More bread, please",
                        translation: "Bitte mehr Brot",
                        audio: "audio file",
                    },
                    {
                        phrase: "A glass/A jug of water",
                        translation: "Ein Glas/Krug Wasser?",
                        audio: "audio file",
                    },
                    {
                        phrase: "The bill, please",
                        translation: "Die Rechnung bitte.",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Shopping",
                text: "Because sometimes window shopping is not enough.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "How much does it cost?",
                        translation: "Wie viel kostet das?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have any wholemeal bread?",
                        translation: "Hast du vollkornbrot?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you have a bag, please?",
                        translation: "Hast du bitte eine Tasche?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Do you take credit cards?",
                        translation: "Akzeptieren Sie Kreditkarten?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Can you give me a receipt?",
                        translation: "Können Sie mir eine Quittung geben?",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Accommodation",
                text: "Get yourself comfy!",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "Do you have a room for two nights?",
                        translation: "Haben Sie ein Zimmer für zwei Nächte?",
                        audio: "audio file",
                    },
                    {
                        phrase: "I've reserved a room.",
                        translation: "Ich habe ein Zimmer reserviert.",
                        audio: "audio file",
                    },
                    {
                        phrase: "Is breakfast included?",
                        translation: "Ist das Frühstück inbegriffen?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where can I/we park?",
                        translation: "Wo kann/können wir parken?",
                        audio: "audio file",
                    },
                    {
                        phrase: "What time is dinner?",
                        translation: "Um wieviel Uhr gibt es Abendessen?",
                        audio: "audio file",
                    },
                ],
            },
            {
                name: "Entertainment",
                text: "It's always fun o'clocl somewhere.",
                image: "URL TO IMAGE",
                phrases: [
                    {
                        phrase: "What time does the museum open?",
                        translation: "Um wie viel Uhr wird das Museum öffnen?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where can I/we get tickets?",
                        translation: "Wo bekomme ich/wir Tickets?",
                        audio: "audio file",
                    },
                    {
                        phrase: "I want to book two seats",
                        translation: "Ich möchte zwei Plätze buchen.",
                        audio: "audio file",
                    },
                    {
                        phrase: "Where are the toilets?",
                        translation: "Wo sind die Toiletten?",
                        audio: "audio file",
                    },
                    {
                        phrase: "Are there guided tours(in English)?",
                        translation: "Gibt es Führungen (auf Englisch)?",
                        audio: "audio file",
                    },
                ],
            },
        ],
        quizzes: [
            {
                id: 1,
                difficulty: "Easy",
                quiz: [
                    {
                        question:
                            "Could you tell me where is the nearest train/bus station?",
                        answers: [
                            {
                                text: "Wissen Sie, wo die nächste Wechselstube ist?",
                                isCorrect: false,
                            },
                            {
                                text: "Können Sie mir sagen, wo der nächste Bahnhof/Busbahnhof ist?",
                                isCorrect: true,
                            },
                            {
                                text: "Was ist die Notrufnummer?",
                                isCorrect: false,
                            },
                            {
                                text: "Hast du vollkornbrot?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have a room for two nights?",
                        answers: [
                            {
                                text: "Ein Tisch für vier bitte",
                                isCorrect: false,
                            },
                            {
                                text: "Wo bekomme ich/wir Tickets?",
                                isCorrect: false,
                            },
                            {
                                text: "Ich spüre Schmerzen in meiner Brust",
                                isCorrect: false,
                            },
                            {
                                text: "Haben Sie ein Zimmer für zwei Nächte?",
                                isCorrect: true,
                            },
                        ],
                    },
                    {
                        question:
                            "Do you know where is the nearest Currency Exchange?",
                        answers: [
                            {
                                text: "Haben Sie vegetarische/vegane Optionen?",
                                isCorrect: false,
                            },
                            {
                                text: "Wissen Sie, wo die nächste Wechselstube ist?",
                                isCorrect: true,
                            },
                            {
                                text: "Ich habe Kopfschmerzen/Bauchschmerzen.",
                                isCorrect: false,
                            },
                            {
                                text: "Ich habe ein Zimmer reserviert.",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "What time does the museum open?",
                        answers: [
                            {
                                text: "Können Sie mir eine Quittung geben?",
                                isCorrect: false,
                            },
                            {
                                text: "Hast du bitte eine Tasche?",
                                isCorrect: false,
                            },
                            {
                                text: "Um wie viel Uhr wird das Museum öffnen?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Haben Sie ein Zimmer für zwei Nächte?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have any wholemeal bread?",
                        answers: [
                            {
                                text: "Könnte ich Pflaster haben?",
                                isCorrect: false,
                            },
                            {
                                text: "Wie komme ich zum nächsten Geldautomaten?",
                                isCorrect: false,
                            },
                            {
                                text: "Hast du vollkornbrot?",
                                isCorrect: true,
                            },
                            {
                                text: "Bitte mehr Brot",
                                isCorrect: false,
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                difficulty: "Medium",
                quiz: [
                    {
                        question:
                            "Could you tell me where is the nearest train/bus station?",
                        answers: [
                            {
                                text: "Wissen Sie, wo die nächste Wechselstube ist?",
                                isCorrect: false,
                            },
                            {
                                text: "Können Sie mir sagen, wo der nächste Bahnhof/Busbahnhof ist?",
                                isCorrect: true,
                            },
                            {
                                text: "Was ist die Notrufnummer?",
                                isCorrect: false,
                            },
                            {
                                text: "Hast du vollkornbrot?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have a room for two nights?",
                        answers: [
                            {
                                text: "Ein Tisch für vier bitte",
                                isCorrect: false,
                            },
                            {
                                text: "Wo bekomme ich/wir Tickets?",
                                isCorrect: false,
                            },
                            {
                                text: "Ich spüre Schmerzen in meiner Brust",
                                isCorrect: false,
                            },
                            {
                                text: "Haben Sie ein Zimmer für zwei Nächte?",
                                isCorrect: true,
                            },
                        ],
                    },
                    {
                        question:
                            "Do you know where is the nearest Currency Exchange?",
                        answers: [
                            {
                                text: "Haben Sie vegetarische/vegane Optionen?",
                                isCorrect: false,
                            },
                            {
                                text: "Wissen Sie, wo die nächste Wechselstube ist?",
                                isCorrect: true,
                            },
                            {
                                text: "Ich habe Kopfschmerzen/Bauchschmerzen.",
                                isCorrect: false,
                            },
                            {
                                text: "Ich habe ein Zimmer reserviert.",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "What time does the museum open?",
                        answers: [
                            {
                                text: "Können Sie mir eine Quittung geben?",
                                isCorrect: false,
                            },
                            {
                                text: "Hast du bitte eine Tasche?",
                                isCorrect: false,
                            },
                            {
                                text: "Um wie viel Uhr wird das Museum öffnen?",
                                isCorrect: true,
                            },
                            {
                                text: "¿Haben Sie ein Zimmer für zwei Nächte?",
                                isCorrect: false,
                            },
                        ],
                    },
                    {
                        question: "Do you have any wholemeal bread?",
                        answers: [
                            {
                                text: "Könnte ich Pflaster haben?",
                                isCorrect: false,
                            },
                            {
                                text: "Wie komme ich zum nächsten Geldautomaten?",
                                isCorrect: false,
                            },
                            {
                                text: "Hast du vollkornbrot?",
                                isCorrect: true,
                            },
                            {
                                text: "Bitte mehr Brot",
                                isCorrect: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
