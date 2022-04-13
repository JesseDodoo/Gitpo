import React, { useState, useEffect } from 'react';
import {useNavigate as Navigate} from 'react-router-dom';
import axios from 'axios';

export default function Search() {



  const [SearchQuery, SetSearchQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState([]);

  console.log("what we need", SearchQuery)

  async function getRepos(){
    if(SearchQuery !== ""){
      try{
        const {data} = await axios.get(`https://api.github.com/users/${SearchQuery}/repos`)
        console.log(data)
        setUserOutput(data);
      }
      catch(err){
        alert(err)
      }
  

    }
  }

  useEffect(() => {
    getRepos();

  }, [SearchQuery])


  const handleFormSubmit = e => {
    e.preventDefault();
    SetSearchQuery(userInput);
    setUserInput("");
};

const SetSearchValue = e => {
  setUserInput(e.target.value)
};

function renderRepos () {
  return (
    userOutput.map(output => <><a key={output.id} href={output.html_url}>{output.name},{output.forks_count}</a></>)
    );

}

function renderImage() {
  let imageUrl;
  userOutput.map(output => {imageUrl = output.owner.avatar_url})
  {/*<img src={imageUrl}></img>*/}
  return(<img src={imageUrl}></img>)

}


  return (<>
    <form onSubmit={handleFormSubmit}>
    <input type='text' placeholder='SearchRepos' value={userInput} onChange={SetSearchValue} />
    <input type="submit" value="Submit" />
</form>
{renderRepos()}
{renderImage()}
  </>)
}

