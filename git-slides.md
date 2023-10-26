---
title:
  - Tech Talk
author:
  - Gustavo Luchetti
date:
  - 27 de Outubro, 2023
---

## Sumário

- **CLI**, porque usar e qual a relevância?
- Básico do **git**
- Usando **git** no Github
- Outras coisas...?

## Começando do início...

CLI - _Command-Line Interface_

A única interação que o usuário tem com o programa é por **texto**, no terminal.

Muitos programas tem sua versão na linha de comando! (o próprio github, docker, etc.)

## Estrutura padrão

- comando inicial, sempre precisa ser rodado, normalmente é o nome do programa - `docker, gh, handbrake...`
- `-v, --verbose, -o arquivo.txt` - paramêtros adicionais, que podem ou não precisar de mais argumentos

## Exemplos

`aprofunda -f analise.txt -o analise.pdf -v`

ou seja, rodar o aprofunda, recebendo como input um arquivo de texto,
devolvendo um pdf, de forma 'explícita' (v de _verbose_)

## E...?

![](imgs/linux-user-joke.gif)

## Melhores casos de uso

- Tarefas repetitivas.
- Tarefas que precisam ser rodadas de forma bem específica (ou que exigem configurações específicas)

## Git

Git - _Distributed Version Control System_

- Histórico granular de todas as alterações feitas (git log, git blame)
- Gerenciamento de mudanças no mesmo arquivo
- Gestão do código em diferentes estados/ambientes ('branches')

![3 branches, 'master', 'develop' e 'topic'](imgs/branches@2x.png){ width=250px }

## Por que usar Github?

Github - Repositório de bases de código

- Avaliar qualidade de código
- Automações que permitem mais deliveries em menos tempo
- Testes automatizados, só permitindo adição de mais código se o mesmo for validado
- etc.

## Comandos Básicos

- `git init`: criação de um repositório vazio
- `git add`: adicionar arquivos no próximo commit
- `git commit`: definir um conjunto de mudanças como pronto pra ser enviado
- `git remote add`: definir branch 'remota' em algum repositório (no github, por exemplo)
- `git push`: empurrar mudanças para essa branch remota

pra manter tudo na linha de comando, podemos usar a [CLI do Github](https://cli.github.com/) para criar um novo repositório
usando `gh repo create`

## Demonstração

Demonstração de uso do git -> https://github.com/gusluchetti/...
