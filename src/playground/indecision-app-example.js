const app={
    title : 'Indecision App',
    subtitle : 'My Indecision App',
    options : []
}

const numbers = [50,100,200];

const onFormSubmit =(e)=>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
      app.options.push(option);
      e.target.elements.option.value= '';
      renderCounterApp();
  }
}

const onRemoveAll = ()=>{
    app.options = [];
    renderCounterApp();
}

const pickNumber = ()=>{
    const randNum = Math.floor(Math.random() *app.options.length);
    const option = app.options[randNum];
    alert(option);
}

var appRoot = document.getElementById('app');


const renderCounterApp = ()=>{
   
const template= (
    <div>
       <h1>{app.title}</h1>
       {app.subtitle && <p>{app.subtitle}</p>}
       {app.options && app.options.length >0 ? <p>Here are your options</p> : <p>No options</p>}
       <p>{app.options.length}</p>
       <button onClick={onRemoveAll}>Remove All</button>
       <button disabled={app.options.length=== 0} onClick={pickNumber}>What should I do?</button>
       {[<p key="1">a</p>, <p key="2">b</p> ,<p key="3">c</p>]}
       { numbers.map((number)=>{
           return <p key={number}>Number : {number}</p>
       })
       }
       <ol>
        {
            app.options.map((option)=>{
                return <li  key={option}>Text : {option}</li>
            })
        }
       </ol>
       <form onSubmit={onFormSubmit}>
       <input type="text" name="option" />
       <button>Add Option</button>
       </form>
    </div>
    )
    ReactDOM.render(template,appRoot); 
}
renderCounterApp();

//ReactDOM.render(template, appRoot);