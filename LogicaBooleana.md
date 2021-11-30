# Álgebra de Boole
A Álgebra (ou Lógica) de Boole é fundamental para a computação, uma vez que nela é baseada as operações lógicas (operações baseadas em verdade e mentira; true ou false).
A Álgebra de Boole se baseia em variáveis. Podem ser chamados também de premissas, valores verdade, ou expressões lógicas.

## Variáveis
As variáveis, na álgebra booleana, podem receber basicamente dois valores: verdadeiro, ou falso. Ela pode ser estendida para outros tipos de valores, é claro, desde que tenham valoração binária: ou é uma coisa, ou é outra.
Ex.:
- Verdadeiro / Falso
- Preto ou Branco
- Bit 0 ou Bit 1
- Vazio ou Cheio
- ...
Note que as variáveis podem representar uma premissa. Por exemplo:
- P = Salvador é a capital da Bahia (verdade)
- Q = A capital do Brasil é Argentina (falso) 

## Operações lógicas
Baseados nos valores acima, podemos estudar algumas operações que se baseiam na lógica de boole. Temos uma operação unária (NÃO), e operações Binárias (E, OU)

### NÃO (Negação)
NÃO é a operação mais básica da álebra de Boole. Basicamente, negamos o valor de uma variável. Ou seja:
- Se P é verdadeiro, 
- NÃO P é igual a falso,
e vice versa.

A operação de negação pode ser representada por:
- NÃO
- NOT
- ¬
- ! (em várias linguagens de programação)

Um exemplo de premissa utilizando o não é:
- Se P = amarelo é uma cor;
- ¬P = amarelo não é uma cor.

Podemos pensar na seguinte tabela verdade para a negação (sendo 0 falso, 1 verdade):

¬  | 0  | 1  
-- | -- | --
P  | 0  | 1 
¬P | 1  | 0

### E (Conjunção)
Dadas duas variáveis lógicas (ou booleanas), podemos verificar se, juntas (ou em conjunto), elas expressão uma verdade.A

Representamos a conjunção por:
- E
- AND
- ^
- dados P e Q variáveis, P.Q ou P*Q

Exemplos de uso da conjunção:
- Se P = amarelo é uma cor,
- E Q = azul é uma cor,
- P ^ Q = amarelo e uma cor e azul é uma cor (logo, amarelo e azul são cores)

Podemos pensar a seguinte tabela-verdade para a conjunção:

^  | 0  | 1  
-- | -- | --
P  | 0  | 1 
¬P | 1  | 0
