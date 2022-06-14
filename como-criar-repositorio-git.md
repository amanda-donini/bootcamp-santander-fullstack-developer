# COMO CRIAR UM REPOSITORIO NO GIT

1. Criar o repositorio no GitHub (de preferencia com o nome da pasta que eu vou criar no pc)
2. Criar uma pasta 
3. dentro do workspace: mkdir nome da pasta
4. Entrando na pasta: cd nome da pasta\
5. git init
6. Criar ou colocar um arquivo na pasta: 
    1. git add * (adiciona somente o que e novo)
    2. git add nome do arquivo  
    3. git add --all (adiciona tudo, ate arquivos deletados)
7. git status
8. git commit -m "mensagem sobre o que eu criei ou alterei"
9. Para sincronizar o repositorio local com o remoto (GitHub): 
    1. git remote add origin git@github.com:amanda-donini/bootcamp-santander-fullstack-developer.git\
    2. OU criar a pasta (reposit\'f3rio) direto no GitHub e clonar no terminal local
10. git push origin master OU git push
