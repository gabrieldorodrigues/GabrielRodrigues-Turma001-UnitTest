# Análise Estatística de Dados - Testes Unitários Jest

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_unit-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_unit-tests-jest)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Pacote JavaScript para análise estatística de dados com suite completa de testes unitários implementando as melhores práticas de CI/CD.

## Funcionalidades Principais

- Cálculos estatísticos completos:
  - Medidas de tendência central (Média, Mediana, Moda)
  - Medidas de dispersão (Variância, Desvio Padrão, Amplitude)
  - Normalização de dados
  - Cálculo de percentis
  - Detecção de outliers
  - Análise de correlação

- Gestão de dados:
  - Adição e limpeza de datasets
  - Ordenação não-destrutiva
  - Métodos de pré-processamento

## Pré-requisitos

- Node.js (versão >= 20.x)
- npm (versão >= 9.x)

## Instalação

```bash
git clone https://github.com/ugioni/unit-tests-jest.git
cd unit-tests-jest
npm install
```

## Uso Básico

```javascript
const AnaliseDeDados = require('./src/analiseDeDados');

const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
console.log(analise.calcularMedia()); // 3
console.log(analise.calcularMediana()); // 3
```

## Testes e Cobertura

Executar todos os testes:
```bash
npm test
```

Executar testes com relatório de cobertura:
```bash
npm run coverage
```

Relatório de cobertura gerado em:
```bash
./coverage/lcov-report/index.html
```

## Estratégia de Testes

Cobertura abrangente incluindo:
- Validação de entradas e casos extremos
- Cenários de dados vazios/nulos
- Precisão numérica em cálculos estatísticos
- Comportamento de métodos com diferentes tamanhos de datasets
- Testes de não-regressão para métricas-chave

**Cobertura Atual:**  
![Coverage](https://img.shields.io/badge/Coverage-95%25-brightgreen)

## Estrutura do Projeto

```
.
├── src/
│   └── analiseDeDados.js    # Implementação principal
├── test/
│   └── analiseDeDados.test.js # Testes unitários
├── coverage/                # Relatórios de cobertura
├── .github/
│   └── workflows/           # Configurações de CI/CD
└── package.json             # Dependências e scripts
```

## CI/CD Pipeline

Fluxo automatizado com:
- Execução de testes em Node.js 20.x
- Análise estática com SonarCloud
- Geração de relatórios de cobertura
- Verificação de qualidade de código

## Contribuição

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Distribuído sob licença MIT. Veja [LICENSE](LICENSE) para mais informações.