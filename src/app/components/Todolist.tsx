'use client'
import { useState } from "react"

const Todolist = () => {
const [text, setText] = useState('');
const [newTodo, setNewTodo] = useState([]);
const [editing, setEditing] = useState(null);
 
function handleTodo(){
    if(text === ''){
        return
    }

    if(editing || editing == 0){
        setNewTodo(prev => prev.map((todo, index) => index === editing ? text : todo));
        setEditing(null);
    }else{
        setEditing(null);
        setNewTodo(prev => [...prev, text]);
    }

    setText('');
}

function handleDelete(indexToDelete : number){
    setNewTodo(prev => prev.filter((_, index) => index !== indexToDelete))
}

function handleEdit(i : any){
 setEditing(i);
 setText(newTodo[i]);
}

console.log(text);
console.log(newTodo);

  return (
    <div>
       <input type="text" placeholder="Enter Your Todo..." value={text} onChange={(e)=> setText(e.target.value)} className="p-3 rounded-lg text-black" />
       <button className="text-green-400 rounded-lg  p-3 ml-3 bg-white" onClick={handleTodo}>{editing !==null ? "Edit" : "Add"}</button>

       {newTodo && newTodo.length > 0 ? 
       newTodo.map((item, i) => (
       <div key={i} className="flex justify-between bg-white text-black gap-4 m-2 ml-0 p-3 rounded-xl w-full">
        <div className="flex items-center gap-3">
        <input type="checkbox" />
        <p className="w-32">{item}</p>
        </div>
        <div className="flex gap-2">
        <button onClick={()=> handleEdit(i)} className="items-end bg-green-600 text-white p-2 rounded-xl">Edit</button>
        <button onClick={()=> handleDelete(i)} className="items-end bg-red-600 text-white p-2 rounded-xl">delete</button>
        </div>
       </div>
       ))
       :
        <div></div>}
    </div>
  )
}

export default Todolist