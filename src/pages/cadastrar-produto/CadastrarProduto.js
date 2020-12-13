import './CadastrarProduto.css';
import { Link } from 'react-router-dom';

function CadastrarProduto() {
  return (
    <div>
      <p className="text-2xl">Lista de Produtos</p>
      <form action="">
        <div className="max-w-3xl bg-white mt-5 rounded-lg p-4">
          <div className="flex flex-col">
            <label htmlFor="imagem" className="text-gray-500 mb-2">Imagem</label>
            <input type="file" id="imagem" className="px-3 py-2 border border-gray-200 rounded-md"/>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="name" className="text-gray-500 mb-2">Nome</label>
            <input type="text" id="name" className="px-3 py-2 border border-gray-200 rounded-md" placeholder="Nome..."/>
          </div>
          <div class="grid grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <label htmlFor="ibu" className="text-gray-500 mb-2">IBU</label>
              <input type="number" id="ibu" className="px-3 py-2 border border-gray-200 rounded-md" placeholder="IBU..."/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="abv" className="text-gray-500 mb-2">ABV</label>
              <input type="number" id="abv" className="px-3 py-2 border border-gray-200 rounded-md" placeholder="ABV..."/>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="descricao" className="text-gray-500 mb-2">Descrição</label>
            <textarea id="descricao" className="px-3 py-2 border border-gray-200 rounded-md" placeholder="Descrição..."></textarea>
          </div>
          <div className="flex mt-5 justify-end">
            <Link to="/produtos">
              <button className="btnCancelarProduto border mr-3">Cancelar</button>
            </Link>
            <button className="btnSalvarProduto text-white">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CadastrarProduto;