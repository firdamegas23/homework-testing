describe("End-to-End Testing dengan Cypress", () => {

    // Pastikan mengarah ke URL halaman web
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    // Test 1: Pengecekan 10 Data User dari API
    it("Harus menampilkan 10 Data User setelah klik tombol 'Ambil User'", () => {
        // Klik tombol (panggil class-nya)
        cy.get(".fetch-user-button").click();

        // Cek data user yang diambil (panggil class-nya)
        cy.get(".user-name", { timeout: 10000 }).should("have.length", 10);
    });

    // Test 2: Flow Positif (Berhasil membuat User)
    it("Berhasil melakukan submit form dan menampilkan pesan sukses", () => {
        // Isi input menggunakan class-nya
        cy.get(".name-input").type("Firda Mega Shafira");
        cy.get(".email-input").type("firdamega@gmail.com");
        cy.get(".phone-input").type("08123456789");

        // Klik tombol "Buat User"
        cy.get(".post-user-button").click();

        // Pastikan muncul pesan sukses dari class "success-response"
        cy.get(".success-response")
            .should("be.visible")
            .and("contain", "Berhasil membuat user!");
    });

    // Test 3: Flow Negatif (Gagal membuat User)
    it("Gagal melakukan submit dan memunculkan pesan error jika input kosong", () => {
        // Klik tombol "Buat User" tanpa mengisi apapun
        cy.get(".post-user-button").click();

        // Pastikan muncul pesan error dari class "fail-response"
        cy.get(".fail-response")
            .should("be.visible")
            .and("contain", "Masukan data user!");
    });
});