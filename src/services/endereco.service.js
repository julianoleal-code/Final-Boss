import enderecoRepository from "../repositories/endereco.repository.js";

async function createEnderecoService(dados) {
  const endereco = await enderecoRepository.createEnderecoRepository(dados);
  if (!endereco) throw new Error("Erro ao criar endereço");
  return endereco;
}

async function findAllEnderecoService() {
  return await enderecoRepository.findAllEnderecoRepository();
}

async function findEnderecoByIdService(id) {
  const endereco = await enderecoRepository.findEnderecoByIdRepository(id);
  if (!endereco) throw new Error("Endereço não encontrado");
  return endereco;
}

async function updateEnderecoService(id, dados) {
  const endereco = await enderecoRepository.findEnderecoByIdRepository(id);
  if (!endereco) throw new Error("Endereço não encontrado");
  
  await enderecoRepository.updateEnderecoRepository(id, dados);
  return await enderecoRepository.findEnderecoByIdRepository(id);
}

async function deleteEnderecoService(id) {
  const endereco = await enderecoRepository.findEnderecoByIdRepository(id);
  if (!endereco) throw new Error("Endereço não encontrado");
  
  await enderecoRepository.deleteEnderecoRepository(id);
  return { message: "Endereço excluído" };
}

export default {
  createEnderecoService,
  findAllEnderecoService,
  findEnderecoByIdService,
  updateEnderecoService,
  deleteEnderecoService
};
