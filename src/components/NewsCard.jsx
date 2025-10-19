import React from "react";
import { Link } from "react-router";
import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

/**
 * A component to display a single news article card.
 * @param {object} props
 * @param {object} props.news - The news article data object.
 */
const NewsCard = ({ news }) => {
  // Destructure the news object for easier access
  const { id, title, rating, total_view, author, image_url, details } = news;

  // Format the publication date (e.g., "2025-04-22")
  const formattedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  // Create a short snippet from the details
  const snippet =
    details.length > 150 ? details.substring(0, 150) + "..." : details;

  // Create an array to map for the star ratings
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={
        index < Math.floor(rating.number) ? "text-orange-400" : "text-gray-300"
      }
    />
  ));

  return (
    <div className="card w-full  bg-base-100 shadow-lg border border-gray-200 rounded-lg overflow-hidden">
      {/* 1. Author Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          {/* Author Image */}
          <div className="avatar">
            <div className="w-14 rounded-full ring-2 ring-offset-2 ring-primary">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          {/* Author Name & Date */}
          <div>
            <p className="font-bold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        {/* Action Icons */}
        <div className="flex space-x-2 text-gray-500">
          <button className="btn btn-ghost btn-circle btn-sm">
            <FaBookmark className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle btn-sm">
            <FaShareAlt className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* 2. Card Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="card-title text-2xl font-bold mb-4 leading-snug">
          {title}
        </h2>

        {/* Main Image */}
        <figure className="mb-5">
          <img
            src={image_url}
            alt={title}
            className="rounded-lg w-full h-60 object-cover"
          />
        </figure>

        {/* Snippet */}
        <p className="text-gray-600 mb-4">{snippet}</p>

        {/* Read More Link */}
        <div className="card-actions">
          <Link
            to={`/news/${id}`}
            className="text-primary font-bold text-lg hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* 3. Card Footer */}
      <div className="card-footer p-5 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center">
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">{stars}</div>
            <span className="font-semibold text-gray-700 text-lg">
              {rating.number.toFixed(1)}
            </span>
          </div>

          {/* Total Views */}
          <div className="flex items-center space-x-2 text-gray-600">
            <FaEye className="h-5 w-5" />
            <span className="font-semibold text-lg">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
