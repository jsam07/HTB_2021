let patients = [
    {
        id: Math.floor(100000 + Math.random() * 900000),
        symptoms: [
            'shortness of breath', 'tightness in chest', 'dizziness', 'nausea'
        ],
        triage: 'green',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 44,
        sex: 'F',
        chronicIllnesses: ["Diabetes", "Hypertension"],
        medications: ["Canagliflozin", "Lisinopril"],
        timestamp: "12:32",
        hr: "54",
        rr: "24",
        bp: "140/90",
        temp: "38",
        spO2: "89"
    },
];

module.exports =  patients;