# Use a imagem base do Ubuntu
FROM ubuntu:20.04

# Defina o ARG DEBIAN_FRONTEND para evitar prompts interativos durante a instalação de pacotes
ARG DEBIAN_FRONTEND=noninteractive

# Atualize os pacotes e instale as dependências necessárias
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    sudo \
    bash \
    && apt-get clean

# Define a URL do script de instalação do aapanel
ENV URL=https://www.aapanel.com/script/install_7.0_en.sh

# Baixa e executa o script de instalação do aapanel
RUN if [ -f /usr/bin/curl ]; then \
        curl -ksSO "$URL"; \
    else \
        wget --no-check-certificate -O install_7.0_en.sh "$URL"; \
    fi \
    && bash install_7.0_en.sh aapanel

# Exponha a porta padrão do aapanel
EXPOSE 8888

# Comando para manter o container em execução (pode ser ajustado conforme necessário)
CMD ["tail", "-f", "/dev/null"]
