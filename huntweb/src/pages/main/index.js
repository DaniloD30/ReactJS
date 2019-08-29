import React, {Component} from 'react';
import api from "../../services/api";
import './styles.css';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state.value = '';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Um nome foi enviado: ' + this.state.value);
    this.loadProducts(this.state.value);
    // this.loadProducts();
    event.preventDefault();
  }

    state = {
        products: [],
        value: '',
    };

        componentDidMount(){
        // Sempre que o elemento for rendereizado
        // faça algo
            //  this.loadProducts(user);
            
        }
    
    loadProducts = async (user) => {
        const response = await api(user);
        console.log(response.data);
        this.setState({products: response.data});
    }
    
    render() {
        // return <h1 id="qtd_repos">Quantidade de repositórios: {this.state.products.length}</h1>
        return (
          <div className="product-list">
                  <h1 id="qtd_repos">Quantidade de repositórios: {this.state.products.length}</h1>
                  <form onSubmit={this.handleSubmit}>
                     <label>
                      User GitHub:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                     </label>
                      <input type="submit" value="Enviar" />
                 </form>
                { this.state.products.map(product => (
                    <article key={product.id}>
                    <strong id="name" >{product.name}</strong>
                    {/* <p>Quantidade de repositórios: {this.state.products.length}</p> */}
                    <a href="">Acessar</a>
                </article>
                ))}
            </div>

           
        )
    }
}