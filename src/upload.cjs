const fs = require('fs');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyA7J8JJh2JnX3D-ItanwKMLaXCXw7JtYKw",
    authDomain: "kt-wizonfire.firebaseapp.com",
    projectId: "kt-wizonfire",
    storageBucket: "kt-wizonfire.appspot.com",
    messagingSenderId: "450858127836",
    appId: "1:450858127836:web:181a3a7947e9c0a9cabf19",
    measurementId: "G-6JHZNDTG87"
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

async function uploadJSONData() {
    const jsonFiles = [
      'src/json/player/coachdetail/60100.json',
      'src/json/player/coachdetail/70408.json',
      'src/json/player/coachdetail/70553.json',
      'src/json/player/coachdetail/71835.json',
      'src/json/player/coachdetail/72801.json',

      'src/json/player/coachdetail/73136.json',
      'src/json/player/coachdetail/73228.json',
      'src/json/player/coachdetail/74339.json',
      'src/json/player/coachdetail/75668.json',
      'src/json/player/coachdetail/77609.json',

      'src/json/player/coachdetail/77654.json',
      'src/json/player/coachdetail/77733.json',
      'src/json/player/coachdetail/79191.json',
      'src/json/player/coachdetail/89620.json',
      'src/json/player/coachdetail/90025.json',

      'src/json/player/coachdetail/92401.json',
      'src/json/player/coachdetail/94415.json',
      'src/json/player/coachdetail/94843.json',
      'src/json/player/coachdetail/97351.json',
      'src/json/player/coachdetail/75149.json'
    ]; // 경로 확인

    for (const file of jsonFiles) {
        try {
            const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
            // Firebase 노드 이름 생성: 파일명에서 경로를 제거하고 .json 확장자도 제거
            const fileName = file.split('/').pop().replace('.json', ''); // coachlist
              // 경로에 따른 처리 
            let newRef;
            if (file.includes('recentGame') || file.includes('teamranking')) {
              newRef = ref(database,`game/${fileName}`); 
            } else {
              newRef = ref(database,`player/coachdetail/${fileName}`); 
            }
            await set(newRef, data);
            console.log(`Uploaded ${file} successfully.`);
        } catch (error) {
            console.error(`Error uploading data from ${file}:`, error);
        }
    }
}

uploadJSONData().catch((error) => {
    console.error("Error uploading data:", error);
});
