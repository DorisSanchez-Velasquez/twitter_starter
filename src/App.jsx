import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"
import {useState} from "react"

export default function App() {
//USE STATES VARIABLES
let [userProfile, setUserProfile] = useState(codepathUserProfile);
// userProfile = codepathUserProfile;

let [tweets, setTweets] = useState([firstTweet])

let [tweetText, setTweetText] = useState("")


  return (
    <div className="app">
      <Navbar navLinks = {navLinks}/>
      <main>
        <UserProfile userProfile = {userProfile}/>
        <Feed tweets={tweets}
              setTweets = {setTweets}
              userProfile = {userProfile}
              tweetText = {tweetText}
              setTweetText = {setTweetText}/>
        <Advertisements />
      </main>
    </div>
  )
}
