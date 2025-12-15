/**
 * Main Application - CLI Interface
 * File ini adalah entry point aplikasi
 *
 * TODO: Implementasikan CLI interface yang interaktif dengan menu:
 * 1. Tambah Siswa Baru
 * 2. Lihat Semua Siswa
 * 3. Cari Siswa (by ID)
 * 4. Update Data Siswa
 * 5. Hapus Siswa
 * 6. Tambah Nilai Siswa
 * 7. Lihat Top 3 Siswa
 * 8. Keluar
 */

import readlineSync from 'readline-sync';
import Student from './src/Student.js';
import StudentManager from './src/StudentManager.js';

// Inisialisasi StudentManager
const manager = new StudentManager();

/**
 * Menampilkan menu utama
 */
function displayMenu() {
  console.log('\n=================================');
  console.log('SISTEM MANAJEMEN NILAI SISWA');
  console.log('=================================');
  console.log('1. Tambah Siswa Baru');
  console.log('2. Lihat Semua Siswa');
  console.log('3. Cari Siswa');
  console.log('4. Update Data Siswa');
  console.log('5. Hapus Siswa');
  console.log('6. Tambah Nilai Siswa');
  console.log('7. Lihat Top 3 Siswa');
  console.log('8. Keluar');
  console.log('=================================');
}

/**
 * Handler untuk menambah siswa baru
 * TODO: Implementasikan function ini
 * - Minta input: ID, Nama, Kelas
 * - Buat object Student baru
 * - Tambahkan ke manager
 * - Tampilkan pesan sukses/gagal
 */
function addNewStudent() {
  console.log('\n--- Tambah Siswa Baru ---');
  const id = readlineSync.question('Masukkan ID Siswa: ');
  const name = readlineSync.question('Masukkan Nama Siswa: ');
  const className = readlineSync.question('Masukkan Kelas Siswa: ');

  const newStudent = new Student(id, name, className);
  const success = manager.addStudent(newStudent);

  if (success) {
    console.log(`Siswa dengan ID ${id} berhasil ditambahkan.`);
  } else {
    console.log(`Gagal menambahkan siswa dengan ID ${id}. ID sudah digunakan.`);
  }
  // Implementasi di sini
  console.log('\n--- Tambah Siswa Baru ---');
  // TODO: Lengkapi implementasi
}

/**
 * Handler untuk melihat semua siswa
 * TODO: Implementasikan function ini
 * - Panggil method displayAllStudents dari manager
 * - Jika tidak ada siswa, tampilkan pesan
 */
function viewAllStudents() {
  console.log('\n--- Daftar Semua Siswa ---');
  const allStudents = manager.getAllStudents();
  if (allStudents.length === 0) {
    console.log('Belum ada data siswa.');
  } else {
    allStudents.forEach((student) => {
      console.log(
        `ID: ${student.id}, Nama: ${student.name}, Kelas: ${
          student.className
        }, Rata-rata Nilai: ${student.getAverageGrade().toFixed(2)}`
      );
    });
  }
  // Implementasi di sini
  console.log('\n--- Daftar Semua Siswa ---');
  // TODO: Lengkapi implementasi
}

/**
 * Handler untuk mencari siswa berdasarkan ID
 * TODO: Implementasikan function ini
 * - Minta input ID
 * - Cari siswa menggunakan manager
 * - Tampilkan info siswa jika ditemukan
 */
function searchStudent() {
  const id = readlineSync.question('Masukkan ID Siswa: ');
  const student = manager.findStudentById(id);
  if (student) {
    console.log(
      `ID: ${student.id}, Nama: ${student.name}, Kelas: ${
        student.className
      }, Rata-rata Nilai: ${student.getAverageGrade().toFixed(2)}`
    );
  } else {
    console.log(`Siswa dengan ID ${id} tidak ditemukan.`);
  }
  // Implementasi di sini
  console.log('\n--- Cari Siswa ---');
  // TODO: Lengkapi implementasi
}

/**
 * Handler untuk update data siswa
 * TODO: Implementasikan function ini
 * - Minta input ID siswa
 * - Tampilkan data saat ini
 * - Minta input data baru (nama, kelas)
 * - Update menggunakan manager
 */
function updateStudent() {
  const id = readlineSync.question('Masukkan ID Siswa: ');
  const student = manager.findStudentById(id);
  if (student) {
    console.log(
      `Data saat ini - Nama: ${student.name}, Kelas: ${student.className}`
    );
    const newName = readlineSync.question(
      'Masukkan Nama Baru (tekan enter untuk tidak mengubah): '
    );
    const newClass = readlineSync.question(
      'Masukkan Kelas Baru (tekan enter untuk tidak mengubah): '
    );

    const updatedName = newName.trim() === '' ? student.name : newName;
    const updatedClass = newClass.trim() === '' ? student.className : newClass;

    const success = manager.updateStudent(id, updatedName, updatedClass);
    if (success) {
      console.log(`Data siswa dengan ID ${id} berhasil diperbarui.`);
    } else {
      console.log(`Gagal memperbarui data siswa dengan ID ${id}.`);
    }
  } else {
    console.log(`Siswa dengan ID ${id} tidak ditemukan.`);
  }
  // Implementasi di sini
  console.log('\n--- Update Data Siswa ---');
  // TODO: Lengkapi implementasi
}

