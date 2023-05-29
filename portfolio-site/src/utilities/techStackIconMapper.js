import React from 'react';

export const techStackIconMapper = (techStack) => {
  return techStack.map((tech) => {
    switch (tech) {
      case 'C#':
        return <i className="icon devicon-csharp-plain-wordmark" key={tech}></i>;
      case 'Razor Pages':
        return <i className="icon devicon-dot-net-plain-wordmark" key={tech}></i>;
      case 'Html':
        return <i className="icon devicon-html5-plain-wordmark" key={tech}></i>;
      case 'CSS':
        return <i className="icon devicon-css3-plain-wordmark" key={tech}></i>;
      case 'SCSS':
        return <i className="icon fa-brands fa-sass" key={tech}></i>;
      case 'JavaScript':
        return <i className="icon devicon-javascript-plain" key={tech}></i>;
      case 'MSSQL':
        return <i className="icon devicon-microsoftsqlserver-plain-wordmark" key={tech}></i>;
      case 'ASP .NET':
        return <i className="icon devicon-dot-net-plain-wordmark" key={tech}></i>;
      case 'React':
        return <i className="icon devicon-react-original-wordmark" key={tech}></i>;
      default:
        return null;
    }
  });
};






