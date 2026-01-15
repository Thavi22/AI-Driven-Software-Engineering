const { calculateOrderTotal } = require('../src/orderService');

describe('calculateOrderTotal', () => {
  // Testes para cenários SEM desconto (valor <= 100)
  describe('Cenários SEM desconto (valor <= 100)', () => {
    test('deve retornar o mesmo valor para pedido com R$ 0', () => {
      expect(calculateOrderTotal(0)).toBe(0);
    });

    test('deve retornar o mesmo valor para pedido com R$ 50', () => {
      expect(calculateOrderTotal(50)).toBe(50);
    });

    test('deve retornar o mesmo valor para pedido com R$ 100 (limite)', () => {
      expect(calculateOrderTotal(100)).toBe(100);
    });

    test('deve retornar o mesmo valor para pedido com R$ 99.99', () => {
      expect(calculateOrderTotal(99.99)).toBe(99.99);
    });
  });

  // Testes para cenários COM desconto (valor > 100)
  describe('Cenários COM desconto (valor > 100)', () => {
    test('deve aplicar 10% de desconto para pedido com R$ 150', () => {
      // 150 * 0.1 = 15 de desconto
      // 150 - 15 = 135
      expect(calculateOrderTotal(150)).toBe(135);
    });

    test('deve aplicar 10% de desconto para pedido com R$ 200', () => {
      // 200 * 0.1 = 20 de desconto
      // 200 - 20 = 180
      expect(calculateOrderTotal(200)).toBe(180);
    });

    test('deve aplicar 10% de desconto para pedido com R$ 500', () => {
      // 500 * 0.1 = 50 de desconto
      // 500 - 50 = 450
      expect(calculateOrderTotal(500)).toBe(450);
    });

    test('deve aplicar 10% de desconto para pedido com R$ 100.01', () => {
      // 100.01 * 0.1 = 10.001 de desconto
      // 100.01 - 10.001 = 90.009
      expect(calculateOrderTotal(100.01)).toBeCloseTo(90.009, 5);
    });

    test('deve aplicar 10% de desconto para pedido com R$ 1000', () => {
      // 1000 * 0.1 = 100 de desconto
      // 1000 - 100 = 900
      expect(calculateOrderTotal(1000)).toBe(900);
    });
  });

  // Testes para casos de erro
  describe('Tratamento de erros', () => {
    test('deve lançar erro para valor negativo', () => {
      expect(() => calculateOrderTotal(-50)).toThrow('O valor do pedido deve ser um número não negativo');
    });

    test('deve lançar erro para valor não numérico (string)', () => {
      expect(() => calculateOrderTotal('100')).toThrow('O valor do pedido deve ser um número não negativo');
    });

    test('deve lançar erro para valor nulo', () => {
      expect(() => calculateOrderTotal(null)).toThrow('O valor do pedido deve ser um número não negativo');
    });

    test('deve lançar erro para valor indefinido', () => {
      expect(() => calculateOrderTotal(undefined)).toThrow('O valor do pedido deve ser um número não negativo');
    });

    test('deve lançar erro para objeto', () => {
      expect(() => calculateOrderTotal({})).toThrow('O valor do pedido deve ser um número não negativo');
    });
  });

  // Testes para valores decimais
  describe('Valores decimais', () => {
    test('deve calcular corretamente para R$ 150.50 com desconto', () => {
      // 150.50 * 0.1 = 15.05 de desconto
      // 150.50 - 15.05 = 135.45
      expect(calculateOrderTotal(150.50)).toBeCloseTo(135.45, 5);
    });

    test('deve calcular corretamente para R$ 99.99 sem desconto', () => {
      expect(calculateOrderTotal(99.99)).toBeCloseTo(99.99, 5);
    });

    test('deve calcular corretamente para R$ 123.45 com desconto', () => {
      // 123.45 * 0.1 = 12.345 de desconto
      // 123.45 - 12.345 = 111.105
      expect(calculateOrderTotal(123.45)).toBeCloseTo(111.105, 5);
    });
  });
});


