const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    output: {
        publicPath: 'http://localhost:4200/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'angular-app',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/app/app.module.ts'
            },
            shared: ['@angular/core', '@angular/common', '@angular/router']
        })
    ]
}