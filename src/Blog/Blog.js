import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h2 className='color'> Welcome To Blog part!! </h2>

            <div className='ques mx-5 py-3 px-5 my-5 rounded'>
                <h3> What is cors?</h3>
                <p>CORS stands for Cross-origin Resource Sharing.Cross-origin resource sharing is a mechanism that enables many resources on a web page to be requested from another domain outside the domain from which the resource originated. It is a mechanism supported in HTML5 that manages XMLHttp Requested access to domain different .</p>
            </div>

            <div className='ques mx-5 py-3 px-5 my-3 rounded'>
                <h3> Why are you using firebase? What other options do you have to implement authentication? </h3>
                <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
             
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div className='ques mx-5 py-3 px-5 my-3 rounded'>
                <h2> What is cors?</h2>
                <p>CORS stands for Cross-origin Resource Sharing.Cross-origin resource sharing is a mechanism that enables many resources on a web page to be requested from another domain outside the domain from which the resource originated. It is a mechanism supported in HTML5 that manages XMLHttp Requested access to domain different .</p>
            </div>
            <div className='ques mx-5 py-3 px-5 my-3 rounded'>
                <h2> What is cors?</h2>
                <p>CORS stands for Cross-origin Resource Sharing.Cross-origin resource sharing is a mechanism that enables many resources on a web page to be requested from another domain outside the domain from which the resource originated. It is a mechanism supported in HTML5 that manages XMLHttp Requested access to domain different .</p>
            </div>
        </div>
    );
};

export default Blog;