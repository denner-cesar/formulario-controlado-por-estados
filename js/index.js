import { ESTADOS } from "./estados.js"
import { EVENTOS } from "./eventos.js"
import { TRANSICOES } from "./motor.js"
import { renderizar } from "./interface.js"

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")


let estadoAtual = ESTADOS.INICIAL

function validarCampos() {
    return nome.value.trim() !== "" && email.value.includes("@")
}

function disparar(evento) {
    estadoAtual = TRANSICOES[estadoAtual]?.[evento] ?? estadoAtual
    renderizar(estadoAtual);
}
document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault()

    disparar(EVENTOS.SUBMETER)

    const valido = validarCampos()

    disparar(valido ? EVENTOS.VALIDO : EVENTOS.INVALIDO)

    setTimeout(() => {
        const ok = Math.random() > 0.2
        disparar(ok ? EVENTOS.SUCESSO : EVENTOS.ERRO)
    }, 2000)
})
nome.addEventListener("input", () => disparar(EVENTOS.DIGITAR))
email.addEventListener("input", () => disparar(EVENTOS.DIGITAR))
