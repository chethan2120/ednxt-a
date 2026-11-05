export interface CurriculumTopic {
  id: string;
  curriculum: 'CBSE' | 'British';
  subject: 'Science' | 'Mathematics' | 'AI for Students' | 'Public Speaking';
  grade: string; // e.g. "Grade 6", "Year 7", "Level 1"
  term: 1 | 2 | 3;
  termTitle: string;
  duration: string; // "Weeks 1–12"
  topics: {
    title: string;
    description: string;
    subtopics: string[];
    practicalActivity?: string;
  }[];
  learningApproach: string;
  assessments: string[];
  capstone?: string;
}

export const ACADEMIC_FRAMEWORK = {
  termsPerYear: 3,
  weeksPerTerm: 12,
  weeksTotal: 36,
  alignment: 'Aligned with UAE School Academic Calendar (Term 1: Sep–Dec, Term 2: Jan–Mar, Term 3: Apr–Jun)',
  scienceAndMathFormat: 'Two 60-minute interactive live classes weekly + Weekly guided homework + Dedicated 1-on-1 doubt clearing slot',
  aiAndSpeakingFormat: 'One 60–75-minute hands-on studio session weekly + Project-based practical tasks + Capstone showcases',
  assessmentMilestones: [
    'Week 0: Comprehensive Diagnostic Benchmark Assessment',
    'Week 6: Mid-Term Concept & Skill Checkpoint',
    'Week 12: End-of-Term Comprehensive Evaluation & Capstone Presentation',
    'Post-Term: Detailed Parent Progress Report & 1-on-1 Academic Consultation'
  ],
  ncertDisclaimer: 'NCERT has been revising textbooks. The chapter lists are at topic level. The actual syllabus will be decided based on mutual agreement between the student and the teacher.'
};

export const GRADE_MAPPINGS = [
  { cbseGrade: 'Grade 6', britishYear: 'Year 7', ageGroup: '11–12 Years', stage: 'Middle School Entry' },
  { cbseGrade: 'Grade 7', britishYear: 'Year 8', ageGroup: '12–13 Years', stage: 'Middle School Intermediate' },
  { cbseGrade: 'Grade 8', britishYear: 'Year 9', ageGroup: '13–14 Years', stage: 'High School Transition' },
];

