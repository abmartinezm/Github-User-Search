import React from "react";
import iconGithub from "../svg/iconmonstr-github-1.svg";
import iconLocation from "../svg/icon-location.svg";
import iconWeb from "../svg/icon-website.svg";
import iconTwitter from "../svg/icon-twitter.svg";
import iconCompany from "../svg/icon-company.svg";

import lightLocation from "../svg/icon-location.svg"
import lightWeb from "../svg/icon-website.svg"
import lightTwitter from "../svg/icon-twitter.svg"
import lightCompany from "../svg/icon-company.svg"
// import { useState } from 'react';

function ProfileCard({info, theme,handleNotFound}) {
  // let info1 = "The Octocat";
  // let info2 = "aoctocat";
  // let date = "Joined 25 Jan 2011";
  let noBio = "This profile has no bio";
  // let location = "San Franciso";
  // let web = "http://www.github.blog/";
  // // let twitter = "";
  let notFound = "Not Available "

  var cts = info.created_at
  var cdate=new Date(cts).toDateString().slice(3);

  const nullLocation = info.location === null ? 'not-found'  :'location';
  const nullLink= info.blog === null ? 'not-found' :'link'
  const nullTwitter=info.twitter_username  === null ? 'not-found' :'twitter'
  const nullCompany=info.company === null ?'not-found' :'comp';

  const emptyLocation = info.location === ""  ? 'not-found' :'location';
  const emptyLink= info.blog === "" ? 'not-found' :'link'
  const emptyTwitter=info.twitter_username  === ""  ? 'not-found' :'twitter'
  const emptyCompany=info.company === ""  ?'not-found' :'comp';


  const themeLocation=theme==='dark' ? 'location dark-text' : 'location lighter-dark-text';
  const themeLink=theme==='dark' ? 'link dark-text' : 'link lighter-dark-text';
  const themeTwitter=theme==='dark' ? 'twitter dark-text' : 'twitter lighter-dark-text';
  const themeCompany=theme==='dark' ? 'comp dark-text' : 'comp lighter-dark-text';

  

  return (
    <div className={theme==='dark' ? 'user-card dark-items' : 'user-card light shadow' }>
      {info.message === "Not Found" ? handleNotFound() : '' }
      <div className="heder-user">
        <div className="username-img">
          <img src={info ? info.avatar_url : iconGithub} alt="" className="octo-img" />
        </div>
        <div className="username-info">
          <p className={theme==='dark' ? 'info1 dark-text' : 'info1 light-text'}>{info.name} </p>
          <a className="info2" href={info.url} target="_blank" rel="noopener noreferrer" >{`@${info.login}`}</a>
          <p className={theme==='dark' ? 'date dark-text' : 'date lighter-dark-text'}>  {`Joined  ${cdate}`} </p>
        </div>
        <div className="profile-bio">
          <p className={theme==='dark' ? 'bio dark-text' : 'bio light-bio' || noBio ? 'not-found' :'bio'}>{info.bio  !== null ?  info.bio : noBio }</p>
        </div> 
      </div>
      <div className={theme==='dark' ? 'repos-info very-dark' : 'repos-info very-light' }>
        <div className="repo-info">
          <p className={theme==='dark' ? 'repo dark-text' : 'repo lighter-dark-text'}>Repos</p>
          <p className={theme==='dark' ? 'followers dark-text' : 'followers lighter-dark-text'}>Followers</p>
          <p className={theme==='dark' ? 'following dark-text' : 'following lighter-dark-text'}>Following</p>
        </div>

        <div className="amount-repo">
          <p className={theme==='dark' ? 'repo-num dark-text' : 'repo-num light-text'}>{info.public_repos}</p>
          <p className={theme==='dark' ? 'followers-num dark-text' : 'followers-num light-text'}>{info.followers}</p>
          <p className={theme==='dark' ? 'following-num dark-text' : 'following-num light-text'}>{info.following}</p>
        </div>
      </div>

      <div className="additional-info">
        <p className={`location ${nullLocation} ${themeLocation} ${emptyLocation}`}> <img className="icon-loc icons" src={theme==='light' ? lightLocation : iconLocation} alt="" /> {info.location !== null || info.location === '' ? info.location : notFound } </p>
        <a className={` ${nullLink} ${themeLink} ${emptyLink}`}  href={info.blog} target="_blank" rel="noopener noreferrer" > <img className="icon-web icons" src={theme==='light' ? lightWeb : iconWeb} alt="" />  {info.blog === null || info.blog === "" ? notFound  : info.blog}</a>
        <p className={` ${nullTwitter} ${themeTwitter} ${emptyTwitter}`}> <img className='icon-twitter icons' src={theme==='light' ? lightTwitter : iconTwitter}  alt="" />  {info.twitter_username  !== null ? info.twitter_username : notFound }</p>
      <p className={` ${nullCompany} ${themeCompany}  ${emptyCompany}`}>  <img className="icon-company icons" src={theme==='light' ? lightCompany  : iconCompany} alt="" /> {  info.company  !== null ? info.company : notFound }</p>
      </div>
    </div>
  );
}

export default ProfileCard;
