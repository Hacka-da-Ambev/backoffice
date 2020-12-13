import React, { useState, useEffect } from 'react';
import './CadastrarProduto.css';
import { Link } from 'react-router-dom';
import { createBeer } from '../../Api';

function CadastrarProduto() {
  const [values, setValues] = useState({ });

  const getBase64 = fileImage => {
    const file = new File(fileImage.files, fileImage.files[0].name, {
      type: 'image/png',
    });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      const auxValues = { ...values };
      auxValues['image'] = { base64: reader.result, name: fileImage.files[0].name };
      setValues(auxValues);
    }
  }

  const handleChange = event => {
    const auxValues = { ...values };
    auxValues[event.target.id] = event.target.value;
    setValues(auxValues);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
    createBeer(values)
      .then(res => console.log(res));
  }

  const handleImageChange = event => {
    getBase64(event.target);
  }

  return (
    <div>
      <p className="text-2xl">Lista de Produtos</p>
      <form onSubmit={handleSubmit}>
        <div className="max-w-3xl bg-white mt-5 rounded-lg p-4">
          <div className="flex flex-col">
            <label htmlFor="imagem" className="text-gray-500 mb-2">Imagem</label>
            <input type="file" id="imagem" onChange={handleImageChange} className="px-3 py-2 border border-gray-200 rounded-md" required/>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="name" className="text-gray-500 mb-2">Nome</label>
            <input type="text" id="name" onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-md" placeholder="Nome..." required/>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <label htmlFor="ibu" className="text-gray-500 mb-2">IBU</label>
              <input type="number" id="ibu" onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-md" placeholder="IBU..." required/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="abv" className="text-gray-500 mb-2">ABV</label>
              <input type="number" id="abv" onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-md" placeholder="ABV..." required/>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="description" className="text-gray-500 mb-2">Descrição</label>
            <textarea id="description" onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-md" placeholder="Descrição..." required></textarea>
          </div>
          <div className="flex mt-5 justify-end">
            <Link to="/produtos">
              <button className="btnCancelarProduto border mr-3">Cancelar</button>
            </Link>
            <button type="submit" className="btnSalvarProduto text-white">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CadastrarProduto;