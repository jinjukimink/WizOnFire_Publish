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
      // 'src/json/article/newslist-searchWord-.json',
      // 'src/json/article/newsdetail-artcSeq-190962.json',
      // 'src/json/article/newsdetail-artcSeq-190958.json',
      // 'src/json/article/newsdetail-artcSeq-190957.json',
      // 'src/json/article/newsdetail-artcSeq-190925.json',
      // 'src/json/article/newsdetail-artcSeq-190830.json',
      // 'src/json/article/newsdetail-artcSeq-190829.json',
      // 'src/json/article/newsdetail-artcSeq-190754.json',
      // 'src/json/article/newsdetail-artcSeq-190752.json',
      // 'src/json/article/newsdetail-artcSeq-190750.json',
      // 'src/json/article/newsdetail-artcSeq-190749.json',
      // 'src/json/article/newsdetail-artcSeq-190743.json',
      // 'src/json/article/newsdetail-artcSeq-190673.json',
      // 'src/json/article/newsdetail-artcSeq-190672.json',
      // 'src/json/article/newsdetail-artcSeq-190671.json',
      // 'src/json/article/newsdetail-artcSeq-190620.json',
      // 'src/json/article/newsdetail-artcSeq-190618.json',
      // 'src/json/article/newsdetail-artcSeq-190563.json',
      // 'src/json/article/newsdetail-artcSeq-190436.json',
      // 'src/json/article/newsdetail-artcSeq-190406.json',
      // 'src/json/article/newsdetail-artcSeq-190371.json',
      // 'src/json/article/newsdetail-artcSeq-190369.json',
      // 'src/json/article/newsdetail-artcSeq-190327.json',
      // 'src/json/article/newsdetail-artcSeq-190291.json',
      // 'src/json/article/newsdetail-artcSeq-190235.json',
      // 'src/json/article/newsdetail-artcSeq-190234.json',
      // 'src/json/article/newsdetail-artcSeq-190230.json',
      // 'src/json/article/newsdetail-artcSeq-190228.json',
      // 'src/json/article/newsdetail-artcSeq-190176.json',
      // 'src/json/article/newsdetail-artcSeq-190175.json',
      // 'src/json/article/newsdetail-artcSeq-190173.json',
      'src/json/article/wizpresslist-searchWord-.json'
    ]; // 경로 확인

    for (const file of jsonFiles) {
        try {
            const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
            // Firebase 노드 이름 생성: 파일명에서 경로를 제거하고 .json 확장자도 제거
            const fileName = file.split('/').pop().replace('.json', ''); // coachlist
              // 경로에 따른 처리
            // let newRef;
            // if (file.includes('recentGame') || file.includes('teamranking')) {
            //   newRef = ref(database,`game/${fileName}`);
            // } else {
            //   newRef = ref(database,`player/${fileName}`);
          // }
          const newRef = ref(database,`/article/${fileName}`)
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