export const ALL_CURRICULA: CurriculumTopic[] = [
  // ==================== CBSE SCIENCE ====================
  // Grade 6 - Term 1
  {
    id: 'cbse-sci-g6-t1',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 6',
    term: 1,
    termTitle: 'Term 1: Foundations of Matter & Living Systems',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Components of Food & Balanced Nutrition',
        description: 'Detailed analysis of macro/micronutrients, dietary deficiencies, and balanced meal design.',
        subtopics: ['Carbohydrates, proteins, fats, vitamins & minerals', 'Food test experiments (Starch, Protein, Fats)', 'Deficiency diseases & balanced diet planning'],
        practicalActivity: 'Virtual lab: Food sample testing with Iodine & Biuret reagents'
      },
      {
        title: 'Sorting Materials into Groups',
        description: 'Physical properties, states of matter, transparency, solubility and conduction.',
        subtopics: ['Appearance, hardness, and solubility in water', 'Density, buoyancy, and optical transparency', 'Classification logic for scientific inquiry'],
        practicalActivity: 'Buoyancy and solubility matrix investigation'
      },
      {
        title: 'Separation of Substances',
        description: 'Mechanisms and physical processes to separate mixtures in everyday life.',
        subtopics: ['Handpicking, winnowing, sieving & sedimentation', 'Decantation, filtration, evaporation & condensation', 'Saturated solutions and dissolving limits'],
        practicalActivity: 'Designing a multi-stage water purification filter'
      },
      {
        title: 'Getting to Know Plants',
        description: 'Morphology, structure and physiological adaptations of herbs, shrubs and trees.',
        subtopics: ['Root systems (Taproot vs Fibrous)', 'Stem function, venation (Reticulate vs Parallel)', 'Flower anatomy (Petals, sepals, pistil, stamen)'],
        practicalActivity: 'Botanical leaf venation and flower dissection sketch'
      }
    ],
    learningApproach: 'Inquiry-led pedagogy with interactive virtual demonstrations and observational lab notebooks.',
    assessments: ['Diagnostic Baseline (Week 0)', 'Mid-term Quiz on Nutrition & Matter (Week 6)', 'Hands-on Science Project Report (Week 12)'],
    capstone: 'Designing a nutritious balanced diet model for adolescent athletes'
  },
  // Grade 6 - Term 2
  {
    id: 'cbse-sci-g6-t2',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 6',
    term: 2,
    termTitle: 'Term 2: Organism Biology, Motion & Light',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Body Movements & Skeletal System',
        description: 'Human skeletal architecture, joints, muscular contraction, and animal locomotion.',
        subtopics: ['Ball-and-socket, hinge, and pivot joints', 'Cartilage, tendons and muscular coordination', 'Locomotion in earthworms, snails, fish and birds'],
        practicalActivity: 'Cardboard working hinge-joint model construction'
      },
      {
        title: 'The Living Organisms — Characteristics and Habitats',
        description: 'Biomes, biotic/abiotic factors, and structural adaptations for survival.',
        subtopics: ['Terrestrial (desert, mountain, grassland) adaptations', 'Aquatic (ocean, pond) ecosystems', 'Living characteristics: Respiration, stimuli response, excretion'],
        practicalActivity: 'Adaptation case study: Camel vs Desert Succulents'
      },
      {
        title: 'Motion and Measurement of Distances',
        description: 'Standard units of measurement, types of motion, and precision measurement tools.',
        subtopics: ['History of transport and evolution of units', 'SI units (Metres, seconds) and precision reading', 'Linear, circular, periodic, and rotational motion'],
        practicalActivity: 'Measuring irregular perimeters using string and metric rules'
      },
      {
        title: 'Light, Shadows and Reflections',
        description: 'Rectilinear propagation of light, pinhole cameras, shadows, and mirror reflections.',
        subtopics: ['Opaque, transparent, and translucent materials', 'Geometry of shadow formation and eclipse basics', 'Pinhole optics and plane mirror reflection laws'],
        practicalActivity: 'Building a working pinhole camera box'
      }
    ],
    learningApproach: 'Experimental exploration connecting physical mechanics to physiological movement.',
    assessments: ['Biome Presentation (Week 6)', 'Optics & Measurement Practical Assessment (Week 12)']
  },
  // Grade 6 - Term 3
  {
    id: 'cbse-sci-g6-t3',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 6',
    term: 3,
    termTitle: 'Term 3: Electricity, Magnetism & Environment',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Electricity and Circuits',
        description: 'Electrical circuits, conductors, insulators, switches, and battery functions.',
        subtopics: ['Electric cell structure and chemical energy', 'Closed vs open circuits and switch mechanisms', 'Conductors and insulators safety protocols'],
        practicalActivity: 'Constructing a tester circuit and continuity tester'
      },
      {
        title: 'Fun with Magnets',
        description: 'Magnetic poles, attraction/repulsion, and finding directions with compasses.',
        subtopics: ['Discovery of magnets, magnetic vs non-magnetic materials', 'Magnetic poles and earth as a giant magnet', 'Making a homemade compass and demagnetization prevention'],
        practicalActivity: 'Floating needle compass in a water bowl'
      },
      {
        title: 'Air Around Us & Atmospheric Protection',
        description: 'Composition of atmosphere, oxygen cycle, respiration in organisms and air quality.',
        subtopics: ['Nitrogen, oxygen, carbon dioxide and water vapour balance', 'How aquatic and soil creatures breathe', 'Wind energy, windmills, and combating air pollution'],
        practicalActivity: 'Testing oxygen requirement in candle combustion'
      },
      {
        title: 'Water & Environmental Conservation',
        description: 'Hydrological cycle, rainwater harvesting, droughts, floods and responsible stewardship.',
        subtopics: ['Evaporation, transpiration, cloud formation, precipitation', 'Groundwater recharge and rooftop rainwater harvesting', 'Conservation best practices for arid UAE climates'],
        practicalActivity: 'Sustainable UAE Household Water Audit Project'
      }
    ],
    learningApproach: 'STEM design challenges and environmental audit projects.',
    assessments: ['Circuit building test (Week 6)', 'Term 3 Final Comprehensive Exam (Week 12)'],
    capstone: 'Designing a renewable energy model using wind and solar circuits'
  },

  // Grade 7 - Term 1
  {
    id: 'cbse-sci-g7-t1',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 7',
    term: 1,
    termTitle: 'Term 1: Biochemistry, Nutrition & Thermodynamics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Nutrition in Plants',
        description: 'Autotrophic photosynthesis, heterotrophic parasitic, saprotrophic, and symbiotic relations.',
        subtopics: ['Chlorophyll, stomata, light and dark reactions', 'Parasitic cuscuta, insectivorous pitcher plants', 'Fungi saprotrophism and rhizobium nitrogen replenishment'],
        practicalActivity: 'Stomatal peel observation under digital microscope simulation'
      },
      {
        title: 'Nutrition in Animals',
        description: 'Human alimentary canal, digestion chemistry, enzymes, and ruminant digestion.',
        subtopics: ['Ingestion, digestion, absorption, assimilation, egestion', 'Digestive organs: Mouth, stomach, liver, pancreas, intestines', 'Ruminant stomach compartments (rumen, cud-chewing)'],
        practicalActivity: 'Enzyme action mapping across the digestive tract'
      },
      {
        title: 'Heat and Temperature',
        description: 'Thermal transfer mechanisms: conduction, convection, radiation, and clinical thermometers.',
        subtopics: ['Celsius, Fahrenheit, and Kelvin temperature scales', 'Conduction in solids, convection in fluids, radiation in vacuum', 'Sea breeze and land breeze convection cycles'],
        practicalActivity: 'Testing thermal conductivity rates in various metals'
      },
      {
        title: 'Acids, Bases and Salts',
        description: 'Acid-base indicators, pH concept, neutralization reactions, and everyday applications.',
        subtopics: ['Litmus, turmeric, and China rose indicators', 'Neutralization: Acid + Base -> Salt + Water + Heat', 'Antacids, ant stings (formic acid), soil pH management'],
        practicalActivity: 'Extracting natural indicators from red cabbage and hibiscus'
      }
    ],
    learningApproach: 'Laboratory simulations, molecular diagrams, and reaction observations.',
    assessments: ['Diagnostic Test (Week 0)', 'Biochemical Pathways Exam (Week 6)', 'Acid-Base Titration Lab Assessment (Week 12)']
  },
  // Grade 7 - Term 2
  {
    id: 'cbse-sci-g7-t2',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 7',
    term: 2,
    termTitle: 'Term 2: Reactions, Organism Respiration & Transport',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Physical and Chemical Changes',
        description: 'Reversible vs irreversible transformations, chemical bonding indicators, and corrosion.',
        subtopics: ['Crystallization of copper sulphate', 'Rusting of iron and galvanization prevention', 'Magnesium ribbon combustion and carbon dioxide test with lime water'],
        practicalActivity: 'Crystallizing pure copper sulphate crystals'
      },
      {
        title: 'Respiration in Organisms',
        description: 'Aerobic vs anaerobic cellular respiration, breathing mechanics, and diaphragm function.',
        subtopics: ['Glucose breakdown with/without oxygen, lactic acid build-up', 'Human respiratory pathway: Trachea, lungs, alveoli', 'Respiration in fish (gills), insects (spiracles), earthworms'],
        practicalActivity: 'Measuring lung tidal volume with a bell jar model'
      },
      {
        title: 'Transportation in Animals and Plants',
        description: 'Circulatory system, double circulation, heart anatomy, and xylem/phloem transport.',
        subtopics: ['Blood components (RBC, WBC, Platelets, Plasma)', 'Heart chambers, pulse rate, arteries vs veins', 'Xylem sap ascent, transpiration pull, and phloem translocation'],
        practicalActivity: 'Stethoscope pulse rate exercise and transpiration dye test'
      },
      {
        title: 'Reproduction in Plants',
        description: 'Asexual propagation (budding, fragmentation, spores) and sexual pollination.',
        subtopics: ['Vegetative propagation in potato, rose, and bryophyllum', 'Self vs cross-pollination agents (wind, insect, water)', 'Fertilization, zygote formation, seed and fruit dispersal'],
        practicalActivity: 'Seed dispersal aerodynamic testing'
      }
    ],
    learningApproach: 'Systems-level biological modeling and comparative anatomy.',
    assessments: ['Respiration & Circulation Case Study (Week 6)', 'Term 2 Assessment (Week 12)']
  },
  // Grade 7 - Term 3
  {
    id: 'cbse-sci-g7-t3',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 7',
    term: 3,
    termTitle: 'Term 3: Kinematics, Electromagnetism, Optics & Ecology',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Motion and Time',
        description: 'Speed calculations, uniform/non-uniform motion, distance-time graphs, and pendulum periodicity.',
        subtopics: ['Simple pendulum period, oscillations and frequency', 'Speed = Distance / Time metric calculations', 'Interpreting gradient of distance-time graphs'],
        practicalActivity: 'Pendulum length vs time-period data plotting'
      },
      {
        title: 'Electric Current and its Effects',
        description: 'Heating effect of current, electric fuses, MCBs, electromagnets, and electric bells.',
        subtopics: ['Nichrome wire heating effect and Joule heating', 'Electric fuse safety wire melting properties', 'Electromagnet fabrication and chime mechanism of electric bell'],
        practicalActivity: 'Building a working electromagnetic crane'
      },
      {
        title: 'Light and Optical Instruments',
        description: 'Spherical mirrors (concave/convex), lenses, refraction, and rainbow dispersion.',
        subtopics: ['Concave vs convex mirror focal points and ray diagrams', 'Convex lens magnification vs concave lens divergence', 'Newton disc and dispersion through a glass prism'],
        practicalActivity: 'Newton color wheel spin dispersion demonstration'
      },
      {
        title: 'Forests: Our Lifeline & Wastewater Story',
        description: 'Forest stratification, canopy, understorey, and municipal sewage treatment plants.',
        subtopics: ['Forest food webs, decomposers, and soil preservation', 'Sewage treatment stages: Bar screens, grit chambers, clarifiers, aeration', 'Better housekeeping practices for sanitation and grease disposal'],
        practicalActivity: 'Designing an eco-friendly greywater filtration layout'
      }
    ],
    learningApproach: 'Practical circuit physics and environmental engineering case studies.',
    assessments: ['Optics Ray Tracing Exam (Week 6)', 'End-of-Year Comprehensive Evaluation (Week 12)'],
    capstone: 'Building an automated optical or electromagnetic alarm system'
  },

  // Grade 8 - Term 1
  {
    id: 'cbse-sci-g8-t1',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 8',
    term: 1,
    termTitle: 'Term 1: Agriscience, Microbiology & Petrochemicals',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Crop Production and Management',
        description: 'Modern agricultural methods, drip irrigation, organic manure vs chemical fertilizers.',
        subtopics: ['Kharif vs Rabi crop cycles and soil preparation', 'Drip and sprinkler irrigation water-saving technologies', 'Harvesting, threshing, storage silos, and nitrogen fixing'],
        practicalActivity: 'Precision farming & drip irrigation scale simulator'
      },
      {
        title: 'Microorganisms: Friend and Foe',
        description: 'Bacteria, viruses, fungi, protozoa, fermentation, antibiotics, vaccines, and pathogens.',
        subtopics: ['Yeast fermentation, penicillin discovery, vaccine mechanism', 'Food preservation techniques (Pasteurization, salting, canning)', 'Plant and human pathogens, malaria and dengue vectors'],
        practicalActivity: 'Bacterial culture growth simulation and antibiotic zones'
      },
      {
        title: 'Coal and Petroleum & Energy Resources',
        description: 'Fossil fuel formation, fractional distillation of petroleum, petrochemicals and conservation.',
        subtopics: ['Carbonization, coal gas, coal tar, and coke extraction', 'Fractional distillation column fractions (LPG, petrol, diesel, bitumen)', 'Alternative clean energy transitions and carbon budgets'],
        practicalActivity: 'Fractional distillation column diagrammatic calculation'
      },
      {
        title: 'Combustion and Flame',
        description: 'Calorific values, ignition temperature, fire extinguisher types, and flame zones.',
        subtopics: ['Conditions for combustion (fuel, oxygen, heat)', 'Types: Rapid, spontaneous, and explosion', 'Zones of candle flame: Luminous, non-luminous, and unburnt wax'],
        practicalActivity: 'Calorific value comparison of common household fuels'
      }
    ],
    learningApproach: 'Applied industrial science and sustainability analysis.',
    assessments: ['Microbiology Lab Report (Week 6)', 'Energy & Agriscience Exam (Week 12)']
  },
  // Grade 8 - Term 2
  {
    id: 'cbse-sci-g8-t2',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 8',
    term: 2,
    termTitle: 'Term 2: Biodiversity, Endocrinology & Classical Mechanics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Conservation of Plants and Animals',
        description: 'Deforestation impact, biosphere reserves, national parks, Red Data Book, and endemic species.',
        subtopics: ['IUCN Red Data Book classifications', 'Biosphere reserves, wildlife sanctuaries, and project tiger', 'Reforestation, biodiversity index, and desertification cycles'],
        practicalActivity: 'Endangered UAE flora/fauna conservation portfolio'
      },
      {
        title: 'Reproduction in Animals',
        description: 'Sexual reproduction, internal/external fertilization, IVF, embryo development, and cloning.',
        subtopics: ['Male and female human reproductive anatomy', 'Fertilization, blastocyst implantation, and gestation', 'Metamorphosis in frogs (tadpole stages) and Dolly the sheep cloning'],
        practicalActivity: 'Comparative metamorphosis flowcharts'
      },
      {
        title: 'Reaching the Age of Adolescence',
        description: 'Puberty changes, endocrine glands, hormones, chromosomal sex determination, and health.',
        subtopics: ['Pituitary master gland, thyroid, pancreas (insulin), adrenal glands', 'Secondary sexual characteristics and Adam’s apple', 'XX / XY sex chromosome inheritance and teenage nutrition hygiene'],
        practicalActivity: 'Endocrine feedback loop mapping'
      },
      {
        title: 'Force, Pressure and Friction Mechanics',
        description: 'Contact/non-contact forces, atmospheric and hydrostatic pressure, static and rolling friction.',
        subtopics: ['Pressure = Force / Area equations and hydraulic principles', 'Atmospheric pressure variations with altitude (Torricelli concept)', 'Friction: Static vs sliding vs rolling, lubrication and ball bearings'],
        practicalActivity: 'Testing friction coefficients using inclined planes'
      }
    ],
    learningApproach: 'Rigorous quantitative problem solving and human biology.',
    assessments: ['Biomechanics & Pressure Test (Week 6)', 'Term 2 Mid-Year Review (Week 12)']
  },
  // Grade 8 - Term 3
  {
    id: 'cbse-sci-g8-t3',
    curriculum: 'CBSE',
    subject: 'Science',
    grade: 'Grade 8',
    term: 3,
    termTitle: 'Term 3: Acoustics, Electrochemistry, Optics & Atmospheric Physics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Sound and Acoustics',
        description: 'Vibration origin, frequency, amplitude, human ear anatomy, ultrasound, and noise pollution.',
        subtopics: ['Pitch (frequency in Hz) and loudness (amplitude in dB)', 'Outer, middle, inner ear mechanics and eardrum vibrations', 'Infrasonic, audible, and ultrasonic waves in SONAR and medicine'],
        practicalActivity: 'Oscilloscope audio frequency wave visualization'
      },
      {
        title: 'Chemical Effects of Electric Current',
        description: 'Electrolytic conduction, electroplating, copper purification, and Faraday electrolysis basics.',
        subtopics: ['Electrolytes vs non-electrolytes (salt solutions, acids, distilled water)', 'Electroplating with copper, chromium, and silver', 'Industrial electro-refining and LED testing of weak conductors'],
        practicalActivity: 'Virtual electroplating key experiment with copper sulphate'
      },
      {
        title: 'Some Natural Phenomena & Light Laws',
        description: 'Lightning, electroscopes, seismic waves (Richter scale), laws of reflection, and human eye.',
        subtopics: ['Transfer of charge, gold-leaf electroscope, lightning conductors', 'Tectonic plate boundaries, epicenter, seismograph operation', 'Laws of reflection, multiple reflections in kaleidoscopes, corneal refraction and defects'],
        practicalActivity: 'Building a cardboard optical periscope and kaleidoscope'
      },
      {
        title: 'Pollution of Air and Water',
        description: 'Greenhouse effect, acid rain, ozone depletion, smog, and potable water filtration standards.',
        subtopics: ['CFCs, CO2, sulphur dioxide, and nitrogen oxide environmental impacts', 'Eutrophication in lakes and BOD (Biological Oxygen Demand)', 'Reverse osmosis, chlorination, and international drinking water criteria'],
        practicalActivity: 'Greenhouse effect thermal trap experiment'
      }
    ],
    learningApproach: 'Integrated physics and environmental chemistry synthesis.',
    assessments: ['Acoustics & Electrochemistry Quiz (Week 6)', 'CBSE Grade 8 Final Benchmark Exam (Week 12)'],
    capstone: 'Designing a renewable water purification or soundproofing architectural module'
  },

  // ==================== BRITISH CURRICULUM SCIENCE (KS3) ====================
  // Year 7 - Term 1
  {
    id: 'brit-sci-y7-t1',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 7',
    term: 1,
    termTitle: 'Term 1: Cells, Matter & Forces',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Cells, Tissues and Organs',
        description: 'Ultrastructure of plant and animal cells, specialized cells, microscopy, and organ systems.',
        subtopics: ['Nucleus, cytoplasm, mitochondria, chloroplasts, cell walls', 'Specialised cells (nerve, root hair, red blood cell, ciliated epithelial)', 'Hierarchical organization: Organelles -> Cells -> Tissues -> Organs -> Systems'],
        practicalActivity: 'Microscope slide preparation with onion epidermis and methylene blue'
      },
      {
        title: 'Particles and their Behaviour',
        description: 'States of matter, particle theory, heating/cooling curves, gas pressure and diffusion.',
        subtopics: ['Kinetic theory in solids, liquids, and gases', 'Diffusion rates across varying temperatures and mediums', 'Gas pressure in sealed containers and vacuum experiments'],
        practicalActivity: 'Diffusion of potassium permanganate in cold vs boiling water'
      },
      {
        title: 'Forces and Motion',
        description: 'Balanced vs unbalanced forces, Hooke’s Law, friction, gravity and drag forces.',
        subtopics: ['Resultant forces and vector diagrams', 'Hooke’s Law and spring constant equations (F = k * e)', 'Air resistance, streamlining, and terminal velocity'],
        practicalActivity: 'Spring extension vs load Hooke’s law verification'
      }
    ],
    learningApproach: 'Working scientifically with precise hypothesis formulation and variable control.',
    assessments: ['Year 7 Diagnostic (Week 0)', 'Forces Practical Investigation (Week 6)', 'Term 1 Examination (Week 12)']
  },
  // Year 7 - Term 2
  {
    id: 'brit-sci-y7-t2',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 7',
    term: 2,
    termTitle: 'Term 2: Chemical Elements, Human Systems & Wave Optics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Elements, Atoms and Compounds',
        description: 'Atoms, chemical symbols, periodic table organization, compounds, and chemical formula writing.',
        subtopics: ['Chemical elements vs chemical compounds vs mixtures', 'Formulas and chemical word equations', 'Separating techniques: Chromatography, distillation, filtration'],
        practicalActivity: 'Paper chromatography of plant pigments and inks'
      },
      {
        title: 'Body Systems and Health',
        description: 'Digestive, skeletal, muscular and gas exchange systems in humans.',
        subtopics: ['Gas exchange in alveoli and effect of exercise on ventilation', 'Nutrients, enzyme digestion and energy values of foods', 'Effects of smoking, alcohol, and recreational drugs on vital organs'],
        practicalActivity: 'Measuring lung vital capacity and recovery heart rate'
      },
      {
        title: 'Sound and Light Waves',
        description: 'Transverse vs longitudinal waves, frequency, reflection, refraction, and optical lenses.',
        subtopics: ['Speed of sound in air, water, and solid steel', 'Wave properties: Amplitude, wavelength, frequency', 'Law of reflection, Snell’s refraction, ray tracing through prisms'],
        practicalActivity: 'Ray tracing through perspex glass blocks with light ray boxes'
      }
    ],
    learningApproach: 'Empirical data analysis with error analysis and repetition methodology.',
    assessments: ['Wave Optics Investigation (Week 6)', 'Term 2 British KS3 Benchmark (Week 12)']
  },
  // Year 7 - Term 3
  {
    id: 'brit-sci-y7-t3',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 7',
    term: 3,
    termTitle: 'Term 3: Reproduction, Acid-Base Reactions & Astrophysics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Reproduction in Animals and Plants',
        description: 'Human reproductive cycles, menstrual cycle, fertilization, plant pollination, and seed formation.',
        subtopics: ['Gametes, fertilization, implantation, gestation and foetal development', 'Insect and wind pollination floral adaptations', 'Seed dispersal strategies and germination requirements'],
        practicalActivity: 'Investigating factors affecting cress seed germination'
      },
      {
        title: 'Acids and Alkalis',
        description: 'Universal indicator, pH scale, neutralizing hazardous spills, and salt synthesis.',
        subtopics: ['Strong vs weak acids and alkalis on the pH scale', 'Neutralization equations and naming salts', 'Everyday neutralization in agriculture and medicine'],
        practicalActivity: 'Neutralization titration experiment to make soluble salt crystals'
      },
      {
        title: 'Earth and Space Physics',
        description: 'Solar system, planetary orbits, seasons, moon phases, satellites, and gravitational pull.',
        subtopics: ['Earth’s tilted axis and the cause of seasons', 'Lunar phases and solar/lunar eclipses', 'Gravitational field strength on planets and satellite orbits'],
        practicalActivity: 'Scale modeling the solar system orbital distances'
      }
    ],
    learningApproach: 'Cross-disciplinary astrophysics and chemical synthesis.',
    assessments: ['Space Science Presentation (Week 6)', 'Year 7 British KS3 Final Evaluation (Week 12)'],
    capstone: 'Designing a sustainable extraterrestrial habitat module'
  },

  // Year 8 - Term 1
  {
    id: 'brit-sci-y8-t1',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 8',
    term: 1,
    termTitle: 'Term 1: Health, Metals Chemistry & Energy Conservation',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Health and Lifestyle',
        description: 'Nutritional balance, calorie calculation, gut microbiome, and circulatory cardiovascular health.',
        subtopics: ['Energy requirements based on activity and metabolic rates', 'Enzyme action: Amylase, protease, lipase breakdown rates', 'Cardiovascular diseases, cholesterol, and arterial blockage prevention'],
        practicalActivity: 'Calorimetry experiment determining energy content of food samples'
      },
      {
        title: 'Periodic Table and Metals/Non-metals',
        description: 'Groups 1, 7, and 0 in the periodic table, reactivity series, and displacement reactions.',
        subtopics: ['Physical and chemical trends in alkali metals (Group 1) and halogens (Group 7)', 'Displacement reactions in metal salt solutions', 'Extracting metals from ores using carbon reduction'],
        practicalActivity: 'Microscale metal reactivity and displacement series testing'
      },
      {
        title: 'Energy Transfers and Conservation',
        description: 'Energy stores, pathways, Sankey diagrams, thermal insulation, and efficiency calculations.',
        subtopics: ['Kinetic, gravitational, thermal, elastic, and chemical stores', 'Work done equations (W = F * d) and power ratings in watts', 'Insulation methods (cavity walls, double glazing) and payback time'],
        practicalActivity: 'Testing thermal conductivity of insulation materials'
      }
    ],
    learningApproach: 'Quantitative physics calculations and reactivity series laboratory work.',
    assessments: ['Diagnostic Assessment (Week 0)', 'Reactivity Series Practical (Week 6)', 'Term 1 Exam (Week 12)']
  },
  // Year 8 - Term 2
  {
    id: 'brit-sci-y8-t2',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 8',
    term: 2,
    termTitle: 'Term 2: Ecosystems, Chemical Energetics & Contact Forces',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Ecosystems, Food Webs and Adaptation',
        description: 'Trophic levels, bioaccumulation, predator-prey dynamics, and sampling ecosystems.',
        subtopics: ['Food chains, webs, and pyramids of biomass/numbers', 'Bioaccumulation of toxins (pesticides, microplastics)', 'Quadrat sampling and transect line biodiversity measurement'],
        practicalActivity: 'Virtual quadrat population estimation in marine ecosystems'
      },
      {
        title: 'Chemical Energy and Reactions',
        description: 'Exothermic and endothermic reactions, activation energy, combustion, and bond energies.',
        subtopics: ['Temperature changes during chemical bond breaking and forming', 'Reaction profile diagrams and activation energy', 'Thermal decomposition of carbonates (copper carbonate to oxide)'],
        practicalActivity: 'Calorimetric measurement of neutralization enthalpy'
      },
      {
        title: 'Contact Forces, Pressure and Moments',
        description: 'Moment of a force, levers, gears, pressure in liquids, and atmospheric variations.',
        subtopics: ['Moment = Force * Perpendicular Distance (Nm)', 'Principle of moments and equilibrium in levers and seesaws', 'Hydraulic machines and pressure increasing with liquid depth'],
        practicalActivity: 'Verifying principle of moments with meter rules and weights'
      }
    ],
    learningApproach: 'Mechanical engineering concepts and thermodynamic profiling.',
    assessments: ['Mechanical Advantage Lab (Week 6)', 'Term 2 Examination (Week 12)']
  },
  // Year 8 - Term 3
  {
    id: 'brit-sci-y8-t3',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 8',
    term: 3,
    termTitle: 'Term 3: Genetics, Earth Resources & Electromagnetism',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Inheritance and Evolution',
        description: 'DNA structure, genes, chromosomes, natural selection, and selective breeding.',
        subtopics: ['Watson-Crick DNA double helix model', 'Punnett squares and dominant/recessive alleles', 'Darwinian natural selection and antibiotic resistance evolution'],
        practicalActivity: 'Extracting DNA strands from kiwi fruits'
      },
      {
        title: 'Earth’s Resources and Climate',
        description: 'Carbon cycle, rock cycle, atmospheric evolution, recycling, and carbon footprints.',
        subtopics: ['Igneous, sedimentary, and metamorphic rock transformations', 'Carbon cycle flow between atmosphere, oceans, and lithosphere', 'Life cycle assessments (LCA) for paper vs plastic products'],
        practicalActivity: 'Life Cycle Assessment (LCA) audit for everyday items'
      },
      {
        title: 'Magnetism and Electromagnets',
        description: 'Magnetic field lines, solenoids, factors affecting electromagnets, and electric motors.',
        subtopics: ['Plotting magnetic field lines with iron filings and plotting compasses', 'Coil turns, core material, and current strength in solenoids', 'Motor effect: Magnetic fields interacting to produce rotational motion'],
        practicalActivity: 'Building a simple DC electric motor'
      }
    ],
    learningApproach: 'Genomic investigation, earth systems modeling, and electro-mechanical robotics.',
    assessments: ['Genetics & LCA Report (Week 6)', 'Year 8 British KS3 Final Examination (Week 12)'],
    capstone: 'Designing a working electromagnetic sorting crane for recyclable metals'
  },

  // Year 9 - Term 1
  {
    id: 'brit-sci-y9-t1',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 9',
    term: 1,
    termTitle: 'Term 1: Cell Bioenergetics, Atomic Models & EM Spectrum',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Cell Biology and Bioenergetics',
        description: 'Advanced cellular ultrastructure, mitosis, stem cells, osmosis, and active transport.',
        subtopics: ['Prokaryotic vs eukaryotic cells, electron microscopy', 'Osmosis in plant tissue (investigating potato cylinders)', 'Cell cycle, mitosis stages, and embryonic vs adult stem cell ethics'],
        practicalActivity: 'Investigating potato cylinder mass change across sugar concentrations'
      },
      {
        title: 'Atomic Structure and the Periodic Table',
        description: 'Subatomic particles (protons, neutrons, electrons), isotopes, electronic configurations, and history of the atom.',
        subtopics: ['Dalton, Thomson, Rutherford, and Bohr atomic models', 'Relative atomic mass calculation from isotope abundances', 'Electronic shells (2, 8, 8) and relation to valence electrons'],
        practicalActivity: 'Isotopic abundance calculation workshop'
      },
      {
        title: 'Waves and the Electromagnetic Spectrum',
        description: 'Wave equations, electromagnetic spectrum regions, communication wavelengths, and ionization risks.',
        subtopics: ['Wave speed equation: v = f * λ', 'Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma rays', 'Medical and telecommunication applications, radiation safety limits'],
        practicalActivity: 'Measuring wave speed in a ripple tank simulation'
      }
    ],
    learningApproach: 'Bridge to GCSE level rigor with quantitative mathematical derivation.',
    assessments: ['Year 9 Diagnostic (Week 0)', 'Osmosis & Atomic Physics Exam (Week 6)', 'Term 1 GCSE Foundation Assessment (Week 12)']
  },
  // Year 9 - Term 2
  {
    id: 'brit-sci-y9-t2',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 9',
    term: 2,
    termTitle: 'Term 2: Chemical Bonding, Molecular Genetics & Circuit Dynamics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Bonding, Structure, and Properties of Matter',
        description: 'Ionic, covalent, and metallic bonding, giant lattices, polymers, and allotropes of carbon.',
        subtopics: ['Dot-and-cross diagrams for ionic and covalent bonds', 'Diamond, graphite, graphene, and fullerenes structural comparison', 'Metallic bonding and delocalized electron electrical conductivity'],
        practicalActivity: 'Crystal lattice molecular modeling and conductivity tests'
      },
      {
        title: 'Genetics, Ecology and Global Ecosystems',
        description: 'DNA replication, protein synthesis basics, mutations, biodiversity metrics, and global biomes.',
        subtopics: ['Nucleotide triplets, transcription, and translation basics', 'Monohybrid genetic crosses and pedigree charts', 'Ecosystem resilience, deforestation impacts, and peat bog conservation'],
        practicalActivity: 'Pedigree genetic analysis of inherited conditions'
      },
      {
        title: 'Electricity and Circuit Analysis',
        description: 'Ohm’s Law, series vs parallel circuits, IV characteristics of resistors, diodes, and thermistors.',
        subtopics: ['Potential difference (V = I * R) and charge flow (Q = I * t)', 'Series vs parallel rule for current, potential difference, and resistance', 'LDRs, thermistors, and automatic sensor switching circuits'],
        practicalActivity: 'Plotting IV characteristic curves for filament lamps and fixed resistors'
      }
    ],
    learningApproach: 'Electronic circuit measurement, chemical bonding models, and quantitative genetics.',
    assessments: ['Circuit Analysis Lab Exam (Week 6)', 'Term 2 Benchmark Assessment (Week 12)']
  },
  // Year 9 - Term 3
  {
    id: 'brit-sci-y9-t3',
    curriculum: 'British',
    subject: 'Science',
    grade: 'Year 9',
    term: 3,
    termTitle: 'Term 3: Quantitative Chemistry, Dynamics & GCSE Capstone',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Quantitative Chemistry and Energy Changes',
        description: 'Conservation of mass, relative formula mass (Mr), moles introduction, and reaction stoichiometry.',
        subtopics: ['Calculating Mr of compounds from atomic weights', 'Balancing chemical equations and reacting mass ratios', 'Percentage yield and atom economy concepts'],
        practicalActivity: 'Determining empirical formula of magnesium oxide experimentally'
      },
      {
        title: 'Forces, Newton’s Laws and Motion Dynamics',
        description: 'Newton’s Three Laws of Motion, momentum, kinetic energy, gravitational potential energy.',
        subtopics: ['Newton’s First, Second (F = m * a), and Third Laws', 'Momentum (p = m * v) and conservation of momentum in collisions', 'Kinetic energy (0.5 * m * v^2) and GPE (m * g * h) conversions'],
        practicalActivity: 'Trolley ramp velocity-time acceleration experiment with light gates'
      },
      {
        title: 'Advanced Scientific Inquiry & Capstone Project',
        description: 'Formulating independent hypotheses, experimental design, evaluating systematic/random errors.',
        subtopics: ['Independent, dependent, and controlled variable design', 'Precision, repeatability, reproducibility, and anomalous results', 'Drawing valid conclusions supported by standard deviation data'],
        practicalActivity: 'Independent scientific research symposium presentation'
      }
    ],
    learningApproach: 'Comprehensive preparation for GCSE Science with independent inquiry.',
    assessments: ['Quantitative Chemistry Exam (Week 6)', 'Year 9 Final KS3 Capstone Defense (Week 12)'],
    capstone: 'Independent scientific inquiry project: Designing and testing an energy conversion or filtration system'
  },

  // ==================== CBSE MATHEMATICS ====================
  // Grade 6 - Term 1
  {
    id: 'cbse-math-g6-t1',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 6',
    term: 1,
    termTitle: 'Term 1: Number Systems & Geometric Foundations',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Knowing Our Numbers',
        description: 'Large numbers comparison, Indian & International place value, estimation, and Roman numerals.',
        subtopics: ['7-digit and 8-digit numbers comparison and placement', 'Indian vs International numeration commas and periods', 'Rounding off to nearest tens, hundreds, thousands; Roman numerals rules'],
      },
      {
        title: 'Whole Numbers & Number Line Operations',
        description: 'Predecessors, successors, number line arithmetic, and operational properties.',
        subtopics: ['Closure, commutative, associative, and distributive properties', 'Identity for addition and multiplication', 'Patterns in whole numbers and triangular numbers'],
      },
      {
        title: 'Playing with Numbers (Factors, Multiples, Primes)',
        description: 'Prime and composite numbers, divisibility tests (2 to 11), HCF and LCM word problems.',
        subtopics: ['Prime factorization using factor trees and division method', 'Divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10, 11', 'Highest Common Factor (HCF) and Lowest Common Multiple (LCM) real-world applications'],
      },
      {
        title: 'Basic Geometrical Ideas',
        description: 'Points, lines, rays, line segments, intersecting and parallel lines, polygons, angles, and circles.',
        subtopics: ['Open and closed curves, interior and exterior of angles', 'Triangles, quadrilaterals, vertices, edges and diagonals', 'Circle anatomy: Radius, diameter, chord, sector, segment, and circumference'],
      }
    ],
    learningApproach: 'Visual number lines, geometrical manipulatives, and real-world word problems.',
    assessments: ['Diagnostic Baseline (Week 0)', 'Factors & LCM Test (Week 6)', 'Term 1 Geometry & Numbers Exam (Week 12)']
  },
  // Grade 6 - Term 2
  {
    id: 'cbse-math-g6-t2',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 6',
    term: 2,
    termTitle: 'Term 2: Spatial Sense, Integers & Rational Fractions',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Understanding Elementary Shapes',
        description: 'Measuring line segments, angles (acute, right, obtuse, reflex), classification of triangles and 3D shapes.',
        subtopics: ['Protractor measurement and clock face revolutions', 'Classification of triangles by sides (scalene, isosceles, equilateral) and angles', 'Perpendicular lines, quadrilaterals, and prisms/pyramids edges and faces'],
      },
      {
        title: 'Integers',
        description: 'Negative numbers concept, representation on number line, addition and subtraction rules.',
        subtopics: ['Opposites and absolute values in financial/temperature contexts', 'Addition and subtraction of integers using directional moves on number line', 'Additive inverse and multi-step integer expressions'],
      },
      {
        title: 'Fractions',
        description: 'Proper, improper, and mixed fractions, equivalent fractions, simplest form, and operations.',
        subtopics: ['Visual fraction models on number lines and shapes', 'Simplifying fractions and finding common denominators', 'Addition and subtraction of like and unlike fractions with real-life problems'],
      },
      {
        title: 'Decimals',
        description: 'Tenths, hundredths, place value chart, comparing decimals, and conversion to fractions.',
        subtopics: ['Representing decimals on number lines', 'Money, length, and weight decimal conversions', 'Addition and subtraction of decimals with precision alignment'],
      }
    ],
    learningApproach: 'Concrete-Representational-Abstract (CRA) instructional framework.',
    assessments: ['Integers Mastery Check (Week 6)', 'Fractions & Decimals Benchmark (Week 12)']
  },
  // Grade 6 - Term 3
  {
    id: 'cbse-math-g6-t3',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 6',
    term: 3,
    termTitle: 'Term 3: Data Handling, Mensuration, Algebra & Proportions',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Data Handling',
        description: 'Recording data, tally marks, pictographs, and drawing/interpreting bar graphs.',
        subtopics: ['Organizing raw surveys using frequency tally charts', 'Scale selection and pictograph interpretation', 'Constructing vertical and horizontal bar graphs with uniform spacing'],
      },
      {
        title: 'Mensuration: Perimeter and Area',
        description: 'Perimeter of regular polygons, area of rectangles and squares, and area approximations.',
        subtopics: ['Perimeter formulas for rectangles, squares, and equilateral triangles', 'Area calculation by counting unit squares on grid sheets', 'Practical problems calculating flooring costs and fencing perimeters'],
      },
      {
        title: 'Introduction to Algebra',
        description: 'Variables, constants, algebraic expressions from word statements, and linear equations by trial.',
        subtopics: ['Matchstick patterns and generalizing nth term formulas', 'Writing expressions with variables (addition, subtraction, multiplication, division)', 'Solving simple linear equations using systematic trial and error'],
      },
      {
        title: 'Ratio, Proportion and Practical Geometry',
        description: 'Comparing quantities by division, unitary method, ruler-compass constructions.',
        subtopics: ['Simplest form of ratios and equivalent ratios', 'Proportion verification (Product of extremes = Product of means)', 'Unitary method for cost/distance rate problems and perpendicular bisector construction'],
      }
    ],
    learningApproach: 'Project-based data analytics and compass drafting skills.',
    assessments: ['Mensuration Practical Test (Week 6)', 'Grade 6 Final Mathematics Exam (Week 12)'],
    capstone: 'Designing a dream bedroom layout with exact scaled perimeter, area, and cost estimations'
  },

  // Grade 7 - Term 1
  {
    id: 'cbse-math-g7-t1',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 7',
    term: 1,
    termTitle: 'Term 1: Advanced Integers, Fractions, Decimals & Simple Equations',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Integers: Multiplication & Division Properties',
        description: 'Signs rules, distributive property over addition/subtraction, and order of operations.',
        subtopics: ['Multiplication of positive and negative integers with sign proofs', 'Division properties of integers and division by zero undefined', 'Distributive property application for mental math shortcuts'],
      },
      {
        title: 'Fractions and Decimals Multiplication/Division',
        description: 'Multiplication of fractions, reciprocal of fractions, division of fractions and decimals.',
        subtopics: ['Fraction as an operator ‘of’ and area of fractional rectangles', 'Reciprocals and fractional division rules', 'Multiplication and division of decimals by 10, 100, 1000 and decimal divisors'],
      },
      {
        title: 'Data Handling & Central Tendency',
        description: 'Arithmetic mean, median, mode of ungrouped data, range, double bar graphs, and probability.',
        subtopics: ['Calculating Mean, Median, and Mode for datasets', 'Selecting the appropriate measure of central tendency', 'Double bar graph construction for comparative data and coin/dice probability basics'],
      },
      {
        title: 'Simple Equations',
        description: 'Setting up equations, transposing terms, and solving real-world word problems.',
        subtopics: ['Converting verbal word problems into algebraic equations', 'Solving equations by balancing and transposing method', 'Application to age, money, and geometry puzzle problems'],
      }
    ],
    learningApproach: 'Algorithmic efficiency combined with contextual word problem decoding.',
    assessments: ['Diagnostic Baseline (Week 0)', 'Equations & Data Handling Quiz (Week 6)', 'Term 1 Benchmark Exam (Week 12)']
  },
  // Grade 7 - Term 2
  {
    id: 'cbse-math-g7-t2',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 7',
    term: 2,
    termTitle: 'Term 2: Geometry, Triangles & Financial Mathematics',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Lines and Angles',
        description: 'Complementary, supplementary, adjacent, linear pair, vertically opposite angles, and transversals.',
        subtopics: ['Angle pairs properties and algebraic angle problem solving', 'Parallel lines cut by a transversal: Alternate, corresponding, interior co-angles', 'Checking for parallelism with angle relations'],
      },
      {
        title: 'The Triangle and its Properties',
        description: 'Medians, altitudes, exterior angle theorem, angle sum property, and Pythagoras’ theorem.',
        subtopics: ['Exterior angle equals sum of interior opposite angles proof', 'Sum of any two sides greater than third side property', 'Pythagoras theorem in right-angled triangles and Pythagorean triplets'],
      },
      {
        title: 'Comparing Quantities (Percentages, Profit/Loss, Interest)',
        description: 'Ratios to percentages, percentage change, cost price, selling price, profit/loss%, and simple interest.',
        subtopics: ['Converting between fractions, decimals, and percentages', 'Profit and loss percentage calculations on cost price', 'Simple Interest formula (I = P * R * T / 100) and Total Amount'],
      }
    ],
    learningApproach: 'Geometric proof visualization and applied financial arithmetic.',
    assessments: ['Geometry Proofs Assessment (Week 6)', 'Financial Math & Triangles Exam (Week 12)']
  },
  // Grade 7 - Term 3
  {
    id: 'cbse-math-g7-t3',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 7',
    term: 3,
    termTitle: 'Term 3: Rational Numbers, Mensuration, Exponents & Symmetry',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Rational Numbers',
        description: 'Need for rational numbers, positive/negative, equivalent, standard form, and arithmetic.',
        subtopics: ['Representation on number line and inserting rational numbers between two numbers', 'Standard form reduction (positive denominator, coprime)', 'Four operations (+, -, *, /) on rational numbers with unlike denominators'],
      },
      {
        title: 'Perimeter and Area of Advanced Figures',
        description: 'Area of parallelograms, triangles, circles, circumference, and running paths/borders.',
        subtopics: ['Area of parallelogram (Base * Height) and Triangle (0.5 * Base * Height)', 'Circumference (2 * pi * r) and Area of circle (pi * r^2)', 'Cross-paths and bordered paths inside/outside rectangular gardens'],
      },
      {
        title: 'Algebraic Expressions & Exponents',
        description: 'Terms, factors, coefficients, like/unlike terms, addition/subtraction, laws of exponents.',
        subtopics: ['Monomials, binomials, trinomials, polynomials and degree', 'Finding numerical value of expressions by substitution', 'Laws of exponents: Product, quotient, power of power, zero exponent'],
      },
      {
        title: 'Symmetry and Visualising Solid Shapes',
        description: 'Line symmetry, rotational symmetry (order and angle), nets of 3D solids, and oblique sketches.',
        subtopics: ['Lines of symmetry in regular polygons and circles', 'Rotational symmetry order in ceiling fans, wheels, and squares', 'Euler’s formula (F + V - E = 2) for polyhedra and isometric dot paper sketches'],
      }
    ],
    learningApproach: 'Spatial transformation and exponential growth modeling.',
    assessments: ['Exponents & Mensuration Quiz (Week 6)', 'Grade 7 Annual Mathematics Benchmark (Week 12)'],
    capstone: 'Designing a scaled geometric city park with budgeted path tiling, sodding, and irrigation calculations'
  },

  // Grade 8 - Term 1
  {
    id: 'cbse-math-g8-t1',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 8',
    term: 1,
    termTitle: 'Term 1: Number Theory, Linear Algebra & Quadrilaterals',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Rational Numbers: Axiomatic Properties',
        description: 'Closure, commutativity, associativity, distributivity, additive and multiplicative identities.',
        subtopics: ['Proof of properties for addition, subtraction, multiplication, and division', 'Negative of a number and reciprocal multiplication to 1', 'Distributive property shortcuts for complex rational arithmetic'],
      },
      {
        title: 'Linear Equations in One Variable',
        description: 'Solving linear equations with variables on both sides, reducing equations to simpler form.',
        subtopics: ['Linear expressions vs non-linear equations', 'Equations with brackets and variable on both sides', 'Advanced word problems: Two-digit numbers reversal, age, speed-distance-time, currency notes'],
      },
      {
        title: 'Understanding Quadrilaterals & Polygons',
        description: 'Angle sum of polygons, exterior angles, properties of parallelograms, rhombuses, rectangles, squares, kites.',
        subtopics: ['Sum of measures of exterior angles of any polygon = 360°', 'Interior angle sum formula: (n - 2) * 180°', 'Diagonals properties of special parallelograms and proof arguments'],
      },
      {
        title: 'Data Handling: Histograms, Pie Charts & Probability',
        description: 'Grouped frequency distributions, class intervals, histograms, pie charts, and outcomes probability.',
        subtopics: ['Constructing grouped frequency tables with continuous classes', 'Histogram construction with equal widths', 'Drawing pie charts with central angles calculation and theoretical probability'],
      }
    ],
    learningApproach: 'Formal algebraic reasoning, axiomatic proofs, and graphical statistical analysis.',
    assessments: ['Diagnostic Assessment (Week 0)', 'Linear Equations & Polygons Exam (Week 6)', 'Term 1 Benchmark Exam (Week 12)']
  },
  // Grade 8 - Term 2
  {
    id: 'cbse-math-g8-t2',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 8',
    term: 2,
    termTitle: 'Term 2: Roots, Commercial Math & Algebraic Identities',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Squares and Square Roots',
        description: 'Properties of square numbers, Pythagorean triplets, finding roots by prime factorization and long division.',
        subtopics: ['Patterns in square numbers and unit digits properties', 'Long division algorithm for large integers and decimals', 'Estimating square roots and word problems on square plots'],
      },
      {
        title: 'Cubes and Cube Roots',
        description: 'Hardy-Ramanujan numbers, prime factorization for cube roots, and estimation methods.',
        subtopics: ['Units digit in cubes and properties of cube numbers', 'Cube roots by prime factorization', 'Cube roots of negative numbers and decimal volumes'],
      },
      {
        title: 'Comparing Quantities (Compound Interest & Discounts)',
        description: 'Discounts, marked price, sales tax/GST, compound interest formula compounded annually and semi-annually.',
        subtopics: ['Successive discounts and VAT / GST percentage applications', 'Derivation of Compound Interest formula: A = P(1 + R/100)^n', 'Compounded half-yearly vs annually growth rate problems and population depreciation'],
      },
      {
        title: 'Algebraic Expressions and Standard Identities',
        description: 'Multiplication of polynomials, standard identities (a+b)^2, (a-b)^2, a^2-b^2, (x+a)(x+b).',
        subtopics: ['Monomial by polynomial and binomial by binomial multiplication', 'Verification of standard algebraic identities geometrically', 'Application of identities for fast numerical multiplication'],
      }
    ],
    learningApproach: 'Algebraic decomposition, long division mastery, and financial compound growth simulations.',
    assessments: ['Square Roots & Identities Test (Week 6)', 'Term 2 Commercial Math & Algebra Benchmark (Week 12)']
  },
  // Grade 8 - Term 3
  {
    id: 'cbse-math-g8-t3',
    curriculum: 'CBSE',
    subject: 'Mathematics',
    grade: 'Grade 8',
    term: 3,
    termTitle: 'Term 3: Mensuration (3D), Exponents, Factorisation & Graphs',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Mensuration: Surface Area and Volume',
        description: 'Area of trapezium, general quadrilateral, surface area and volume of cuboids, cubes, and cylinders.',
        subtopics: ['Trapezium and polygon decomposition areas', 'Total and Lateral surface area formulas for cube, cuboid, cylinder', 'Volume formulas and capacity in litres conversion problems'],
      },
      {
        title: 'Exponents and Powers (Negative Powers)',
        description: 'Powers with negative exponents, laws of exponents, scientific notation standard form for tiny/large numbers.',
        subtopics: ['Negative exponent reciprocal property: a^(-m) = 1 / a^m', 'Simplification using exponential laws', 'Expressing micron distances and planetary masses in scientific notation'],
      },
      {
        title: 'Direct and Inverse Proportions',
        description: 'Constant of proportionality, identifying direct vs inverse relations, and rate equations.',
        subtopics: ['Direct proportion equations: x / y = k (Speed and distance, workers and earnings)', 'Inverse proportion equations: x * y = k (Speed and travel time, workers and days)', 'Multi-step proportion problem solving'],
      },
      {
        title: 'Factorisation & Introduction to Graphs',
        description: 'Common factors, regrouping, identities, middle term splitting, linear Cartesian graphs.',
        subtopics: ['Factorising by grouping terms and using standard identities', 'Division of polynomial by monomial and polynomial by polynomial', 'Cartesian plane coordinates (x, y), line graphs, and reading dependent variable graphs'],
      }
    ],
    learningApproach: 'Rigorous 3D geometry calculations, polynomial factorisation, and Cartesian coordinate graphing.',
    assessments: ['Mensuration & Factorisation Quiz (Week 6)', 'CBSE Grade 8 Final Benchmark Examination (Week 12)'],
    capstone: 'Designing a 3D architectural storage silo model with optimized surface-area-to-volume ratio'
  },

  // ==================== BRITISH CURRICULUM MATHEMATICS (KS3) ====================
  // Year 7 - Term 1
  {
    id: 'brit-math-y7-t1',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 7',
    term: 1,
    termTitle: 'Term 1: Algebraic Thinking & Decimal Reasoning',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Sequences & Nth Term Notation',
        description: 'Linear sequences, arithmetic progressions, term-to-term rules, position-to-term rules, and nth term algebraic formulas.',
        subtopics: ['Generating sequences from pictorial patterns and practical contexts', 'Deducing the nth term rule for increasing and decreasing arithmetic sequences', 'Using nth term to determine if a value belongs to a sequence'],
      },
      {
        title: 'Algebraic Thinking & Notation',
        description: 'Function machines, variables, simplifying terms, collecting like terms, and multiplying algebraic terms.',
        subtopics: ['Translating word problems into input-output function representations', 'Convention of algebraic notation (3a, ab, a/b, a^2)', 'Expanding single brackets and collecting like terms'],
      },
      {
        title: 'Equality and Equivalence',
        description: 'Understanding the equals sign as equivalence, balancing equations, solving one-step and two-step linear equations.',
        subtopics: ['Fact families and reciprocal relationships', 'Solving linear equations with unknown on one side using inverse operations', 'Substituting positive integers into algebraic expressions'],
      },
      {
        title: 'Place Value and Ordering Decimals',
        description: 'Integers up to one billion, decimals to thousandths, comparing, ordering, rounding to significant figures.',
        subtopics: ['Powers of 10 and multiplying/dividing decimals by 10, 100, 1000', 'Ordering positive and negative decimals on number lines', 'Rounding to decimal places and significant figures in engineering estimates'],
      }
    ],
    learningApproach: 'Mastery-based problem solving with visual bar modeling and algebraic reasoning.',
    assessments: ['Year 7 Diagnostic Baseline (Week 0)', 'Sequences & Algebra Mastery Check (Week 6)', 'Term 1 British KS3 Assessment (Week 12)']
  },
  // Year 7 - Term 2
  {
    id: 'brit-math-y7-t2',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 7',
    term: 2,
    termTitle: 'Term 2: Fractions, Percentages & Directed Numbers',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Fraction, Decimal and Percentage (FDP) Equivalence',
        description: 'Representing proportions, benchmark conversions (1/2, 1/4, 1/5, 1/10, 1/8), comparing non-standard values.',
        subtopics: ['Converting between fractions, terminating decimals, and percentages', 'Pie chart sector percentages and visual proportion bar models', 'Ordering mixed sets of FDP values'],
      },
      {
        title: 'Solving Problems with Addition and Subtraction',
        description: 'Formal mental and written addition/subtraction algorithms for large integers, decimals, perimeter problems.',
        subtopics: ['Standard column addition and subtraction with regrouping', 'Decimal addition and subtraction in financial currency contexts', 'Solving multi-step perimeter problems involving compound shapes'],
      },
      {
        title: 'Multiplication and Division with Fractions',
        description: 'Multiplying proper and improper fractions, finding fractional parts of quantities, division as multiplying by reciprocal.',
        subtopics: ['Area models for fraction multiplication', 'Fraction division using common denominator and reciprocal multiplication rules', 'Mixed number operations in culinary and architectural scaling contexts'],
      },
      {
        title: 'Directed Numbers & Negative Operations',
        description: 'Operations with negative numbers, temperature changes, debt contexts, coordinate axes negative values.',
        subtopics: ['Addition and subtraction with negative directed integers', 'Multiplication and division rules for directed numbers', 'Order of operations (BIDMAS / BODMAS) with negative values and exponents'],
      }
    ],
    learningApproach: 'Dual-representation methodology connecting bar models to algebraic syntax.',
    assessments: ['FDP Equivalence Assessment (Week 6)', 'Term 2 British KS3 Benchmark (Week 12)']
  },
  // Year 7 - Term 3
  {
    id: 'brit-math-y7-t3',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 7',
    term: 3,
    termTitle: 'Term 3: Geometric Reasoning, Angles & Developing Number Sense',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Fractional Thinking & Proportional Reasoning',
        description: 'Addition and subtraction of fractions with unlike denominators, converting mixed numbers and improper fractions.',
        subtopics: ['Lowest common multiple for denominator unification', 'Word problems combining algebraic expressions with fractional coefficients', 'Comparing fractional growth rates'],
      },
      {
        title: 'Lines and Angles: Geometric Reasoning',
        description: 'Angles at a point (360°), on a straight line (180°), vertically opposite angles, triangle and quadrilateral angle sums.',
        subtopics: ['Formulating multi-step angle proofs with geometric justifications', 'Interior angle sum of triangles (180°) and quadrilaterals (360°)', 'Special angles: Isosceles triangle base angles and exterior angle proofs'],
      },
      {
        title: 'Developing Number Sense, Sets and Probability',
        description: 'Mental arithmetic shortcuts, prime numbers, Venn diagrams, sample spaces, single event probability.',
        subtopics: ['Venn diagrams for sets, intersections (A ∩ B), unions (A ∪ B), complements', 'Theoretical probability on 0–1 scale (fractions, decimals, percentages)', 'Calculating probabilities from frequency trees and two-way tables'],
      }
    ],
    learningApproach: 'Constructivist geometry drafting and axiomatic proof discussions.',
    assessments: ['Geometric Proofs Checkpoint (Week 6)', 'Year 7 Annual British Curriculum Exam (Week 12)'],
    capstone: 'Designing a dynamic board game with exact probabilistic mechanics and geometric board layout'
  },

  // Year 8 - Term 1
  {
    id: 'brit-math-y8-t1',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 8',
    term: 1,
    termTitle: 'Term 1: Proportional Reasoning, Cartesian Coordinates & Functions',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Ratio and Scale',
        description: 'Simplifying ratios (1:n), sharing into a given ratio, scale factors, scale drawings and map scales.',
        subtopics: ['Dividing quantities into two or three-part ratios', 'Unitary ratio conversion (1:n and n:1)', 'Map scale ratios (e.g., 1:50,000) and architectural floor plans'],
      },
      {
        title: 'Multiplicative Change & Proportion',
        description: 'Direct proportion, currency exchange rates, conversion graphs, recipe adjustments, speed equations.',
        subtopics: ['Multiplicative scaling factors vs additive reasoning', 'Drawing and interpreting straight-line conversion graphs', 'Speed, distance, time unitary calculations'],
      },
      {
        title: 'Multiplying and Dividing Fractions Mastery',
        description: 'Complex multi-step fraction arithmetic, algebraic fractions introduction, fractional word problems.',
        subtopics: ['Algebraic fraction simplification by canceling common factors', 'Multi-step mixed number arithmetic with BIDMAS order of operations', 'Solving fractional equations'],
      },
      {
        title: 'Working in the Cartesian Plane',
        description: 'Four quadrants coordinates, plotting linear graphs (y = mx + c), finding midpoint and gradient.',
        subtopics: ['Vertical (x = a) and horizontal (y = b) lines', 'Plotting y = mx + c from table of values', 'Interpreting gradient (m) as steepness and y-intercept (c)'],
      }
    ],
    learningApproach: 'Functional mapping and graphical intuition linking geometry with algebra.',
    assessments: ['Diagnostic Assessment (Week 0)', 'Ratios & Cartesian Graphs Checkpoint (Week 6)', 'Term 1 Benchmark Exam (Week 12)']
  },
  // Year 8 - Term 2
  {
    id: 'brit-math-y8-t2',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 8',
    term: 2,
    termTitle: 'Term 2: Statistical Representations, Equations & Indices',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Representing and Interpreting Data',
        description: 'Scatter graphs, correlation (positive, negative, zero), lines of best fit, bivariate data analysis.',
        subtopics: ['Plotting scatter diagrams and identifying outliers', 'Drawing lines of best fit by eye and making interpolations', 'Causation vs correlation critical analysis'],
      },
      {
        title: 'Tables and Probability Distributions',
        description: 'Two-way tables, sample space diagrams, Venn diagrams, mutually exclusive events, relative frequency.',
        subtopics: ['Completing and extracting probabilities from two-way contingency tables', 'Sample space grids for rolling two dice or spinning spinners', 'Relative frequency experiments and comparing experimental to theoretical outcomes'],
      },
      {
        title: 'Brackets, Equations and Inequalities',
        description: 'Expanding single and double brackets, factorizing into single brackets, solving linear equations and inequalities.',
        subtopics: ['Expanding (x + a)(x + b) using grid and FOIL methods', 'Solving equations with unknowns on both sides including brackets', 'Representing inequalities (<, >, ≤, ≥) on a number line and solving simple inequalities'],
      },
      {
        title: 'Sequences and Indices',
        description: 'Laws of indices (multiplication, division, powers of powers), negative indices, geometric progressions.',
        subtopics: ['Rules: a^m * a^n = a^(m+n); a^m / a^n = a^(m-n); (a^m)^n = a^(mn)', 'Understanding a^0 = 1 and a^(-1) = 1/a', 'Geometric sequences (doubling, halving) and percentage growth sequences'],
      }
    ],
    learningApproach: 'Statistical reasoning and quadratic expansion foundations.',
    assessments: ['Scatter Graphs & Probability Test (Week 6)', 'Term 2 British KS3 Benchmark (Week 12)']
  },
  // Year 8 - Term 3
  {
    id: 'brit-math-y8-t3',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 8',
    term: 3,
    termTitle: 'Term 3: Angles in Parallel Lines, Trapezia, Circles & Data Projects',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Angles in Parallel Lines and Polygons',
        description: 'Alternate, corresponding, allied (co-interior) angles, interior and exterior angles of regular polygons.',
        subtopics: ['Identifying Z-angles (alternate), F-angles (corresponding), C-angles (allied)', 'Interior angle sum of n-sided polygons: (n - 2) * 180°', 'Exterior angle calculation of regular polygons (360° / n) and tessellation conditions'],
      },
      {
        title: 'Area of Trapezia and Circles',
        description: 'Area of trapezium formula (0.5 * (a + b) * h), circle circumference (pi * d), area of circle (pi * r^2).',
        subtopics: ['Deriving trapezium area from parallelogram decomposition', 'Calculating circumference and area with terms of pi and decimal values', 'Compound shape areas: Semicircles, quadrants, running tracks, washers'],
      },
      {
        title: 'Line Symmetry and Reflection Transformations',
        description: 'Reflections in x-axis, y-axis, y = x lines, rotational symmetry order, translations using vectors.',
        subtopics: ['Mirror lines and coordinate reflection rules', 'Column vector notation for 2D translations', 'Combined geometric transformations on coordinate grids'],
      },
      {
        title: 'Data Handling Projects & Measures of Spread',
        description: 'Averages from frequency tables, comparing datasets using mean and range, statistical project reporting.',
        subtopics: ['Calculating estimated mean from grouped frequency distributions', 'Modal class and median class interval identification', 'Writing formal comparative statistical reports with range as measure of consistency'],
      }
    ],
    learningApproach: 'Spatial geometry, rigorous circle calculations, and empirical data reporting.',
    assessments: ['Parallel Lines & Circle Geometry Test (Week 6)', 'Year 8 Annual British KS3 Examination (Week 12)'],
    capstone: 'Statistical research report: Analyzing athletic sprint times or environmental temperatures with full comparative distributions'
  },

  // Year 9 - Term 1
  {
    id: 'brit-math-y9-t1',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 9',
    term: 1,
    termTitle: 'Term 1: Linear Graphs, Equations & 3D Spatial Geometry',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Straight Line Graphs & Coordinate Geometry',
        description: 'Gradient calculation (change in y / change in x), equation of a straight line, parallel and perpendicular gradients.',
        subtopics: ['Finding equations of lines from two points or gradient and one point', 'Parallel lines have identical gradients (m1 = m2)', 'Perpendicular lines have negative reciprocal gradients (m1 * m2 = -1)'],
      },
      {
        title: 'Forming and Solving Equations & Simultaneous Equations',
        description: 'Solving complex linear equations, setting up equations from geometric diagrams, simultaneous equations by elimination.',
        subtopics: ['Algebraic modeling of perimeters, angles, and ratios', 'Solving simultaneous linear equations by algebraic elimination', 'Simultaneous equations by graphical intersection'],
      },
      {
        title: 'Testing Conjectures & Algebraic Proof',
        description: 'Deductive reasoning, prime factor decomposition, proving statements for odd/even numbers, counterexamples.',
        subtopics: ['Representing even numbers as 2n and odd numbers as 2n + 1', 'Algebraic proofs showing sum of two odd numbers is even', 'Using counterexamples to disprove geometric and arithmetic conjectures'],
      },
      {
        title: 'Three-Dimensional Shapes: Surface Area and Volume',
        description: 'Prisms, cylinders, cones, spheres, pyramids, volume and total surface area formulas.',
        subtopics: ['Volume of any prism = Cross-sectional area * Length', 'Surface area and volume of cylinders', 'Cones (1/3 * pi * r^2 * h) and spheres (4/3 * pi * r^3) introductory formulas'],
      }
    ],
    learningApproach: 'Rigorous algebraic proof and GCSE Higher-tier spatial mechanics.',
    assessments: ['Year 9 Baseline Diagnostic (Week 0)', 'Straight Line Graphs & Simultaneous Equations Exam (Week 6)', 'Term 1 GCSE Foundation Benchmark (Week 12)']
  },
  // Year 9 - Term 2
  {
    id: 'brit-math-y9-t2',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 9',
    term: 2,
    termTitle: 'Term 2: Standard Form, Percentages, Money & Transformations',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Numbers: Standard Form and Surds Basics',
        description: 'Standard form (scientific notation A * 10^n where 1 <= A < 10), operations in standard form, surds simplification.',
        subtopics: ['Converting between ordinary numbers and standard form', 'Multiplying, dividing, adding, subtracting standard form numbers', 'Introduction to exact radical surd simplification (e.g. sqrt(50) = 5*sqrt(2))'],
      },
      {
        title: 'Using Percentages: Compound Interest & Multipliers',
        description: 'Percentage multipliers, repeated percentage change, compound interest, reverse percentages.',
        subtopics: ['Percentage increase (e.g. * 1.15) and decrease (e.g. * 0.82) multipliers', 'Compound growth formula for bank interest and depreciation', 'Reverse percentages: Finding the original price before discount or tax'],
      },
      {
        title: 'Maths and Money: Financial Literacy',
        description: 'Wages, salaries, tax brackets, national insurance, utility bills, exchange rates and bank statements.',
        subtopics: ['Gross pay vs Net pay calculations and income tax deductions', 'Understanding electricity/water utility tariffs and standing charges', 'Budgeting and foreign currency transaction fees'],
      },
      {
        title: 'Deduction, Rotation and Translation Geometry',
        description: 'Rotations about a center point, enlargement by positive and fractional scale factors, center of enlargement.',
        subtopics: ['Rotating shapes 90°, 180°, 270° clockwise/anticlockwise using tracing paper', 'Enlargement by positive whole numbers and fractional scale factors (0 < k < 1)', 'Locating center of enlargement using ray projection lines'],
      }
    ],
    learningApproach: 'Applied economic literacy and multi-step geometric transformations.',
    assessments: ['Standard Form & Financial Math Test (Week 6)', 'Term 2 British KS3 Benchmark (Week 12)']
  },
  // Year 9 - Term 3
  {
    id: 'brit-math-y9-t3',
    curriculum: 'British',
    subject: 'Mathematics',
    grade: 'Year 9',
    term: 3,
    termTitle: 'Term 3: Pythagoras, Similarity, Proportions & Tree Diagrams',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Pythagoras’ Theorem in 2D and 3D',
        description: 'Calculating hypotenuse and shorter sides, coordinate distance, 3D space diagonals in cuboids.',
        subtopics: ['Formula: a^2 + b^2 = c^2 in right-angled triangles', 'Distance between two coordinate points on a Cartesian grid', 'Pythagoras in 3D: Finding the diagonal of a cuboid (d = sqrt(x^2 + y^2 + z^2))'],
      },
      {
        title: 'Enlargement, Similarity and Congruence',
        description: 'Conditions for triangle congruence (SSS, SAS, ASA, RHS), similar shapes, area and volume scale factors.',
        subtopics: ['Congruent triangle proofs and criteria identification', 'Similar triangles and finding missing side lengths via ratio matching', 'Relation between length scale factor (k), area scale factor (k^2), volume scale factor (k^3)'],
      },
      {
        title: 'Solving Complex Ratio & Proportion Problems',
        description: 'Inverse proportion graphs, speed-density-pressure compound measures, algebraic ratio equations.',
        subtopics: ['Compound measures: Density = Mass / Volume; Pressure = Force / Area', 'Kinematics distance-time and speed-time graphs (area under graph = distance)', 'Ratios involving algebraic expressions and constant total shares'],
      },
      {
        title: 'Probability and Tree Diagrams',
        description: 'Independent and dependent events, conditional probability, drawing tree diagrams, and calculating probabilities.',
        subtopics: ['Multiplication rule for independent sequential events (P(A and B) = P(A) * P(B))', 'Tree diagrams with and without replacement', 'Solving probability problems combining tree branches'],
      }
    ],
    learningApproach: 'Rigorous GCSE preparation integrating algebraic mechanics with probabilistic risk analysis.',
    assessments: ['Pythagoras & Similarity Exam (Week 6)', 'Year 9 Final KS3 Capstone Examination (Week 12)'],
    capstone: 'Designing a 3D architectural scale pavilion with verified structural dimensions, materials density, and stress calculations'
  },

  // ==================== AI FOR STUDENTS (GRADES 6–8) ====================
  // Term 1
  {
    id: 'ai-students-t1',
    curriculum: 'CBSE', // Shared across both pathways
    subject: 'AI for Students',
    grade: 'Grades 6–8',
    term: 1,
    termTitle: 'Term 1: AI Fundamentals & Prompt Writing Mastery',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'AI Fundamentals: How Machines Learn',
        description: 'What artificial intelligence is, machine learning vs rule-based algorithms, neural network basics.',
        subtopics: ['What is AI? History from Alan Turing to modern LLMs', 'How computers see (Computer Vision) and hear (Speech Processing)', 'Supervised, unsupervised, and reinforcement learning concepts explained simply'],
        practicalActivity: 'Training a Teachable Machine model to recognize hand gestures and everyday classroom objects'
      },
      {
        title: 'Prompt Writing & Large Language Models',
        description: 'Understanding LLMs, prompt engineering fundamentals, zero-shot vs few-shot prompting, and persona design.',
        subtopics: ['Tokens, temperature, context windows and how LLMs generate text', 'The 4-part prompt formula: Persona, Task, Context, Format', 'Role-playing with AI: Turning AI into a Socratic tutor, historical figure, or debate opponent'],
        practicalActivity: 'Developing a library of tailored homework prompts and evaluating response precision'
      },
      {
        title: 'Responsible AI Use, Ethics & Academic Integrity',
        description: 'Hallucinations, bias in AI training data, digital footprints, intellectual property, and truthful citing.',
        subtopics: ['Identifying AI hallucinations and fact-checking sources with cross-verification', 'Algorithmic bias and why training datasets must be representative and fair', 'School honor codes: When AI is a collaborative thought partner vs unacceptable copying'],
        practicalActivity: 'Conducting an ethical audit on an AI output to flag unverified claims and bias'
      }
    ],
    learningApproach: 'Hands-on interactive studio sessions with immediate experimentation on modern generative models.',
    assessments: ['Prompt Portfolio Review (Week 6)', 'Ethical AI Challenge Case Study (Week 12)'],
    capstone: 'Building an interactive AI study companion prompt system for Grade 6–8 subjects'
  },
  // Term 2
  {
    id: 'ai-students-t2',
    curriculum: 'CBSE',
    subject: 'AI for Students',
    grade: 'Grades 6–8',
    term: 2,
    termTitle: 'Term 2: Research, Gemini Notebooks & Creative Automation',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Brainstorming Projects Using AI',
        description: 'Using generative AI for creative divergent thinking, mind mapping, hypothesis generation, and project outlines.',
        subtopics: ['SCAMPER method brainstorming enhanced by AI suggestions', 'Generating alternative solutions for science fair or social science challenges', 'Refining vague concepts into structured, actionable project milestones'],
        practicalActivity: 'Collaborative AI ideation session to address a school sustainability challenge'
      },
      {
        title: 'Gemini Notebooks & Deep Research Synthesis',
        description: 'Using Gemini Notebooks to synthesize complex PDFs, historical documents, and science articles.',
        subtopics: ['Uploading primary sources and research papers into Gemini Notebooks', 'Querying documents to generate thematic study guides, FAQs, and glossaries', 'Synthesizing conflicting viewpoints across multiple research articles'],
        practicalActivity: 'Creating a verified multi-source briefing document on clean energy in the UAE'
      },
      {
        title: 'Meeting Notes, Action Plans & AI Presentations',
        description: 'Using AI to summarize meeting discussions, extract action items, and create dynamic slide decks.',
        subtopics: ['Audio transcription to structured meeting minutes and task owners', 'Generating presentation narratives, slide outlines, and visual scripts', 'Using AI image generation tools responsibly for educational infographics'],
        practicalActivity: 'Conducting a simulated team project meeting, generating minutes, and producing a 6-slide deck in 30 minutes'
      }
    ],
    learningApproach: 'Studio-based workflow combining productivity tools, note-taking, and multimedia synthesis.',
    assessments: ['Gemini Notebooks Research Brief (Week 6)', 'Presentation Showcase & Peer Review (Week 12)'],
    capstone: 'Publishing a comprehensive research report and slide deck on an emerging technology'
  },
  // Term 3
  {
    id: 'ai-students-t3',
    curriculum: 'CBSE',
    subject: 'AI for Students',
    grade: 'Grades 6–8',
    term: 3,
    termTitle: 'Term 3: Autonomous Agents, Future Careers & Capstone Showcase',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Voice Assistants, Chatbots & Conversational UX',
        description: 'Designing conversational flows, system prompts, branching logic, and user intent recognition.',
        subtopics: ['How conversational agents maintain state and context', 'Designing polite, informative, and safe bot dialog trees', 'Testing chatbot edge cases and graceful failure responses'],
        practicalActivity: 'Prototyping a customer-service or school guidance chatbot using visual flowcharts'
      },
      {
        title: 'Introduction to Autonomous Agents & Future Careers',
        description: 'How AI agents browse the web, use tools, write code, and solve multi-step problems autonomously.',
        subtopics: ['Agent architectures: Perceiver -> Planner -> Tool User -> Executor', 'AI in medicine (drug discovery), climate science, and space exploration', 'Preparing for future careers: Skills that remain uniquely human (empathy, ethics, creativity)'],
        practicalActivity: 'Simulating an AI agent workflow that automates research, drafting, and proofreading'
      },
      {
        title: 'AI Capstone Project: Community Impact Solution',
        description: 'Students conceive, research, prototype, and present an AI-augmented solution to a real-world problem.',
        subtopics: ['Problem definition, stakeholder interview, and feasibility assessment', 'Integrating AI research, prompt automation, and slide presentations', 'Live presentation defense before peers and mentors'],
        practicalActivity: 'Live presentation defense of the community impact solution'
      }
    ],
    learningApproach: 'Capstone mentorship model with student-led prototyping and oral defense.',
    assessments: ['Prototype Milestone Check (Week 6)', 'Final Capstone Project Defense & Exhibition (Week 12)'],
    capstone: 'EdNxt AI Future Innovator Showcase: Presenting a working prototype and impact study'
  },

  // ==================== PUBLIC SPEAKING (LEVELS 1, 2, 3) ====================
  // Level 1: Confident Voice (Grade 6 / Year 7)
  {
    id: 'speaking-l1',
    curriculum: 'CBSE',
    subject: 'Public Speaking',
    grade: 'Level 1: Confident Voice',
    term: 1,
    termTitle: 'Term 1: Overcoming Stage Fear & Voice Projection',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Conquering the Stage & Body Language Basics',
        description: 'Deconstructing stage anxiety, physical posture, stance, breathing from diaphragm, and eye contact.',
        subtopics: ['The physiology of nervousness and grounding breathing exercises', 'The "Power Stance": Feet shoulder-width, relaxed shoulders, open chest', 'Eye contact triangles: Engaging left, center, and right sections of an audience'],
        practicalActivity: '1-minute icebreaker: "An Object That Defines Me"'
      },
      {
        title: 'Vocal Variety, Pace, and the Power of the Pause',
        description: 'Pitch modulation, volume dynamics, articulation, eliminating filler words ("um", "like", "so").',
        subtopics: ['Vocal pitch and inflections: Avoiding monotone delivery', 'Pacing: How to accelerate for excitement and slow down for gravity', 'Strategic silence: Using 2-second pauses before and after key points'],
        practicalActivity: 'Reading poetry and dramatic monologues with marked vocal variety cues'
      },
      {
        title: 'Storytelling Fundamentals & Level 1 Capstone',
        description: 'Story arc (Hook, Challenge, Transformation, Lesson) and delivering the 3-minute capstone speech.',
        subtopics: ['The 3-act story structure adapted for short speeches', 'Using vivid sensory details (sight, sound, emotion) to captivate listeners', 'Peer feedback methodology: 2 Stars and a Wish'],
        practicalActivity: 'Delivering the capstone speech: "My Passion, My Voice"'
      }
    ],
    learningApproach: 'Weekly spoken performance rounds with video replay self-reflection and encouraging peer feedback.',
    assessments: ['Vocal Dynamics Checkpoint (Week 6)', 'Level 1 Capstone Speech: 3-Minute Showcase (Week 12)'],
    capstone: 'Level 1 Capstone Speech: "My Passion, My Voice" delivered live with rubric evaluation'
  },
  // Level 2: Persuasive Speaker (Grade 7 / Year 8)
  {
    id: 'speaking-l2',
    curriculum: 'CBSE',
    subject: 'Public Speaking',
    grade: 'Level 2: Persuasive Speaker',
    term: 2,
    termTitle: 'Term 2: Argumentation, Rhetoric & Middle School Debating',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Structuring Persuasive Arguments (Ethos, Pathos, Logos)',
        description: 'Aristotle’s three pillars of persuasion, crafting memorable speech openings and sticky calls to action.',
        subtopics: ['Ethos (credibility), Logos (logic, evidence, facts), Pathos (emotional resonance)', 'The AREI argument framework: Assertion, Reasoning, Evidence, Impact', 'The "Rule of Three" and anaphora rhetorical devices'],
        practicalActivity: '2-minute speech: "Why Every Middle School Needs a Rooftop Garden"'
      },
      {
        title: 'Impromptu Speaking & Table Topics Mastery',
        description: 'Thinking on one’s feet, PREP method (Point, Reason, Example, Point) for unscripted questions.',
        subtopics: ['Managing unexpected prompts without panicking', 'PREP formula to deliver a structured 90-second speech with zero prep time', 'Bridging techniques to steer difficult questions to comfortable ground'],
        practicalActivity: 'Rapid-fire 60-second impromptu speech rounds with random topic generator'
      },
      {
        title: 'Parliamentary Debate Basics & Rebuttals',
        description: 'Motion analysis, proposition vs opposition roles, listening actively to extract opponent fallacies.',
        subtopics: ['Deconstructing a motion: "This House Would Ban Homework for Middle School"', 'Points of Information (POIs) etiquette and rapid constructive rebuttals', 'Spotting logical fallacies: Ad hominem, straw man, and slippery slope'],
        practicalActivity: 'Live classroom mini-debate with formal timekeepers and adjudicators'
      }
    ],
    learningApproach: 'Socratic dialogue, argumentative cross-examination, and structured debating leagues.',
    assessments: ['Impromptu Speaking Benchmark (Week 6)', 'The Great Middle School Debate Showcase (Week 12)'],
    capstone: 'Level 2 Capstone: The Great Middle School Debate (Proposition vs Opposition)'
  },
  // Level 3: Leader and Orator (Grade 8 / Year 9)
  {
    id: 'speaking-l3',
    curriculum: 'CBSE',
    subject: 'Public Speaking',
    grade: 'Level 3: Leader and Orator',
    term: 3,
    termTitle: 'Term 3: Executive Leadership, TED-Style Talks & Youth Summit',
    duration: 'Weeks 1–12',
    topics: [
      {
        title: 'Leadership Communication & Inspiring Action',
        description: 'Speaking as a leader: Vision casting, addressing resistance, empathy, and inspiring community movement.',
        subtopics: ['Simon Sinek’s "Start With Why" framework for leaders', 'Crisis communication: Speaking with composure under scrutiny', 'Panel moderation: Guiding discussions, asking incisive questions, managing airtime'],
        practicalActivity: 'Delivering a 3-minute "State of the Student Body" address'
      },
      {
        title: 'TED-Style Talk Architecture & Visual Storytelling',
        description: 'Crafting ideas worth spreading, scripting conversational keynote talks, and seamless slide interaction.',
        subtopics: ['The TED format: One singular idea explored deeply', 'Slide design for speakers: Minimal text, powerful imagery, zero bullet point reading', 'Handling tough Q&A: The Acknowledge-Answer-Bridge executive technique'],
        practicalActivity: 'Scripting and rehearsing a 5-minute keynote talk'
      },
      {
        title: 'Level 3 Capstone: EdNxt Youth Summit Orator Showcase',
        description: 'Full-length 5-minute keynote speech delivered before an audience with professional adjudicator rubric scoring.',
        subtopics: ['Stage presence mastery: Moving with purpose, natural gestures, confident poise', 'Humor, vulnerability, and gravitas balance', 'Comprehensive rubric scoring across content, delivery, structure, and stage presence'],
        practicalActivity: 'Delivering the 5-minute TED-style keynote at the EdNxt Youth Summit'
      }
    ],
    learningApproach: 'Executive speaker coaching, multimedia rehearsal, and live public summit delivery.',
    assessments: ['Panel Moderation Simulation (Week 6)', 'EdNxt Youth Summit TED-Style Keynote Defense (Week 12)'],
    capstone: 'Level 3 Capstone: 5-minute EdNxt Youth Summit TED-Style Talk on a global issue'
  }
];

export const PUBLIC_SPEAKING_RUBRIC = [
  { criterion: 'Vocal Clarity & Projection', weight: '25%', description: 'Clear articulation, appropriate volume, modulation, elimination of filler words' },
  { criterion: 'Body Language & Stage Presence', weight: '25%', description: 'Grounding posture, purposeful movement, natural hand gestures, sustained eye contact' },
  { criterion: 'Content Structure & Argument', weight: '25%', description: 'Compelling hook, clear thesis, well-substantiated evidence (AREI), strong call to action' },
  { criterion: 'Audience Engagement & Persuasion', weight: '25%', description: 'Emotional resonance (Pathos), rhetorical mastery, strategic pauses, poise under questions' },
];
