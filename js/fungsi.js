var dataPelanggan = [];
function showData() {
  var listPelanggan = document.getElementById("list-pelanggan");
  // clear list barang
  listPelanggan.innerHTML = "";
  // cetak semua barang
  for (let i = 0; i < dataPelanggan.length; i++) {
    var btnEdit = "<a href='#' onclick='editPelanggan(" + i + ")'>Edit</a>";
    var btnHapus = "<a href='#' onclick='deletePelanggan(" + i + ")'>Hapus</a>";
    listPelanggan.innerHTML += "<li>" + dataPelanggan[i] + " [" + btnEdit + " | " + btnHapus + "]</li>";
  }
}
function addData() {
  var nama = document.querySelector("input[name=nama]");
  var alamat = document.querySelector("input[name=alamat]");
  var tanggalsewa = document.querySelector("input[name=tanggalsewa]");
  var tanggalkembali = document.querySelector("input[name=tanggalkembali]");
  var isi = nama.value + "," + alamat.value + "," + "Sewa: " + tanggalsewa.value + "," + "Kembali: " + tanggalkembali.value;
  dataPelanggan.push(isi);
  showData();
}
function editPelanggan(id) {
  var newBarang = prompt("Nama baru", dataPelanggan[id]);
  dataPelanggan[id] = newBarang;
  showData();
}
function deletePelanggan(id) {
  dataPelanggan.splice(id, 1);
  showData();
}
showData();

document.getElementById("tombol_hitung").
  addEventListener("click", tampilkan_jumlah);
document.getElementById("tombol_bayar").
  addEventListener("click", tampilkan_bayar);

function tampilkan_jumlah() {
  var nama = document.getElementById("nama_kendaraan").value;
  var jumlah = document.getElementById("input_jumlah").value;
  hitung = {};
  if (nama == "Avanza") {
    if (jumlah > 2) {
      diskon = jumlah * 300000 * 0.10;
      hitung = jumlah * 300000 - diskon;
    } else if (jumlah > 5) {
      diskon = jumlah * 300000 * 0.20;
      hitung = jumlah * 300000 - diskon;
    } else {
      hitung = jumlah * 300000;
    }
  } else if (nama == "Fortuner") {
    if (jumlah > 2) {
      diskon = jumlah * 500000 * 0.10;
      hitung = jumlah * 500000 - diskon;
    } else if (jumlah > 5) {
      diskon = jumlah * 500000 * 0.20;
      hitung = jumlah * 500000 - diskon;
    } else {
      hitung = jumlah * 50000;
    }
  } else if (nama == "Alphard") {
    if (jumlah > 2) {
      diskon = jumlah * 700000 * 0.10;
      hitung = jumlah * 700000 - diskon;
    } else if (jumlah > 5) {
      diskon = jumlah * 700000 * 0.20;
      hitung = jumlah * 700000 - diskon;
    } else {
      hitung = jumlah * 700000;
    }
  } else if (nama == "Pajero Sport") {
    if (jumlah > 2) {
      diskon = jumlah * 500000 * 0.10;
      hitung = jumlah * 500000 - diskon;
    } else if (jumlah > 5) {
      diskon = jumlah * 500000 * 0.20;
      hitung = jumlah * 500000 - diskon;
    } else {
      hitung = jumlah * 500000;
    }
  } else if (nama == "Sigra") {
    if (jumlah > 2) {
      diskon = jumlah * 250000 * 0.10;
      hitung = jumlah * 250000 - diskon;
    } else if (jumlah > 5) {
      diskon = jumlah * 250000 * 0.20;
      hitung = jumlah * 250000 - diskon;
    } else {
      hitung = jumlah * 250000;
    }
  } else {
    document.getElementById("hasil").innerHTML = "barang tidak ditemukan";
  }
  document.getElementById("hasil").innerHTML = "Rp. " + hitung;
}
function tampilkan_bayar() {
  var bayar = document.getElementById("input_bayar").value;
  var hitung2 = bayar - hitung;
  document.getElementById("hasil2").innerHTML = "Rp. " + hitung2;
  if (bayar >= hitung) {
    document.getElementById("hadiah").innerHTML = "Terima Kasih";
    return;
  }
  else {
    document.getElementById("hadiah").innerHTML = "Maaf Uang Anda Tidak Cukup";
  }

}

document.addEventListener('DOMContentLoaded', (event) => {
  showSplashScreen();

  setTimeout(() => {
    hideSplashScreen();
  }, 2000);
});
function showSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  splashScreen.style.display = 'flex';
}


function hideSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  splashScreen.style.display = 'none';
}