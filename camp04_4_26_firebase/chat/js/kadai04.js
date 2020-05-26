// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjDVH8oECuuTS6RdOfxEFJNHe_tDEt8LM",
  authDomain: "kadai-04.firebaseapp.com",
  databaseURL: "https://kadai-04.firebaseio.com",
  projectId: "kadai-04",
  storageBucket: "kadai-04.appspot.com",
  messagingSenderId: "1026178742583",
  appId: "1:1026178742583:web:cc0e331d614916b88082b2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebaseのデーターベース（保存させる場所）を使いますよと言うjsのコードを貼り付ける
// xxxxxスクリプトを貼り付ける
const newPostRef = firebase.database().ref();

// ここから下にjqueryの処理を書いて練習します
// 保存ボタンをクリックされたら次の処理をする
$("#post").on("click", function () {
  // postAction = () => {
  // 必ず変数で先に受け取ること
  let input_title = $("#title").val();
  let input_text = $("#text").val();
  let end_data = $("#e_data").val();
  // データを登録で送る
  newPostRef.push({
    // if(title && title !== "") {
    // ref.push({
    // 変数を活用する、val()を使って取得
    // firebaseの送信処理を記述
    title: input_title,
    text: input_text,
    e_data: end_data,
    date: new Date().getTime(),
  });
  $("#title").val("");
  $("#text").val(""); //空にする
  $("#e_data").val("");
});
// $('#post').click(() => postAction());
// 受信処理
newPostRef.on("child_added", function (data) {
  // ここでデータをhtmlに埋め込む
  // function (data)のdataにfirebaseのデータが入ってくる
  let v = data.val();
  let k = data.key;
  console.log(v); //vの変数に入っているオブジェクトを全てみる
  console.log(k);
  //   let str = `<p>${v.title}<br>${v.text}<br>${v.e_data}<br>${v.date}</p>`;
  //   //ここでデータをhtmlに埋め込む
  //   $("#output").prepend(str);
  // });
  let str = `<p class=outtxt>${v.title}<br>${v.text}<br>${v.e_data}<br><button id="done" ></button><br>${v.date}</p>`;

  $("#outp").prepend(str);
});
// 削除処理

// it("should delete a document", () => {
//   return output =
//   // [START delete_document]
//   db.collection("cities").doc("DC").delete().then(function() {
//       console.log("Document successfully deleted!");
//   }).catch(function(error) {
//       console.error("Error removing document: ", error);
//   });
// [END delete_document]
// });

// $("#done").on("click", function () {
//   firebase.database().ref(k).remove().parent("#outp").remove();
// });

$("#done").on("click", function () {
  console.log("削除");
  newPostRef.delete().ref(v.str).remove();
});

// $("#done").on("click", function () {
// let id = $(target).closest(str).attr(k);
//   newPostRef.push({
//   str:$("output").remove(str);
// });

// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("done")) {
//     e.target.parentElement.remove();
//   }
// });
