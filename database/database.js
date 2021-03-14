const patients = {
    123456: {
        id: 123456,
        symptoms: [
            'shortness of breath',
            'tightness in chest',
            'dizziness',
            'nausea',
        ],
        triage: 'green',
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
                timestamp: '12:32', // new Date().toString()
                hr: 54, // number
                rr: 24, // number
                bp: {
                    systolic: 140,
                    diastolic: 90,
                }, // bp.systolic + "/" bp.distolic
                temp: 38, // number
                spO2: 89,
                pain: '7/10 sharp pain to upper middle chest',
                LOC: 'drowsy, Ox3',
                'N/V': 'nauseous',
            },
        ],
        allergies: ['peanuts', 'anesthetics', 'cats', 'gluten'],
        reportedSymptoms: ['breathlessness', 'chest pain'],
        other: 'this lady full of regret',
    },

    543232: {
        symptoms: [
            'shortness of breath',
            'tightness in chest',
            'dizziness',
            'nausea',
        ],
        triage: 'green',
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
                timestamp: '12:32', // new Date().toString()
                hr: 54, // number
                rr: 24, // number
                bp: {
                    systolic: 140,
                    diastolic: 90,
                }, // bp.systolic + "/" bp.distolic
                temp: 38, // number
                spO2: 89,
                pain: '7/10 sharp pain to upper middle chest',
                LOC: 'drowsy, Ox3',
                'N/V': 'nauseous',
            },
        ],
        allergies: ['peanuts', 'anesthetics', 'cats', 'gluten'],
        reportedSymptoms: ['breathlessness', 'chest pain'],
        other: 'this lady full of regret',
    },
}

module.exports = patients
