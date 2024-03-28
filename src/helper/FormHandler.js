import React from 'react';

const FormHandler = OriginalComponent =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                name : '',
                color : '',
            }
        }

        changeName = (value) =>{
            this.setState({
                name : value,
                color : this.generateColor()
            })
        }

        generateColor =() =>{
            let item = ["blue","green","red"]
            let randomColor = item[Math.floor(Math.random() * item.length)]
            return randomColor
        }

        render(){
            return <OriginalComponent
                name={this.state.name}
                changeName={this.changeName}
                color  ={this.state.color}
            />
        }
    }
    return NewComponent
}

export default FormHandler