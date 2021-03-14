const patients = {
    123456: {
        symptoms: [
            'shortness of breath', 'tightness in chest', 'dizziness', 'nausea'
        ],
        triage: 'yellow',
        firstName: 'Karan',
        lastName: 'Outaluk',
        age: 44,
        sex: 'M',
        chronicIllnesses: ["Diabetes", "Hypertension"],
        medications: ["Canagliflozin", "Lisinopril"],
        isSmoker: true,
        isPregnant: false,
        vitals: [
            {
                timestamp: "12:32", 
                hr: 80, 
                rr: 24, 
                bp: {
                    systolic: 140,
                    diastolic: 90,
                    }, 
                temp: 38,
                spO2: 89,
                notes: {
                    pain: "",
                    LOC: "",
                    "N/V": "",
                },
            }
        ],
        allergies: ["peanuts", "anesthetics", "cats", "gluten"],
        reportedSymptoms: ["breathlessness", "chest pain"],
        other: "this lady full of regret",
    },

    543232: {
        symptoms: [
            'laceration on hand', 
        ],
        triage: 'green',
        firstName: 'Jenna',
        lastName: 'Jenkins',
        age: 47,
        sex: 'F',
        chronicIllnesses: [],
        medications: [],
        isSmoker: false,
        isPregnant: false,
        vitals: [
            {
                timestamp: "14:22",
                hr: 54, 
                rr: 33, 
                bp: {
                    systolic: 100,
                    diastolic: 68,
                    }, 
                temp: 36, 
                spO2: 93,
                notes: {
                    pain: "",
                    LOC: "",
                    "N/V": "",
                },
            }
        ],
        allergies: [""],
        reportedSymptoms: ["bleeding non stop for 15 mins"],
        other: "it might not have been an accident!",
    },
    896541: {
        symptoms: [
            'abdominal pain', 'abdominal bloating', 'nausea'
        ],
        triage: 'red',
        firstName: 'Ana',
        lastName: 'Nab',
        age: 17,
        sex: 'F',
        chronicIllnesses: ["Asthma", "OCD"],
        medications: ["Ventolin", "Zoloft"],
        isSmoker: false,
        isPregnant: false,
        vitals: [
            {
                timestamp: "20:11", 
                hr: 60, 
                rr: 34,
                bp: {
                    systolic: 115,
                    diastolic: 75,
                    }, 
                temp: 39,
                spO2: 95,
                notes: {
                    pain: "",
                    LOC: "",
                    "N/V": "",
                },
            }
        ],
        allergies: ["pollen", "garlic", "penicillin"],
        reportedSymptoms: [""],
        other: "Abdominal pain reported 1 hour ago",
    },
};

module.exports = patients;