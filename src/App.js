import './App.css';
import Values from 'values.js';
import { useState } from 'react';
import SingleColor from './SingleColor';

function App() {

  const [color , setColor] = useState('');
  const [error , setError] = useState(false);
  const [list, setList] = useState(new Values('#f14924').all(10));

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
      <div className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
      <section className='colors'>
        <h4>List Goes Here</h4>
        {
          list.map((color,index)=>{
            // console.log(color);
            return (
              <SingleColor
                key={index}
                {...color}
                hexColor={color.hex}     index={index}
              ></SingleColor>
            );
          })
        }
      </section>
    </>
  );
}

export default App;
