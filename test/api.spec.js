const path = require('path')
const apiJs = require('../src/api')

//test de función checkPath

describe('checkPath', () => {

    absPath = 'C:\Users\Januhary Gonzalez\Desktop\MD-Links\DEV001-md-links\filesExamples\no-links.md'
    pathTrue = 'filesExamples\with-links.md'

    it('Debería ser una función', () => {
        expect(typeof apiJs.checkPath).toBe('function');
    });

    it('debería retornar true si la ruta es absoluta', () => {
        expect(apiJs.checkPath(absPath)).toBe(false);
    });

    it('debería retornar false si la ruta no es absoluta', () => {
        expect(apiJs.checkPath(pathTrue)).toBe(false);
    });
})

