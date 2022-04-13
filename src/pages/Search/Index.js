import React, { useState, useEffect } from 'react';
import { useNavigate as Navigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Search() {

  const goTo = Navigate();



  const [SearchQuery, SetSearchQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState([]);
  const { username } = useParams();

  console.log("what we need", SearchQuery)
  console.log("useParams", username)

  async function getRepos() {
    if (SearchQuery !== "") {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${SearchQuery}/repos`)
        console.log(data)
        setUserOutput(data);
      }
      catch (err) {
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
    handleSubmit(userInput);

  };

  const SetSearchValue = e => {
    setUserInput(e.target.value)
  };

  const handleSubmit = username => {
    goTo(`${username}`);

  }

  function renderRepos () {
    return (
      userOutput.map(output => <><a key={output.id} href={output.html_url}>{output.name},{output.forks_count}</a></>)
      );
  }



  function renderImage() {
    let imageUrl;
    let id;
    userOutput.map(output => {imageUrl = output.owner.avatar_url, id = output.id})
    return(<img key={id} src={imageUrl}></img>)

  }


  return (<>
    <form onSubmit={handleFormSubmit}>
      <input type='text' placeholder='SearchRepos' value={userInput} onChange={SetSearchValue} />
      <input type="submit" value="Submit" />
    </form>


    {renderRepos()}
    {renderImage()}</>)
}

