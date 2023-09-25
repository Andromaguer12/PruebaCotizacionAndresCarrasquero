function formatPrice(numero) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(numero);
}

export default formatPrice