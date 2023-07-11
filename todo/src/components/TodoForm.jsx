import { useState } from 'react'

const TodoForm = () => {
    //Gerenciando o estado
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Verificar se os valores não são nulos
        if(!value || !category) return;
           // adicionar todo
           // limpar os campos
           setValue("");
           setCategory("");
        

    };

    return (
    <div className="todo-form">
        <h2>Criar tarefa:</h2>

        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm