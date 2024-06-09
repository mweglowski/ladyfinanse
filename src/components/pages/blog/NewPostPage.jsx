import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Section from "../../UI/Section";
import Title from "../../UI/Title";
import NewPostImage from "../../../images/blog/new-post.png";
import RemoveIcon from "../../../icons/remove.svg";

const NewPostPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [sections, setSections] = useState([]);
  const [newSectionType, setNewSectionType] = useState("title");
  const [newSectionContent, setNewSectionContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddSection = () => {
    if (newSectionContent === "") return;

    setSections([
      ...sections,
      { type: newSectionType, content: newSectionContent },
    ]);
    setNewSectionContent("");
  };

  const handleRemoveSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleAddCategory = () => {
    if (newCategory === "") return;

    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        postTitle,
        sections,
        categories,
        createdAt: new Date(),
        comments: [],
        likes: [],
      });
      navigate("/blog");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Section>
      {/* IMAGE WITH TITLE */}
      <div className="relative mx-auto">
        <img src={NewPostImage} alt="Blog Image" className="mt-[50px]" />
        <Title classNames="absolute top-[60%] left-[30%] text-shadow-white max-w-[350px] text-[42px] sm:text-[54px] sm:left-[40%]">
          Co dzisiaj chciałabyś opisać?
        </Title>
      </div>

      {/* POST CREATION FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[70px] p-4 max-w-[700px] mx-auto w-full mb-[100px] relative gap-4"
      >
        <input
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Tytuł posta"
          className="input"
          required
        />

        {/* CREATED SECTIONS */}
        <div className="mx-auto mt-[20px] w-full">
          {sections.length === 0 && (
            <p className="text-gray-400 text-center">
              Tutaj będą pojawiać się stworzone elementy.
            </p>
          )}

          {sections.map((section, index) => (
            <div
              key={index}
              className="mb-4 flex items-center justify-between"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                {section.type === "title" && (
                  <h1 className="text-2xl font-bold">{section.content}</h1>
                )}
                {section.type === "subtitle" && (
                  <h2 className="text-xl font-semibold">{section.content}</h2>
                )}
                {section.type === "text" && <p>{section.content}</p>}
              </div>
              {hoveredIndex === index && (
                <button
                  type="button"
                  onClick={() => handleRemoveSection(index)}
                  className="ml-4 bg-red-500 text-white p-1 px-2 rounded-lg hover:bg-red-700 transition absolute right-4 duration-300"
                >
                  Usuń
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ELEMENT CREATION */}
        <div className="flex flex-col">
          <p className="mx-auto text-gray-400 mt-[20px]">
            Wybierz typ elementu.
          </p>
          <div className="flex gap-2 mx-auto mt-[15px]">
            <button
              type="button"
              className={`border-2 p-1 px-3 border-black rounded-lg duration-300 ${
                newSectionType === "subtitle"
                  ? "bg-black text-[#C7AE48] border-[#C7AE48]"
                  : ""
              }`}
              onClick={() => setNewSectionType("subtitle")}
            >
              Podtytuł
            </button>
            <button
              type="button"
              className={`border-2 p-1 px-3 border-black rounded-lg ${
                newSectionType === "text"
                  ? "bg-black text-[#C7AE48] border-[#C7AE48]"
                  : ""
              }`}
              onClick={() => setNewSectionType("text")}
            >
              Tekst
            </button>
          </div>

          <textarea
            type="text"
            value={newSectionContent}
            onChange={(e) => setNewSectionContent(e.target.value)}
            placeholder="Treść elementu"
            className="input mt-4 min-h-[100px] max-h-[200px]"
          />

          <button
            type="button"
            onClick={handleAddSection}
            className="p-2 w-[200px] mx-auto button rounded-b-lg"
          >
            Dodaj Element
          </button>
        </div>

        {/* CATEGORIES */}
        <div className="mt-4 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center border-2 border-gray-300 rounded-lg"
              >
                <span className="bg-gray-200 p-2 rounded-l-md rounded-r-md">
                  {category}
                </span>
                <button
                  type="button"
                  className="text-white p-1 rounded-lg"
                  onClick={() => handleRemoveCategory(index)}
                >
                  <img
                    src={RemoveIcon}
                    alt="Remove Icon"
                    className="w-[25px]"
                  />
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="input w-full"
            placeholder="Wpisz kategorię"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="w-[200px] mx-auto button rounded-b-lg"
          >
            Dodaj Kategorię
          </button>
        </div>

        {/* CONTROL BUTTONS */}
        <div className="flex mt-[50px] justify-evenly">
          <Link to="/blog" className="button-transparent rounded-lg">
            Powrót
          </Link>
          <button type="submit" className="button rounded-lg">
            Utwórz Post
          </button>
        </div>
      </form>
    </Section>
  );
};

export default NewPostPage;
