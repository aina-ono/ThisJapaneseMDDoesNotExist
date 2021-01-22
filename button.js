function hamburger() {
alert("RunwayMLを使って、StyleGAN2に日本の国会議員664人の顔写真を学習させたモデルで新しい顔を生成しました。（3000step）なお顔写真は各公式サイトより議員一覧ページに載っているものを使用しています。");

//alert("RunwayMLというサービスを使って、StyleGAN2に国ごとに国会議員の顔写真を学習させて独自のモデルを作ります。（なお顔写真は各公式サイトより議員一覧ページに載っているものを使用しています。）StyleGAN2のtruncationというパラメータでインプットのノイズの値の範囲を指定することができ、これを小さくすればするほど平均的な顔になります。逆に大きくすると平均から外れたものが出やすくなります。");
//window.location.href = "https://data.ipu.org/content/france?chamber_id=13396";
}

document.getElementById('humberger').addEventListener('click', function () {
　　hamburger();
});
