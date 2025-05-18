
const Header = () => {
  return (
   <header className="px-10 py-4 bg-white w-full flex flex-wrap justify-between">
        <h1 className="text-3xl font-bold uppercase text-violet-400 text-center">
          Task Nest
        </h1>
        <button className="text-md text-white tracking-wide px-3 font-semibold uppercase rounded-md h-10 bg-violet-400 cursor-pointer">
          create task
        </button>
      </header>

  )
}

export default Header