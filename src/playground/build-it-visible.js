class VisiblityToggle extends React.Component{

    constructor(props){
        super(props);
        this.toggleVisibility= this.toggleVisibility.bind(this);
        this.state ={
            visibility : false
        }
    }
    toggleVisibility(){
        this.setState( (prevState)=>{
            return {
                visibility : !(prevState.visibility)
            }
        });
    }
    render(){
        return (
            <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ?'Hide Details' : 'Show Details'}</button>
        <p>{this.state.visibility  && 'Hey , these are some show details!'}</p>
         </div>
        );

    }
}
ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));


// let showFlag = false;
// const showDetails = ()=>{
//     showFlag = !showFlag;
//     render();
// }


// const appRoot = document.getElementById('app');

// const render= ()=>{
//     const template = (
//         <div>
//         <h1>Visiblity Toggle</h1>
//         <button onClick={showDetails}>{showFlag ? 'Hide Details' : 'Show Details'}</button>
//         <p>{showFlag  && 'Hey , these are some show details!'}</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }
// render();