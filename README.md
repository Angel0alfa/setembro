# Setembro Amarelo — CEPI Jardim Cascata

Site estático com fontes e imagens locais. Diretório público: dist.
Interface responsiva, painéis translúcidos, roteiro expansível, perguntas interativas e downloads.
Sem coleta de dados ou envio de relatos. Os horários da atividade dependem de confirmação da escola.

Materiais e guia de identidade em dist/assets; pacote em dist/materiais-setembro-amarelo.zip.

## Publicação no Netlify

O arquivo `netlify.toml` na raiz configura a publicação da pasta `dist`.
O site usa HTML, CSS e JavaScript prontos, sem instalação de dependências
ou comando de build. Mantenha a pasta `dist` e o `netlify.toml` no repositório.

No Netlify, importe o repositório do GitHub e escolha a branch desejada.
Deixe o diretório base vazio. A configuração do arquivo define o diretório
de publicação como `dist` e o comando de build vazio.

Os arquivos de `.openai` são exclusivos da hospedagem no Sites e não
são necessários para o Netlify. O acesso privado do Sites não é transferido
para outras hospedagens.

Referência: https://docs.netlify.com/build/configure-builds/file-based-configuration/
