class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusone  =this.handleMinusone.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state= {
            count : 0
        }
    }
    componentDidMount(){
        try{
            const stringCount =localStorage.getItem('count');
            const count =parseInt(stringCount,10)
            if((!NaN(count))){
            this.setState(()=> ({  count    }));
            }
        }catch(e){
            //do nthing
        }
    }


    componentDidUpdate(prevProps, prevState){
         if(prevState.count !== this.state.count){
             const json = JSON.stringify(this.state.count);
             console.log(json);
             localStorage.setItem('count', json);
         }
    }
    handleAddOne(){
        this.setState((_prevState)=>{
           return {
               count : _prevState.count +1
           }
        });
    }
    handleMinusone(){
        this.setState((_prevState)=>{
            return {
                count : _prevState.count -1
            }
         });
    }
    handleReset(){
        this.setState(()=>{
            return {
                count : 0
            }
         });

    }
    render(){
        return(
            <div>
                    <h1>Count : {this.state.count} </h1>
                    <button  onClick={this.handleAddOne}>+1</button>
                    <button onClick={this.handleMinusone}>-1</button>
                    <button  onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps={
//     count : 0
// }
ReactDOM.render(<Counter />, document.getElementById('app'));


// let count =0;
// const addOne = ()=>{
//     count++;
//     renderCounterApp();
// }
// const minusone = ()=>{
//     count--;
//     renderCounterApp();
// }
// const reset = ()=>{
//     count=0;
//     renderCounterApp();
// }

// // const userName ='Mike';
// // const userAge= 27;

// // const templateTwo = (<div>
// //          <h1>{userName + '!'}</h1>
// //          <h1>{userName.toUpperCase()}</h1>
// //          <p>Age : {userAge}</p>
// //          <p>Location : Karnal</p>
// //     </div>)
// var appRoot = document.getElementById('app');

// const renderCounterApp =()=>{
//     var templateTwo = (
//         <div>
//         <h1>Count : {count}</h1>
//         <button id='my-id'className="button" onClick={addOne}>+1</button>
//         <button id='minud-id' onClick={minusone}>-1</button>
//         <button id='reset-id' onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();