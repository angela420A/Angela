import '../styles/Experience.css';
import Jobs from "../jobs.json";

function JobContent(){
    const jobs = Jobs;
    
    return jobs.map((item, index) => {
        const jobKey = item.companyName.toLocaleLowerCase() + "-" + index.toString();

        if (index == 0){
            return (
                <div key={jobKey} className='job active-job' id={item.companyName.toLowerCase()}>
                    <h2>{item.jobTitle}<span>{item.companyName}</span></h2>
                    <p className='job-duration'>{item.duration}</p>
                    {item.docs.map((doc, i) => {
                        const docsKey = jobKey + "-doc-" + i.toString();
                        
                        return (<p key={docsKey} ><span>▶</span>{doc}</p>)
                    })}
                </div>
            )
        }
        else{
            return (
                <div key={jobKey} className='job' id={item.companyName.toLowerCase()}>
                    <h2>{item.jobTitle}<span>{item.companyName}</span></h2>
                    <p className='job-duration'>{item.duration}</p>
                    {item.docs.map((doc, i) => {
                        const docsKey = jobKey + "-doc-" + i.toString();

                        return (<p key={docsKey} ><span>▶</span>{doc}</p>)
                    })}
                </div>
            )
        }
    })
}

function Experience(){
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
                        <JobContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;          