import React from 'react'

export class Octocat extends React.Component {
  render() {
    const link = this.props.authorLink.split('/')
    const authorName = link[link.length - 1]
    return (
      <figure>
        <a href={this.props.link}>
          <img src={this.props.image} alt={this.props.name} />
        </a>
        <ul>
          <li>
            #{this.props.number}:
            <a href={this.props.link}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authorLink}>
              <img src={this.props.authorImage} alt={authorName} />
            </a>
          </li>
        </ul>
      </figure>
    )
  }
}
