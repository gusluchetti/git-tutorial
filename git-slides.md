---
marp: true
class: invert

title: CLI, Git & Github
author: Gustavo Luís Luchetti
keywords: cli, git, github
---

# TECH TALK

Gustavo Luchetti, 2023-10-27

---

## Sumário

- O que é **CLI**?
- Básico do **_git_**
- Usando **_git_** com **_Github_**
- Outras coisas...?

---

## Começando do início...

CLI - _Command-Line Interface_

A única interação que o usuário tem com o programa é por **texto**, no terminal.
Muito comuns em sistemas _Linux_ (mkdir, cat, grep, ssh, etc.), mas alguns programas do dia a dia do desenvolvedor também tem versões CLI (**github**, docker).

![height:200px](imgs/terminal.png)

---

## Estrutura padrão

```bash
aprofunda -f analise.txt -o aprofunda.pdf --verbose
```

- `aprofunda`: comando inicial, sempre o mesmo, indica pro terminal que programa você quer rodar.
- `-f, -o e --verbose`: argumentos adicionais que podem ou não receber parâmetros
- `analise.txt, aprofunda.pdf`: parâmetros necessários

Rodar o aprofunda, recebendo como input um arquivo de texto, devolvendo um arquivo em PDF, explicitando os logs.

---

## Pra que usar CLI?

"Preciso fazer uma tarefa simples, e preciso fazer ela rápido"

- Modificar servidores (remotamente/não tem ambiente de desktop)
- Tarefas que precisam ser rodadas de forma bem específica (ou que exigem configurações específicas)
- **_Definição de infraestrutura e arquitetura (migração de banco de dados), coisas que precisam ser previsíveis e repetidas sem demorar muito tempo._**

A intenção NÃO é rejeitar _GUIs_, e sim explorar alternativas!

---

## Git

_Sistema de Controle de Versão Distribuído_
Feito em 2005 pelo criador do Linux!

- Gestão do código em diferentes estados/ambientes ('branches')
- Histórico muito granular
  (`git log, diff e blame`)
- Gerenciamento de mudanças (até no mesmo arquivo!)
- _Alteracão do passado?_
  (`git rebase`)

![bg right width:440px](imgs/branches@2x.png)

---

## Comandos Básicos

- `git add`: adicionar arquivos no próximo commit
- `git commit`:
  definir um conjunto de mudanças como pronto pra ser enviado
- `git push`: empurrar mudanças para essa branch remota
- `git merge`: juntar 2 branches

![bg right height:250px](imgs/git-basics.png)

---

## Git != Github?

[Github](https://github.com/gusluchetti) - Repositório de bases de código
Alternativas: [Azure Repos](https://azure.microsoft.com/en-us/products/devops/repos), GitLab, Bitbucket, ...

- Issues, **Pull Requests (PR)**, Actions!
- Automações de deploys
- Testes automatizados por ambiente
- Definição de critérios de qualidade (_linting_)

* **Padronização de processos!**

---

# LIVE DEMO

Vamos corrigir um arquivo javascript!

---
# Sugestões

- https://learngitbranching.js.org - Tutorial interativo de git
- [No Boilerplate](https://www.youtube.com/@NoBoilerplate) - último vídeo complementa MUITO bem esses slides

---

# Fim!
