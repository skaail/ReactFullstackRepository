
import React, { Component } from 'react'



export default class CadVenda extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    
        const cliente = e.target.cliente.value;
        const produto = e.target.produto.value;
        const data = e.target.data.value;

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": "skaCQcSb5p6wANeyXAICkL0sHcOk7V0c82LzjF4NBXiApcGnhF71Qtws0Zli87LSb1HrFs8ocXb0Y4jLYFb5L0EQXT3ONtpu1yXeiD23KROpSOrorsuqyz62icbbVQYi5c50Dk2ihVSHQcWQDYoWJjkhBwpSgeEn3eLp7dzSlhMfnxcmZHZT"
           }
           
           let bodyContent = JSON.stringify({ 
             "mutations": [
               { 
                 "create": { 
                   "_type": "vendas", 
                   "cliente": "Teste Insert" 
                 } 
               }
             ]
           });
           
           fetch("https://j8341eh.api.sanity.io/v2021-06-07/data/mutate/production", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           }).then(function(response) {
             return response.text();
           }).then(function(data) {
             console.log(data);
           })
      };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <label htmlFor="Cliente" className="form-label">Cliente</label>
            <input type="text" className="form-control" name="cliente"></input>
        </div>
        <div className="mb-3">
        <label htmlFor="Produto" className="form-label">Produto</label>
            <input type="text" className="form-control" name="produto"></input>
        </div>
        <div className="mb-3">
        <label htmlFor="Ciente" className="form-label">Data</label>
            <input type="date" className="form-control" name="data"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}


