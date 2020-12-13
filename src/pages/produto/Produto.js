import React, { useState, useEffect } from 'react';
import './Produto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import skolPng from './skol.png';
import { Link } from 'react-router-dom';
import { getAllBeers } from '../../Api';

function Produto() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then(res => setBeers(res));
  });

  const listProdutos = beers.map(value => {
    return (
      <tr className="bg-white" key={value.name}>
        <td className="p-4">
          <div className="divProdutoImg">
            <img src={'http://localhost/' + value.image} alt="Produto" className="w-full h-full"/>
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