/**
 * Handler untuk menghapus siswa
 * TODO: Implementasikan function ini
 * - Minta input ID siswa
 * - Konfirmasi penghapusan
 * - Hapus menggunakan manager
 */
function deleteStudent() {
  const id = readlineSync.question('Masukkan ID Siswa yang akan dihapus: ');
  const student = manager.findStudentById(id);
  if (student) {
    const confirm = readlineSync.question(
      `Apakah Anda yakin ingin menghapus siswa dengan ID ${id}? (y/n): `
    );
    if (confirm.toLowerCase() === 'y') {
      const success = manager.deleteStudent(id);
      if (success) {
        console.log(`Siswa dengan ID ${id} berhasil dihapus.`);
      } else {
        console.log(`Gagal menghapus siswa dengan ID ${id}.`);
      }
    } else {
      console.log('Penghapusan dibatalkan.');
    }
  } else {
    console.log(`Siswa dengan ID ${id} tidak ditemukan.`);
  }
  // Implementasi di sini
  console.log('\n--- Hapus Siswa ---');
  // TODO: Lengkapi implementasi
}

/**
 * Handler untuk menambah nilai siswa
 * TODO: Implementasikan function ini
 * - Minta input ID siswa
 * - Tampilkan data siswa
 * - Minta input mata pelajaran dan nilai
 * - Tambahkan nilai menggunakan method addGrade
 */
function addGradeToStudent() {
  const id = readlineSync.question('Masukkan ID Siswa: ');
  const student = manager.findStudentById(id);
  if (student) {
    console.log(
      `Menambahkan nilai untuk Siswa - ID: ${student.id}, Nama: ${student.name}`
    );
    const subject = readlineSync.question('Masukkan Mata Pelajaran: ');
    const gradeInput = readlineSync.question('Masukkan Nilai (0-100): ');
    const grade = parseFloat(gradeInput);
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      student.addGrade(subject, grade);
      console.log(
        `Nilai ${grade} untuk mata pelajaran ${subject} berhasil ditambahkan.`
      );
    } else {
      console.log('Nilai tidak valid. Harus antara 0 hingga 100.');
    }
  } else {
    console.log(`Siswa dengan ID ${id} tidak ditemukan.`);
  }
  // Implementasi di sini
  console.log('\n--- Tambah Nilai Siswa ---');
  // TODO: Lengkapi implementasi
}

/**
 * Handler untuk melihat top students
 * TODO: Implementasikan function ini
 * - Panggil getTopStudents(3) dari manager
 * - Tampilkan informasi siswa
 */
function viewTopStudents() {
  const topStudents = manager.getTopStudents(3);
  if (topStudents.length === 0) {
    console.log('Belum ada data siswa.');
    return;
  }
  topStudents.forEach((student, index) => {
    console.log(
      `${index + 1}. ID: ${student.id}, Nama: ${student.name}, Kelas: ${
        student.className
      }, Rata-rata Nilai: ${student.getAverageGrade().toFixed(2)}`
    );
  });
  // Implementasi di sini
  console.log('\n--- Top 3 Siswa ---');
  // TODO: Lengkapi implementasi
}

/**
 * Main program loop
 * TODO: Implementasikan main loop
 * - Tampilkan menu
 * - Baca input pilihan
 * - Panggil handler yang sesuai
 * - Ulangi sampai user pilih keluar
 */
function main() {
  console.log('Selamat datang di Sistem Manajemen Nilai Siswa!');

  // TODO: Implementasikan loop utama program
  let running = true;

  while (running) {
    // Tampilkan menu
    displayMenu();
    const choice = readlineSync.question('Pilih menu (1-8): ');

    switch (choice) {
      case '1':
        addNewStudent(); // Handler untuk menambah siswa baru
        break;
      case '2':
        viewAllStudents(); // Handler untuk melihat semua siswa
        break;
      case '3':
        searchStudentById(); // Handler untuk mencari siswa berdasarkan ID
        break;
      case '4':
        updateStudent(); // Handler untuk update data siswa
        break;
      case '5':
        deleteStudent(); // Handler untuk menghapus siswa
        break;
      case '6':
        addGradeToStudent(); // Handler untuk menambah nilai siswa
        break;
      case '7':
        viewTopStudents(); // Handler untuk melihat top 3 siswa
        break;
      case '8':
        running = false; // Keluar dari loop
        break;
      default:
        console.log('Pilihan tidak valid. Silakan pilih lagi.');
    }
    // Baca pilihan user
    // Jalankan action sesuai pilihan
    // TODO: Lengkapi implementasi
    // Hint: gunakan switch-case untuk handle berbagai pilihan
  }

  console.log('\nTerima kasih telah menggunakan aplikasi ini!');
}

// Jalankan aplikasi
main();
