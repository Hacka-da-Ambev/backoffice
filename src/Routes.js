import Dashboard from "./pages/dashboard/Dashboard";
import Produto from "./pages/produto/Produto";
import CadastrarProduto from "./pages/cadastrar-produto/CadastrarProduto";

export default [
  {
    path: '/',
    name: 'Dashboard',
    component: () => <Dashboard />,
    isChildren: false,
    fatherName: '',
    fatherRoute: '',
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => <Produto />,
    isChildren: false,
    fatherName: '',
    fatherRoute: '',
  },
  {
    path: '/produtos/cadastrar',
    name: 'Cadastrar Produto',
    component: () => <CadastrarProduto />,
    isChildren: true,
    fatherName: 'Produtos',
    fatherRoute: '/produtos',
  },
]