import '../styles/Experience.css'


function Experience(){
    const companies = document.querySelectorAll('.company');
    const jobs = document.querySelectorAll('.job');

    companies.forEach(company => {
        company.addEventListener("click", () => {
            const id = company.dataset.id;
            console.log(id);
        });

        companies.forEach(c => c.classList.remove('active-company'));
    });

    return (
        <div id='experience-page' className='experience'>
            <div className='experience-auto-show'>
                <div className='experience-title'>
                    <h1>/ Experience</h1>
                </div>
                <div className='experience-content'>
                    <div className='ex-content-company'>
                        <ul>
                            <li className='company active-company' data-id="gamania">Gemania</li>
                            <li className='company' data-id="tenmax">TenMax</li>
                            <li className='company' data-id="trend-micro">Trend Micro</li>
                            <li className='company' data-id="gamania-intern">Gamania</li>
                        </ul>
                    </div>
                    <div className='ex-content-desc'>
                        <div className='job active-job' id='gamania'>
                            <h2>AI Engineer @ <span>Gamania</span></h2>
                            <p className='job-duration'>APR 2025 - PRESENT</p>
                            <p><span>▶</span>job content 1</p>
                            <p><span>▶</span>job content 2</p>
                        </div>
                        <div className='job' id='tenmax'>
                            <h2>Machine Learning Engineer @ <span>TenMax</span></h2>
                            <p className='job-duration'>MAY 2024 - APR 2025</p>
                            <p><span>▶</span>job content 1</p>
                            <p><span>▶</span>job content 2</p>
                        </div>
                        <div className='job' id='trend-micro'>
                            <h2>AI Engineer @ <span>Trend Micro</span></h2>
                            <p className='job-duration'>AUG 2023 - MAY 2024</p>
                            <p><span>▶</span>job content 1</p>
                            <p><span>▶</span>job content 2</p>
                        </div>
                        <div className='job' id='gamania-intern'>
                            <h2>Software Engineer Intern @ <span>Gamania</span></h2>
                            <p className='job-duration'>JUL 2020 - AUG 2020</p>
                            <p><span>▶</span>job content 1</p>
                            <p><span>▶</span>job content 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;          