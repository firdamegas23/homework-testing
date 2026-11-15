import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Testing komponen App (Judul & Sub-Judul)", () => {
    
    // Test 1: Mengecek Judul
    test("Renders Heading Correctly", () => {
        render(<App />);

        // Cari elemen judul (h1)
        const headingElement = screen.getByText("Hello Jayjay Students!");
        // Pastikan benar-benar ada di dokumen
        expect(headingElement).toBeTruthy();
    });

    // Test 2: Mengecek Sub Judul
    test("Renders Sub Heading Correctly", () => {
        render(<App />);

        // Cari elemen sub judul (h2)
        const subHeading = screen.getByText("Let's create unit test");
        expect(subHeading).toBeInTheDocument();
    });
});


// ---------------------------
// 3 FUNGSI YANG AKAN DI TEST 
// ---------------------------

const tambah = (a, b) => a + b;

const cekLulus = (nilai) => {
    if (nilai < 0 || nilai > 100) return "Nilai Tidak Valid";  // Buat jaga-jaga Flow Negatif

    return nilai >= 75 ? "Lulus" : "Tidak Lulus";
}

const formatText = (text) => {
    if (!text) return "Text Kosong";  // untuk Flow Negatif

    return text.trim().toUpperCase();
}


// ---------------------------
// UNIT TEST UNTUK # FUNGSI TADI
// ---------------------------

describe("Testing 3 Fungsi Utama", () => {

    // Test 1 : Fungsi Tambah
    test("Fungsi harus mengembalikan Nilai Tambah yang benar", () => {
        expect(tambah(2, 3)).toBe(5);
        expect(tambah(-1, 4)).toBe(3);
    });

    // Test 2 : Fungsi Kelulusan
    test("Fungsi harus menentukan status Lulus dengan benar", () => {
        expect(cekLulus(80)).toBe("Lulus");
        expect(cekLulus(45)).toBe("Tidak Lulus");
    });

    // Test 3: Fungsi Format Nama
    test("Fungsi harus mengubah Text menjadi Kapital dengan benar", () => {
        expect(formatText("jayjay school")).toBe("JAYJAY SCHOOL");
    });

});


// ---------------------------
// TESTING FLOW POSITIF DAN NEGATIF
// ---------------------------

describe("Testing Flow Positif & Negatif", () => {

    // Flow Positif
    describe("Flow Positif (Input Normal / Valid)", () => {

        // Pakai Fungsi Cek Lulus
        test("Fungsi Cek Kelulusan memberikan hasil 'Lulus' ketika nilai >= 75", () => {
            const hasil = cekLulus(85);
            expect(hasil).toBe("Lulus");
        });

        // Pakai Fungsi Format Text
        test("Fungsi Format Text berhasil mengubah text menjadi Kapital", () => {
            const hasil = formatText("Firda Mega Shafira");
            expect(hasil).toBe("FIRDA MEGA SHAFIRA");
        });
    });

    // Flow Negatif
    describe("Flow Negatif (Input Invalid / Error)", () => {

        // Pakai Fungsi Cek Lulus
        test("Fungsi Cek Lulus mengembalikan hasil 'Nilai Tidak Valid' ketika nilai di atas 100", () => {
            const hasil = cekLulus(145);
            expect(hasil).toBe("Nilai Tidak Valid");
        });

        // Pakai Fungsi Format Text
        test("Fungsi Format Text mengembalikan hasil 'Text Kosong' ketika input null/kosong", () => {
            const hasil = formatText("");
            expect(hasil).toBe("Text Kosong");
        });
    });

});