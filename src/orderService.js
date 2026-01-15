// Crie uma função que calcula o valor total de um pedido
// aplicando 10% de desconto quando o valor ultrapassar 100 reais

/**
 * Calcula o valor total de um pedido com desconto automático
 * @param {number} orderValue - Valor do pedido em reais
 * @returns {number} Valor total com desconto aplicado, se aplicável
 */
function calculateOrderTotal(orderValue) {
  // Validação de entrada
  if (typeof orderValue !== 'number' || orderValue < 0) {
    throw new Error('O valor do pedido deve ser um número não negativo');
  }

  // Aplica 10% de desconto se o valor ultrapassar 100 reais
  if (orderValue > 100) {
    const discount = orderValue * 0.1; // 10% de desconto
    return orderValue - discount;
  }

  return orderValue;
}

module.exports = { calculateOrderTotal };



