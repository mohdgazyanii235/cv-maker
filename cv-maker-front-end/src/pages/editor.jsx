import React from "react";
import completeResume from '../data/complete_resume.json';
import './styles/editor.css';

const Editor = () => {
    const name = completeResume.name;
    const email = completeResume.email;
    const address = completeResume.address;
    const website = completeResume.website;
    const phoneNumber = completeResume.phoneNumber;
    const linkedIn = completeResume.linkedIn;
    const position = completeResume.position;
    const executiveSummary = completeResume.executiveSummary;
    const experiences = completeResume.experiences;
    const educations = completeResume.educations;
    const certifications = completeResume.certifications;
    const technicalProficiencies = completeResume.technicalProficiencies;
    const skills = completeResume.skills;
    const languages = completeResume.languages;
    const projects = completeResume.projects;


    return (
        <React.Fragment>
            <div className="page-content">
                <div className="content-wrapper">
                    <div className="title-area">
                        <h1>CV Editor</h1>
                    </div>
                    <div className="personal-information">
                        <div className="row cv-record">
                            <div className="col-lg-4 text-center">
                                <div className="cv-key">Name</div>
                            </div>
                            
                            <div className="col-lg-8">
                                {Array.isArray(name) && name.map((n, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`name-checkbox-${index}`}
                                            name={n}
                                        />
                                        {n}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Email</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(email) && email.map((e, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`email-checkbox-${index}`}
                                            name={e}
                                        />
                                        {e}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Address</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(address) && address.map((a, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`address-checkbox-${index}`}
                                            name={a}
                                        />
                                        {a}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Phone Number</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(phoneNumber) && phoneNumber.map((pn, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`phoneNumber-checkbox-${index}`}
                                            name={pn}
                                        />
                                        {pn}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Linked In</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(linkedIn) && linkedIn.map((li, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`linkedIn-checkbox-${index}`}
                                            name={li}
                                        />
                                        {li}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Website</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(website) && website.map((w, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`website-checkbox-${index}`}
                                            name={w}
                                        />
                                        {w}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Position</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(position) && position.map((p, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`position-checkbox-${index}`}
                                            name={p}
                                        />
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Executive Summary</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(executiveSummary) && executiveSummary.map((es, index) => (
                                    <div key={index} className="cv-text">
                                        <input
                                            type="checkbox"
                                            id={`executiveSummary-checkbox-${index}`}
                                            name={es}
                                        />
                                        {es}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Technical Proficiencies</div>
                            </div>

                            <div className="col-lg-8">
                                {Object.entries(technicalProficiencies).map(([key, values], index) => (
                                    <div className="row cv-record">
                                        <div key={index} className="col-lg-4">
                                            <div className="cv-sub-key text-center">
                                                <input
                                                    type="checkbox"
                                                    id={`${key}-checkbox-${index}`}
                                                    name={key}
                                                />
                                                {key}
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            {values.map((value, valueIndex) => (
                                                <div key={valueIndex} className="cv-text">
                                                    <input
                                                        type="checkbox"
                                                        id={`${value}-checkbox-${index}`}
                                                        name={value}
                                                    />
                                                    {value}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Experiences</div>
                            </div>

                            <div className="col-lg-8">
                                {Array.isArray(experiences) && (experiences).map((experience, index) => (
                                    <div className="experience">
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${experience.companyName}-checkbox-${index}`}
                                                name={experience.companyName}
                                            />
                                            <strong>Company Name: </strong>
                                            {experience.companyName}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${experience.companyAddress}-checkbox-${index}`}
                                                name={experience.companyAddress}
                                            />
                                            <strong>Company Address: </strong>
                                            {experience.companyAddress}
                                        </div>

                                        {Array.isArray(experience.position) && (experience.position).map((p, i) => (
                                            <div className="cv-text">
                                                <input
                                                    type="checkbox"
                                                    id={`${p}-checkbox-${index}${i}`}
                                                    name={p}
                                                />
                                                <strong>Position {i}: </strong>
                                                {p}
                                            </div>
                                        ))}
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${experience.startDate}-checkbox-${index}`}
                                                name={experience.startDate}
                                            />
                                            <strong>Start Date: </strong>
                                            {experience.startDate}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${experience.endDate}-checkbox-${index}`}
                                                name={experience.endDate}
                                            />
                                            <strong>End Date: </strong>
                                            {experience.endDate}
                                        </div>
                                        
                                        {Array.isArray(experience.description) && (experience.description).map((bulletPoint, i) => (
                                            <div key={index} className="cv-text">
                                                <input
                                                    type="checkbox"
                                                    id={`${experience.companyName}-checkbox${index}-${i}`}
                                                    name={`${experience.companyName}-${index}-${i}`}
                                                />
                                                <strong>Description {i}: </strong>
                                                {bulletPoint}
                                            </div>
                                        ))}

                                    </div>
                                    
                                ))}
                            </div>

                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Education</div>
                            </div>

                            <div className="col-lg-8">
                                {Array.isArray(educations) && (educations).map((education, index) => (
                                    <div className="education">
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${education.instituteName}-checkbox-${index}`}
                                                name={education.instituteName}
                                            />
                                            <strong>Institute Name: </strong>
                                            {education.instituteName}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${education.subject}-checkbox-${index}`}
                                                name={education.subject}
                                            />
                                            <strong>Subject: </strong>
                                            {education.subject}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${education.startDate}-checkbox-${index}`}
                                                name={education.startDate}
                                            />
                                            <strong>Start Date: </strong>
                                            {education.startDate}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${education.endDate}-checkbox-${index}`}
                                                name={education.endDate}
                                            />
                                            <strong>End Date: </strong>
                                            {education.endDate}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${education.grade}-checkbox-${index}`}
                                                name={education.grade}
                                            />
                                            <strong>Grade: </strong>
                                            {education.grade}
                                        </div>

                                        {Array.isArray(education.description) && (education.description).map((bulletPoint, i) => (
                                            <div key={index} className="cv-text">
                                                <input
                                                    type="checkbox"
                                                    id={`${education.instituteName}-checkbox${index}-${i}`}
                                                    name={`${education.instituteName}-${index}-${i}`}
                                                />
                                                <strong>Description {i}: </strong>
                                                {bulletPoint}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Projects</div>
                            </div>

                            <div className="col-lg-8">
                                {Array.isArray(projects) && (projects).map((project, index) => (
                                    <div className="project">
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${project.name}-checkbox-${index}`}
                                                name={project.name}
                                            />
                                            <strong>Project Name: </strong>
                                            {project.name}
                                        </div>
                                        <div key={index} className="cv-text">
                                            <input
                                                type="checkbox"
                                                id={`${project.premise}-checkbox-${index}`}
                                                name={project.premise}
                                            />
                                            <strong>Premise: </strong>
                                            {project.premise}
                                        </div>

                                        {Array.isArray(project.technologiesUsed) && (project.technologiesUsed).map((tech, i) => (
                                            <div key={index} className="cv-text">
                                                <input 
                                                    type="checkbox" 
                                                    id={`${project.name}-tech-used-checkbox-${index}-${i}`}
                                                    name={`${project.name}-tech-used-${index}-${i}`}
                                                />
                                                <strong>Technology Used {i}: </strong>
                                                {tech}
                                            </div>
                                        ))}

                                        {Array.isArray(project.description) && (project.description).map((bulletPoint, i) => (
                                            <div key={index} className="cv-text">
                                                <input
                                                    type="checkbox"
                                                    id={`${project.name}-checkbox-${index}-${i}`}
                                                    name={`${project.name}-${index}-${i}`}
                                                />
                                                <strong>Description {i}: </strong>
                                                {bulletPoint}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Skills</div>
                            </div>
                            <div className="col-lg-8">
                                {Array.isArray(skills) && (skills).map((skill, index) => (
                                    <div key={index} className="cv-text">
                                        <input 
                                            type="checkbox" 
                                            id={`${skill}-checkbox-${index}`}
                                            name={skill}
                                        />
                                        <strong>Skill {index}: </strong>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Languages</div>
                            </div>

                            <div className="col-lg-8">
                                {Object.entries(languages).map(([key, values], index) => (
                                    <div className="row cv-record">
                                        <div key={index} className="col-lg-4">
                                            <div className="cv-sub-key text-center">
                                                <input
                                                    type="checkbox"
                                                    id={`${key}-checkbox-${index}`}
                                                    name={key}
                                                />
                                                {key}
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            {values.map((value, valueIndex) => (
                                                <div key={valueIndex} className="cv-text">
                                                    <input
                                                        type="checkbox"
                                                        id={`${value}-checkbox-${index}`}
                                                        name={value}
                                                    />
                                                    {value}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="row cv-record">
                            <div className="col-lg-4">
                                <div className="cv-key text-center">Certifications</div>
                            </div>

                            <div className="col-lg-8">
                                {Array.isArray(certifications) && certifications.map((certificate, index) => (
                                    <div className="certifications">
                                        <div className="cv-text">
                                            <input 
                                                type="checkbox" 
                                                id={`${certificate.name}${certificate.name}-checkbox-${index}`}
                                                name={certificate.name}
                                            />
                                            <strong>Certificate Name: </strong>
                                            {certificate.name}
                                        </div>
                                        <div className="cv-text">
                                            <input 
                                                type="checkbox" 
                                                id={`${certificate.name}${certificate.issuer}-checkbox-${index}`}
                                                name={certificate.name}
                                            />
                                            <strong>Certificate Issuer: </strong>
                                            {certificate.issuer}
                                        </div>
                                        <div className="cv-text">
                                            <input 
                                                type="checkbox" 
                                                id={`${certificate.name}${certificate.issueDate}-checkbox-${index}`}
                                                name={certificate.issueDate}
                                            />
                                            <strong>Certificate Issue Date: </strong>
                                            {certificate.issueDate}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Editor;
