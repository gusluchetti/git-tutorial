---
title:
  - Introdução Git/Github
author:
  - Gustavo Luchetti
date:
  - 27 de Outubro, 2023
---

# Por que usar git?

Git - _Distributed Version Control System_

- Histórico granular de todas as alterações feitas (git log, git blame)
- Gerenciamento de mudanças no mesmo arquivo
- Gestão do código em diferentes estados/ambientes ('branches')

![3 branches, 'master', 'develop' e 'topic'](imgs/branches@2x.png){ width=250px }

# Por que usar Github?

Github - Repositório de bases de código

- Avaliar qualidade de código
- Automações que permitem mais deliveries em menos tempo
- Testes automatizados, só permitindo adição de mais código se o mesmo for validado
- etc.

# Comandos Básicos

- `git init`: criação de um repositório vazio
- `git add`: adicionar arquivos no próximo commit
- `git commit`: definir um conjunto de mudanças como pronto pra ser enviado
- `git remote add`: definir branch 'remota' em algum repositório (no github, por exemplo)
- `git push`: empurrar mudanças para essa branch remota

pra manter tudo na linha de comando, podemos usar a [CLI do Github](https://cli.github.com/) para criar um novo repositório
usando `gh repo create`

# Demonstração

Demonstração de uso do git -> https://github.com/gusluchetti/...
