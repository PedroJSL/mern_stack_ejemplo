import React, { Component } from 'react';


class App extends Component {

    constructor(){
        super();

        this.state = {
            title: '',
            description: ''
        };
        
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e){
        e.preventDefault();

        fetch('/api/tasks',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=> console.log(res))
        .catch(err => console.log(err));
    }

    handleChange(e){
        const{ name, value} = e.target;
        this.setState({
            [name]: value
        });
    }


    render() {

        return ( 
            <div>
                {/* Navegación */}
                <nav className="light-blue darken-4">
                    <div className ="container">
                        <a className ="brand-logo" href="/">MERN Stack</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" placeholder="Título" name ="title" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea className ="materialize-textarea" type="text" placeholder="Descripción" name ="description" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4"> Enviar </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>


                </div>
            </div>
        )

    }
}

export default App;