// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ProfileCard from './Components/ProfileCard';
import { useEffect,useState } from 'react';
function App() {

  // const loader = document.querySelector('.loader');
  const [info,setInfo] = useState(null);
  const [searchInput,setSearchInput] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [themeStatus, setThemeStatus] = useState('DARK');
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  // setUsername({ username : 'NinjaInShade' })
  

  const makeAPICall =(setSearchInput)=>{
    setLoading(true);
        fetch(`https://api.github.com/users/${setSearchInput}`)
        .then(reponse=>{
          return reponse.json();
        })
          .then(data=>{
            console.log(data);
            
            setInfo(data)
            setLoading(false); 
            
          })
          .catch((err)=>{
            
            setLoading(false);
            console.log(err);
          })
  }

  useEffect(()=>{
    makeAPICall('octocat'); 
    
  },[])

  const handleClickEvent=(e)=>{
    makeAPICall();
    setSearchInput('')
    makeAPICall(searchInput); 
    // setLoading(true)
  }
 
 



   const handleChange = (e)=>{
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
    
   }

  const toggleTheme = ()=>{
    if(theme === 'dark'){
      setTheme('light');
      setThemeStatus('DARK')
    }else{
      setTheme('dark');
      setThemeStatus('LIGHT')
    }
  }

  const handleKeyDown=(e)=>{
    if(e.key ==='Enter'){
      console.log('do validate');
     
    setSearchInput(e.target.value);
    // setLoading(true)
    setSearchInput('')
    makeAPICall(searchInput);
    }
  }

    useEffect(()=>{
      localStorage.setItem('theme', theme);
      document.body.className= theme;

    },[theme])

    const handleNotFound = () => {
      
      setLoading(false)
      alert('User Not Found')
      
      
      makeAPICall('octocat')
    }

    
    // useEffect(()=>{
    //   window.addEventListener('load', handleLoading);
    //   return()=> window.removeEventListener('load', handleLoading);

    // },[])

//     setTimeout(() => 
//   // the show/hide functions are passed as props
//     handleLoading()
  
// , 3000);


  return (


    <div className={`App ${theme}`}>
    {isloading=== true ? <div class="loader"></div> : 
    <>
    <Header toggleTheme={toggleTheme} themeStatus={themeStatus} theme={theme} />
    <SearchBar handleChange={handleChange} searchInput={searchInput} handleClickEvent={handleClickEvent} theme={theme} handleKeyDown={handleKeyDown} />
      {info && <ProfileCard info={info} theme={theme} handleNotFound={handleNotFound} />}
    </>}
      
      
      
    </div>
  );
}

export default App;
