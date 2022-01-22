use languagesTest_hub;
db.dropDatabase();

db.languages.insertMany([{
    "id": "es",
    "name": "Spanish",
    "originalName": "Espanol",
    "text": "Some text here like a h3??",
    "image": "URL TO IMAGE",
    "topics": [
      {
        "name": "Restaurant",
        "text": "Some text to go here like h3?",
        "image": "URL TO IMAGE",
        "phrases": [
          {
            "phrase": "Some english sentence",
            "translation": "Translation here",
            "audio": "audio file"
          },
          {
            "phrase": "Some english sentence",
            "translation": "Translation here",
            "audio": "audio file"
          }
        ]
      }  
    ],
    "quizz": [
      {
        "question": "How are you?",
        "answers": [
           {
             "text": "Como te llamas?",
             "isCorrect": false
            },
            {
              "text": "Como estas?",
              "isCorrect": true
            }
         ]
       } 
    ]
  }]);
