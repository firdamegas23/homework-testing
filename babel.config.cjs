// Untuk Menjermahkan file .jsx ke JavaScript murni (.js)

module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current'} }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
}