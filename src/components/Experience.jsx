import '../styles/Experience.css';
import Jobs from "../jobs.json";
import { useState } from 'react';

function CompanyList(props) {
    const jobs = Jobs;

    return jobs.map((item, index) => {
        const keyId = "companylist-" + item.id;
        const isActive = item.id === props.activeJobId;

        return (
            <li
                key={keyId}
                className={isActive ? 'company active-company' : 'company'}
                data-id={item.id}
                onClick={() => props.onCompanyClick(item.id)}
            >
                {item.companyName}
            </li>
        )
    });
};

function JobContent(props) {
    const jobs = Jobs;

    return jobs.map((item, index) => {
        const keyId = "jobcontent-" + item.id;
        const isActive = item.id === props.activeJobId;

        return (
            <div 
                key={keyId} 
                className={isActive ? 'job active-job' : 'job'}
                id={item.id}
            >
                <h2>{item.jobTitle}<span>{item.companyName}</span></h2>
                <p className='job-duration'>{item.duration}</p>
                {item.docs.map((doc, i) => {
                    const docsKey = keyId + "-doc-" + i.toString();

                    return (<p key={docsKey} ><span>▶</span>{doc}</p>)
                })}
            </div>
        )
    });
};

function Experience() {
    const [activeJobId, setActiveJobId ] = useState(Jobs[0]?.id || null);

    const handleCompanyClick = (jobId) => {
        setActiveJobId(jobId);
    };

    return (
        <div id='experience-page' className='experience'>
            <div className='experience-auto-show'>
                <div className='experience-title'>
                    <h1>/ Experience</h1>
                </div>
                <div className='experience-content'>
                    <div className='ex-content-company'>
                        <ul>
                            <CompanyList activeJobId={activeJobId} onCompanyClick={handleCompanyClick} />
                        </ul>
                    </div>
                    <div className='ex-content-desc'>
                        <JobContent activeJobId={activeJobId} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;          