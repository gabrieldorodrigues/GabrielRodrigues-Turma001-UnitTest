const AnaliseDeDados = require('../src/analiseDeDados'); // Ajuste o caminho conforme necessário

describe('AnaliseDeDados', () => {
    let analise;
    
    beforeEach(() => {
      analise = new AnaliseDeDados();
    });
  
    describe('constructor', () => {
      test('deve inicializar com array vazio por padrão', () => {
        expect(analise.dados).toEqual([]);
      });
  
      test('deve aceitar dados iniciais', () => {
        const dadosIniciais = [1, 2, 3];
        analise = new AnaliseDeDados(dadosIniciais);
        expect(analise.dados).toEqual(dadosIniciais);
      });
    });
  
    describe('adicionarDados', () => {
      test('deve adicionar dados corretamente', () => {
        analise.adicionarDados([1, 2]);
        expect(analise.dados).toEqual([1, 2]);
      });
  
      test('deve lançar erro para entrada não array', () => {
        expect(() => analise.adicionarDados('não array')).toThrow();
      });
    });
  
    describe('limparDados', () => {
      test('deve limpar os dados', () => {
        analise.adicionarDados([1, 2, 3]);
        analise.limparDados();
        expect(analise.dados).toEqual([]);
      });
    });
  
    describe('ordenarDados', () => {
      test('deve retornar cópia ordenada sem alterar original', () => {
        analise.adicionarDados([3, 1, 2]);
        const ordenado = analise.ordenarDados();
        expect(ordenado).toEqual([1, 2, 3]);
        expect(analise.dados).toEqual([3, 1, 2]);
      });
    });
  
    // Testes para métodos estatísticos
    describe('cálculos estatísticos', () => {
      beforeEach(() => {
        analise.adicionarDados([2, 4, 4, 4, 5, 5, 7, 9]);
      });
  
      test('calcularMedia', () => {
        expect(analise.calcularMedia()).toBeCloseTo(5, 1);
        analise.limparDados();
        expect(analise.calcularMedia()).toBeNull();
      });
  
      test('calcularMediana', () => {
        expect(analise.calcularMediana()).toBe(4.5);
        analise.limparDados();
        analise.adicionarDados([1, 3, 5]);
        expect(analise.calcularMediana()).toBe(3);
      });
  
      test('calcularModa', () => {
        expect(analise.calcularModa()).toEqual([4]);
        analise.adicionarDados([5]);
        expect(analise.calcularModa()).toEqual([4, 5]);
      });
  
      test('calcularVariancia', () => {
        expect(analise.calcularVariancia()).toBeCloseTo(4, 1);
      });
  
      test('calcularDesvioPadrao', () => {
        expect(analise.calcularDesvioPadrao()).toBeCloseTo(2, 0.1);
      });
  
      test('encontrarMinimo', () => {
        expect(analise.encontrarMinimo()).toBe(2);
      });
  
      test('encontrarMaximo', () => {
        expect(analise.encontrarMaximo()).toBe(9);
      });
  
      test('calcularAmplitude', () => {
        expect(analise.calcularAmplitude()).toBe(7);
      });
    });
  
    describe('normalizarDados', () => {
      test('dados idênticos devem retornar zeros', () => {
        analise.adicionarDados([5, 5, 5]);
        expect(analise.normalizarDados()).toEqual([0, 0, 0]);
      });
  
      test('normalização padrão', () => {
        analise.adicionarDados([1, 2, 3]);
        expect(analise.normalizarDados()).toEqual([0, 0.5, 1]);
      });
    });
  
    describe('calcularPercentil', () => {
      test('percentil 50 deve ser igual à mediana', () => {
        analise.adicionarDados([1, 2, 3, 4]);
        expect(analise.calcularPercentil(50)).toBe(2.5);
      });
  
      test('percentil inválido retorna null', () => {
        expect(analise.calcularPercentil(101)).toBeNull();
      });
    });
  
    describe('calcularProduto', () => {
      test('produto de números positivos', () => {
        analise.adicionarDados([2, 3, 4]);
        expect(analise.calcularProduto()).toBe(24);
      });
  
      test('produto com zero', () => {
        analise.adicionarDados([1, 0, 5]);
        expect(analise.calcularProduto()).toBe(0);
      });
    });
  
    describe('coeficiente de variação', () => {
      test('cálculo correto', () => {
        analise.adicionarDados([10, 20, 30]);
        const cv = analise.calcularCoeficienteVariacao();
        expect(cv).toBeCloseTo((Math.sqrt(66.6667)/20)*100, 1);
      });
  
      test('media zero retorna null', () => {
        analise.adicionarDados([-2, 0, 2]);
        expect(analise.calcularCoeficienteVariacao()).toBeNull();
      });
    });
  
    describe('removerOutliers', () => {
      test('deve remover valores extremos', () => {
        analise.adicionarDados([1, 2, 3, 4, 5, 100]);
        analise.removerOutliers();
        expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
      });
    });
  
    describe('calcularCorrelacao', () => {
      test('correlação perfeita', () => {
        const x = [1, 2, 3];
        const y = [2, 4, 6];
        analise.adicionarDados(x);
        expect(analise.calcularCorrelacao(y)).toBeCloseTo(1, 5);
      });
  
      test('conjuntos de tamanhos diferentes retornam null', () => {
        expect(analise.calcularCorrelacao([1, 2])).toBeNull();
      });
    });
  });