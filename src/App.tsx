import Programers from './component/Programers'
import Companies from './component/Companies'
import Services from './component/Services'
import './App.css'

function App() {
 

  return (
    <div className="App">
      <Companies companyname={"Tuwaiq Academy"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} workrs={24020} date={"2019/8"} />
      <div className="card-container">
     <Programers name={"Hitham"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} companyname={"Tuwaiq Academy"} languages={"JS,C#,Java"} experience={5}/>
     <Programers name={"Mahsa"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} companyname={"Tuwaiq Academy"} languages={"Java,C++"} experience={6}/>
     <Programers name={"Lamiia"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} companyname={"Tuwaiq Academy"} languages={"Pyton,R"} experience={7}/>
     </div>
    <Services services={"Full Stack Bootcomp"}  image={"https://pbs.twimg.com/media/FT8LwWtXEAAqz0l?format=jpg&name=4096x4096"}  prices={100000000}/>

    </div>
  )
}

export default App
