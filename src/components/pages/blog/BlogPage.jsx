import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import BlogImage from "../../../images/blog/blog.png";
import Title from "../../UI/Title";
import { Link } from "react-router-dom";
import Section from "../../UI/Section";
import "./index.css";
import PostsList from "./PostsList";
import Filters from "./Filters";

const BlogPage = () => {
  const { userDoc } = useAuth();
  const [posts, setPosts] = useState([]);

  const [category, setCategory] = useState("");
  const [availableCategories, setAvailableCategories] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOption, setSortOption] = useState("date_desc");

  useEffect(() => {
    // FETCHING POSTS
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));

        const postsData = querySnapshot.docs.map((post) => ({
          id: post.id,
          ...post.data(),
        }));

        // ADDING POSTS
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // GETTING ALL CATEGORIES TO LIST THEM IN FILTER OPTIONS
    const setUpCategories = (posts) => {
      const uniqueCategories = [];
      posts.map((post) => {
        post.categories.forEach((category) => {
          if (uniqueCategories.indexOf(category) == -1) {
            uniqueCategories.push(category);
          }
        });
      });

      // ADDING CATEGORIES TO FILTER
      setAvailableCategories(uniqueCategories);
    };

    setUpCategories(posts);
  }, [posts]);

  // FILTERING BASED ON SELECTED FILTERS
  const handleFilter = () => {
    let filteredPosts = posts;

    // START DATE
    if (startDate !== "") {
      filteredPosts = filteredPosts.filter((post) => {
        const timestamp = post.createdAt;
        const date = new Date(timestamp.seconds * 1000);

        return new Date(startDate) < date;
      });
    }

    // END DATE
    if (endDate !== "") {
      filteredPosts = filteredPosts.filter((post) => {
        const timestamp = post.createdAt;
        const date = new Date(timestamp.seconds * 1000);

        return new Date(endDate) > date;
      });
    }

    // CATEGORIES
    if (category !== "") {
      filteredPosts = filteredPosts.filter(
        (post) => post.categories.indexOf(category) >= 0
      );
    }

    return filteredPosts;
  };

  // SORTING
  const handleSort = (posts) => {
    switch (sortOption) {
      case "date_asc":
        return posts.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds);
      case "date_desc":
        return posts.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
      case "title_asc":
        return posts.sort((a, b) => a.postTitle.localeCompare(b.postTitle));
      case "title_desc":
        return posts.sort((a, b) => b.postTitle.localeCompare(a.postTitle));
      case "comments_desc":
        return posts.sort((a, b) => b.comments.length - a.comments.length);
      case "comments_asc":
        return posts.sort((a, b) => a.comments.length - b.comments.length);
      case "likes_desc":
        return posts.sort((a, b) => b.likes.length - a.likes.length);
      case "likes_asc":
        return posts.sort((a, b) => a.likes.length - b.likes.length);
      default:
        return posts;
    }
  };

  // DELETING POST
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const filteredPosts = handleFilter();
  const sortedPosts = handleSort(filteredPosts);

  return (
    <Section classNames="mb-[100px] p-4">
      {/* IMAGE WITH TITLE */}
      {/* <div className="relative mx-auto">
        <img
          src={BlogImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[700px] w-full"
          loading="lazy"
        />
        <Title classNames="absolute top-[50%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Witaj na naszym blogu!
        </Title>
      </div> */}
      <div className="relative mx-auto">
        <Title classNames="text-shadow-white sm:text-[60px] mt-[100px]">
          Witaj na naszym blogu!
        </Title>
      </div>

      {/* NEW POST BUTTON ONLY AVAILABLE FOR ADMIN */}
      {userDoc && (
        <Link
          to="/blog/post/new"
          className="button rounded-lg mx-auto mt-[20px]"
        >
          Stwórz nowy post
        </Link>
      )}

      {/* FILTERS & OPTIONS */}
      <Filters
        onCategoryChange={setCategory}
        onEndDateChange={setEndDate}
        onStartDateHange={setStartDate}
        onSortOptionChange={setSortOption}
        categories={availableCategories}
        category={category}
        sortOption={sortOption}
        startDate={startDate}
        endDate={endDate}
      />

      {/* POSTS LIST */}
      <PostsList posts={sortedPosts} handleDeletePost={handleDeletePost} />
    </Section>
  );
};

export default BlogPage;
