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


### Operações básicas
#### NÃO (Negação)
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

#### E (Conjunção)
Dadas duas variáveis lógicas (ou booleanas), podemos verificar se, juntas (ou em conjunto), elas expressão uma verdade.
Uma conjunção só é verdade quando ambas as premissas são verdadeiras.

Representamos a conjunção por:
- E
- AND
- ^
- dados P e Q variáveis, P.Q ou P*Q
- P && Q (em várias linguagens de programação)

Exemplo de uso da conjunção:
- Se P = amarelo é uma cor,
- E Q = azul é uma cor,
- P ^ Q = amarelo e uma cor e azul é uma cor (logo, amarelo e azul são cores)

Podemos pensar a seguinte tabela-verdade para a conjunção:

^  | Q  | ¬Q  
-- | -- | --
P  | 1  | 0 
¬P | 0  | 0

#### OU (Disjunção)
Dadas duas variáveis, elas são verdadeiras de maneira disjunta se uma é verdadeira OU se a outra é.

Representamos a disjunção por:
- OU
- OR
- v
- Dados P e Q variáveis, P+Q
- P || Q (em várias linguagens de programação)

Exemplo de uso da disjunção:
- Se P = amarelo é uma cor
- e Q = água é um líquido,
- P v Q = amarelo é uma cor ou água é um líquido (ambos são verdade, logo P v Q = verdade)

Podemos pensar a seguinte tabela-verdade para a disjunção:

v  | Q  | ¬Q  
-- | -- | --
P  | 1  | 1 
¬P | 1  | 0

### Operações secundárias
#### Condicional
A condicional é uma das operações lógicas mais importantes, e também mais confusas. Ela postula que:
Dadas duas premissas, a implicação da primeira pela segunda é sempre verdade, a menos que a primeira seja verdadeira e a segunda, falsa.

A condicional pode ser representada por:
- ->
- →

Exemplo de uso da conjunção:
- Se P = amarelo é uma cor, e Q = cores são formas de luz, P -> Q = amarelo é uma forma de luz (verdade)
- Se P = amarelo é uma cor (verdade), e Q = toda cor é fria (falso), P -> Q = amarelo é uma cor fria (falso)
- e P = amarelo é um som (falso) e Q = sons são ondas (verdade), P -> Q = amarelo é uma onda (verdade)
- Se P = amarelo é um som (falso) e Q = sons são líquidos (false), logo amarelo é liquido (verdade)
Pode ser um pouco confuso, mas pense: é um conceito muito preso à premissa. Se a primeira afirmação é falsa, tanto faz. Não interessa muito. Pode ser verdade, que seja. Mas, se a primera é verdadeira, toda a afirmação só pode ser verdadeira se a segunda também for.

Podemos pensar a seguinte tabela-verdade para a condicional:

->  | Q  | ¬Q  
-- | -- | --
P  | 1  | 0 
¬P | 1  | 1

#### OU EXCLUSIVO (XOU)
Duas premissas são um OU excludente, se para que uma seja verdade, a outra necessariamente seja falsa

Representação do OU Exclusivo:
- XOU
- XOR
- ⊕

Exemplo de uso:
- P = Amarelo é uma cor, Q = amarelo é um som, P XOU Q = amarelo ou é uma cor, ou é um som
- P = Sons são ouvidos, Q = sons são visíveis, P XOU Q = sons ou são ouvidos, ou são vistos

Podemos pensar a seguinte tabela-verdade para o ou exclusivo:

XOR  | Q  | ¬Q  
-- | -- | --
P  | 0  | 1 
¬P | 1  | 0

#### Equivalência (ou Equivalência Lógica)
Duas premissas são equivalencias lógicas se, ao mesmo tempo, ambas são verdadeiras, ou ambas são falsas

Representação da equivalência:
- ≡

Exemplos de equivalência
- Se P = amarelo é uma cor e Q = cores são espectros de luz, ou amarelo é um expectro de luz, ou amarelo não é cor e cores não são espectros de luz

Podemos pensar a seguinte tabela-verdade para o ou exclusivo:

≡  | Q  | ¬Q  
-- | -- | --
P  | 1  | 0 
¬P | 0  | 1

Mais informações em:

https://pt.wikipedia.org/wiki/%C3%81lgebra_booliana
https://en.wikipedia.org/wiki/Boolean_algebra