import './App.css';
import TodoList from './components/ToDoList';

function App() {
  return (
    <>
      <header className='p-4 font-semibold text-xl bg-slate-100'>
        <h1>To Do App</h1>
      </header>
      <main className='bg-slate-100 pt-4 pb-4 min-h-screen'>
        <TodoList />
      </main>
    </>
  )
}

export default App
