// Import stylesheets
import './style.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3RnKSoFYkUvbx6ErUlyAHuBwkjY1JSUQ',
  authDomain: 'fir-test-3d969.firebaseapp.com',
  databaseURL:
    'https://fir-test-3d969-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-test-3d969',
  storageBucket: 'fir-test-3d969.appspot.com',
  messagingSenderId: '968842660921',
  appId: '1:968842660921:web:64739031632acd14f511e8',
  measurementId: 'G-800N6JX0QB',
};

// Initialize Firebase

// Write Javascript code!

document.onload = init();

function init() {
  const app = initializeApp(firebaseConfig);
  let src;
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        src = snapshot.val();
        //template(src);
        tab(src);
        //call function for rendering content
        src.map((res) => {
          console.log(res);
        });
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function tab(data) {
  let bod = document.getElementById('body');
  let i = 1;
  data.map((res) => {
    let tr = document.createElement('tr');
    tr.setAttribute('id', i);

    bod.append(tr);
    let th = document.createElement('th');
    th.setAttribute('scope', 'row');
    th.innerHTML = i++;
    let name = document.createElement('td');
    name.innerHTML = res.Name;
    let email = document.createElement('td');
    email.innerHTML = res.Email;
    let title = document.createElement('td');
    title.innerHTML = res.Title;

    let bt = document.createElement('button');
    bt.setAttribute('id', 'button');
    bt.classList.add('btn', 'btn-secondary');
    bt.innerHTML = 'Click';
    bt.addEventListener('click', () => console.log('Clicked'));

    tr.addEventListener('mouseover', () => {
      tr.append(bt);
    });
    tr.addEventListener('mouseout', () => {
      tr.removeChild(document.getElementById('button'));
    });
    tr.append(th, name, email, title);
  });
}
