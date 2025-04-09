import React, { useState } from "react";
import { Date, RequiredInputFields } from "./inputFields";
import Header from "./Header";
import Footer from "./Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ResumeForm = () => {
  // useState for collecting user Data
  const [deleteID, setDeleteId] = useState();
  const [personalData, setPersonalData] = useState({
    job_title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  });
  const [educationData, setEducationData] = useState([
    {
      id: "1",
      degree_1: "",
      university_1: "",
      start_date_education_1: "",
      end_date_education_1: "",
      delete: false,
    },
  ]);
  const [experienceData, setExperienceData] = useState([
    {
      id: "1",
      job_title_experience_1: "",
      company_1: "",
      start_date_job_1: "",
      end_date_job_1: "",
      description_1: "",
      delete: false,
      present_1:""
    },
  ]);
  const [skillData, setSkillData] = useState([
    {
      id: "1",
      skill_1: "",
      delete: false,
    },
  ]);
  const [languageData, setLanguageData] = useState([
    {
      id: "1",
      language_1: "",
      delete: false,
    },
  ]);
  const [isHidden, setIsHidden] = useState(true);

  // get input field data and set the data in useState
  const handleGetData = (event) => {
    let { name, value } = event.target;

    setPersonalData((prev) => {
      if (Object.keys(prev).includes(name)) {
        return { ...prev, [name]: value };
      } else {
        return prev;
      }
    });
    setEducationData((prev) => {
      let updatePrev = prev.map((curElem) => {
        if (Object.keys(curElem).includes(name))
          return { ...curElem, [name]: value };
        else {
          return curElem;
        }
      });
      return updatePrev;
    });
    setExperienceData((prev) => {
      let updatePrev = prev.map((curElem) => {
        if (Object.keys(curElem).includes(name))
          return { ...curElem, [name]: value };
        else {
          return curElem;
        }
      });
      return updatePrev;
    });
    setSkillData((prev) => {
      let updatePrev = prev.map((curElem) => {
        if (Object.keys(curElem).includes(name))
          return { ...curElem, [name]: value };
        else {
          return curElem;
        }
      });
      return updatePrev;
    });
    setLanguageData((prev) => {
      let updatePrev = prev.map((curElem) => {
        if (Object.keys(curElem).includes(name))
          return { ...curElem, [name]: value };
        else {
          return curElem;
        }
      });
      return updatePrev;
    });
  };

  // add one more section of user click add another xyz button
  const handleAddSection = (value) => {
    switch (value) {
      case "EDUCATION":
        if (deleteID) {
          setEducationData([
            ...educationData,
            {
              id: `${deleteID}`,
              [`degree_${deleteID}`]: "",
              [`university_${deleteID}`]: "",
              [`start_date_education_${deleteID}`]: "",
              [`end_date_education_${deleteID}`]: "",
              delete: true,
            },
          ]);
        } else {
          setEducationData([
            ...educationData,
            {
              id: `${educationData.length + 1}`,
              [`degree_${educationData.length + 1}`]: "",
              [`university_${educationData.length + 1}`]: "",
              [`start_date_education_${educationData.length + 1}`]: "",
              [`end_date_education_${educationData.length + 1}`]: "",
              delete: true,
            },
          ]);
        }
        setDeleteId(0);
        break;
      case "EXPERIENCE":
        if (deleteID) {
          setExperienceData([
            ...experienceData,
            {
              id: `${deleteID}`,
              [`job_title_experience_${deleteID}`]: "",
              [`company_${deleteID}`]: "",
              [`start_date_job_${deleteID}`]: "",
              [`end_date_job_${deleteID}`]: "",
              [`description_${deleteID}`]: "",
              delete: true,
              [`present_${deleteID}`]:""
            },
          ]);
        } else {
          setExperienceData([
            ...experienceData,
            {
              id: `${experienceData.length + 1}`,
              [`job_title_experience_${experienceData.length + 1}`]: "",
              [`company_${experienceData.length + 1}`]: "",
              [`start_date_job_${experienceData.length + 1}`]: "",
              [`end_date_job_${experienceData.length + 1}`]: "",
              [`description_${experienceData.length + 1}`]: "",
              delete: true,
              [`present_${experienceData.length + 1}`]:""
            },
          ]);
        }
        setDeleteId(0);
        break;
      case "LANGUAGE":
        if (deleteID) {
          setLanguageData([
            ...languageData,
            {
              id: `${deleteID}`,
              [`language_${deleteID}`]: "",
              delete: true,
            },
          ]);
        } else {
          setLanguageData([
            ...languageData,
            {
              id: `${languageData.length + 1}`,
              [`language_${languageData.length + 1}`]: "",
              delete: true,
            },
          ]);
        }
        setDeleteId(0);
        break;
      case "SKILL":
        if (deleteID) {
          setSkillData([
            ...skillData,
            {
              id: `${deleteID}`,
              [`skill_${deleteID}`]: "",
              delete: true,
            },
          ]);
        } else {
          setSkillData([
            ...skillData,
            {
              id: `${skillData.length + 1}`,
              [`skill_${skillData.length + 1}`]: "",
              delete: true,
            },
          ]);
        }
        setDeleteId(0);
        break;
    }
  };

  // delete section functionality
  const handleDeleteSection = (name, id) => {
    setDeleteId(id);
    console.log(name, id);
    switch (name) {
      case "EDUCATION":
        let updatedEduaction = educationData.filter((curElem) => {
          if (curElem.id != id) {
            console.log(curElem);
            return curElem;
          }
        });
        setEducationData(updatedEduaction);
        break;
      case "EXPERIENCE":
        let updatedExperience = experienceData.filter((curElem) => {
          console.log("Data");
          if (curElem.id != id) {
            return curElem;
          }
        });
        setExperienceData(updatedExperience);
        break;
      case "SKILL":
        let updatedSkill = skillData.filter((curElem) => {
          if (curElem.id != id) {
            return curElem;
          }
        });
        setSkillData(updatedSkill);
        break;
      case "LANGUAGE":
        let updatedLanguage = languageData.filter((curElem) => {
          if (curElem.id != id) {
            return curElem;
          }
        });
        setLanguageData(updatedLanguage);
        break;
    }
  };

  // handle form auto reload
  const handleSubmitForm = (e) => {
    e.prevenrDefault();
  };

  const handlePrint = () => {
    setIsHidden(!isHidden);

    setTimeout(() => {
      window.print();
    }, 1000);

  };

  return (
    <>
      <Header hidden={isHidden ? "" : "hidden"} />
      <section
        className={`resume-conatiner ${
          isHidden ? "" : "w-full flex justify-center items-center h-screen"
        } bg-[#EFF2F9] py-[10rem] h-[100rem] px-[6rem] flex justify-between gap-[2em]`}
      >
        <section
          className={`resume-form ${
            isHidden ? "" : "hidden"
          } h-full shadow-sm text-[10px] overflow-y-auto w-[50%] px-[1.5rem]`}
        >
          {/* Personal Section */}
          <div className="py-[2.5em]">
            <h3 className="text-[3em] font-bold font-poppin capitalize">
              Personal Detials
            </h3>
            <form>
              <div>
                <RequiredInputFields
                  value={personalData.job_title}
                  setValue={handleGetData}
                  type={"text"}
                  name={"job_title"}
                  placeholder={"Enter Here"}
                  width={"100%"}
                  label={"Job Title"}
                />
              </div>
              <div className="items flex gap-[2em]">
                <RequiredInputFields
                  value={personalData.first_name}
                  setValue={handleGetData}
                  type={"text"}
                  name={"first_name"}
                  placeholder={"Enter Here"}
                  width={"50%"}
                  label={"first name"}
                />
                <RequiredInputFields
                  value={personalData.last_name}
                  setValue={handleGetData}
                  type={"text"}
                  name={"last_name"}
                  placeholder={"Enter Here"}
                  width={"50%"}
                  label={"last name"}
                />
              </div>
              <div className="items flex gap-[2em]">
                <RequiredInputFields
                  value={personalData.email}
                  setValue={handleGetData}
                  type={"email"}
                  name={"email"}
                  placeholder={"Enter Here"}
                  width={"50%"}
                  label={"email"}
                />
                <RequiredInputFields
                  value={personalData.phone}
                  setValue={handleGetData}
                  type={"number"}
                  name={"phone"}
                  placeholder={"Enter Here"}
                  width={"50%"}
                  label={"phone no"}
                />
              </div>
              <div>
                <RequiredInputFields
                  value={personalData.location}
                  setValue={handleGetData}
                  type={"text"}
                  name={"location"}
                  placeholder={"Enter Here"}
                  width={"100%"}
                  label={"location"}
                />
              </div>
            </form>
          </div>
          <hr />
          {/* Summary Section */}
          <div className="py-[2.5em]">
            <h3 className="text-[3em] pb-[0.5em] font-bold font-poppin capitalize">
              Summary
            </h3>
            <form>
              <div>
                <textarea
                  name="summary"
                  value={personalData.summary}
                  onChange={(e) => handleGetData(e)}
                  className="text-[2em] font-Hanken_Grotesk p-[0.7em] min-h-[10em] max-h-[10em] w-full border-[0.1em] border-[#838FA0] outline-none  hover:border-blue-400 "
                  placeholder="Enter Here"
                ></textarea>
              </div>
            </form>
          </div>
          <hr />
          {/* Eductaion section */}
          <div className="py-[2.5em]">
            <h3 className="text-[3em] font-poppin font-bold capitalize">
              Education
            </h3>
            {educationData.map((curElem, index) => {
              return (
                <form
                  key={index}
                  onSubmit={handleSubmitForm}
                  className="py-[1em]"
                >
                  <div className="items flex gap-[2em]">
                    <RequiredInputFields
                      value={curElem[`university_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"school or university"}
                      name={`university_${curElem.id}`}
                    />
                    <RequiredInputFields
                      value={curElem[`degree_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"degree"}
                      name={`degree_${curElem.id}`}
                    />
                  </div>
                  <div className="items flex gap-[2em]">
                    <Date
                      value={curElem[`start_date_education_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"month"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"start date"}
                      name={`start_date_education_${curElem.id}`}
                    />
                    <Date
                      value={curElem[`end_date_education_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"month"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"end date"}
                      name={`end_date_education_${curElem.id}`}
                    />
                  </div>
                  <div
                    className={`flex ${
                      curElem.delete ? "" : "hidden"
                    }  justify-end items-center my-[2em]`}
                  >
                    <button
                      onClick={() =>
                        handleDeleteSection("EDUCATION", curElem.id)
                      }
                      className="hover:bg-[#f73f3f] hover:text-[#fff] transition-all capitalize px-[1em] py-[0.5em] text-[1.5em] text-[#F73F3F] font-semibold font-poppin border-[0.1em] rounded-[0.5em] "
                    >
                      delete
                    </button>
                  </div>
                </form>
              );
            })}
            <div
              onClick={() => handleAddSection("EDUCATION")}
              className="border-dashed border-[0.1em] hover:text-blue-400 transition-all border-[#838FA0] hover:border-blue-400 text-[2em] my-[1.5em]  p-[1em] text-center capitalize"
            >
              <button className="capitalize  font-poppin font-medium">
                + add another Degree
              </button>
            </div>
          </div>
          <hr />
          {/* Experience section */}
          <div className="py-[2.5em]">
            <h3 className="text-[3em] font-poppin font-bold capitalize">
              Experience
            </h3>
            {experienceData.map((curElem, index) => {
              return (
                <form key={index} className="py-[1em]">
                  <div className="items flex gap-[2em]">
                    <RequiredInputFields
                      setValue={handleGetData}
                      value={curElem[`job_title_experience_${curElem.id}`]}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"job title"}
                      name={`job_title_experience_${curElem.id}`}
                    />
                    <RequiredInputFields
                      value={curElem[`company_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"company"}
                      name={`company_${curElem.id}`}
                    />
                  </div>
                  <div className="items flex gap-[2em]">
                    <Date
                      value={curElem[`start_date_job_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"month"}
                      placeholder={"Enter Here"}
                      width={"50%"}
                      label={"start date"}
                      name={`start_date_job_${curElem.id}`}
                    />
                    {curElem[`present_${curElem.id}`].toLowerCase() == "no" ?  
                        <Date
                          value={curElem[`end_date_job_${curElem.id}`]}
                          setValue={handleGetData}
                          type={"month"}
                          placeholder={"Enter Here"}
                          width={"50%"}
                          label={"end date"}
                          name={`end_date_job_${curElem.id}`}
                        />                
                      :
                      <RequiredInputFields
                        value={curElem[`present_${curElem.id}`]}
                        setValue={handleGetData}
                        type={"text"}
                        placeholder={"eg: yes / no"}
                        width={"50%"}
                        name={`present_${curElem.id}`}
                        label={"are you present ?"}
                      />
                    }
                  </div>
                  <div>
                    <RequiredInputFields
                      value={curElem[`description_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"100%"}
                      name={`description_${curElem.id}`}
                      label={"description"}
                    />
                  </div>
                  <div
                    className={`flex ${
                      curElem.delete ? "" : "hidden"
                    }  justify-end items-center my-[2em]`}
                  >
                    <button
                      onClick={() =>
                        handleDeleteSection("EXPERIENCE", curElem.id)
                      }
                      className="hover:bg-[#f73f3f] hover:text-[#fff] transition-all capitalize px-[1em] py-[0.5em] text-[1.5em] text-[#F73F3F] font-semibold font-poppin border-[0.1em] rounded-[0.5em] "
                    >
                      delete
                    </button>
                  </div>
                </form>
              );
            })}
            <div
              onClick={() => handleAddSection("EXPERIENCE")}
              className="border-dashed border-[0.1em] hover:text-blue-400 transition-all border-[#838FA0] hover:border-blue-400 text-[2em] my-[1.5em]  p-[1em] text-center capitalize"
            >
              <button className="capitalize  font-poppin font-medium">
                + add another Experience
              </button>
            </div>
          </div>
          <hr />
          {/* Skill section */}
          <div className="py-[2.5em]">
            <h3 className="text-[3em] font-poppin font-bold capitalize">
              Skill
            </h3>
            {skillData.map((curElem, index) => {
              return (
                <form key={index} className="py-[0.5em]">
                  <div>
                    <RequiredInputFields
                      value={curElem[`skill_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"100%"}
                      name={`skill_${curElem.id}`}
                    />
                  </div>
                  <div
                    className={`flex ${
                      curElem.delete ? "" : "hidden"
                    }  justify-end items-center my-[2em]`}
                  >
                    <button
                      onClick={() => handleDeleteSection("SKILL", curElem.id)}
                      className="hover:bg-[#f73f3f] hover:text-[#fff] transition-all capitalize px-[1em] py-[0.5em] text-[1.5em] text-[#F73F3F] font-semibold font-poppin border-[0.1em] rounded-[0.5em] "
                    >
                      delete
                    </button>
                  </div>
                </form>
              );
            })}
            <div
              onClick={() => handleAddSection("SKILL")}
              className="border-dashed border-[0.1em] hover:text-blue-400 transition-all border-[#838FA0] hover:border-blue-400 text-[2em] my-[1.5em]  p-[1em] text-center capitalize"
            >
              <button className="capitalize  font-poppin font-medium">
                + add another Skill
              </button>
            </div>
          </div>
          <hr />
          {/* Language section */}
          <div className="py-[2.5em]">
            <h3 className="text-[3em] font-poppin font-bold capitalize">
              Language
            </h3>
            {languageData.map((curElem, index) => {
              return (
                <form key={index} className="py-[0.5em]">
                  <div>
                    <RequiredInputFields
                      value={curElem[`job_title_experience_${curElem.id}`]}
                      setValue={handleGetData}
                      type={"text"}
                      placeholder={"Enter Here"}
                      width={"100%"}
                      name={`language_${curElem.id}`}
                    />
                  </div>
                  <div
                    className={`flex ${
                      curElem.delete ? "" : "hidden"
                    }  justify-end items-center my-[2em]`}
                  >
                    <button
                      onClick={() =>
                        handleDeleteSection("LANGUAGE", curElem.id)
                      }
                      className="hover:bg-[#f73f3f] hover:text-[#fff] transition-all capitalize px-[1em] py-[0.5em] text-[1.5em] text-[#F73F3F] font-semibold font-poppin border-[0.1em] rounded-[0.5em] "
                    >
                      delete
                    </button>
                  </div>
                </form>
              );
            })}
            <div
              onClick={() => handleAddSection("LANGUAGE")}
              className="border-dashed border-[0.1em] hover:text-blue-400 transition-all border-[#838FA0] hover:border-blue-400 text-[2em] my-[1.5em]  p-[1em] text-center capitalize"
            >
              <button className="capitalize  font-poppin font-medium">
                + add another Language
              </button>
            </div>
          </div>
        </section>
        <section className={`${isHidden ? "w-[50%]" : "flex justify-center w-full text-[12px] items-center"} px-[1.5rem]`}>
          <Template
            isHidden={isHidden}
            handlePrint={handlePrint}
            personalDetails={personalData}
            education={educationData}
            experience={experienceData}
            skill={skillData}
            language={languageData}
          />
        </section>
      </section>
      <Footer hidden={isHidden ? "" : "hidden"} />
    </>
  );
};

const Template = ({
  isHidden,
  personalDetails,
  education,
  experience,
  skill,
  language,
  handlePrint,
}) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="no-print text-center ">
        <h2 className={`text-[2.5rem] ${
            isHidden ? "" : "hidden"
          } font-semibold my-[1rem] font-poppin  capitalize`}>
          Resume
        </h2>
      </div>
      <div className="resume-template w-[43em] text-[10px] min-h-[45em] font-inter bg-white shadow-lg p-8 my-10">
        {/* <!-- Header Section --> */}
        <div className="flex justify-between items-center w-full border-b-[0.1em] ">
          {/* Left Side: Name, Title, and Contact Info */}
          <div>
            <h1 className="break-words text-[2em] w-full capitalize font-bold text-gray-800">
              <span>{personalDetails.first_name}</span>{" "}
              <span>{personalDetails.last_name}</span>
            </h1>
            <p className="break-words text-[1.2em] capitalize font-poppin text-gray-600">
              {personalDetails.job_title}
            </p>
            <div className="flex flex-col w-full mt-[0.5em]">
              <div className="flex justify-between gap-[2em] items-center">
                <p className="break-words flex justify-center items-center gap-[0.5em] text-blue-600">
                  <FaPhoneAlt className="text-[0.7em]" />
                  {personalDetails.phone.slice(0,4)}-{personalDetails.phone.slice(4,8)}-{personalDetails.phone.slice(8,11)}
                </p>
                <p className="break-words flex justify-center items-center gap-[0.5em] text-blue-600">
                  <FaLocationDot className="text-[0.7em]" />
                  {personalDetails.location}
                </p>
              </div>
              <div className="flex justify-between items-center m-[0em]">
                <p className="break-words flex justify-center items-center gap-[0.5em] text-blue-600">
                  <MdEmail className="text-[0.7em]" />
                  {personalDetails.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Content --> */}
        <div className="flex mt-6">
          {/* <!-- Left Column --> */}
          <div className="w-[60%] pr-6">
            {/* <!-- Summary --> */}
            <div className="mb-6">
              <h2 className="text-[1em] font-semibold font-poppin text-gray-800 border-b-[0.2em] border-gray-300 pb-[0.5em]">
                Summary
              </h2>
              <p className="mt-[0.5em] text-[1em] text-gray-600 break-words">
                {personalDetails.summary}
              </p>
            </div>
            {/* <!-- Experience --> */}
            <div className="mb-6">
              <h2 className="text-[1em] font-semibold font-poppin text-gray-800 border-b-[0.2em] border-gray-300 pb-[0.5em]">
                Experience
              </h2>
              <ul className="flex flex-col gap-[0.5em]">
                {experience.map((curElem, index) => {
                  return (
                    <li key={index} className="ml-[1.5em] list-disc">
                      <div className="mt-4">
                        <h3 className="text-[1.2em] break-words font-bold text-gray-800 font-inter">
                          {curElem[`job_title_experience_${curElem.id}`]}
                        </h3>
                        <p className="break-words text-[1em] font-medium">
                          <span>{curElem[`company_${curElem.id}`]}</span>
                        </p>
                        <p className="text-blue-600 text-[1em] break-words font-normal">
                          <span>
                            {curElem[`start_date_job_${curElem.id}`]} - {" "}
                            {curElem[`present_${curElem.id}`].toLowerCase() == "no" ? curElem[`end_date_job_${curElem.id}`] : "Present"}
                          </span>
                        </p>
                        <p className="break-words text-[0.85em]">
                          {curElem[`description_${curElem.id}`]}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div className="w-[40%]">
            {/* <!-- Eduaction --> */}
            <div className="mb-6">
              <h2 className="text-[1em] font-semibold font-poppin text-gray-800 border-b-[0.2em] border-gray-300 pb-[0.5em]">
                Education
              </h2>
              <ul className="flex flex-col gap-[0.5em]">
                {education.map((curElem, index) => {
                  return (
                    <li key={index} className="ml-[0.5em] mt-[1em]">
                      <div>
                        <h3 className="text-[1.2em] break-words font-bold text-gray-800 font-inter">
                          {curElem[`degree_${curElem.id}`]}
                        </h3>
                        <p className="break-words text-[1em] font-medium">
                          {curElem[`university_${curElem.id}`]}
                        </p>
                        <p className="text-blue-600 text-[1em] break-words font-normal">
                          <span>
                            {curElem[`start_date_education_${curElem.id}`]} -{" "}
                            {curElem[`end_date_education_${curElem.id}`]}
                          </span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <!-- Skills --> */}
            <div className="mb-6">
              <h2 className="text-[1em] font-semibold font-poppin text-gray-800 border-b-[0.2em] border-gray-300 pb-[0.5em]">
                Skills
              </h2>
              <ul className="mt-[0.5em] font-inter">
                {skill.map((curElem, index) => {
                  return (
                    <li key={index} className="text-[0.85em] ml-[0.5em] font-semibold break-words">
                      {curElem[`skill_${curElem.id}`]}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <!-- Languages --> */}
            <div>
              <h2 className="text-[1em] font-semibold font-poppin text-gray-800 border-b-[0.2em] border-gray-300 pb-[0.5em]">
                Languages
              </h2>
                <ul className="mt-[0.5em] font-inter">
                  {language.map((curElem, index) => {
                    return (
                      <li key={index} className="break-words ml-[0.5em] text-[0.85em] font-semibold" >
                        {curElem[`language_${curElem.id}`]}
                      </li>
                    );
                  })}
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="no-print flex justify-center items-center my-[1rem]">
        <button
          onClick={() => handlePrint()}
          type="button"
          className={`w-fit text-[1.5em] ${
            isHidden ? "" : "hidden"
          } capitalize py-[1em] px-[2.5em] rounded-[0.5em] bg-[#1A91F0] text-[#fff] font-poppin font-medium`}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
