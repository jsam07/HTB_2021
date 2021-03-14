const patientDatabase = [

    {
        id: '77598365',
        symptoms: [
            'Shortness of breath',
            'Tightness in chest',
            'Dizziness',
            'Nausea',
        ],
        triage: 'Delayed',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 44,
        sex: 'F',
        chronicIllnesses: ['Diabetes', 'Hypertension'],
        medications: ['Canagliflozin', 'Lisinopril'],
        isSmoker: true,
        isPregnant: false,
        vitals: [
            {
                time: new Date(),
                hr: 66,
                rr: 18,
                bp: {
                    systolic: 155,
                    diastolic: 90,
                },
                temp: 38,
                spO2: 89,
                pain: '7/10 sharp pain to upper middle chest',
                LOC: 'Somnolent',
                'N/V': 'Nauseous',
            },

        ],
        allergies: ['Peanuts', 'Anesthetics', 'Cats', 'Gluten'],
        reportedSymptoms: ['Breathlessness', 'Chest pain'],
        other: 'N/A',
    },

    {
        id: '36591661',
        symptoms: [
            '',
        ],
        triage: 'Minor',
        firstName: 'Thierry',
        lastName: 'Hermès',
        age: 37,
        sex: 'F',
        chronicIllnesses: ['Osteoporosis'],
        medications: ['Alendronate', 'Risedronate'],
        isSmoker: false,
        isPregnant: false,
        vitals: [
            {
                time: new Date(),
                hr: 68,
                rr: 16,
                bp: {
                    systolic: 110,
                    diastolic: 80,
                },
                temp: 37,
                spO2: 98,
                pain: 'N/A',
                LOC: 'Somnolent',
                'N/V': 'N/A',
            },

        ],
        allergens: [],
        reportedSymptoms: [''],
        other: 'Minor laceration on left arm',
    },
    {
        id: '92348795',
        symptoms: [
            'Tachypnoea',
        ],
        triage: 'Immediate',
        firstName: 'Justine',
        lastName: 'Smith',
        age: 65,
        sex: 'M',
        chronicIllnesses: ['Arthritis', 'Heart Disease'],
        medications: ['Celebrex'],
        isSmoker: true,
        isPregnant: false,
        vitals: [
            {
                time: new Date(),
                hr: 55,
                rr: 31,
                bp: {
                    systolic: 165,
                    diastolic: 135,
                },
                temp: 36,
                spO2: 83,
                pain: 'N/A',
                LOC: 'Obtunded',
                'N/V': 'N/A',
            },

        ],
        allergens: ['Lupin', 'Soya', 'Molluscs'],
        reportedSymptoms: ['Tightness in chest'],
        other: 'Patient severely disoriented',
    },
    {
        id: '57884361',
        symptoms: [
            'Tachypnoea',
        ],
        triage: 'Expectant',
        firstName: 'Tan',
        lastName: 'Smith',
        age: 36,
        sex: 'M',
        chronicIllnesses: [],
        medications: [],
        isSmoker: false,
        isPregnant: false,
        vitals: [
            {
                time: new Date(),
                hr: 75,
                rr: 28,
                bp: {
                    systolic: 90,
                    diastolic: 65,
                },
                temp: 35,
                spO2: 76,
                pain: 'N/A',
                LOC: 'Obtunded',
                'N/V': 'N/A',
            },

        ],
        allergens: [],
        reportedSymptoms: [],
        other: '',
    },

];

module.exports = { patientDatabase };
