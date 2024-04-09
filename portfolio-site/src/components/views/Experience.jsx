import React from 'react'
import { techStackIconMapper } from '../../utilities/techStackIconMapper';

const techStack = [
    'C#',
    'ASP .NET',
    'MSSQL',
    'Html',
    'CSS',
    'SCSS',
    'Blazor',
    'JavaScript',
    'React'
  ];


const Experience = () => {
    const techStackIcons = techStackIconMapper(techStack);
    return (
        <>
            <section id="experience" className='experience'>
                <div className='cont'>
                    <div className="content-card">
                        <div className="body">
                            <h2>Kunskap</h2>
                            <div className='icons'>
                            {techStackIcons.map((icon, index) => (
                                    <div className='icon-container' key={index}>
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Experience