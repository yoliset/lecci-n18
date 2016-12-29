
function stringMultiplicar (n) { 
    var limit = 10;
    var resultado = '';
    for (var u=1; u<=limit; u++) {
    	resultado += n+ 'x' + u +'=' + (n*u) + '/';
    }
    return resultado.slice(0,-1);
}
