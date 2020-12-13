import './Produto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import skolPng from './skol.png';
import { Link } from 'react-router-dom';

function Produto() {
  const produtos = [
    {
      id: 1,
      image: skolPng,
      name: 'Skol',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ibu: 50,
      abv: 40
    },
    {
      id: 2,
      image: skolPng,
      name: 'Skol Beats',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ibu: 50,
      abv: 40
    },
    {
      id: 3,
      image: skolPng,
      name: 'Skol Beats 2',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ibu: 50,
      abv: 40
    },
    {
      id: 4,
      image: skolPng,
      name: 'Skol b',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ibu: 50,
      abv: 40
    }
  ];

  const listProdutos = produtos.map(value => {
    return (
      <tr className="bg-white" key={value.name}>
        <td className="p-4">
          <div className="divProdutoImg">
            <img src={value.image} alt="Produto" className="w-full h-full"/>
          </div>
        </td>
        <td className="font-black">{value.name}</td>
        <td className="truncate tdDescription">
          {value.description}
        </td>
        <td className="text-center">{value.ibu}</td>
        <td className="text-center">{value.abv}</td>
        <td>
          <div>
            <button className="text-blue-400 mr-4">
              <FontAwesomeIcon icon={faEdit} className="text-md"/>
              Editar
            </button>
            <button className="text-red-400">
              <FontAwesomeIcon icon={faTrash} className="text-md"/>
              Deletar
            </button>
          </div>
        </td>
      </tr>
    );
  })

  return (
    <div className="Home">
      <p className="text-2xl">Lista de Produtos</p>
      <div className="mt-7 flex justify-between items-center">
        <Link to="/produtos/cadastrar">
          <button className="BtnAddProduto text-white">Adicionar Produto</button>
        </Link>
        <p className="text-gray-500">Mostrando 1 até 10 de 150 produtos</p>
        <div className="DivSearch relative">
          <input type="text" placeholder="Procurar..."/>
          <FontAwesomeIcon icon={faSearch} className="text-md absolute iconSearch"/>
        </div>
      </div>
      <div className="mt-8">
        <table className="w-full table table-fixed border-separate">
          <thead>
            <tr className="uppercase">
              <th className="text-left">Imagem</th>
              <th className="text-left">Nome</th>
              <th className="w-1/3">Descricao</th>
              <th>IBU</th>
              <th>ABV</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {listProdutos}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Produto;