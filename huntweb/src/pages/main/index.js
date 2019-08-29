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
       
        try {
            const response = await api(user);
            console.log(response.data);
            this.setState({products: response.data});
        } catch (error) {
            console.warn(error);
        }
       
       
    }
    
    render() {
        // return <h1 id="qtd_repos">Quantidade de repositórios: {this.state.products.length}</h1>
        return (
          <div className="product-list">
                  
                  <form onSubmit={this.handleSubmit}>
                     <label>
                      <input id="input1" type="text" value={this.state.value} onChange={this.handleChange} placeholder={"User GitHub"} />
                     </label>
                      <input id="input2" type="submit" value="Enviar" />
                 </form>
                 <h1 id="qtd_repos">Quantidade de repositórios: {this.state.products.length}</h1>
                { this.state.products.map(product => (
                    <article key={product.id}>
                    <strong id="name" >{product.name}</strong>
                    {/* <p>Quantidade de repositórios: {this.state.products.length}</p> */}
                    <a href={'https://github.com/'+ this.state.value + '/'+ product.name}>Acessar Repositório</a>
                    {/* <a href={'/posts/' + post.id}>Acessar Repositório</a> */}
                </article>
                ))}
            </div>

           
        )
    }
}