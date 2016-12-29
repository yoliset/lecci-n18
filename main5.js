function casiPalindrome(palabra) {
	var umbral = 0;
	var tam = palabra.length;
	for (u=0 ; u<tam/2; u++) {
		if (palabra[u] != palabra[tam-(u+1)]) {
			umbral = umbral + 1;
		}
	}
	if (umbral > 2) {
		return false;
	}
	else {
		return true;
	}
}
