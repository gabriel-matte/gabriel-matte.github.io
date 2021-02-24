//list of products
var products = [
    {
        id: 'norman01',
        brand: 'Norman',
        model: 'Cherry SunBurst',
        type: 'Acoustic',
        price: 1295.00,
        rating: 4,
        description: 'This beautiful guitar is made entirely from Canadian wood, providing rich sound and durability. Its dreadnought body shape provides comfort for players of all sizes. The guitar features nuts for securely attaching a strap. </br> Made by hand in Quebec City.',
        features: ['Solid oak body and neck', 'Pearl inlays', 'Brass tuning pegs and hardware', 'Cherry sunburst design', 'Patterned pick-guard'],
        moreDescription: 'Here is where more details about the guitar would go. Maybe more about famous people who played it, what kind of condition it might be in if it was used. For now, this is just filler text though.',
        image: ['musicImages/NormanCherryAcousticThumb.jpg', 'musicImages/NormanCherryAcoustic.jpg', 'musicImages/NormanCherryAcousticBack.jpg']
    },
    {
        id: 'Norman02',
        brand: 'Norman',
        model: 'Multiac Semi-Hollow Spruce Top',
        type: 'Hybrid',
        price: 1650.00,
        rating: 5,
        description: "A perfect blend of acoustic and electric. This guitar is has a lightweight Manitoba spruce top, mahogany back, and mahogany neck. Visually unique reverberation holes and semi-hollow body give this guitar a light, but complex timbre and the miniature Humbucker pickup gives it powerful amplification capabilities.",
        features: ['Spruce top', 'Mahogany neck', 'Minimalist pearl inlays', 'Miniature Humbucker pickup', 'Volume and tone controls', 'Stainless steel tuning pegs'],
        moreDescription: 'Godin Guitars is a proud Canadian company, making each and every guitar by hand. Based out of New Brunswick, this small family business continues to grow, releasing new and unique guitar styles every year.',
        image: ['musicImages/MultiacThumb.jpg', 'musicImages/MultiacFront.jpg', 'musicImages/MultiacBack.jpg', 'musicImages/MultiacAngle.jpg']
    },
    {
        id: 'Gibson01',
        brand: 'Gibson',
        model: 'SG Standard Ebony',
        type: 'Electric',
        price: 1195.00,
        rating: 3,
        description: "The Gibson SG Standard rocks the classic looks and features associated with the late 60's style SG models sought after by many. A rounded profile mahogany neck, bound rosewood fingerboard, long tenon 19th fret neck joint, and a solid mahogany body provide the backbone for singing sustain.",
        features: ['Sleek glossy black finish', 'Jumbo frets', 'Two double Humbucker pickups', 'Matte-black hardware', 'Double cutaways'],
        moreDescription: "Angus Young of AC/DC's signature guitar. The jumbo frets allow for ease of control when shredding all the way up the fretboard. Gives a chunky sound with control over tone between the two double Humbuckers.",
        image: ['musicImages/GibsonSGThumb.jpg', 'musicImages/GibsonSGFront.jpg', 'musicImages/GibsonSGBack.jpg', 'musicImages/GibsonSGAngle.jpg']
    },
    {
        id: 'Fender01',
        brand: 'Fender',
        model: 'Telecaster Tidepool',
        type: 'Electric',
        price: 975.00,
        rating: 5,
        description: "Bold, innovative and rugged, the Player Telecaster is pure Fender, through and through. The feel, the style and, most importantly, the sound—they’re all there, waiting for you to make them whisper or wail for your music. Versatile enough to handle almost anything you can create and durable enough to survive any gig, this workhorse is a trusty sidekick for your musical vision.",
        features: ['Retro chrome hardware', 'Maple fingerboard', 'Signature Fender pickups'],
        moreDescription: "",
        image: ['musicImages/FenderTelecasterThumb.jpg', 'musicImages/FenderTelecasterFront.jpg', 'musicImages/FenderTelecasterBack.jpg']
    },
    {
        id: 'Fender02',
        brand: 'Fender',
        model: 'Jimmy Page Telecaster',
        type: 'Electric',
        price: 2145.00,
        rating: 5,
        description: "A classic Fender Telecaster with the unique style of the famed Jimmy Page of Led Zeppelin. The Fender Jimmy Page Telecaster is an homage to that guitar, which began life in its factory White Blonde lacquer finish, then became the 'mirror guitar' before taking on its final form: a magical one-of-a-kind instrument, hand-painted by Page himself, that would go on to produce some of the most iconic riffs of the 20th Century.",
        features: ['Custom paint job', 'Retro chrome hardware', 'Custom pastel pick-guard', 'True Led Zeppelin sound'],
        moreDescription: "When the opening riff of 'Good Times Bad Times' came through the radio in 1969, everything changed. In that moment Jimmy Page cemented his legacy and altered the course of popular music with a single guitar: his Fender Telecaster.",
        image: ['musicImages/FenderJimmyThumb.jpg', 'musicImages/FenderJimmyFront.jpg', 'musicImages/FenderJimmyBack.jpg']
    },
    {
        id: 'Fender03',
        brand: 'Fender',
        model: 'Acoustasonic Telecaster',
        type: 'Hybrid',
        price: 2795.00,
        rating: 5,
        description: "The American Acoustasonic Telecaster embodies the spirit of purposeful innovation that Fender was built on. From acoustic shape-shifting to electric rhythm tones, this powerful guitar uses a revolutionary Fender and Fishman-designed Acoustic Engine to deliver new sonic expression from the studio to the stage.",
        features: ['Narrow hollow body', 'Single signature Fender pickup', 'Natural mahogany fingerboard', 'Jumbo frets'],
        moreDescription: "",
        image: ['musicImages/FenderAcoustasonicThumb.jpg', 'musicImages/FenderAcoustasonicFront.jpg', 'musicImages/FenderAcoustasonicBack.jpg']
    },
    {
        id: 'Fender04',
        brand: 'Fender',
        model: 'Dreadnought Sunburst',
        type: 'Acoustic',
        price: 295.00,
        rating: 3,
        description: "The FA-125 is a visually stunning guitar with a budget-friendly price. Quality laminate construction with a modern Fender 3+3 headstock and Viking bridge create an easy-playing instrument that sounds great.",
        features: ['Bold sunburst finish', 'Dreadnought-style body', 'Nato fingerboard'],
        moreDescription: "Beginners and developing players will appreciate this guitar, which features a nato neck that gives the guitar lively tone and a smooth playing feel.",
        image: ['musicImages/FenderDreadnoughtThumb.jpg', 'musicImages/FenderDreadnoughtFront.jpg', 'musicImages/FenderDreadnoughtBack.jpg']
    },
    {
        id: 'Gibson02',
        brand: 'Gibson',
        model: 'Les-Paul Standard 50S',
        type: 'Electric',
        price: 3495.00,
        rating: 5,
        description: "The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and amber top hat knobs.",
        features: ['Beautifully textured mahogany body', 'Classic Iced Tea sunburst', 'Double Humbucker pickups', 'Think pearl inlays'],
        moreDescription: "The new Les Paul Standard returns to the classic design that made it relevant, played and loved - shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life.",
        image: ['musicImages/GibsonLesPaulThumb.jpg', 'musicImages/GibsonLesPaulFront.jpg', 'musicImages/GibsonLesPaulBack.jpg', 'musicImages/GibsonLesPaulHead.jpg']
    },
    {
        id: 'Yamaha01',
        brand: 'Yamaha',
        model: 'Sunset Blue',
        type: 'Acoustic',
        price: 345.00,
        rating: 2,
        description: "In addition to warmer and stronger sound thanks to the mahogany back and sides, the body binding and fingerboard binding are cream plastic, for an upgraded look. A wealth of color options are available.",
        features: ['Blue sunburst design', 'Classic Western body shape', 'Spruce top', 'Mahogany back and sides'],
        moreDescription: "",
        image: ['musicImages/YamahaSunsetBlueThumb.jpg', 'musicImages/YamahaSunsetBlueFront.jpg', 'musicImages/YamahaSunsetBlueZoom.jpg']
    },
    {
        id: 'Gibson03',
        brand: 'Gibson',
        model: '60S Original Wine Red',
        type: 'Acoustic',
        price: 3195.00,
        rating: 4,
        description: "When you listen to a Gibson round-shoulder acoustic, you will notice that it responds exactly to the player's style and technique - powerful one moment, soft and mellow the next. This 60s J-45 Original offers a period-correct 1 11/16’’ nut width, allowing for comfortable fingering in any position along the mahogany neck. The easily-adjustable saddle can be fine-tuned to players' unique string action preference. The new 60s J-45 Original features double antiqued binding, Grover strap cream button tuners, and our famous white pickguard with hot stamp logo.",
        features: ['Pearl trim', 'Deep wine red stain', 'Ivory pick-guard', 'Jumbo frets'],
        moreDescription: "This guitar sounds as rich as it looks.",
        image: ['musicImages/Gibson60SThumb.jpg', 'musicImages/Gibson60SFront.jpg', 'musicImages/Gibson60SBack.jpg']
    },
    {
        id: 'Norman03',
        brand: 'Norman',
        model: 'Roadhouse Bourbon Burst',
        type: 'Hybrid',
        price: 640.00,
        rating: 5,
        description: "Reminiscent of the days of freight train hopping and hitchhiking musicians, these parlor size guitars deliver exceptional string to string balance and well defined articulation. Whether fingerpicking gently or backhanding open chords, the Roadhouse promises excellent playability with a vintage vibe. Offered in Bourbon Burst, Faded Black or Tennessee Red, the incredibly affordable Roadhouse projects and resonates beautifully alone or plugged in.",
        features: ['Hidden internal pickup', 'Mahogany neck', 'Narrow Ukelele-style body', 'Repurposed bourbon barrel oak body', 'Brass tuning pegs'],
        moreDescription: '',
        image: ['musicImages/NormanRoadhouseThumb.jpg', 'musicImages/NormanRoadhouseFront.jpg', 'musicImages/NormanRoadhouseBack.jpg']
    },
    {
        id: 'YamahaAmp01',
        brand: 'Yamaha',
        model: 'THR30II Wireless',
        type: 'Amplifier',
        price: 345.00,
        rating: 4,
        description: "Guitarists are familiar with the tube amp stacks that sound amazing when turned up loud on a big stage, and with combo amps that are a perfect fit for smaller venues and rehearsal. THR ignored the convention that a practice amp should simply be a smaller version of a larger amplifier, creating a new “third amp” category designed around what players need when they’re playing at home.",
        features: ['Realistic tube-amp tones and feel plus essential effects', '15 guitar amp models, 3 bass amp models, 3 mic models for acoustic-electrics', 'Built-in rechargeable battery lets you play anywhere', 'Plug-and-play USB connectivity for recording and playback'],
        moreDescription: "",
        image: ['musicImages/YamahaTHRThumb.png', 'musicImages/YamahaTHRFront.png', 'musicImages/YamahaTHRBack.png']
    },
    {
        id: 'FenderAmp01',
        brand: 'Fender',
        model: 'Acoustasonic 90 Combo',
        type: 'Amplifier',
        price: 419.00,
        rating: 3,
        description: "The Acoustasonic 90 also delivers a wealth of other versatile features, including instrument and microphone channels with independent tone and effects controls. smart feedback elimination circuit with on/off switch for each channel; studio-quality effects including reverb, echo/delay, chorus, Vibratone and more; XLR line output with ground lift; auxiliary input external media player use; strong but lightweight five-ply hardwood construction; and a classic Fender look.",
        features: ["Instrument and microphone channels", "Smart feedback elimination circuit", 'On/off switch for each channel', 'Lightweight five-ply hardwood construction'],
        moreDescription: "",
        image: ['musicImages/FenderAmp90Thumb.png', 'musicImages/FenderAmp90Front.png', 'musicImages/FenderAmp90Back.png']
    },
    {
        id: 'FenderAmp02',
        brand: 'Fender',
        model: 'Limited Edition Blues Junior',
        type: 'Amplifier',
        price: 915.00,
        rating: 5,
        description: "One of the most-beloved small combo amps in the world, the Blues Junior IV adds modified preamp circuitry, smoother-sounding spring reverb and improved aesthetics that any player is sure to appreciate. A 15-watt favorite in any setting, this amp is ideal for guitarists who need to hit the stage or studio at a moment's notice with warm tone and versatile features.",
        features: ["Chicken-Head Style Pointer - Ivory", "Inputs - One 1/4 inch", "Rectifier - Solid State", "Cabinet Material - 5/8 inch particleboard"],
        moreDescription: "",
        image: ['musicImages/FenderAmpBluesThumb.png', 'musicImages/FenderAmpBluesFront.png', 'musicImages/FenderAmpBluesBack.png']
    },
    {
        id: 'FenderAmp03',
        brand: 'Fender',
        model: 'Tone Master Deluxe',
        type: 'Amplifier',
        price: 1195.00,
        rating: 5,
        description: "The Fender Tone Master Deluxe Reverb is a stunning facsimile of the timeless all-tube Deluxe Reverb, built using the latest in lightweight digital amplification and a premium neodymium Jensen speaker. Faithful modeling of the classic tube architecture gives the Tone Master all the headroom, output, and reactivity of the original at a massive weight savings. A solid pine cabinet further shaves off poundage. A 12-inch Jensen N12K in the Tone Master delivers a massive, defined low end and a sweet top-end sparkle at a greatly reduced weight. Around back, a 5-way power attenuator transparently reduces wattage to let you achieve just the right tube-flavored cluck and breakup for any live and studio setting. You also get an XLR balanced output with your choice of flat-response or two onboard cab simulations for silent performance and recording.",
        features: ["All the look, tone, and output of a classic 22W all-tube Deluxe", "The latest in solid-state digital tone modeling", "5-way attenuator dials back power to 0.2 watts", "Solid pinewood cabinet in black textured vinyl with a classic silver grille cloth", "Balanced XLR out with output control, selectable cab IRs, and ground lift", "Includes a 2-button footswitch for reverb and tremolo switching and cover"],
        moreDescription: "",
        image: ['musicImages/FenderToneMasterThumb.png', 'musicImages/FenderToneMasterFront.png', 'musicImages/FenderToneMasterBack.png']
    }

]