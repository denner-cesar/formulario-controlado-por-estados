const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem")
const formulario = document.querySelector('#formulario')


export function renderizar(estadoAtual) {

    const visuais = {
        INICIAL: () => {
            mensagem.textContent = "enviar"
            botao.disabled = false
            mensagem.textContent = ""

        },

        VALIDANDO: () => {
            mensagem.textContent = "validando..."
            botao.disabled = true
            mensagem.textContent = "Validando dados..."
        },

        SUCESSO: () => {
            botao.textContent = "Enviado"
            botao.disabled = true
            formulario.classList.add('sucesso')
            mensagem.textContent = "Formulário Enviado com sucesso!"
            setTimeout(() => {
                window.location.reload()
            }, 2000)


        },

        ERRO: () => {
            botao.textContent = "tentar novamente"
            botao.disabled = false
            formulario.classList.remove("sucesso")
            formulario.classList.add('erro')
            mensagem.textContent = "Dados Invalidos"

        },

        EDITANDO: () => {
            botao.textContent = "Enviar"
            botao.disabled = false
            formulario.classList.remove("erro")
            mensagem.textContent = ""

        }




    };

    visuais[estadoAtual]?.()

}