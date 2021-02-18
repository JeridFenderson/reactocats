import React, { Component } from 'react'
import { Octocat } from './components/Octocat'
import octocats from './octocats'

export class App extends Component {
  render() {
    const octocatsFromData = octocats.map(octocat => (
      <Octocat
        key={octocat.number}
        name={octocat.name}
        link={octocat.link}
        image={octocat.image}
        number={octocat.number}
        authorLink={octocat.authors[0].link}
        authorImage={octocat.authors[0].image}
      />
    ))
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45rem"
                    height="45rem"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Octodex</strong>
                </a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{octocatsFromData}</main>

        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
