import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import UserProfile from "../UserProfile/UserProfile"

let count = 0;
export default function TweetBox(props) {

  //CHANGING TEXT AREA FUNCTION HANDLER
  let handleOnTweetTextChange = (evt) => {
      props.setTweetText(evt.target.value)
      count++;
  }

  //SUBMIT BUTTON FUNCTIONS
  let handleOnSubmit = () => {
    const newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
       text: props.tweetText,
       comments: 0,
       retweets: 0,
       likes: 0,
       id: props.tweets.length
    }
      props.setTweets((pastTweets) => [...pastTweets, {...newTweet, id:pastTweets.length}])
      props.setTweetText("")
      count = 0;
 }

//DISABLING SUBMIT BUTTON CONDITIONALS
 let setDisabled = true;
 if((props.tweetText.length === 0) || (props.tweetText.length > 140))
   {
     setDisabled =  true;
   }
   else{
     setDisabled =  false;
   }

  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText} handleOnChange = {handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText = {props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} setDisabled = {setDisabled}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  
  let characterCount = (140 - props.tweetText.length)
  if(props.tweetText.length === 0)
  {
    return <span></span>
  }
  if(props.tweetText.length > 140)
  {
    return <span className="tweet-length red">{characterCount}</span>
  }
  else
  {
    return <span className="tweet-length">{characterCount}</span>
  }
}

export function TweetSubmitButton(props) {

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled = {props.setDisabled} onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
