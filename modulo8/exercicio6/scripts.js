import ValidarCpf from './validarCpfs.js';

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar();

const validadorCPF = new ValidarCpf();

console.log(validadorCPF.validar('111 111 111 222'))

console.log(validarCpf)